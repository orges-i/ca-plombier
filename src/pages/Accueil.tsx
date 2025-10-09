import { Phone, Wrench, Clock, Shield, Droplet, Flame, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const Accueil = () => {
  const services = [
    {
      icon: Wrench,
      title: "Installation de Plomberie",
      description: "Installation complète et professionnelle pour tous vos besoins en plomberie",
    },
    {
      icon: Flame,
      title: "Systèmes de Chauffage",
      description: "Installation et maintenance de systèmes de chauffage performants",
    },
    {
      icon: Droplet,
      title: "Installations Sanitaires",
      description: "Pose et rénovation de sanitaires modernes et durables",
    },
    {
      icon: Clock,
      title: "Dépannage à Domicile",
      description: "Interventions rapides pour tous problèmes urgents de plomberie",
    },
    {
      icon: Shield,
      title: "SOS Plomberie 24H/24 - 7J/7",
      description: "Service d'urgence disponible jour et nuit, 7 jours sur 7",
    },
    {
      icon: Sprout,
      title: "Installation Électroménager",
      description: "Installation de machine à laver et lave-vaisselle",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Dépannage à domicile<br />
              <span className="text-gradient">24h/24 - 7j/7</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Interventions rapides pour tous vos problèmes de plomberie à Genève, jour & nuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="tel:0225197269">
                <Button size="lg" className="text-lg px-8 py-6 gap-3 font-semibold hover:scale-105 transition-transform">
                  <Phone className="h-6 w-6" />
                  Appelez-nous: 022 519 72 69
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                  Demander un devis
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm">Service 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm">Professionnels certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-secondary" />
                <span className="text-sm">Équipement moderne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Principaux</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour tous vos besoins en plomberie et sanitaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="default">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">CA Plombier Genève</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Des solutions complètes en plomberie pour particuliers et entreprises. 
                  Nous intervenons rapidement dans tout le canton de Genève avec des outils 
                  de technologies les plus récentes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre équipe de professionnels qualifiés est à votre disposition 24h/24 et 7j/7 
                  pour résoudre tous vos problèmes de plomberie, du simple dépannage aux installations 
                  les plus complexes.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Contactez-nous
                  </Button>
                </Link>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">+15 ans</div>
                      <div className="text-muted-foreground mt-2">D'expérience</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center pt-6">
                      <div>
                        <div className="text-2xl font-bold text-foreground">24/7</div>
                        <div className="text-sm text-muted-foreground">Disponibilité</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">100%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
