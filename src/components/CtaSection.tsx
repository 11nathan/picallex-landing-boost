
import { useLanguage } from "@/context/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("closingHeadline")}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            {t("supportText")}
          </p>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            {t("closingCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
