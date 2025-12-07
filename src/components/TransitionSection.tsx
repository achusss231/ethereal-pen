import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TransitionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div
      ref={ref}
      className="relative h-[40vh] overflow-hidden bg-gradient-to-b from-background via-background-secondary to-background"
    >
      {/* Curved SVG Divider */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-primary/10 blur-xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/2 right-[15%] w-32 h-32 rounded-full bg-accent/10 blur-2xl"
      />
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute bottom-1/4 left-[60%] w-24 h-24 rounded-full bg-primary/5 blur-xl"
      />

      {/* Center Element */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-primary/30 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
            />
          </div>
        </div>
      </motion.div>

      {/* Small Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[25%] w-4 h-4 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-accent/40"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[40%] left-[40%] w-2 h-2 rounded-full bg-primary/50"
      />

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </div>
  );
};
