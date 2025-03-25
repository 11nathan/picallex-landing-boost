
import { MessageCircle, MessageSquare } from "lucide-react";
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
              className="rounded-full h-14 w-14 shadow-lg bg-picallex-red hover:bg-picallex-red/90"
              onClick={() => window.open("https://wa.me/123456789", "_blank")}
            >
              <MessageSquare className="h-6 w-6 text-white" />
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
