
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-picallex-black leading-tight">
              {t("headline")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              {t("tagline")}
            </p>
            <div className="pt-4">
              <a href="#cta" className="btn-primary group">
                {t("ctaButton")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl">
              <img 
                src="https://www.picallex.com/wp-content/uploads/2024/08/webphone.png.webp" 
                alt="Picallex CRM Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-picallex-red/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
