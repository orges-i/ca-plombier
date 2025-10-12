import { Lightbulb, Droplet, Wrench, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import toolsImage from "@/assets/tools-tips.jpg";

const Conseils = () => {
  const { t, language } = useLanguage();
  
  const tips = [
    {
      icon: Droplet,
      title: t("conseils.tip3.title"),
      description: t("conseils.tip3.desc"),
      content: language === "fr"
        ? [
            "Vérifiez régulièrement l'état de vos robinets",
            "Inspectez les joints et les raccords",
            "Surveillez votre compteur d'eau pour détecter les fuites invisibles",
            "Remplacez les pièces usées avant qu'elles ne causent des dégâts",
          ]
        : [
            "Regularly check the condition of your taps",
            "Inspect joints and connections",
            "Monitor your water meter to detect invisible leaks",
            "Replace worn parts before they cause damage",
          ],
    },
    {
      icon: Wrench,
      title: t("conseils.tip1.title"),
      description: t("conseils.tip1.desc"),
      content: language === "fr"
        ? [
            "Évitez de jeter des graisses dans l'évier",
            "Utilisez des filtres pour retenir les débris",
            "Nettoyez régulièrement les siphons",
            "Faites un entretien professionnel annuel",
          ]
        : [
            "Avoid throwing grease down the sink",
            "Use filters to retain debris",
            "Regularly clean siphons",
            "Have annual professional maintenance",
          ],
    },
    {
      icon: AlertTriangle,
      title: language === "fr" ? "Gestes d'urgence" : "Emergency actions",
      description: language === "fr" ? "Que faire en cas de problème urgent" : "What to do in case of urgent problem",
      content: language === "fr"
        ? [
            "Localisez et fermez la vanne d'arrêt principale",
            "Coupez l'électricité si l'eau menace les installations électriques",
            "Protégez vos biens avec des serviettes",
            "Contactez immédiatement un plombier professionnel",
          ]
        : [
            "Locate and close the main shut-off valve",
            "Cut electricity if water threatens electrical installations",
            "Protect your belongings with towels",
            "Immediately contact a professional plumber",
          ],
    },
    {
      icon: Shield,
      title: t("conseils.tip4.title"),
      description: t("conseils.tip4.desc"),
      content: language === "fr"
        ? [
            "Isolez les tuyaux exposés au froid",
            "Laissez légèrement couler l'eau par temps de gel",
            "Vidangez les installations extérieures",
            "Maintenez une température minimale dans les locaux",
          ]
        : [
            "Insulate pipes exposed to cold",
            "Let water flow slightly during freezing weather",
            "Drain outdoor installations",
            "Maintain a minimum temperature in premises",
          ],
    },
  ];

  const faqs = language === "fr"
    ? [
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
      ]
    : [
        {
          question: "What to do in case of a water leak?",
          answer: "Immediately close the main shut-off valve, cut electricity if necessary, and contact us at 022 519 72 69. We intervene in emergency 24/7.",
        },
        {
          question: "How to avoid clogged pipes?",
          answer: "Do not throw grease, oil or debris into your pipes. Use filters and regularly clean siphons. Annual preventive maintenance is recommended.",
        },
        {
          question: "How often should the boiler be serviced?",
          answer: "Annual boiler maintenance is mandatory and recommended to guarantee its proper operation, safety and optimize its lifespan.",
        },
        {
          question: "Can I repair a leak myself?",
          answer: "For small leaks, you can do a temporary repair, but it is strongly recommended to call a professional for a lasting repair that complies with standards.",
        },
        {
          question: "How to detect a hidden leak?",
          answer: "Monitor your water meter when all taps are closed. If the meter continues to run, you probably have a leak. We offer camera detection service.",
        },
        {
          question: "What is the response time for an emergency?",
          answer: "We intervene in less than an hour for all emergencies 24/7 throughout the canton of Geneva.",
        },
      ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={toolsImage} alt="Plumbing Tools and Tips" className="w-full h-full object-cover opacity-95" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Lightbulb className="h-16 w-16 text-secondary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t("conseils.hero.title")}</h1>
            <p className="text-xl text-white/90">
              {t("conseils.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "fr" ? "Conseils de Prévention" : "Prevention Tips"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des conseils pratiques pour entretenir vos installations et éviter les problèmes"
                : "Practical advice to maintain your installations and avoid problems"}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === "fr"
                  ? "Trouvez les réponses aux questions les plus courantes"
                  : "Find answers to the most common questions"}
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
              <h2 className="text-3xl font-bold">
                {language === "fr" 
                  ? "Besoin d'aide ou de conseils personnalisés?"
                  : "Need help or personalized advice?"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === "fr"
                  ? "Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions"
                  : "Our team of experts is at your disposal to answer all your questions"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0225197269">
                  <Button size="lg" className="gap-2">
                    {language === "fr" ? "Appelez-nous: 022 519 72 69" : "Call us: 022 519 72 69"}
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
