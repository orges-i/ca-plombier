import { Droplet, AlertCircle, CheckCircle, Shield, Camera, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import uncloggingImage from "@/assets/service-unclogging.jpg";
import cameraImage from "@/assets/camera-inspection.jpg";

const Debouchage = () => {
  const { t, language } = useLanguage();
  
  const steps = [
    {
      icon: AlertCircle,
      title: t("debouchage.step1"),
      description: language === "fr" 
        ? "Diagnostic précis du problème et localisation exacte du bouchon"
        : "Precise problem diagnosis and exact blockage location",
    },
    {
      icon: Camera,
      title: t("debouchage.step2"),
      description: language === "fr"
        ? "Utilisation d'outils professionnels et modernes pour visualiser l'intérieur des canalisations"
        : "Use of professional and modern tools to visualize the inside of pipes",
    },
    {
      icon: Wrench,
      title: t("debouchage.step3"),
      description: language === "fr"
        ? "Débouchage en toute sécurité sans endommager vos installations"
        : "Safe unclogging without damaging your installations",
    },
    {
      icon: Shield,
      title: t("debouchage.step4"),
      description: language === "fr"
        ? "Conseils pour prévenir les problèmes futurs et maintenir vos canalisations"
        : "Advice to prevent future problems and maintain your pipes",
    },
  ];

  const advantages = language === "fr"
    ? [
        "Intervention rapide 24h/24 et 7j/7",
        "Équipement professionnel haute pression",
        "Inspection par caméra endoscopique",
        "Aucun dommage à vos installations",
        "Garantie sur nos interventions",
        "Devis gratuit et transparent",
      ]
    : [
        "Fast intervention 24/7",
        "Professional high-pressure equipment",
        "Endoscopic camera inspection",
        "No damage to your installations",
        "Guarantee on our interventions",
        "Free and transparent quote",
      ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={uncloggingImage} alt="Professional Unclogging Services" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t("debouchage.hero.title")}
            </h1>
            <p className="text-xl text-white/90">
              {t("debouchage.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:0225197269">
                <Button size="lg" className="gap-2">
                  {language === "fr" ? "Appelez maintenant: 022 519 72 69" : "Call now: 022 519 72 69"}
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                  {t("services.cta.button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("debouchage.steps.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une méthode professionnelle en 4 étapes pour un débouchage efficace et durable"
                : "A professional 4-step method for effective and lasting unclogging"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden card-hover-lift border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20">0{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("debouchage.why.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {language === "fr" 
                  ? "Des solutions professionnelles avec des garanties de qualité"
                  : "Professional solutions with quality guarantees"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-primary/5 border-primary/20 overflow-hidden">
                <div className="relative">
                  <img src={cameraImage} alt="Camera Inspection" className="w-full h-48 object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <Droplet className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">
                    {language === "fr" ? "Urgence débouchage?" : "Unclogging emergency?"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "fr"
                      ? "Notre équipe intervient en urgence pour tous vos problèmes de canalisations"
                      : "Our team responds in emergencies for all your pipe problems"}
                  </p>
                  <a href="tel:0225197269">
                    <Button size="lg" className="gap-2">
                      {language === "fr" ? "Intervention immédiate" : "Immediate intervention"}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Debouchage;
