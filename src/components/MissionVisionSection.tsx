import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Target, Sparkles } from "lucide-react";
import vision3d from "@/assets/3d-vision.png";
import mission3d from "@/assets/3d-mission.png";

interface FlipCardProps {
  frontTitle: string;
  frontSubtitle: string;
  frontIcon: React.ReactNode;
  backTitle: string;
  backContent: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}

const FlipCard = ({
  frontTitle,
  frontSubtitle,
  frontIcon,
  backTitle,
  backContent,
  image,
  gradientFrom,
  gradientTo,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[450px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 flex flex-col items-center justify-center relative border border-border/50`}>
            <div className="absolute top-6 right-6 opacity-20">
              <Sparkles className="w-8 h-8 text-foreground" />
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 mb-6"
            >
              <img src={image} alt={frontTitle} className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>
            <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-4">
              {frontIcon}
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">{frontTitle}</h3>
            <p className="text-sm text-foreground-muted text-center">{frontSubtitle}</p>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-foreground-muted opacity-60">
              Hover to reveal →
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-full bg-card p-8 flex flex-col items-center justify-center border border-border shadow-xl">
            <div className="w-24 h-24 mb-6">
              <img src={image} alt={backTitle} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4 text-center">{backTitle}</h3>
            <p className="text-foreground-muted text-center leading-relaxed">{backContent}</p>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const MissionVisionSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Vision & <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Driven by purpose, guided by excellence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <FlipCard
              frontTitle="Our Vision"
              frontSubtitle="Where we're headed"
              frontIcon={<Eye className="w-7 h-7 text-foreground" />}
              backTitle="Our Vision"
              backContent="To become the most trusted name in professional writing services, empowering individuals and businesses worldwide to communicate with clarity, impact, and authenticity."
              image={vision3d}
              gradientFrom="from-blue-50"
              gradientTo="to-indigo-50"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <FlipCard
              frontTitle="Our Mission"
              frontSubtitle="What drives us"
              frontIcon={<Target className="w-7 h-7 text-foreground" />}
              backTitle="Our Mission"
              backContent="To craft compelling narratives that transform ideas into impactful written content. We are committed to delivering personalized, high-quality writing services that help our clients achieve their goals."
              image={mission3d}
              gradientFrom="from-orange-50"
              gradientTo="to-amber-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
