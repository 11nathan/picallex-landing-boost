
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-picallex-black">
              Picallex<span className="text-picallex-red">.</span>
            </h3>
            <p className="mt-4 text-gray-600 max-w-md">
              The modern CRM platform that grows with your business, helping you automate sales and manage customers effortlessly.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-3">
              {["home", "benefits", "features", "testimonials"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="text-gray-600 hover:text-picallex-red transition-colors"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-600">
              <li>contact@picallex.com</li>
              <li>+1 (123) 456-7890</li>
              <li>123 CRM Street, San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {currentYear} Picallex. {t("language") === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-picallex-red">
              {t("language") === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </a>
            <a href="#" className="text-gray-500 hover:text-picallex-red">
              {t("language") === "en" ? "Terms of Service" : "Términos de Servicio"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
