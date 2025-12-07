import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    period: "per project",
    description: "Perfect for individuals needing quick, quality content",
    features: [
      "1 revision round",
      "3-5 day delivery",
      "Email support",
      "Basic formatting",
      "Up to 1,000 words",
    ],
    notIncluded: [
      "Rush delivery",
      "SEO optimization",
      "Plagiarism report",
    ],
    popular: false,
    fullDetails: {
      idealFor: "Students, individuals, and one-time projects",
      turnaround: "3-5 business days",
      support: "Email support with 24-48 hour response time",
      extras: "Additional revisions available at $15 each",
    },
  },
  {
    name: "Standard",
    price: "$99",
    period: "per project",
    description: "Most popular choice for professionals and businesses",
    features: [
      "3 revision rounds",
      "2-3 day delivery",
      "Priority email support",
      "SEO optimization",
      "Up to 2,500 words",
      "Plagiarism report",
    ],
    notIncluded: [
      "Rush delivery",
    ],
    popular: true,
    fullDetails: {
      idealFor: "Professionals, businesses, and quality-focused clients",
      turnaround: "2-3 business days",
      support: "Priority email support with same-day response",
      extras: "Includes basic SEO optimization and Copyscape report",
    },
  },
  {
    name: "Premium",
    price: "$199",
    period: "per project",
    description: "Comprehensive solution for high-stakes projects",
    features: [
      "Unlimited revisions",
      "24-hour rush available",
      "Dedicated support",
      "Advanced SEO",
      "Up to 5,000 words",
      "Plagiarism report",
      "Consultation call",
      "Brand voice guide",
    ],
    notIncluded: [],
    popular: false,
    fullDetails: {
      idealFor: "Businesses, executives, and critical projects",
      turnaround: "1-2 business days (24h rush available)",
      support: "Dedicated support with WhatsApp/phone access",
      extras: "Includes 30-min consultation, brand voice guide, and priority queue",
    },
  },
];

export const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof pricingPlans[0] | null>(null);

  return (
    <section id="pricing" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-foreground mb-6"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Choose a plan that fits your needs. All plans include quality writing and professional delivery.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPlan(plan)}
              className={`relative glass-card p-8 cursor-pointer group ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-foreground-muted mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-gradient">{plan.price}</span>
                <span className="text-foreground-muted text-sm ml-2">{plan.period}</span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-3 h-3 text-foreground-muted" />
                    </div>
                    <span className="text-sm text-foreground-muted line-through">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? "btn-primary"
                    : "border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Choose {plan.name}
              </motion.button>

              {/* Hover Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-4 top-[15%] md:inset-x-[20%] lg:inset-x-[25%] bg-background rounded-3xl shadow-xl z-50 max-h-[70vh] overflow-y-auto"
            >
              <motion.button
                onClick={() => setSelectedPlan(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="p-8 md:p-12">
                {selectedPlan.popular && (
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                  {selectedPlan.name} Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-gradient">{selectedPlan.price}</span>
                  <span className="text-foreground-muted text-sm ml-2">{selectedPlan.period}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">What's Included</h4>
                    <div className="space-y-3">
                      {selectedPlan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Plan Details</h4>
                    <div className="space-y-4">
                      <div className="glass-card p-4">
                        <div className="text-sm text-foreground-muted mb-1">Ideal For</div>
                        <div className="text-foreground">{selectedPlan.fullDetails.idealFor}</div>
                      </div>
                      <div className="glass-card p-4">
                        <div className="text-sm text-foreground-muted mb-1">Turnaround Time</div>
                        <div className="text-foreground">{selectedPlan.fullDetails.turnaround}</div>
                      </div>
                      <div className="glass-card p-4">
                        <div className="text-sm text-foreground-muted mb-1">Support</div>
                        <div className="text-foreground">{selectedPlan.fullDetails.support}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <p className="text-sm text-foreground-muted">
                    <span className="font-semibold text-foreground">Extra:</span> {selectedPlan.fullDetails.extras}
                  </p>
                </div>

                <motion.a
                  href="#contact"
                  onClick={() => setSelectedPlan(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary inline-flex items-center gap-2 mt-8"
                >
                  Get Started with {selectedPlan.name}
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
