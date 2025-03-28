
import { useLanguage } from "@/context/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20">
      <div className="section-container">
        {/* Feature 1 - Image on left, text on right */}
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-picallex-black mb-4">
            {t("features_main_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {t("features_main_subtitle")}
          </p>
          <div className="w-24 h-1 bg-picallex-red mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-fade-in-left">
            <img 
              src="https://www.picallex.com/wp-content/uploads/2024/02/Screenshot-2024-02-05-at-18.32.39.png.webp" 
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
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-picallex-red font-bold">✓</span>
                <span>{t("feature1_point1")}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-picallex-red font-bold">✓</span>
                <span>{t("feature1_point2")}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-picallex-red font-bold">✓</span>
                <span>{t("feature1_point3")}</span>
              </li>
            </ul>
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
              src="https://www.picallex.com/wp-content/uploads/2024/08/webphone.png.webp" 
              alt="CRM Automation" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-semibold mb-2">{t("feature2_point1_title")}</p>
              <p className="text-sm text-gray-600">{t("feature2_point1_desc")}</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-semibold mb-2">{t("feature2_point2_title")}</p>
              <p className="text-sm text-gray-600">{t("feature2_point2_desc")}</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-semibold mb-2">{t("feature2_point3_title")}</p>
              <p className="text-sm text-gray-600">{t("feature2_point3_desc")}</p>
            </div>
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
