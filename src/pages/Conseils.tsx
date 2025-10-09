import { Lightbulb, Droplet, Wrench, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Conseils = () => {
  const tips = [
    {
      icon: Droplet,
      title: "Prévention des fuites",
      description: "Comment éviter les fuites d'eau dans votre maison",
      content: [
        "Vérifiez régulièrement l'état de vos robinets",
        "Inspectez les joints et les raccords",
        "Surveillez votre compteur d'eau pour détecter les fuites invisibles",
        "Remplacez les pièces usées avant qu'elles ne causent des dégâts",
      ],
    },
    {
      icon: Wrench,
      title: "Entretien des canalisations",
      description: "Maintenez vos canalisations en bon état",
      content: [
        "Évitez de jeter des graisses dans l'évier",
        "Utilisez des filtres pour retenir les débris",
        "Nettoyez régulièrement les siphons",
        "Faites un entretien professionnel annuel",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Gestes d'urgence",
      description: "Que faire en cas de problème urgent",
      content: [
        "Localisez et fermez la vanne d'arrêt principale",
        "Coupez l'électricité si l'eau menace les installations électriques",
        "Protégez vos biens avec des serviettes",
        "Contactez immédiatement un plombier professionnel",
      ],
    },
    {
      icon: Shield,
      title: "Protection contre le gel",
      description: "Protégez vos installations en hiver",
      content: [
        "Isolez les tuyaux exposés au froid",
        "Laissez légèrement couler l'eau par temps de gel",
        "Vidangez les installations extérieures",
        "Maintenez une température minimale dans les locaux",
      ],
    },
  ];

  const faqs = [
    {
      question: "Que faire en cas de fuite d'eau?",
      answer: "Fermez immédiatement la vanne d'arrêt principale, coupez l'électricité si nécessaire, et contactez-nous au 022 519 72 69. Nous intervenons en urgence 24h/24.",
    },
    {
      question: "Comment éviter les canalisations bouchées?",
      answer: "Ne jetez pas de graisses, d'huiles ou de débris dans vos canalisations. Utilisez des filtres et nettoyez régulièrement les siphons. Un entretien préventif annuel est recommandé.",
    },
    {
      question: "À quelle fréquence faut-il entretenir sa chaudière?",
      answer: "Un entretien annuel de votre chaudière est obligatoire et recommandé pour garantir son bon fonctionnement, sa sécurité et optimiser sa durée de vie.",
    },
    {
      question: "Puis-je réparer une fuite moi-même?",
      answer: "Pour les petites fuites, vous pouvez faire un dépannage temporaire, mais il est fortement recommandé de faire appel à un professionnel pour une réparation durable et conforme aux normes.",
    },
    {
      question: "Comment détecter une fuite cachée?",
      answer: "Surveillez votre compteur d'eau lorsque tous les robinets sont fermés. Si le compteur continue de tourner, vous avez probablement une fuite. Nous proposons un service de détection par caméra.",
    },
    {
      question: "Quel est le délai d'intervention pour une urgence?",
      answer: "Nous intervenons en moins d'une heure pour toutes les urgences 24h/24 et 7j/7 dans tout le canton de Genève.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Lightbulb className="h-16 w-16 text-secondary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nos Conseils</h1>
            <p className="text-xl text-white/90">
              Prévention, maintenance, et astuces pour éviter les urgences et maintenir vos installations en bon état
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conseils de Prévention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des conseils pratiques pour entretenir vos installations et éviter les problèmes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <Card 
                key={index} 
                className="card-hover-lift border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
              <p className="text-lg text-muted-foreground">
                Trouvez les réponses aux questions les plus courantes
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20 animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Besoin d'aide ou de conseils personnalisés?</h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0225197269">
                  <Button size="lg" className="gap-2">
                    Appelez-nous: 022 519 72 69
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Conseils;
