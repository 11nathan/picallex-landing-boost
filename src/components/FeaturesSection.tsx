
import { useLanguage } from "@/context/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20">
      <div className="section-container">
        {/* Feature 1 - Image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-fade-in-left">
            <img 
              src="https://via.placeholder.com/800x600/f0f0f0/333333?text=IP+Telephony" 
              alt="IP Telephony Integration" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-picallex-red/20 to-transparent opacity-60"></div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-picallex-black">
              {t("feature1_title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("feature1_desc")}
            </p>
            <a href="#" className="inline-flex items-center text-picallex-red font-medium hover:underline">
              {t("discoverMore")} →
            </a>
          </div>
        </div>
        
        {/* Feature 2 - Centered with full-width image */}
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-picallex-black mb-6">
            {t("feature2_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            {t("feature2_desc")}
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <img 
              src="https://via.placeholder.com/1200x700/f0f0f0/333333?text=CRM+Automation" 
              alt="CRM Automation" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          <div className="mt-12">
            <a href="#" className="btn-primary">
              {t("discoverMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
