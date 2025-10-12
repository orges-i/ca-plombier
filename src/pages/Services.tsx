import { Wrench, Flame, Droplet, AlertCircle, Shield, Sprout, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import servicePlumbingImage from "@/assets/service-plumbing.jpg";
import bathroomImage from "@/assets/bathroom-sanitary.jpg";
import heatingImage from "@/assets/service-heating.jpg";

const Services = () => {
  const { t, language } = useLanguage();
  
  const servicesData = [
    {
      icon: AlertCircle,
      title: t("services.section4.title"),
      description: t("services.section4.desc"),
      details: language === "fr" 
        ? ["Réparation de fuites d'eau", "Débouchage de canalisations", "Réparation de robinetterie", "Intervention en moins d'1 heure"]
        : ["Water leak repair", "Pipe unclogging", "Tap repair", "Intervention in less than 1 hour"],
    },
    {
      icon: Droplet,
      title: t("services.section3.title"),
      description: t("services.section3.desc"),
      details: language === "fr"
        ? ["Pose de lavabos et éviers", "Installation de douches et baignoires", "Remplacement de WC", "Rénovation complète de salles de bain"]
        : ["Installation of sinks and basins", "Installation of showers and bathtubs", "Toilet replacement", "Complete bathroom renovation"],
    },
    {
      icon: Flame,
      title: t("services.section2.title"),
      description: t("services.section2.desc"),
      details: language === "fr"
        ? ["Installation de chaudières", "Radiateurs et chauffage au sol", "Maintenance préventive", "Optimisation énergétique"]
        : ["Boiler installation", "Radiators and underfloor heating", "Preventive maintenance", "Energy optimization"],
    },
    {
      icon: Shield,
      title: language === "fr" ? "Détection de Fuites" : "Leak Detection",
      description: language === "fr" 
        ? "Détection et réparation de fuites cachées"
        : "Detection and repair of hidden leaks",
      details: language === "fr"
        ? ["Recherche de fuites invisibles", "Détection électronique", "Réparation sans casse", "Diagnostic complet"]
        : ["Search for invisible leaks", "Electronic detection", "Repair without damage", "Complete diagnosis"],
    },
    {
      icon: Wrench,
      title: language === "fr" ? "Débouchage Professionnel" : "Professional Unclogging",
      description: language === "fr"
        ? "Débouchage de tuyauteries avec équipement moderne"
        : "Pipe unclogging with modern equipment",
      details: language === "fr"
        ? ["Débouchage haute pression", "Inspection par caméra", "Nettoyage de canalisations", "Prévention des bouchons"]
        : ["High-pressure unclogging", "Camera inspection", "Pipe cleaning", "Blockage prevention"],
    },
    {
      icon: Sprout,
      title: t("services.section6.title"),
      description: t("services.section6.desc"),
      details: language === "fr"
        ? ["Machine à laver", "Lave-vaisselle", "Raccordements sécurisés", "Mise en service"]
        : ["Washing machine", "Dishwasher", "Secure connections", "Commissioning"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicePlumbingImage} alt="Professional Plumbing Services" className="w-full h-full object-cover opacity-95" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t("services.hero.title")}</h1>
            <p className="text-xl text-white/90">
              {t("services.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
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
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-2 gap-4 h-full">
            <img src={bathroomImage} alt="" className="w-full h-full object-cover" />
            <img src={heatingImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in bg-background/80 backdrop-blur-sm p-12 rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === "fr" ? "Besoin d'un devis?" : "Need a quote?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "fr" 
                ? "Contactez-nous dès maintenant pour obtenir un devis gratuit et sans engagement"
                : "Contact us now for a free, no-obligation quote"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  {t("services.cta.button")}
                </Button>
              </Link>
              <a href="tel:0225197269">
                <Button size="lg" variant="outline" className="gap-2">
                  {language === "fr" ? "Appeler: 022 519 72 69" : "Call: 022 519 72 69"}
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
