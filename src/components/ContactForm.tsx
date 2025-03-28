
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Form setup with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log(values);
      setIsSubmitted(true);
      toast.success(t("formSubmittedSuccess"), {
        description: t("formSubmittedDescription"),
        duration: 5000,
      });
    } catch (error) {
      toast.error(t("formSubmitError"), {
        description: t("formSubmitErrorDescription"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.5 
      }
    }
  };

  const iconAnimation = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
    exit: { scale: 1 },
    transition: { duration: 0.3 },
  };

  // Background blobs animation
  const blobVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.5,
    },
    animate: {
      scale: 1,
      opacity: 0.7,
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  // Success animation
  if (isSubmitted) {
    return (
      <motion.div 
        className="relative p-8 rounded-2xl bg-white shadow-xl overflow-hidden max-w-lg mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={successVariants}
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-green-200 to-green-300 blur-xl opacity-50"
            variants={blobVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-picallex-red/20 to-red-200 blur-xl opacity-30"
            variants={blobVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "-2s" }}
          />
        </div>
        
        <motion.div 
          className="relative z-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
          }}
        >
          <motion.div 
            className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
          >
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4 } }
            }}
          >
            {t("thankYouForContacting")}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
            }}
          >
            {t("contactResponseMessage")}
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
            }}
          >
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-picallex-red to-red-600 hover:from-picallex-red/90 hover:to-red-600/90 text-white rounded-full px-8 py-2"
            >
              {t("sendAnotherMessage")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-lg mx-auto perspective-1200">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-picallex-red/10 to-red-200/30 blur-xl"
          variants={blobVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute -bottom-10 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-xl"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "-3s" }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 bg-white backdrop-blur-lg bg-opacity-70 p-8 rounded-2xl shadow-xl border border-gray-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="text-center mb-8" 
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-picallex-red/10 to-red-100 px-4 py-1 rounded-full text-picallex-red text-sm font-medium mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {t("contactUs")}
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t("getInTouch")}
          </h2>
          <p className="text-gray-600">
            {t("contactFormSubtitle")}
          </p>
        </motion.div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-base font-medium">
                      <motion.span 
                        {...(focusedField === "name" ? iconAnimation : {})}
                      >
                        <User className="mr-2 h-4 w-4 inline text-picallex-red" />
                      </motion.span>
                      {t("yourName")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl border-gray-200 focus:border-picallex-red focus:ring-1 focus:ring-picallex-red/20 transition-all duration-300"
                        placeholder={t("namePlaceholder")}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-base font-medium">
                      <motion.span 
                        {...(focusedField === "email" ? iconAnimation : {})}
                      >
                        <Mail className="mr-2 h-4 w-4 inline text-picallex-red" />
                      </motion.span>
                      {t("emailAddress")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="rounded-xl border-gray-200 focus:border-picallex-red focus:ring-1 focus:ring-picallex-red/20 transition-all duration-300"
                        placeholder={t("emailPlaceholder")}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-base font-medium">
                      <motion.span 
                        {...(focusedField === "phone" ? iconAnimation : {})}
                      >
                        <Phone className="mr-2 h-4 w-4 inline text-picallex-red" />
                      </motion.span>
                      {t("phoneNumber")} <span className="text-gray-400 text-sm ml-2">({t("optional")})</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl border-gray-200 focus:border-picallex-red focus:ring-1 focus:ring-picallex-red/20 transition-all duration-300"
                        placeholder={t("phonePlaceholder")}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-base font-medium">
                      <motion.span 
                        {...(focusedField === "message" ? iconAnimation : {})}
                      >
                        <MessageSquare className="mr-2 h-4 w-4 inline text-picallex-red" />
                      </motion.span>
                      {t("yourMessage")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="rounded-xl min-h-[120px] border-gray-200 focus:border-picallex-red focus:ring-1 focus:ring-picallex-red/20 transition-all duration-300"
                        placeholder={t("messagePlaceholder")}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-picallex-red data-[state=checked]:border-picallex-red"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-600">
                        {t("acceptTermsText")} <a href="#" className="text-picallex-red hover:underline">{t("termsAndConditions")}</a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-picallex-red to-red-600 hover:from-picallex-red/90 hover:to-red-600/90 text-white rounded-xl py-6 font-medium text-base relative overflow-hidden group"
                >
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-picallex-red to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                        <span>{t("sending")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("sendMessage")}</span>
                        <Send className="h-4 w-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
