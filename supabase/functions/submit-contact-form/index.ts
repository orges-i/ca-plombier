import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData: ContactFormData = await req.json();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data: submission, error: insertError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          status: "new",
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting contact submission:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data: emailSettings } = await supabase
      .from("email_settings")
      .select("value")
      .eq("key", "recipient_email")
      .single();

    const recipientEmail = emailSettings?.value || "test@example.com";

    const emailSubject = `New Contact Form Submission from ${formData.name}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb; }
            .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6; min-height: 100px; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone has reached out through your website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value"><a href="tel:${formData.phone}" style="color: #3b82f6; text-decoration: none;">${formData.phone}</a></div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a></div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${formData.message.replace(/\n/g, "<br>")}</div>
              </div>
              <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 4px; border-left: 4px solid #3b82f6;">
                <strong>Submission ID:</strong> ${submission.id}<br>
                <strong>Received:</strong> ${new Date(submission.created_at).toLocaleString()}
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">This is an automated notification from your website contact form.</p>
              <p style="margin: 10px 0 0 0;">Please respond to the customer at their provided email address.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      
      if (resendApiKey) {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Contact Form <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text();
          console.error("Resend API error:", errorText);
        }
      } else {
        console.warn("RESEND_API_KEY not configured. Email notification skipped.");
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        submissionId: submission.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});