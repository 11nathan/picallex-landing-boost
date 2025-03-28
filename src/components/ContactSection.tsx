
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";
import { Headset, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const contactItems = [
    {
      icon: <Headset className="h-6 w-6 text-picallex-red" />,
      title: t("customerSupport"),
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="h-6 w-6 text-picallex-red" />,
      title: t("emailUs"),
      content: "support@picallex.com",
      action: "mailto:support@picallex.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-picallex-red" />,
      title: t("ourLocation"),
      content: "123 Business Avenue, Suite 456, New York, NY 10001",
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-picallex-red" />,
      title: t("businessHours"),
      content: t("businessHoursContent"),
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16" 
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block bg-picallex-red/10 text-picallex-red px-4 py-1 rounded-full text-sm font-medium mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t("contactUs")}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("readyToGetStarted")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("contactSectionDescription")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="order-2 md:order-1"
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              className="order-1 md:order-2"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12 z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">{t("contactInfo")}</h3>
                  
                  <div className="space-y-6">
                    {contactItems.map((item, index) => (
                      <motion.a 
                        key={index}
                        href={item.action || "#"}
                        target={item.action ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`flex items-start p-4 rounded-xl ${item.action ? "hover:bg-gray-50 cursor-pointer" : ""} transition-colors`}
                        whileHover={item.action ? { x: 5 } : {}}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            transition: { 
                              delay: 0.1 * index,
                              type: "spring", 
                              stiffness: 300, 
                              damping: 24 
                            } 
                          }
                        }}
                      >
                        <div className="bg-gray-50 p-3 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">{item.title}</h4>
                          <p className="text-gray-900 font-medium">{item.content}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8 pt-6 border-t border-gray-100"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                          delay: 0.6,
                          type: "spring", 
                          stiffness: 300, 
                          damping: 24 
                        } 
                      }
                    }}
                  >
                    <h4 className="text-sm font-medium text-gray-500 mb-4">{t("followUs")}</h4>
                    <div className="flex space-x-4">
                      {[
                        { name: "Twitter", href: "#", icon: "twitter" },
                        { name: "Facebook", href: "#", icon: "facebook" },
                        { name: "LinkedIn", href: "#", icon: "linkedin" },
                        { name: "Instagram", href: "#", icon: "instagram" }
                      ].map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                          whileHover={{ y: -3 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0, 
                            transition: { delay: 0.7 + (index * 0.1) } 
                          }}
                        >
                          <span className="sr-only">{social.name}</span>
                          <svg 
                            className="h-5 w-5 text-gray-600" 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            aria-hidden="true"
                          >
                            {social.icon === "twitter" && (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            )}
                            {social.icon === "facebook" && (
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            )}
                            {social.icon === "linkedin" && (
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            )}
                            {social.icon === "instagram" && (
                              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                            )}
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
