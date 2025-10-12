import { Phone, Wrench, Clock, Shield, Droplet, Flame, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-plumber.jpg";

const Accueil = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Wrench,
      title: t("home.services.1"),
      description: t("services.section1.desc"),
    },
    {
      icon: Flame,
      title: t("home.services.2"),
      description: t("services.section2.desc"),
    },
    {
      icon: Droplet,
      title: t("home.services.3"),
      description: t("services.section3.desc"),
    },
    {
      icon: Clock,
      title: t("home.services.4"),
      description: t("services.section4.desc"),
    },
    {
      icon: Shield,
      title: t("home.services.5"),
      description: t("services.section5.desc"),
    },
    {
      icon: Sprout,
      title: t("home.services.6"),
      description: t("services.section6.desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional Plumbing Services" className="w-full h-full object-cover opacity-95" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/30"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t("home.hero.title").split("24h/24")[0]}<br />
              <span className="text-gradient">24h/24 - 7j/7</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="tel:0225197269">
                <Button size="lg" className="text-lg px-8 py-6 gap-3 font-semibold hover:scale-105 transition-transform">
                  <Phone className="h-6 w-6" />
                  {t("home.hero.cta")}
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                  {t("services.cta.button")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm">{t("home.hero.service247")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm">{t("home.hero.certified")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-secondary" />
                <span className="text-sm">{t("home.hero.modern")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.subtitle")}
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
                {t("home.services.viewall")}
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
                  {t("home.about.text")} {t("home.about.text2")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("home.about.text3")}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    {t("home.cta.button")}
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
                      <div className="text-4xl font-bold text-primary">+15 {t("home.about.years")}</div>
                      <div className="text-muted-foreground mt-2">{t("home.about.experience")}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center pt-6">
                      <div>
                        <div className="text-2xl font-bold text-foreground">24/7</div>
                        <div className="text-sm text-muted-foreground">{t("home.about.availability")}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">100%</div>
                        <div className="text-sm text-muted-foreground">{t("home.about.satisfaction")}</div>
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
