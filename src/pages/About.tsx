import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Zap, 
  Shield, 
  MessageSquare, 
  RefreshCw,
  Target,
  Heart
} from "lucide-react";
import about3d from "@/assets/3d-about.png";

const highlights = [
  { icon: Zap, label: "Fast Delivery", description: "Quick turnaround without compromising quality" },
  { icon: Shield, label: "100% Original", description: "Plagiarism-free, unique content every time" },
  { icon: MessageSquare, label: "Professional Tone", description: "Clear, polished communication" },
  { icon: RefreshCw, label: "Unlimited Revisions", description: "Until you're completely satisfied" },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];

const skills = [
  "Content Strategy",
  "SEO Writing",
  "Academic Research",
  "Creative Writing",
  "Technical Writing",
  "Brand Storytelling",
  "Copywriting",
  "Editorial Writing",
];

const achievements = [
  "Featured writer on top publications",
  "Helped clients secure positions at Fortune 500 companies",
  "Contributed to successful university admissions worldwide",
  "Developed content strategies for leading startups",
  "Trained emerging writers in professional writing",
];

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Crafting Words That <span className="text-gradient">Make an Impact</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                I am a professional writing specialist helping students, professionals, and 
                businesses with clear, polished, high-quality writing that creates lasting impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Skeleton placeholder */}
                {!imageLoaded && (
                  <div className="lazy-skeleton w-full aspect-square rounded-2xl" />
                )}
                
                <motion.img
                  src={about3d}
                  alt="Professional content writer with expertise in multiple writing formats"
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0, y: 8, scale: 0.995 }}
                  animate={imageLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.995 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="w-full drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                My Story
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                With a passion for words and a commitment to excellence, I've dedicated 
                my career to helping individuals and businesses communicate effectively. 
                Every project I take on is treated with the utmost care and attention to detail.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed mb-8">
                Over the past five years, I've had the privilege of working with clients from 
                diverse backgrounds — from ambitious students applying to their dream universities 
                to entrepreneurs launching their next big venture. My goal is simple: to transform 
                your ideas into compelling narratives that resonate.
              </p>

              {/* Skills */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
              Why Work With Me
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-foreground-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 flex items-center gap-3 justify-center">
              <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
              Key Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-foreground-muted text-lg">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;