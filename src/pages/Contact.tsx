import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
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
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {t("contact.form.submit")}
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
            
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center animate-fade-in">
              <div className="text-center space-y-4 p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">
                  {language === "fr" ? "Canton de Genève" : "Canton of Geneva"}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  {t("contact.map.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
