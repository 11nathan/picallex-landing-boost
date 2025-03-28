import React, { createContext, useContext } from 'react';

// Define the structure of our translations
interface Translations {
  [key: string]: string;
}

// Define the structure of our language context
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// Create the language context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
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
    benefitsTitle: "Key Benefits of Picallex CRM",
    benefit1Title: "Centralized Customer Data",
    benefit1Description: "Keep all your customer information in one place for easy access and better management.",
    benefit2Title: "Sales Automation",
    benefit2Description: "Automate repetitive tasks and focus on closing more deals.",
    benefit3Title: "Improved Communication",
    benefit3Description: "Enhance communication with customers and team members for better collaboration.",
    featuresTitle: "Explore Our Powerful Features",
    feature1Title: "Contact Management",
    feature1Description: "Easily manage and organize your contacts with detailed profiles and segmentation.",
    feature2Title: "Sales Pipeline",
    feature2Description: "Visualize your sales process and track deals from lead to close.",
    feature3Title: "Email Marketing",
    feature3Description: "Create and send targeted email campaigns to nurture leads and engage customers.",
    testimonialsTitle: "What Our Customers Say",
    testimonial1Text: "Picallex CRM has revolutionized our sales process. We've seen a significant increase in efficiency and customer satisfaction.",
    testimonial1Author: "John Doe, CEO of ABC Corp",
    testimonial2Text: "The intuitive interface and powerful features of Picallex CRM have made it an indispensable tool for our team.",
    testimonial2Author: "Jane Smith, Sales Manager at XYZ Inc",
    ctaTitle: "Ready to Take Your Business to the Next Level?",
    ctaDescription: "Sign up for a free trial and discover how Picallex CRM can transform your business today.",
    signUpFree: "Sign Up Free",
    footerCopyright: "© 2024 Picallex CRM. All rights reserved.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch With Us",
    contactFormSubtitle: "Have questions or want to learn more? We're here to help you grow your business.",
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
    liveChat: "Live Chat",
    whatsAppSupport: "WhatsApp Support",
    
    // Contact Section
    readyToGetStarted: "Ready to Transform Your Business?",
    contactSectionDescription: "Reach out to our team today and discover how Picallex CRM can help you streamline operations, improve customer relationships, and drive growth for your business.",
    contactInfo: "Contact Information",
    customerSupport: "Customer Support",
    emailUs: "Email Us",
    ourLocation: "Our Location",
    businessHours: "Business Hours",
    businessHoursContent: "Monday-Friday: 9am-6pm EST",
    followUs: "Follow Us On Social Media",
  },
  es: {
    liveChat: "Chat en Vivo",
    whatsAppSupport: "Soporte por WhatsApp",
    heroTitle: "Transforma Tu Negocio con Picallex CRM",
    heroSubtitle: "La solución definitiva para gestionar tus relaciones con los clientes e impulsar tus ventas.",
    getStarted: "Comenzar",
    learnMore: "Aprender Más",
    benefitsTitle: "Beneficios Clave de Picallex CRM",
    benefit1Title: "Datos Centralizados del Cliente",
    benefit1Description: "Mantén toda la información de tus clientes en un solo lugar para un fácil acceso y una mejor gestión.",
    benefit2Title: "Automatización de Ventas",
    benefit2Description: "Automatiza las tareas repetitivas y concéntrate en cerrar más tratos.",
    benefit3Title: "Comunicación Mejorada",
    benefit3Description: "Mejora la comunicación con los clientes y los miembros del equipo para una mejor colaboración.",
    featuresTitle: "Explora Nuestras Poderosas Características",
    feature1Title: "Gestión de Contactos",
    feature1Description: "Gestiona y organiza fácilmente tus contactos con perfiles detallados y segmentación.",
    feature2Title: "Embudo de Ventas",
    feature2Description: "Visualiza tu proceso de ventas y realiza un seguimiento de los tratos desde el inicio hasta el cierre.",
    feature3Title: "Email Marketing",
    feature3Description: "Crea y envía campañas de correo electrónico dirigidas para nutrir clientes potenciales e involucrar a los clientes.",
    testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
    testimonial1Text: "Picallex CRM ha revolucionado nuestro proceso de ventas. Hemos visto un aumento significativo en la eficiencia y la satisfacción del cliente.",
    testimonial1Author: "John Doe, CEO de ABC Corp",
    testimonial2Text: "La interfaz intuitiva y las potentes funciones de Picallex CRM lo han convertido en una herramienta indispensable para nuestro equipo.",
    testimonial2Author: "Jane Smith, Gerente de Ventas en XYZ Inc",
    ctaTitle: "¿Listo para Llevar Tu Negocio al Siguiente Nivel?",
    ctaDescription: "Regístrate para una prueba gratuita y descubre cómo Picallex CRM puede transformar tu negocio hoy mismo.",
    signUpFree: "Regístrate Gratis",
    footerCopyright: "© 2024 Picallex CRM. Todos los derechos reservados.",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    contactUs: "Contáctanos",
    getInTouch: "Ponte en Contacto con Nosotros",
    contactFormSubtitle: "¿Tienes preguntas o quieres saber más? Estamos aquí para ayudarte a crecer tu negocio.",
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
    liveChat: "Chat en Vivo",
    whatsAppSupport: "Soporte por WhatsApp",
    
    // Contact Section
    readyToGetStarted: "¿Listo para Transformar Tu Negocio?",
    contactSectionDescription: "Comunícate con nuestro equipo hoy y descubre cómo Picallex CRM puede ayudarte a optimizar operaciones, mejorar las relaciones con los clientes e impulsar el crecimiento de tu negocio.",
    contactInfo: "Información de Contacto",
    customerSupport: "Atención al Cliente",
    emailUs: "Envíanos un Email",
    ourLocation: "Nuestra Ubicación",
    businessHours: "Horario de Atención",
    businessHoursContent: "Lunes-Viernes: 9am-6pm (Hora local)",
    followUs: "Síguenos en Redes Sociales",
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
