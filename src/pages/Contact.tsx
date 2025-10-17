import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(
        `${supabaseUrl}/functions/v1/submit-contact-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      toast.success(t("contact.form.success"));
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        language === "fr"
          ? "Une erreur s'est produite. Veuillez réessayer."
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "022 519 72 69",
      link: "tel:0225197269",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: "contact@plombier-geneve.com",
      link: "mailto:contact@plombier-geneve.com",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      content: "Rue de Lyon 59, 1203 Genève, Switzerland",
      link: null,
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      content: t("contact.hours.text"),
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t("contact.hero.title")}</h1>
            <p className="text-xl text-white/90">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("contact.info.title")}</h2>
                <p className="text-lg text-muted-foreground">
                  {t("contact.info.subtitle")}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      {info.link ? (
                        <a href={info.link} className="flex items-start gap-4 group">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">
                              {info.content}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-semibold text-lg">{t("contact.emergency.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("contact.emergency.text")}
                  </p>
                  <a href="tel:0225197269">
                    <Button className="mt-4 gap-2">
                      <Phone className="h-5 w-5" />
                      {t("contact.emergency.button")}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.form.name")} {t("common.required")}</Label>
                      <Input
                        id="name"
                        placeholder={t("common.placeholder.name")}
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contact.form.phone")} {t("common.required")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t("common.placeholder.phone")}
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.form.email")} {t("common.required")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("common.placeholder.email")}
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.form.message")} {t("common.required")}</Label>
                      <Textarea
                        id="message"
                        placeholder={t("common.placeholder.message")}
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        language === "fr" ? "Envoi en cours..." : "Sending..."
                      ) : (
                        t("contact.form.submit")
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      {t("contact.form.response")}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.map.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("contact.map.subtitle")}
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden border border-border animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.2364234567!2d6.129348776896654!3d46.20870897112174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c651c7d3e3e3d%3A0x3e8e3e3e3e3e3e3e!2sRue%20de%20Lyon%2059%2C%201203%20Gen%C3%A8ve%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === "fr" ? "Notre localisation à Genève" : "Our location in Geneva"}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
