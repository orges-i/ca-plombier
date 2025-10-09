import { Wrench, Flame, Droplet, AlertCircle, Shield, Sprout, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: AlertCircle,
      title: "Dépannage Urgent",
      description: "Intervention rapide pour fuites et canalisations bouchées",
      details: [
        "Réparation de fuites d'eau",
        "Débouchage de canalisations",
        "Réparation de robinetterie",
        "Intervention en moins d'1 heure",
      ],
    },
    {
      icon: Droplet,
      title: "Installation Sanitaires",
      description: "Installation et rénovation de sanitaires",
      details: [
        "Pose de lavabos et éviers",
        "Installation de douches et baignoires",
        "Remplacement de WC",
        "Rénovation complète de salles de bain",
      ],
    },
    {
      icon: Flame,
      title: "Systèmes de Chauffage",
      description: "Pose et maintenance de systèmes de chauffage",
      details: [
        "Installation de chaudières",
        "Radiateurs et chauffage au sol",
        "Maintenance préventive",
        "Optimisation énergétique",
      ],
    },
    {
      icon: Shield,
      title: "Détection de Fuites",
      description: "Détection et réparation de fuites cachées",
      details: [
        "Recherche de fuites invisibles",
        "Détection électronique",
        "Réparation sans casse",
        "Diagnostic complet",
      ],
    },
    {
      icon: Wrench,
      title: "Débouchage Professionnel",
      description: "Débouchage de tuyauteries avec équipement moderne",
      details: [
        "Débouchage haute pression",
        "Inspection par caméra",
        "Nettoyage de canalisations",
        "Prévention des bouchons",
      ],
    },
    {
      icon: Sprout,
      title: "Installation Électroménager",
      description: "Installation d'appareils électroménagers",
      details: [
        "Machine à laver",
        "Lave-vaisselle",
        "Raccordements sécurisés",
        "Mise en service",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Services Complets</h1>
            <p className="text-xl text-white/90">
              Une gamme complète de services professionnels pour tous vos besoins en plomberie
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group card-hover-lift border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Besoin d'un devis?</h2>
            <p className="text-lg text-muted-foreground">
              Contactez-nous dès maintenant pour obtenir un devis gratuit et sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Demander un devis
                </Button>
              </Link>
              <a href="tel:0225197269">
                <Button size="lg" variant="outline" className="gap-2">
                  Appeler: 022 519 72 69
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
