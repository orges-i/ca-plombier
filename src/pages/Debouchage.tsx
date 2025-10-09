import { Droplet, AlertCircle, CheckCircle, Shield, Camera, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Debouchage = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: "Analyse et détection",
      description: "Diagnostic précis du problème et localisation exacte du bouchon",
    },
    {
      icon: Camera,
      title: "Inspection caméra",
      description: "Utilisation d'outils professionnels et modernes pour visualiser l'intérieur des canalisations",
    },
    {
      icon: Wrench,
      title: "Débouchage sécurisé",
      description: "Débouchage en toute sécurité sans endommager vos installations",
    },
    {
      icon: Shield,
      title: "Conseils prévention",
      description: "Conseils pour prévenir les problèmes futurs et maintenir vos canalisations",
    },
  ];

  const advantages = [
    "Intervention rapide 24h/24 et 7j/7",
    "Équipement professionnel haute pression",
    "Inspection par caméra endoscopique",
    "Aucun dommage à vos installations",
    "Garantie sur nos interventions",
    "Devis gratuit et transparent",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Débouchage rapide et efficace
            </h1>
            <p className="text-xl text-white/90">
              Nous intervenons sur toutes vos canalisations bouchées sans endommager vos installations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:0225197269">
                <Button size="lg" className="gap-2">
                  Appelez maintenant: 022 519 72 69
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                  Demander un devis
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Processus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthode professionnelle en 4 étapes pour un débouchage efficace et durable
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir?</h2>
              <p className="text-lg text-muted-foreground">
                Des solutions professionnelles avec des garanties de qualité
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
              <Card className="inline-block bg-primary/5 border-primary/20">
                <CardContent className="p-8 space-y-4">
                  <Droplet className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Urgence débouchage?</h3>
                  <p className="text-muted-foreground">
                    Notre équipe intervient en urgence pour tous vos problèmes de canalisations
                  </p>
                  <a href="tel:0225197269">
                    <Button size="lg" className="gap-2">
                      Intervention immédiate
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
