/*
  # Contact Form System Setup

  ## Overview
  This migration creates the infrastructure for the contact form system, including:
  - Storage for all contact form submissions
  - Configuration table for email settings
  - Proper indexing for performance
  - Row Level Security for data protection

  ## New Tables

  ### `contact_submissions`
  Stores all contact form submissions with complete information:
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, required) - Name of the person submitting the form
  - `phone` (text, required) - Phone number for contact
  - `email` (text, required) - Email address of the submitter
  - `message` (text, required) - The message content
  - `status` (text, default 'new') - Status of the submission (new, read, replied, etc.)
  - `created_at` (timestamptz, default now()) - When the submission was created
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ### `email_settings`
  Stores configuration for email notifications:
  - `id` (uuid, primary key) - Unique identifier
  - `key` (text, unique) - Setting key (e.g., 'recipient_email')
  - `value` (text) - Setting value
  - `description` (text) - Human-readable description of the setting
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ## Security

  ### contact_submissions table
  - RLS enabled to protect submission data
  - No public access by default
  - Only authenticated admin users can view submissions

  ### email_settings table
  - RLS enabled to protect configuration
  - No public access by default
  - Only authenticated admin users can modify settings

  ## Indexes
  - Index on `contact_submissions.created_at` for efficient sorting and filtering
  - Index on `contact_submissions.status` for status-based queries
  - Unique index on `email_settings.key` for fast lookups

  ## Initial Data
  - Inserts default recipient email setting (can be updated later)
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create email_settings table
CREATE TABLE IF NOT EXISTS email_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  description text,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);

CREATE INDEX IF NOT EXISTS idx_email_settings_key 
  ON email_settings(key);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
-- Restrictive: No public access, only authenticated users with proper permissions
CREATE POLICY "Only authenticated admin users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (false);

CREATE POLICY "Only authenticated admin users can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "Only authenticated admin users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Only authenticated admin users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (false);

-- RLS Policies for email_settings
-- Restrictive: No public access
CREATE POLICY "Only authenticated admin users can view email settings"
  ON email_settings
  FOR SELECT
  TO authenticated
  USING (false);

CREATE POLICY "Only authenticated admin users can update email settings"
  ON email_settings
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- Insert default email recipient setting
-- This can be updated later through the database
INSERT INTO email_settings (key, value, description)
VALUES (
  'recipient_email',
  'test@example.com',
  'Email address that receives contact form notifications'
)
ON CONFLICT (key) DO NOTHING;

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_email_settings_updated_at
  BEFORE UPDATE ON email_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();