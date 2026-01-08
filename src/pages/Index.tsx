import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <PricingSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
