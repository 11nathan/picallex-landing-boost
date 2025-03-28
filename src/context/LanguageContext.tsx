
import React, { createContext, useContext } from 'react';

// Define the structure of our translations
interface Translations {
  [key: string]: string;
}

// Define available translation keys
export type TranslationKey = string;

// Define the structure of our language context
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create the language context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key, // Default translation returns the key
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    liveChat: "Live Chat",
    whatsAppSupport: "WhatsApp Support",
    heroTitle: "Transform Your Business with Picallex CRM",
    heroSubtitle: "The ultimate solution to manage your customer relationships and boost your sales.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Benefits section
    benefits_title: "Unlock Powerful CRM Benefits",
    benefits_subtitle: "Picallex CRM revolutionizes how businesses manage relationships and drive growth with these powerful features",
    benefit1_title: "360° Customer Visibility",
    benefit1_desc: "Get complete insights into your customer journey with our unified dashboard. Track every interaction, view purchase history, and predict future needs all in one place.",
    benefit2_title: "AI-Powered Sales Automation",
    benefit2_desc: "Save 15+ hours per week with intelligent automation that handles repetitive tasks, suggests optimal follow-up times, and prioritizes high-value opportunities.",
    benefit3_title: "Seamless Communication",
    benefit3_desc: "Connect with customers on their preferred channels with integrated WhatsApp, email, and IP telephony. Never miss a message and maintain conversation context across platforms.",
    benefit4_title: "Real-Time Analytics",
    benefit4_desc: "Make data-driven decisions with customizable dashboards that visualize sales performance, conversion rates, and customer satisfaction metrics in real-time.",
    
    // Features section
    features_main_title: "Powerful Features That Drive Results",
    features_main_subtitle: "Discover how Picallex CRM's innovative features can transform your business operations and accelerate growth",
    feature1_title: "Integrated IP Telephony",
    feature1_desc: "Transform your customer service with our fully integrated IP telephony system that connects seamlessly with your CRM data for personalized, efficient communication.",
    feature1_point1: "Click-to-call directly from customer records with automatic logging",
    feature1_point2: "Intelligent call routing based on customer history and agent expertise",
    feature1_point3: "Real-time access to customer data during calls for personalized service",
    feature2_title: "Web Phone Integration",
    feature2_desc: "Experience seamless communication with our browser-based phone system that integrates directly with your CRM, eliminating the need for external hardware or software.",
    feature2_point1_title: "Unified Communications",
    feature2_point1_desc: "Handle calls, messages, and customer data in one interface",
    feature2_point2_title: "Automatic Call Recording",
    feature2_point2_desc: "Review conversations for training and quality assurance",
    feature2_point3_title: "Smart Call Analytics",
    feature2_point3_desc: "Track call metrics and optimize your team's performance",
    
    // Testimonials
    testimonials_title: "Success Stories From Our Clients",
    testimonials_subtitle: "Join thousands of businesses that have transformed their customer relationships with Picallex CRM",
    testimonial1_text: "Picallex CRM completely transformed our sales process. The integration between customer data and communication tools has eliminated data silos and given us a true 360° view of our customers.",
    testimonial1_name: "John Doe",
    testimonial1_company: "CEO, ABC Company",
    testimonial1_result: "43% increase in sales conversion",
    testimonial2_text: "The automated workflows and intelligent lead scoring have revolutionized how we prioritize opportunities. Our sales team now focuses on the right prospects at the right time.",
    testimonial2_name: "Jane Smith",
    testimonial2_company: "Marketing Director, XYZ Corp",
    testimonial2_result: "67% faster deal closing time",
    testimonial3_text: "Since implementing Picallex CRM, our sales cycle has shortened by 35%. The intuitive interface and powerful analytics have transformed our business.",
    testimonial3_name: "Michael Johnson",
    testimonial3_company: "Sales Director, 123 Industries",
    testimonial3_result: "28% increase in customer retention",
    businessResult: "Business Result",
    trustedBy: "Trusted by innovative companies worldwide",
    
    // CTA Section
    closingHeadline: "Ready to Transform Your Customer Relationships?",
    supportText: "Join over 10,000 businesses that have revolutionized their customer experience with Picallex CRM. Start your journey to better sales, service, and satisfaction today.",
    closingCta: "Start Your Free 14-Day Trial",
    ctaNoCardRequired: "No credit card required. Full access to all features.",
    ctaBenefit1: "Unlimited users during trial",
    ctaBenefit2: "Free migration assistance",
    ctaBenefit3: "24/7 customer support",
    ctaBenefit4: "Cancel anytime",
    
    discoverMore: "Discover More",
    yourName: "Your Name",
    namePlaceholder: "Enter your full name",
    emailAddress: "Email Address",
    emailPlaceholder: "you@example.com",
    phoneNumber: "Phone Number",
    phonePlaceholder: "+1 (123) 456-7890",
    optional: "optional",
    yourMessage: "Your Message",
    messagePlaceholder: "Tell us about your business needs...",
    acceptTermsText: "I agree to the",
    termsAndConditions: "Terms and Conditions",
    sendMessage: "Send Message",
    sending: "Sending...",
    formSubmittedSuccess: "Message Sent!",
    formSubmittedDescription: "We'll get back to you as soon as possible.",
    formSubmitError: "Something went wrong",
    formSubmitErrorDescription: "Please try again later or contact us directly.",
    thankYouForContacting: "Thank You!",
    contactResponseMessage: "We've received your message and will get back to you shortly.",
    sendAnotherMessage: "Send Another Message",
    contactInfo: "Contact Information",
    customerSupport: "Customer Support",
    emailUs: "Email Us",
    ourLocation: "Our Location",
    businessHours: "Business Hours",
    businessHoursContent: "Monday-Friday: 9am-6pm EST",
    followUs: "Follow Us On Social Media",
    readyToGetStarted: "Ready to Transform Your Business?",
    contactSectionDescription: "Reach out to our team today and discover how Picallex CRM can help you streamline operations, improve customer relationships, and drive growth for your business.",
    home: "Home",
    benefits: "Benefits",
    features: "Features",
    testimonials: "Testimonials",
    ctaButton: "Get Started",
    language: "English"
  },
  es: {
    liveChat: "Chat en Vivo",
    whatsAppSupport: "Soporte por WhatsApp",
    heroTitle: "Transforma Tu Negocio con Picallex CRM",
    heroSubtitle: "La solución definitiva para gestionar tus relaciones con los clientes e impulsar tus ventas.",
    getStarted: "Comenzar",
    learnMore: "Aprender Más",
    
    // Benefits section
    benefits_title: "Desbloquea Potentes Beneficios CRM",
    benefits_subtitle: "Picallex CRM revoluciona la forma en que las empresas gestionan relaciones e impulsan el crecimiento con estas potentes funciones",
    benefit1_title: "Visibilidad 360° del Cliente",
    benefit1_desc: "Obtén una visión completa del recorrido de tus clientes con nuestro panel unificado. Rastrea cada interacción, visualiza el historial de compras y predice necesidades futuras en un solo lugar.",
    benefit2_title: "Automatización con IA",
    benefit2_desc: "Ahorra más de 15 horas por semana con automatización inteligente que gestiona tareas repetitivas, sugiere momentos óptimos de seguimiento y prioriza oportunidades de alto valor.",
    benefit3_title: "Comunicación Fluida",
    benefit3_desc: "Conéctate con los clientes en sus canales preferidos con WhatsApp integrado, correo electrónico y telefonía IP. Nunca pierdas un mensaje y mantén el contexto de la conversación en todas las plataformas.",
    benefit4_title: "Analítica en Tiempo Real",
    benefit4_desc: "Toma decisiones basadas en datos con paneles personalizables que visualizan el rendimiento de ventas, tasas de conversión y métricas de satisfacción del cliente en tiempo real.",
    
    // Features section
    features_main_title: "Potentes Funciones que Impulsan Resultados",
    features_main_subtitle: "Descubre cómo las innovadoras funciones de Picallex CRM pueden transformar las operaciones de tu empresa y acelerar el crecimiento",
    feature1_title: "Telefonía IP Integrada",
    feature1_desc: "Transforma tu servicio al cliente con nuestro sistema de telefonía IP totalmente integrado que se conecta perfectamente con tus datos CRM para una comunicación personalizada y eficiente.",
    feature1_point1: "Llamadas con un clic directamente desde los registros de clientes con registro automático",
    feature1_point2: "Enrutamiento inteligente de llamadas basado en el historial del cliente y la experiencia del agente",
    feature1_point3: "Acceso en tiempo real a los datos del cliente durante las llamadas para un servicio personalizado",
    feature2_title: "Integración de Teléfono Web",
    feature2_desc: "Experimenta una comunicación fluida con nuestro sistema telefónico basado en navegador que se integra directamente con tu CRM, eliminando la necesidad de hardware o software externo.",
    feature2_point1_title: "Comunicaciones Unificadas",
    feature2_point1_desc: "Gestiona llamadas, mensajes y datos de clientes en una sola interfaz",
    feature2_point2_title: "Grabación Automática",
    feature2_point2_desc: "Revisa conversaciones para capacitación y control de calidad",
    feature2_point3_title: "Analítica Inteligente",
    feature2_point3_desc: "Rastrea métricas de llamadas y optimiza el rendimiento de tu equipo",
    
    // Testimonials
    testimonials_title: "Historias de Éxito de Nuestros Clientes",
    testimonials_subtitle: "Únete a miles de empresas que han transformado sus relaciones con los clientes con Picallex CRM",
    testimonial1_text: "Picallex CRM transformó completamente nuestro proceso de ventas. La integración entre los datos de los clientes y las herramientas de comunicación ha eliminado los silos de datos y nos ha dado una verdadera visión de 360° de nuestros clientes.",
    testimonial1_name: "John Doe",
    testimonial1_company: "CEO, ABC Company",
    testimonial1_result: "43% de aumento en conversión de ventas",
    testimonial2_text: "Los flujos de trabajo automatizados y la puntuación inteligente de leads han revolucionado cómo priorizamos las oportunidades. Nuestro equipo de ventas ahora se enfoca en los prospectos correctos en el momento adecuado.",
    testimonial2_name: "Jane Smith",
    testimonial2_company: "Directora de Marketing, XYZ Corp",
    testimonial2_result: "67% más rápido en cierre de tratos",
    testimonial3_text: "Desde que implementamos Picallex CRM, nuestro ciclo de ventas se ha reducido en un 35%. La interfaz intuitiva y los potentes análisis han transformado nuestro negocio.",
    testimonial3_name: "Michael Johnson",
    testimonial3_company: "Director de Ventas, 123 Industries",
    testimonial3_result: "28% de aumento en retención de clientes",
    businessResult: "Resultado de Negocio",
    trustedBy: "Empresas innovadoras confían en nosotros",
    
    // CTA Section
    closingHeadline: "¿Listo para Transformar tus Relaciones con Clientes?",
    supportText: "Únete a más de 10,000 empresas que han revolucionado su experiencia de cliente con Picallex CRM. Comienza tu camino hacia mejores ventas, servicio y satisfacción hoy.",
    closingCta: "Comienza tu Prueba Gratuita de 14 Días",
    ctaNoCardRequired: "No se requiere tarjeta de crédito. Acceso completo a todas las funciones.",
    ctaBenefit1: "Usuarios ilimitados durante la prueba",
    ctaBenefit2: "Asistencia de migración gratuita",
    ctaBenefit3: "Soporte al cliente 24/7",
    ctaBenefit4: "Cancela cuando quieras",
    
    discoverMore: "Descubrir Más",
    yourName: "Tu Nombre",
    namePlaceholder: "Ingresa tu nombre completo",
    emailAddress: "Correo Electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    phoneNumber: "Número de Teléfono",
    phonePlaceholder: "+34 123 456 789",
    optional: "opcional",
    yourMessage: "Tu Mensaje",
    messagePlaceholder: "Cuéntanos sobre las necesidades de tu negocio...",
    acceptTermsText: "Acepto los",
    termsAndConditions: "Términos y Condiciones",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    formSubmittedSuccess: "¡Mensaje Enviado!",
    formSubmittedDescription: "Nos pondremos en contacto contigo lo antes posible.",
    formSubmitError: "Algo salió mal",
    formSubmitErrorDescription: "Por favor, inténtalo de nuevo más tarde o contáctanos directamente.",
    thankYouForContacting: "¡Gracias!",
    contactResponseMessage: "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
    sendAnotherMessage: "Enviar Otro Mensaje",
    contactInfo: "Información de Contacto",
    customerSupport: "Atención al Cliente",
    emailUs: "Envíanos un Email",
    ourLocation: "Nuestra Ubicación",
    businessHours: "Horario de Atención",
    businessHoursContent: "Lunes-Viernes: 9am-6pm (Hora local)",
    followUs: "Síguenos en Redes Sociales",
    readyToGetStarted: "¿Listo para Transformar Tu Negocio?",
    contactSectionDescription: "Comunícate con nuestro equipo hoy y descubre cómo Picallex CRM puede ayudarte a optimizar operaciones, mejorar las relaciones con los clientes e impulsar el crecimiento de tu negocio.",
    home: "Inicio",
    benefits: "Beneficios",
    features: "Características",
    testimonials: "Testimonios",
    ctaButton: "Comenzar Ahora",
    language: "Español"
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = React.useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en'
  );

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key] || key;
  };

  // Add the toggle function to switch between languages
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
