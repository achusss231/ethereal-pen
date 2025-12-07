import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    company: "TechStart Inc.",
    avatar: "S",
    rating: 5,
    shortQuote: "Exceptional content that exceeded all expectations. The writing truly captured our brand voice.",
    fullQuote: "Working with WriteElite was an absolute game-changer for our content strategy. The writing quality is exceptional, and every piece delivered exceeded our expectations. The turnaround time was impressive, and the attention to detail in capturing our brand voice was remarkable. I've worked with many writers, but this level of professionalism and quality is rare to find. Highly recommended for anyone serious about their content.",
    project: "Website Content & Blog Articles",
  },
  {
    id: 2,
    name: "James Chen",
    role: "MBA Graduate",
    company: "Harvard Business School",
    avatar: "J",
    rating: 5,
    shortQuote: "My SOP was perfect. Got accepted into my dream school thanks to this incredible writing.",
    fullQuote: "I was struggling with my Statement of Purpose for months until I found WriteElite. The transformation of my story was incredible. The writer understood exactly what admissions committees look for and crafted a narrative that was authentically me while highlighting my strengths perfectly. I got accepted into Harvard Business School, and I genuinely believe the SOP played a crucial role. Worth every penny!",
    project: "Statement of Purpose",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "HR Director",
    company: "Global Solutions Ltd",
    avatar: "E",
    rating: 5,
    shortQuote: "The resume writing service helped me land my dream job. Absolutely professional work.",
    fullQuote: "After 6 months of job searching with no luck, I decided to invest in a professional resume. The difference was night and day. Within 2 weeks of using my new resume, I started getting interview calls from top companies. The ATS optimization really works - I was finally getting past the automated screening. The cover letter template was equally impressive. I landed my dream role as HR Director, and I couldn't be more grateful.",
    project: "Resume & Cover Letter",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "CEO",
    company: "Innovate Digital",
    avatar: "M",
    rating: 5,
    shortQuote: "Outstanding copywriting that significantly improved our conversion rates. A true professional.",
    fullQuote: "We hired WriteElite to overhaul our landing page copy, and the results speak for themselves - our conversion rate increased by 47% in just one month. The copywriting is not just well-written; it's strategic, persuasive, and perfectly aligned with our target audience. The process was smooth, communication was excellent, and the final deliverable was beyond what we expected. We've now engaged for ongoing content needs.",
    project: "Landing Page Copywriting",
  },
  {
    id: 5,
    name: "Dr. Amanda Foster",
    role: "Research Scientist",
    company: "Stanford University",
    avatar: "A",
    rating: 5,
    shortQuote: "Academic writing of the highest caliber. Proper citations, perfect structure, excellent research.",
    fullQuote: "As a researcher, I have very high standards for academic writing. WriteElite met and exceeded all of them. The research paper was meticulously structured, properly cited, and demonstrated a deep understanding of the subject matter. The literature review was comprehensive, and the writing style was exactly what academic publications require. I've since recommended these services to several colleagues.",
    project: "Research Paper & Literature Review",
  },
];

export const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-foreground mb-6"
          >
            What Clients <span className="text-gradient">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Don't just take my word for it. Here's what clients have to say about their experience.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
              className="glass-card p-8 md:p-12 cursor-pointer group"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 mb-6" />

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-foreground font-display leading-relaxed mb-8">
                "{testimonials[currentIndex].shortQuote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Click hint */}
              <div className="absolute bottom-4 right-4 text-xs text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity">
                Click to read full review →
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-x-4 top-[20%] md:inset-x-[15%] lg:inset-x-[20%] bg-background rounded-3xl shadow-xl z-50 max-h-[60vh] overflow-y-auto"
            >
              <motion.button
                onClick={() => setSelectedTestimonial(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">
                      {selectedTestimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-foreground">
                      {selectedTestimonial.name}
                    </div>
                    <div className="text-foreground-muted">
                      {selectedTestimonial.role}, {selectedTestimonial.company}
                    </div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(selectedTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-primary font-medium mb-2">Project Type</div>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
                    {selectedTestimonial.project}
                  </div>
                </div>

                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg text-foreground leading-relaxed">
                  "{selectedTestimonial.fullQuote}"
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
