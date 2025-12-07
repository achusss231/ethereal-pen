import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Clock, ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  process: string[];
  deliveryTime: string;
  features: string[];
  startingPrice: string;
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export const ServiceDetailModal = ({
  isOpen,
  onClose,
  service,
}: ServiceDetailModalProps) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-background rounded-3xl shadow-xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center z-10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              <div className="p-8 md:p-12 lg:p-16">
                {/* Header */}
                <div className="flex items-start gap-6 mb-12">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <service.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-foreground-muted text-lg max-w-2xl"
                    >
                      {service.fullDescription}
                    </motion.p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    {/* Process */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-10"
                    >
                      <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        How It Works
                      </h3>
                      <div className="space-y-4">
                        {service.process.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-foreground-muted pt-1">{step}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Delivery Time */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="glass-card p-6 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground-muted">Delivery Time</div>
                        <div className="text-lg font-semibold text-foreground">
                          {service.deliveryTime}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-10"
                    >
                      <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                        What's Included
                      </h3>
                      <div className="space-y-3">
                        {service.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-foreground-muted">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Pricing */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="glass-card p-6"
                    >
                      <div className="text-sm text-foreground-muted mb-1">Starting from</div>
                      <div className="text-3xl font-display font-bold text-gradient mb-4">
                        {service.startingPrice}
                      </div>
                      <motion.a
                        href="#contact"
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        Request This Service
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Back Button */}
                <motion.button
                  onClick={onClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ x: -5 }}
                  className="mt-12 text-foreground-muted hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Back to Services
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
