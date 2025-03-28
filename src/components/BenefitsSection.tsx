
import { useLanguage } from "@/context/LanguageContext";
import { PieChart, MessageSquare, Bot, Settings } from "lucide-react";

export function BenefitsSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t("benefit1_title"),
      description: t("benefit1_desc"),
      icon: PieChart,
      delay: "animate-delay-100"
    },
    {
      title: t("benefit2_title"),
      description: t("benefit2_desc"),
      icon: MessageSquare,
      delay: "animate-delay-200"
    },
    {
      title: t("benefit3_title"),
      description: t("benefit3_desc"),
      icon: Bot,
      delay: "animate-delay-300"
    },
    {
      title: t("benefit4_title"),
      description: t("benefit4_desc"),
      icon: Settings,
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("benefits_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t("benefits_subtitle")}
          </p>
          <div className="w-24 h-1 bg-picallex-red mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-in ${benefit.delay}`}
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-lg mb-4">
                <benefit.icon className="h-7 w-7 text-picallex-black" />
                <div className="absolute inset-0 rounded-lg bg-picallex-red/10 scale-0 transition-transform duration-300 group-hover:scale-100"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
