
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex items-center gap-1.5 rounded-full hover:bg-gray-100 transition-all"
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === "en" ? "🇺🇸 EN" : "🇪🇸 ES"}
      </span>
    </Button>
  );
}
