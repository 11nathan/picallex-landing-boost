
import { useLanguage } from "@/context/LanguageContext";
import { Check, ChevronRight } from "lucide-react";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("closingHeadline")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            {t("supportText")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-gray-700">{t(`ctaBenefit${num}`)}</span>
              </div>
            ))}
          </div>
          
          <a href="#" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 mx-auto w-fit group">
            {t("closingCta")}
            <ChevronRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            {t("ctaNoCardRequired")}
          </p>
        </div>
      </div>
    </section>
  );
}
