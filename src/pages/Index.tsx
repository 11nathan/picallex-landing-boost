
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SupportButtons } from "@/components/SupportButtons";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <BenefitsSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
          <CtaSection />
        </main>
        <Footer />
        <SupportButtons />
      </div>
    </LanguageProvider>
  );
};

export default Index;
