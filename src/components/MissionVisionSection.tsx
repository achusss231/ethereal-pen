import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const MissionVisionSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/2 to-transparent blur-3xl" />
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Purpose</span>
          </motion.div>
          <h2 className="section-title text-foreground mb-6">
            Driven by <span className="text-gradient">Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every word we write is guided by our commitment to helping you succeed
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card p-10 lg:p-12 h-full overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mb-8 shadow-lg"
              >
                <Target className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h3>
              
              <p className="text-foreground-muted leading-relaxed text-lg mb-8">
                To empower individuals and businesses with exceptional writing services that 
                articulate their vision, amplify their voice, and accelerate their success. 
                We believe every story deserves to be told beautifully.
              </p>

              <ul className="space-y-3 mb-8">
                {["Deliver excellence in every word", "Build lasting partnerships", "Transform ideas into impact"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link 
                to="/mission" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card p-10 lg:p-12 h-full overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-8 shadow-lg"
              >
                <Eye className="w-8 h-8 text-accent-foreground" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                Our Vision
              </h3>
              
              <p className="text-foreground-muted leading-relaxed text-lg mb-8">
                To become the most trusted name in professional writing, recognized globally 
                for transforming ideas into compelling narratives that open doors, create 
                opportunities, and leave lasting impressions.
              </p>

              <ul className="space-y-3 mb-8">
                {["Set the standard for quality", "Inspire through words", "Create global impact"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link 
                to="/vision" 
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-block glass-card px-10 py-6">
            <p className="text-lg italic text-foreground-muted">
              "Words have the power to shape destinies. We wield them with purpose."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};