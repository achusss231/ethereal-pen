import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Heart, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const missionValues = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Every word we write is crafted with dedication and a genuine desire to help our clients succeed."
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your goals are our priority. We listen, understand, and deliver content that aligns with your vision."
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "We maintain the highest standards in everything we do, ensuring every deliverable exceeds expectations."
  },
  {
    icon: CheckCircle,
    title: "Integrity & Trust",
    description: "Building lasting relationships through transparency, honesty, and consistent delivery on our promises."
  },
];

const commitments = [
  "Deliver original, plagiarism-free content every time",
  "Meet deadlines without compromising quality",
  "Provide unlimited revisions until satisfaction",
  "Maintain confidentiality of all client information",
  "Offer transparent pricing with no hidden costs",
  "Stay updated with industry trends and best practices",
];

const Mission = () => {
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
              <Target className="w-10 h-10 text-primary" />
            </motion.div>
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              Empowering Success Through <span className="text-gradient">Words</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
              Our mission is to help individuals and businesses communicate with clarity, 
              confidence, and impact through exceptional writing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="glass-card p-10 md:p-14">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Our Purpose
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                "To provide exceptional writing services that empower students, professionals, 
                and businesses to achieve their goals. We believe that everyone deserves access 
                to professional writing that accurately represents their voice, vision, and value. 
                Through our work, we aim to open doors, create opportunities, and help our clients 
                make lasting impressions."
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {missionValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
                Our Commitments
              </h2>
              <div className="glass-card p-8 md:p-10">
                <div className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground-muted">{commitment}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-foreground-muted mb-8">
              Let's bring your ideas to life with words that matter.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Mission;
