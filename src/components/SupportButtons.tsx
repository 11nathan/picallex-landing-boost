
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SupportButtons() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 z-40 flex w-full justify-between px-4 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              className="rounded-full h-14 w-14 shadow-lg bg-picallex-red hover:bg-picallex-red/90"
              onClick={() => window.open("https://example.com/live-chat", "_blank")}
            >
              <MessageCircle className="h-6 w-6 text-white" />
              <span className="sr-only">{t("liveChat")}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{t("liveChat")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              className="rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#20BD5C]"
              onClick={() => window.open("https://wa.me/123456789", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 15.5a5 5 0 0 0 5 0" />
              </svg>
              <span className="sr-only">{t("whatsAppSupport")}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{t("whatsAppSupport")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
