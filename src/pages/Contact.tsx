import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé! Nous vous contacterons bientôt.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "022 519 72 69",
      link: "tel:0225197269",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@plombier-geneve.com",
      link: "mailto:contact@plombier-geneve.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Genève, Switzerland",
      link: null,
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "24h/24 - 7j/7 pour urgences",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contactez-nous</h1>
            <p className="text-xl text-white/90">
              Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins
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
                <h2 className="text-3xl font-bold mb-4">Informations de Contact</h2>
                <p className="text-lg text-muted-foreground">
                  Contactez-nous par téléphone, email ou remplissez le formulaire. 
                  Nous vous répondrons dans les plus brefs délais.
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
                  <h3 className="font-semibold text-lg">Urgence 24/7</h3>
                  <p className="text-muted-foreground">
                    Pour toute urgence, appelez-nous immédiatement. Notre équipe intervient 
                    rapidement dans tout le canton de Genève.
                  </p>
                  <a href="tel:0225197269">
                    <Button className="mt-4 gap-2">
                      <Phone className="h-5 w-5" />
                      Appeler maintenant
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom *</Label>
                      <Input 
                        id="name" 
                        placeholder="Votre nom complet" 
                        required 
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="022 123 45 67" 
                        required 
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        required 
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez votre problème ou votre demande..." 
                        required 
                        rows={5}
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer le message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Nous vous répondrons dans les plus brefs délais
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Zone d'Intervention</h2>
              <p className="text-lg text-muted-foreground">
                Nous intervenons dans tout le canton de Genève
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center animate-fade-in">
              <div className="text-center space-y-4 p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Canton de Genève</h3>
                <p className="text-muted-foreground max-w-md">
                  Nous couvrons l'ensemble du canton de Genève avec des interventions rapides 
                  et efficaces, 24h/24 et 7j/7.
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
