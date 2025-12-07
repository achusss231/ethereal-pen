import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Clock,
  Shield,
  MessageCircle,
  Sparkles,
  Target,
  Heart,
  Award,
  X,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "Quality Writing",
    shortDesc: "Premium content that exceeds expectations",
    fullDesc: "Every piece I write undergoes rigorous quality checks. I combine creativity with precision to deliver content that not only meets but exceeds your expectations. My work reflects deep research, clear thinking, and polished prose.",
    benefits: ["Thoroughly researched content", "Error-free delivery", "Engaging and readable", "SEO optimized when needed"],
  },
  {
    icon: Clock,
    title: "Deadline Guarantee",
    shortDesc: "Your time matters, I deliver on schedule",
    fullDesc: "I understand the importance of timelines in your projects. Whether it's a rush job or a planned deliverable, I pride myself on punctual delivery without compromising quality. Your deadlines are my priority.",
    benefits: ["On-time delivery always", "Rush orders available", "Clear timeline communication", "Buffer for revisions"],
  },
  {
    icon: Shield,
    title: "100% Original",
    shortDesc: "Plagiarism-free, unique content guaranteed",
    fullDesc: "Originality is non-negotiable. Every piece of content is crafted from scratch, tailored specifically to your needs. I use professional tools to verify uniqueness and provide plagiarism reports upon request.",
    benefits: ["Plagiarism report available", "Custom-written content", "No templates or recycling", "Full ownership transfer"],
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    shortDesc: "Always available, always responsive",
    fullDesc: "Great writing starts with great understanding. I maintain open lines of communication throughout the project, ensuring your vision is captured perfectly. Questions, feedback, updates - I'm always just a message away.",
    benefits: ["Quick response time", "Regular progress updates", "Open to feedback", "Clear revision process"],
  },
  {
    icon: Sparkles,
    title: "Tailored Approach",
    shortDesc: "Customized solutions for your unique needs",
    fullDesc: "No two clients are the same, and neither are my solutions. I take time to understand your brand voice, audience, and objectives to create content that truly represents you and resonates with your readers.",
    benefits: ["Brand voice matching", "Audience-focused content", "Industry expertise", "Strategic approach"],
  },
  {
    icon: Target,
    title: "Result-Oriented",
    shortDesc: "Writing that achieves your goals",
    fullDesc: "Whether it's landing your dream job, getting into your dream university, or converting website visitors - I write with your end goal in mind. Success is measured by the results my writing helps you achieve.",
    benefits: ["Goal-focused writing", "Conversion optimization", "Performance tracking", "Strategic content planning"],
  },
  {
    icon: Heart,
    title: "Client-First Focus",
    shortDesc: "Your satisfaction is my success",
    fullDesc: "I believe in building lasting relationships with my clients. Your success is my success. I go the extra mile to ensure you're not just satisfied but delighted with the final result.",
    benefits: ["Unlimited revisions", "Flexible payment options", "Long-term partnership", "Priority support"],
  },
  {
    icon: Award,
    title: "Proven Expertise",
    shortDesc: "Years of experience across industries",
    fullDesc: "With over 5 years of professional writing experience and hundreds of satisfied clients, I bring proven expertise to every project. From startups to Fortune 500 companies, I've helped businesses across industries.",
    benefits: ["500+ projects completed", "Multi-industry experience", "Continuous learning", "Professional certifications"],
  },
];

export const WhyChooseMe = () => {
  const [selectedReason, setSelectedReason] = useState<typeof reasons[0] | null>(null);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4"
          >
            Why Work With Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-foreground mb-6"
          >
            The <span className="text-gradient">WriteElite</span> Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Discover what sets my writing services apart and why clients keep coming back.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedReason(reason)}
              className="glass-card p-6 cursor-pointer group text-center"
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-500"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </motion.div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {reason.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedReason && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReason(null)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-4 top-[20%] md:inset-x-[20%] lg:inset-x-[25%] bg-background rounded-3xl shadow-xl z-50 max-h-[60vh] overflow-hidden"
            >
              <motion.button
                onClick={() => setSelectedReason(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <selectedReason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {selectedReason.title}
                  </h3>
                </div>

                <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                  {selectedReason.fullDesc}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedReason.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  onClick={() => setSelectedReason(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary inline-flex items-center gap-2 mt-8"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
