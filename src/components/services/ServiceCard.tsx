import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  delay?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  onClick,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, scale: 1.02 }}
      onClick={onClick}
      className="glass-card-hover p-8 cursor-pointer group"
    >
      {/* Icon Container */}
      <motion.div
        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-foreground-muted text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <motion.div
        className="flex items-center gap-2 text-primary font-medium text-sm"
        whileHover={{ x: 5 }}
      >
        <span>Get This Service</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
};
