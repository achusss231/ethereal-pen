import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eye, Lightbulb, Rocket, Star, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const visionPoints = [
  {
    icon: Globe,
    title: "Global Impact",
    description: "To empower individuals and businesses worldwide with exceptional writing that transcends boundaries and connects people."
  },
  {
    icon: Lightbulb,
    title: "Innovation in Writing",
    description: "To continuously evolve and adapt to the changing landscape of digital communication while maintaining timeless writing principles."
  },
  {
    icon: Star,
    title: "Excellence as Standard",
    description: "To set the benchmark for quality in professional writing services, where every piece reflects mastery and dedication."
  },
  {
    icon: TrendingUp,
    title: "Transformative Results",
    description: "To create content that doesn't just inform but transforms — careers, businesses, and opportunities."
  },
];

const Vision = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
            >
              <Eye className="w-10 h-10 text-primary" />
            </motion.div>
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Our Vision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              Shaping the Future of <span className="text-gradient">Professional Writing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
              We envision a world where every individual and business has access to world-class 
              writing services that help them communicate their story with clarity, impact, and authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="glass-card p-10 md:p-14">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Our Aspiration
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                "To become the most trusted name in professional writing services, recognized for 
                transforming ideas into powerful narratives that open doors, create opportunities, 
                and leave lasting impressions. We aim to be the partner of choice for anyone seeking 
                to communicate with excellence."
              </p>
            </div>
          </motion.div>

          {/* Vision Points */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <point.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-foreground-muted mb-8">
              Ready to be part of this vision? Let's create something extraordinary together.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey
              <Rocket className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Vision;
