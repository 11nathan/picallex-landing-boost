
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define all text content in both languages
export const translations = {
  en: {
    // Navigation
    home: "Home",
    features: "Features",
    benefits: "Benefits",
    testimonials: "Testimonials",
    pricing: "Pricing",
    contact: "Contact",
    
    // Hero Section
    headline: "The CRM That Grows With Your Business",
    tagline: "Automate your sales, manage customers effortlessly, and boost productivity with Picallex.",
    ctaButton: "Try for Free",
    
    // Benefits Section
    benefits_title: "Key Benefits",
    benefit1_title: "Omnichannel Sales Pipeline",
    benefit1_desc: "Track, manage, and close deals efficiently.",
    benefit2_title: "WhatsApp CRM Integration",
    benefit2_desc: "Manage all customer interactions in a unified inbox.",
    benefit3_title: "AI Chatbots",
    benefit3_desc: "Automate responses and collect customer data.",
    benefit4_title: "Customizable Workflows",
    benefit4_desc: "Automate repetitive tasks effortlessly.",
    
    // Features Section
    feature1_title: "Seamless Communication",
    feature1_desc: "Seamlessly integrate IP telephony with CRM to enhance communication.",
    feature2_title: "Powerful Automation",
    feature2_desc: "Save time and reduce errors with intelligent workflow automation.",
    discoverMore: "Discover More",
    
    // Social Proof
    testimonials_title: "What Our Customers Say",
    testimonial1_name: "John Smith",
    testimonial1_company: "ABC Inc.",
    testimonial1_text: "Picallex transformed our sales process. We've increased efficiency by 45% since implementation.",
    testimonial2_name: "Maria Rodriguez",
    testimonial2_company: "XYZ Solutions",
    testimonial2_text: "The WhatsApp integration alone made this worth every penny. Our customer response time improved dramatically.",
    testimonial3_name: "David Chen",
    testimonial3_company: "Global Tech",
    testimonial3_text: "The customizable workflows allowed us to automate our entire lead qualification process. Incredible time-saver!",
    
    // Final CTA
    closingHeadline: "Start growing your business with Picallex today!",
    closingCta: "Get Your Free Trial Now!",
    supportText: "Need help? Reach us via WhatsApp or live chat.",
    
    // Support Buttons
    liveChat: "Live Chat",
    whatsAppSupport: "WhatsApp Support",
    
    // Footer 
    language: "English"
  },
  es: {
    // Navigation
    home: "Inicio",
    features: "Características",
    benefits: "Beneficios",
    testimonials: "Testimonios",
    pricing: "Precios",
    contact: "Contacto",
    
    // Hero Section
    headline: "El CRM Que Crece Con Tu Negocio",
    tagline: "Automatiza tus ventas, gestiona clientes sin esfuerzo y aumenta la productividad con Picallex.",
    ctaButton: "Prueba Gratis",
    
    // Benefits Section
    benefits_title: "Beneficios Clave",
    benefit1_title: "Pipeline de Ventas Omnicanal",
    benefit1_desc: "Monitorea, gestiona y cierra acuerdos eficientemente.",
    benefit2_title: "Integración con WhatsApp",
    benefit2_desc: "Gestiona todas las interacciones con clientes en una bandeja unificada.",
    benefit3_title: "Chatbots con IA",
    benefit3_desc: "Automatiza respuestas y recopila datos de clientes.",
    benefit4_title: "Flujos de Trabajo Personalizables",
    benefit4_desc: "Automatiza tareas repetitivas sin esfuerzo.",
    
    // Features Section
    feature1_title: "Comunicación Perfecta",
    feature1_desc: "Integra la telefonía IP con el CRM para mejorar la comunicación.",
    feature2_title: "Automatización Potente",
    feature2_desc: "Ahorra tiempo y reduce errores con la automatización inteligente de flujos de trabajo.",
    discoverMore: "Descubre Más",
    
    // Social Proof
    testimonials_title: "Lo Que Dicen Nuestros Clientes",
    testimonial1_name: "Juan Pérez",
    testimonial1_company: "ABC Inc.",
    testimonial1_text: "Picallex transformó nuestro proceso de ventas. Hemos aumentado la eficiencia en un 45% desde su implementación.",
    testimonial2_name: "María Rodríguez",
    testimonial2_company: "Soluciones XYZ",
    testimonial2_text: "La integración con WhatsApp por sí sola hizo que valiera cada centavo. Nuestro tiempo de respuesta al cliente mejoró dramáticamente.",
    testimonial3_name: "David Chen",
    testimonial3_company: "Global Tech",
    testimonial3_text: "Los flujos de trabajo personalizables nos permitieron automatizar todo nuestro proceso de calificación de clientes potenciales. ¡Un ahorro de tiempo increíble!",
    
    // Final CTA
    closingHeadline: "¡Comienza a hacer crecer tu negocio con Picallex hoy!",
    closingCta: "¡Obtén Tu Prueba Gratuita Ahora!",
    supportText: "¿Necesitas ayuda? Contáctanos por WhatsApp o chat en vivo.",
    
    // Support Buttons
    liveChat: "Chat en Vivo",
    whatsAppSupport: "Soporte por WhatsApp",
    
    // Footer
    language: "Español"
  }
};

// Define language types
export type Language = "en" | "es";
type TranslationKey = keyof typeof translations.en;

// Create the context
type LanguageContextType = {
  language: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
