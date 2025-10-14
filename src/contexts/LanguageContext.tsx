import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.services": "Les Services",
    "nav.debouchage": "Débouchage",
    "nav.conseils": "Nos Conseils",
    "nav.contact": "Contact",
    
    // Home page
    "home.hero.title": "Dépannage à domicile 24h/24 - 7j/7",
    "home.hero.subtitle": "Interventions rapides pour tous vos problèmes de plomberie à Genève, jour & nuit.",
    "home.hero.cta": "Appelez-nous: 022 519 72 69",
    "home.hero.service247": "Service 24/7",
    "home.hero.certified": "Professionnels certifiés",
    "home.hero.modern": "Équipement moderne",
    "home.services.title": "Nos Services Principaux",
    "home.services.subtitle": "Une gamme complète de services pour tous vos besoins en plomberie et sanitaire",
    "home.services.viewall": "Voir tous nos services",
    "home.services.1": "Installation de Plomberie",
    "home.services.2": "Systèmes de Chauffage",
    "home.services.3": "Installations Sanitaires",
    "home.services.4": "Dépannage à Domicile",
    "home.services.5": "SOS Plomberie 24H/24 - 7J/7",
    "home.services.6": "Installation machine à laver / lave-vaisselle",
    "home.about.title": "À Propos de Nous",
    "home.about.text": "CA Plombier Genève – Des solutions complètes en plomberie pour particuliers et entreprises.",
    "home.about.text2": "Nous intervenons rapidement dans tout le canton de Genève avec des outils de technologies les plus récentes.",
    "home.about.text3": "Notre équipe de professionnels qualifiés est à votre disposition 24h/24 et 7j/7 pour résoudre tous vos problèmes de plomberie, du simple dépannage aux installations les plus complexes.",
    "home.about.years": "ans",
    "home.about.experience": "D'expérience",
    "home.about.availability": "Disponibilité",
    "home.about.satisfaction": "Satisfaction",
    "home.testimonials.title": "Ce Que Disent Nos Clients",
    "home.testimonials.subtitle": "Découvrez les avis de nos clients satisfaits",
    "home.testimonials.viewmore": "Voir plus d'avis sur Google",
    "home.cta.title": "Besoin d'une Intervention Rapide?",
    "home.cta.text": "Notre équipe est disponible 24h/24 et 7j/7 pour toutes vos urgences de plomberie",
    "home.cta.button": "Contactez-nous maintenant",
    
    // Services page
    "services.hero.title": "Nos Services de Plomberie",
    "services.hero.subtitle": "Solutions complètes pour particuliers et entreprises à Genève",
    "services.section1.title": "Installation de Plomberie",
    "services.section1.desc": "Installation complète de systèmes de plomberie pour nouvelles constructions et rénovations",
    "services.section2.title": "Systèmes de Chauffage",
    "services.section2.desc": "Installation, maintenance et réparation de tous types de systèmes de chauffage",
    "services.section3.title": "Installations Sanitaires",
    "services.section3.desc": "Pose et rénovation de sanitaires modernes et économes en eau",
    "services.section4.title": "Dépannage à Domicile",
    "services.section4.desc": "Intervention rapide pour tous vos problèmes de plomberie urgents",
    "services.section5.title": "SOS Plomberie 24H/24",
    "services.section5.desc": "Service d'urgence disponible jour et nuit, 7 jours sur 7",
    "services.section6.title": "Installation Électroménager",
    "services.section6.desc": "Installation professionnelle de machines à laver et lave-vaisselle",
    "services.cta.button": "Demandez un devis gratuit",
    
    // Debouchage page
    "debouchage.hero.title": "Débouchage Rapide et Efficace",
    "debouchage.hero.subtitle": "Nous intervenons sur toutes vos canalisations bouchées sans endommager vos installations",
    "debouchage.steps.title": "Notre Processus",
    "debouchage.step1": "Analyse et détection du bouchon",
    "debouchage.step2": "Utilisation d'outils professionnels et modernes",
    "debouchage.step3": "Débouchage en toute sécurité",
    "debouchage.step4": "Conseils pour prévenir les problèmes futurs",
    "debouchage.why.title": "Pourquoi Nous Choisir?",
    "debouchage.why.1.title": "Intervention Rapide",
    "debouchage.why.1.desc": "Nous intervenons rapidement, 24h/24 et 7j/7",
    "debouchage.why.2.title": "Équipement Moderne",
    "debouchage.why.2.desc": "Technologies de pointe pour un débouchage efficace",
    "debouchage.why.3.title": "Sans Dommage",
    "debouchage.why.3.desc": "Travail soigné qui préserve vos installations",
    "debouchage.why.4.title": "Prix Transparents",
    "debouchage.why.4.desc": "Devis clair et détaillé avant intervention",
    
    // Conseils page
    "conseils.hero.title": "Nos Conseils de Plomberie",
    "conseils.hero.subtitle": "Prévention, maintenance, et astuces pour éviter les urgences",
    "conseils.tip1.title": "Entretien Préventif",
    "conseils.tip1.desc": "Inspectez régulièrement vos installations pour détecter les problèmes avant qu'ils ne s'aggravent.",
    "conseils.tip2.title": "Éviter les Bouchons",
    "conseils.tip2.desc": "N'utilisez pas les toilettes comme poubelle. Évitez de jeter cheveux, graisse, et autres débris.",
    "conseils.tip3.title": "Détection de Fuites",
    "conseils.tip3.desc": "Surveillez votre compteur d'eau. Une consommation anormale peut indiquer une fuite cachée.",
    "conseils.tip4.title": "Protection Hivernale",
    "conseils.tip4.desc": "Protégez vos tuyaux du gel en hiver pour éviter les ruptures.",
    "conseils.tip5.title": "Économie d'Eau",
    "conseils.tip5.desc": "Installez des robinets et pommeaux de douche économiques pour réduire votre consommation.",
    "conseils.tip6.title": "Maintenance Chaudière",
    "conseils.tip6.desc": "Faites entretenir votre chaudière annuellement pour garantir son bon fonctionnement.",
    
    // Contact page
    "contact.hero.title": "Contactez-nous",
    "contact.hero.subtitle": "Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins",
    "contact.info.title": "Informations de Contact",
    "contact.info.subtitle": "Contactez-nous par téléphone, email ou remplissez le formulaire. Nous vous répondrons dans les plus brefs délais.",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.address": "Adresse",
    "contact.hours": "Horaires",
    "contact.hours.text": "24h/24 - 7j/7 pour urgences",
    "contact.emergency.title": "Urgence 24/7",
    "contact.emergency.text": "Pour toute urgence, appelez-nous immédiatement. Notre équipe intervient rapidement dans tout le canton de Genève.",
    "contact.emergency.button": "Appeler maintenant",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom",
    "contact.form.phone": "Téléphone",
    "contact.form.email": "E-mail",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.response": "Nous vous répondrons dans les plus brefs délais",
    "contact.form.success": "Message envoyé! Nous vous contacterons bientôt.",
    "contact.map.title": "Zone d'Intervention",
    "contact.map.subtitle": "Nous intervenons dans tout le canton de Genève",
    "contact.map.text": "Nous couvrons l'ensemble du canton de Genève avec des interventions rapides et efficaces, 24h/24 et 7j/7.",
    
    // Footer
    "footer.title": "Votre Plombier de Confiance à Genève",
    "footer.subtitle": "Service disponible 24h/24 et 7j/7 pour toutes vos urgences",
    "footer.quicklinks": "Liens Rapides",
    "footer.contact.title": "Contact",
    "footer.follow": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.impressum": "Impressum",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    
    // Common
    "common.required": "*",
    "common.placeholder.name": "Votre nom complet",
    "common.placeholder.phone": "022 123 45 67",
    "common.placeholder.email": "votre@email.com",
    "common.placeholder.message": "Décrivez votre problème ou votre demande...",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.debouchage": "Unclogging",
    "nav.conseils": "Tips",
    "nav.contact": "Contact",
    
    // Home page
    "home.hero.title": "Home Service 24/7",
    "home.hero.subtitle": "Fast interventions for all your plumbing problems in Geneva, day & night.",
    "home.hero.cta": "Call us: 022 519 72 69",
    "home.hero.service247": "Service 24/7",
    "home.hero.certified": "Certified professionals",
    "home.hero.modern": "Modern equipment",
    "home.services.title": "Our Main Services",
    "home.services.subtitle": "A complete range of services for all your plumbing and sanitary needs",
    "home.services.viewall": "See all our services",
    "home.services.1": "Plumbing Installation",
    "home.services.2": "Heating Systems",
    "home.services.3": "Sanitary Installations",
    "home.services.4": "Home Service",
    "home.services.5": "SOS Plumbing 24/7",
    "home.services.6": "Washing machine / dishwasher installation",
    "home.about.title": "About Us",
    "home.about.text": "CA Plombier Genève – Complete plumbing solutions for individuals and businesses.",
    "home.about.text2": "We intervene quickly throughout the canton of Geneva with the most recent technological tools.",
    "home.about.text3": "Our team of qualified professionals is at your disposal 24/7 to solve all your plumbing problems, from simple repairs to the most complex installations.",
    "home.about.years": "years",
    "home.about.experience": "Of experience",
    "home.about.availability": "Availability",
    "home.about.satisfaction": "Satisfaction",
    "home.testimonials.title": "What Our Clients Say",
    "home.testimonials.subtitle": "Discover reviews from our satisfied customers",
    "home.testimonials.viewmore": "View more reviews on Google",
    "home.cta.title": "Need Quick Service?",
    "home.cta.text": "Our team is available 24/7 for all your plumbing emergencies",
    "home.cta.button": "Contact us now",
    
    // Services page
    "services.hero.title": "Our Plumbing Services",
    "services.hero.subtitle": "Complete solutions for individuals and businesses in Geneva",
    "services.section1.title": "Plumbing Installation",
    "services.section1.desc": "Complete installation of plumbing systems for new constructions and renovations",
    "services.section2.title": "Heating Systems",
    "services.section2.desc": "Installation, maintenance and repair of all types of heating systems",
    "services.section3.title": "Sanitary Installations",
    "services.section3.desc": "Installation and renovation of modern, water-efficient sanitary facilities",
    "services.section4.title": "Home Service",
    "services.section4.desc": "Fast intervention for all your urgent plumbing problems",
    "services.section5.title": "SOS Plumbing 24/7",
    "services.section5.desc": "Emergency service available day and night, 7 days a week",
    "services.section6.title": "Appliance Installation",
    "services.section6.desc": "Professional installation of washing machines and dishwashers",
    "services.cta.button": "Request a free quote",
    
    // Debouchage page
    "debouchage.hero.title": "Fast and Efficient Unclogging",
    "debouchage.hero.subtitle": "We handle all your clogged pipes without damaging your installations",
    "debouchage.steps.title": "Our Process",
    "debouchage.step1": "Analysis and blockage detection",
    "debouchage.step2": "Use of professional and modern tools",
    "debouchage.step3": "Safe unclogging",
    "debouchage.step4": "Advice to prevent future problems",
    "debouchage.why.title": "Why Choose Us?",
    "debouchage.why.1.title": "Fast Intervention",
    "debouchage.why.1.desc": "We intervene quickly, 24/7",
    "debouchage.why.2.title": "Modern Equipment",
    "debouchage.why.2.desc": "State-of-the-art technology for efficient unclogging",
    "debouchage.why.3.title": "No Damage",
    "debouchage.why.3.desc": "Careful work that preserves your installations",
    "debouchage.why.4.title": "Transparent Pricing",
    "debouchage.why.4.desc": "Clear and detailed quote before intervention",
    
    // Conseils page
    "conseils.hero.title": "Our Plumbing Tips",
    "conseils.hero.subtitle": "Prevention, maintenance, and tips to avoid emergencies",
    "conseils.tip1.title": "Preventive Maintenance",
    "conseils.tip1.desc": "Regularly inspect your installations to detect problems before they worsen.",
    "conseils.tip2.title": "Avoid Blockages",
    "conseils.tip2.desc": "Don't use toilets as trash cans. Avoid throwing hair, grease, and other debris.",
    "conseils.tip3.title": "Leak Detection",
    "conseils.tip3.desc": "Monitor your water meter. Abnormal consumption may indicate a hidden leak.",
    "conseils.tip4.title": "Winter Protection",
    "conseils.tip4.desc": "Protect your pipes from freezing in winter to avoid breaks.",
    "conseils.tip5.title": "Water Saving",
    "conseils.tip5.desc": "Install economical faucets and shower heads to reduce your consumption.",
    "conseils.tip6.title": "Boiler Maintenance",
    "conseils.tip6.desc": "Have your boiler serviced annually to ensure proper operation.",
    
    // Contact page
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "Our team is available 24/7 to meet your needs",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Contact us by phone, email or fill out the form. We will respond as soon as possible.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hours.text": "24/7 for emergencies",
    "contact.emergency.title": "24/7 Emergency",
    "contact.emergency.text": "For any emergency, call us immediately. Our team intervenes quickly throughout the canton of Geneva.",
    "contact.emergency.button": "Call now",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.phone": "Phone",
    "contact.form.email": "E-mail",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.response": "We will respond as soon as possible",
    "contact.form.success": "Message sent! We will contact you soon.",
    "contact.map.title": "Service Area",
    "contact.map.subtitle": "We operate throughout the canton of Geneva",
    "contact.map.text": "We cover the entire canton of Geneva with fast and efficient interventions, 24/7.",
    
    // Footer
    "footer.title": "Your Trusted Plumber in Geneva",
    "footer.subtitle": "Service available 24/7 for all your emergencies",
    "footer.quicklinks": "Quick Links",
    "footer.contact.title": "Contact",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.impressum": "Imprint",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    
    // Common
    "common.required": "*",
    "common.placeholder.name": "Your full name",
    "common.placeholder.phone": "022 123 45 67",
    "common.placeholder.email": "your@email.com",
    "common.placeholder.message": "Describe your problem or request...",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
