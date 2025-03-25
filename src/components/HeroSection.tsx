
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const { t } = useLanguage();
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Add a subtle animation to the headline text on load
    const headline = headlineRef.current;
    if (headline) {
      headline.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content - takes up 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-8 opacity-0 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-picallex-red/10 rounded-full mb-2">
              <span className="text-picallex-red font-medium text-sm">Picallex CRM 2024</span>
            </div>
            
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-picallex-black leading-tight tracking-tight"
            >
              <span className="relative inline-block">
                {t("headline").split(" ").map((word, i) => (
                  <span 
                    key={i} 
                    className="inline-block"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                      animation: 'fade-in 0.5s ease-out forwards',
                    }}
                  >
                    {word}{' '}
                  </span>
                ))}
                <span className="absolute -z-10 bottom-2 left-0 right-0 h-3 bg-picallex-red/20 transform -rotate-1"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              {t("tagline")}
            </p>
            
            <div className="pt-6">
              <a 
                href="#cta" 
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {t("ctaButton")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-picallex-red to-picallex-red/80 transform transition-transform duration-300 group-hover:scale-105"></span>
              </a>
            </div>
          </div>
          
          {/* Image content - takes up 7 columns on large screens */}
          <div className="lg:col-span-7 relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.picallex.com/wp-content/uploads/2024/08/webphone.png.webp" 
                  alt="Picallex CRM Dashboard" 
                  className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-700"
                />
                
                {/* Add glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-picallex-red/20 via-transparent to-blue-400/10 mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Abstract background shapes */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-picallex-red/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 -right-6 md:right-10 w-16 h-16 bg-picallex-red/80 rounded-full blur-xl animate-float opacity-60"></div>
            <div className="absolute bottom-1/3 -left-6 md:left-10 w-12 h-12 bg-blue-400/80 rounded-full blur-xl animate-float opacity-60 animate-delay-300"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-1 hidden md:block"></div>
    </section>
  );
}
