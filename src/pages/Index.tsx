import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TransitionSection } from "@/components/TransitionSection";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TransitionSection />
      <WhyChooseMe />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
