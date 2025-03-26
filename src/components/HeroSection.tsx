
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for floating elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetRect = e.currentTarget.getBoundingClientRect();
    const x = (clientX - targetRect.left) / targetRect.width;
    const y = (clientY - targetRect.top) / targetRect.height;
    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    // Primary animations on load
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    timeline
      .fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        ".headline-word",
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          stagger: 0.08,
          duration: 0.8
        },
        "-=0.3"
      )
      .fromTo(
        ".hero-tagline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-image-container",
        { opacity: 0, y: 40, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          ease: "elastic.out(1, 0.75)" 
        },
        "-=0.8"
      )
      .fromTo(
        ".floating-element",
        { opacity: 0, scale: 0 },
        { 
          opacity: 0.7, 
          scale: 1, 
          stagger: 0.15,
          duration: 0.8, 
          ease: "back.out(1.7)" 
        },
        "-=1"
      );
      
    // Scroll-triggered animations
    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        onEnter: () => {
          gsap.to(".hero-parallax", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
          });
        }
      });
    }
    
    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Update floating elements position based on mouse movement
  useEffect(() => {
    if (mousePosition.x && mousePosition.y) {
      gsap.to(".floating-element-1", {
        x: (mousePosition.x - 0.5) * -40,
        y: (mousePosition.y - 0.5) * -40,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(".floating-element-2", {
        x: (mousePosition.x - 0.5) * 30,
        y: (mousePosition.y - 0.5) * 30,
        duration: 1.2,
        ease: "power2.out"
      });
      
      gsap.to(".floating-element-3", {
        x: (mousePosition.x - 0.5) * 50,
        y: (mousePosition.y - 0.5) * -20,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // Subtle image tilt effect
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotationY: (mousePosition.x - 0.5) * 5,
          rotationX: (mousePosition.y - 0.5) * -5,
          duration: 1,
          ease: "power2.out"
        });
      }
    }
  }, [mousePosition]);

  return (
    <motion.section 
      ref={sectionRef}
      id="home" 
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-gradient-to-bl from-picallex-red/5 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl z-0"></div>
      
      {/* Floating background elements */}
      <div className="floating-element floating-element-1 absolute top-1/4 right-[10%] w-24 h-24 bg-picallex-red/10 rounded-full blur-3xl z-0"></div>
      <div className="floating-element floating-element-2 absolute bottom-1/3 left-[15%] w-32 h-32 bg-blue-100/40 rounded-full blur-3xl z-0"></div>
      <div className="floating-element floating-element-3 absolute top-1/3 left-[25%] w-16 h-16 bg-yellow-100/30 rounded-full blur-3xl z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 items-center">
          {/* Text content - takes up 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              className="hero-badge inline-flex items-center px-4 py-1.5 bg-picallex-red/10 backdrop-blur-sm rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-picallex-red font-medium text-sm">Picallex CRM 2024</span>
            </motion.div>
            
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-picallex-black leading-tight tracking-tight"
            >
              {t("headline").split(" ").map((word, i) => (
                <span 
                  key={i} 
                  className="headline-word relative inline-block mr-[0.25em]"
                >
                  {word}
                  {i === 1 && (
                    <span className="absolute -z-10 bottom-2 left-0 right-0 h-3 bg-picallex-red/20 transform -rotate-1"></span>
                  )}
                </span>
              ))}
            </h1>
            
            <p className="hero-tagline text-xl text-gray-600 max-w-xl">
              {t("tagline")}
            </p>
            
            <div className="hero-cta pt-6">
              <motion.a 
                href="#cta" 
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  {t("ctaButton")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-picallex-red to-picallex-red/80 transform transition-transform duration-300 group-hover:scale-105"></span>
              </motion.a>
            </div>
          </div>
          
          {/* Image content - takes up 7 columns on large screens */}
          <div ref={imageRef} className="hero-image-container lg:col-span-7 relative perspective-800">
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.picallex.com/wp-content/uploads/2024/08/webphone.png.webp" 
                  alt="Picallex CRM Dashboard" 
                  className="w-full h-auto"
                />
                
                {/* Interactive hover zones */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-0">
                  <div className="col-span-1 row-span-1 cursor-pointer hover:bg-white/10 transition-colors duration-300" 
                       data-tooltip="Customer Dashboard"></div>
                  <div className="col-span-1 row-span-1 cursor-pointer hover:bg-white/10 transition-colors duration-300"
                       data-tooltip="Activity Timeline"></div>
                  <div className="col-span-1 row-span-1 cursor-pointer hover:bg-white/10 transition-colors duration-300"
                       data-tooltip="Communication Tools"></div>
                </div>
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-picallex-red/20 via-transparent to-blue-400/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
            
            {/* Feature highlight badges that float around the image */}
            <motion.div 
              className="absolute -top-4 -right-2 md:top-4 md:right-8 bg-white p-3 rounded-xl shadow-lg z-20 hidden md:flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                </svg>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-400">Integrations</span>
                <span className="block text-sm font-bold">WhatsApp CRM</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-2 md:bottom-12 md:left-0 bg-white p-3 rounded-xl shadow-lg z-20 hidden md:flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </div>
              <div>
                <span className="block text-xs font-medium text-gray-400">Features</span>
                <span className="block text-sm font-bold">IP Telephony</span>
              </div>
            </motion.div>
            
            {/* Abstract background shapes */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-picallex-red/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-1 hidden md:block"></div>
    </motion.section>
  );
}
