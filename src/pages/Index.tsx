import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TransitionSection } from "@/components/TransitionSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TransitionSection />
        <MissionVisionSection />
        <WhyChooseMe />
        <TestimonialsSection />
        <ContactSection />
      </motion.div>
      <Footer />
    </main>
  );
};

export default Index;
