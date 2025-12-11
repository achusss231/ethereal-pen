import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Zap, 
  Shield, 
  MessageSquare, 
  RefreshCw,
  Award,
  Target,
  Heart,
  Users,
  BookOpen,
  Briefcase
} from "lucide-react";

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
            className="text-center max-w-3xl mx-auto"
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
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-40 h-40 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                        <span className="text-6xl font-display font-bold text-primary">W</span>
                      </div>
                      <p className="text-foreground-muted text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -left-4 glass-card p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">5+ Years</div>
                      <div className="text-xs text-foreground-muted">Experience</div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 glass-card p-6"
                >
                  <div className="flex items-center gap-4">
                    {stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
                        <div className="text-xs text-foreground-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center group"
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
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Key Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground-muted text-lg">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-foreground-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
