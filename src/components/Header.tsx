
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: t("home"), href: "#home" },
    { label: t("benefits"), href: "#benefits" },
    { label: t("features"), href: "#features" },
    { label: t("testimonials"), href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="sr-only">Picallex</span>
              <h1 className="text-2xl font-bold text-picallex-black">
                Picallex<span className="text-picallex-red">.</span>
              </h1>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              className="rounded-md p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-picallex-red transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-2">
            <LanguageToggle />
            <a
              href="#cta"
              className="btn-primary animate-scale"
            >
              {t("ctaButton")}
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-picallex-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-sm bg-white shadow-xl flex flex-col overflow-y-scroll">
              <div className="flex items-center justify-between px-4 pt-5 pb-4">
                <h1 className="text-2xl font-bold text-picallex-black">
                  Picallex<span className="text-picallex-red">.</span>
                </h1>
                <Button
                  variant="ghost"
                  className="rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              
              <div className="mt-6 px-4 space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-xl font-medium text-gray-900 hover:text-picallex-red transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-8 flex flex-col space-y-4">
                  <LanguageToggle />
                  <a
                    href="#cta"
                    className="btn-primary w-full flex justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("ctaButton")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
