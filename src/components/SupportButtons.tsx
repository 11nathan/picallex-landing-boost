
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SupportButtons() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div 
          className="fixed bottom-6 z-40 flex w-full justify-between px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button 
                  className="relative rounded-full h-14 w-14 shadow-lg bg-picallex-red hover:bg-picallex-red/90 flex items-center justify-center"
                  onClick={() => window.open("https://example.com/live-chat", "_blank")}
                  onMouseEnter={() => setHovered("chat")}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                  
                  {/* Ripple effect */}
                  {hovered === "chat" && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-picallex-red"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  
                  <span className="sr-only">{t("liveChat")}</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{t("liveChat")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button 
                  className="relative rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#20BD5C] flex items-center justify-center"
                  onClick={() => window.open("https://wa.me/123456789", "_blank")}
                  onMouseEnter={() => setHovered("whatsapp")}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                  </svg>
                  
                  {/* Ripple effect */}
                  {hovered === "whatsapp" && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-[#25D366]"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  
                  <span className="sr-only">{t("whatsAppSupport")}</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{t("whatsAppSupport")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
