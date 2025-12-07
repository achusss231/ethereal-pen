import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Shield, 
  MessageSquare, 
  RefreshCw,
  X,
  Award,
  Target,
  Heart,
  ArrowRight
} from "lucide-react";

const highlights = [
  { icon: Zap, label: "Fast Delivery", color: "primary" },
  { icon: Shield, label: "100% Original", color: "accent" },
  { icon: MessageSquare, label: "Professional Tone", color: "primary" },
  { icon: RefreshCw, label: "Unlimited Revisions", color: "accent" },
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
];

const achievements = [
  "Featured writer on top publications",
  "Helped clients secure positions at Fortune 500 companies",
  "Contributed to successful university admissions worldwide",
  "Developed content strategies for leading startups",
];

export const AboutSection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden cursor-pointer"
                onClick={() => setIsDetailOpen(true)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-primary">W</span>
                    </div>
                    <p className="text-foreground-muted text-sm">Your Photo Here</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass-card p-6"
              >
                <div className="flex items-center gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-foreground-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -10, 0] }}
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
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              About Me
            </span>
            <h2 className="section-title text-foreground mb-6">
              Crafting Words That <span className="text-gradient">Make an Impact</span>
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              I am a professional writing specialist helping students, professionals, and 
              businesses with clear, polished, high-quality writing that creates impact. 
              With over 5 years of experience, I've helped hundreds of clients achieve 
              their goals through the power of well-crafted words.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setIsDetailOpen(true)}
                  className="glass-card p-4 flex items-center gap-3 cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color} transition-colors duration-300`}>
                    <item.icon className={`w-5 h-5 text-${item.color} group-hover:text-${item.color}-foreground transition-colors duration-300`} />
                  </div>
                  <span className="font-medium text-foreground text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => setIsDetailOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* About Detail Modal */}
      <AnimatePresence>
        {isDetailOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-background rounded-3xl shadow-xl z-50 overflow-hidden"
            >
              <motion.button
                onClick={() => setIsDetailOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center z-10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="h-full overflow-y-auto p-8 md:p-12 lg:p-16">
                <div className="max-w-4xl mx-auto">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-display font-bold text-foreground mb-8"
                  >
                    Meet Your Writing Partner
                  </motion.h2>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground-muted text-lg leading-relaxed mb-8"
                      >
                        With a passion for words and a commitment to excellence, I've dedicated 
                        my career to helping individuals and businesses communicate effectively. 
                        Every project I take on is treated with the utmost care and attention to detail.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Skills & Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
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

                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h3>
                        <div className="space-y-3">
                          {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <p className="text-foreground-muted">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 grid grid-cols-2 gap-4"
                      >
                        {stats.map((stat) => (
                          <div key={stat.label} className="glass-card p-4 text-center">
                            <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
                            <div className="text-xs text-foreground-muted">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  <motion.a
                    href="#contact"
                    onClick={() => setIsDetailOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="btn-primary inline-flex items-center gap-2 mt-10"
                  >
                    Let's Work Together
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
