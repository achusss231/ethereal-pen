import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  Code, 
  TrendingUp, 
  Palette, 
  Search, 
  FileText, 
  GraduationCap, 
  Megaphone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import services3d from "@/assets/3d-services.png";

const services = [
  {
    icon: PenTool,
    title: "Content Writing",
    slug: "content-writing",
    description: "Engaging blog posts, articles, and web content that captivates your audience and drives engagement.",
    features: ["SEO-optimized content", "Blog posts & articles", "Website copy", "Social media content"],
    accent: "primary",
  },
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive websites and web applications built with the latest technologies.",
    features: ["Custom websites", "Web applications", "E-commerce solutions", "Maintenance & support"],
    accent: "accent",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing solutions to grow your online presence and reach your target audience.",
    features: ["Social media marketing", "Email campaigns", "Content strategy", "Analytics & reporting"],
    accent: "primary",
  },
  {
    icon: Palette,
    title: "Branding",
    slug: "branding",
    description: "Comprehensive branding services to establish and strengthen your brand identity.",
    features: ["Brand strategy", "Visual identity", "Brand guidelines", "Brand messaging"],
    accent: "accent",
  },
  {
    icon: Search,
    title: "SEO",
    slug: "seo",
    description: "Search engine optimization to improve your visibility and drive organic traffic.",
    features: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"],
    accent: "primary",
  },
  {
    icon: FileText,
    title: "Resume Writing",
    slug: "resume-writing",
    description: "ATS-friendly resumes that get you noticed by top employers and recruiters.",
    features: ["ATS optimization", "Keyword targeting", "Cover letters", "LinkedIn optimization"],
    accent: "accent",
  },
  {
    icon: GraduationCap,
    title: "SOP Writing",
    slug: "sop-writing",
    description: "Compelling statements of purpose for university and visa applications.",
    features: ["University applications", "Visa SOPs", "Personal statements", "Scholarship essays"],
    accent: "primary",
  },
  {
    icon: Megaphone,
    title: "Copywriting",
    slug: "copywriting",
    description: "Persuasive sales copy and marketing content that converts visitors into customers.",
    features: ["Sales pages", "Ad copy", "Email sequences", "Landing pages"],
    accent: "accent",
  },
];

const Services = () => {
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">What I Offer</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Premium <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                From content creation to digital solutions, I deliver exceptional services 
                that elevate your brand and achieve your goals.
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
                  src={services3d}
                  alt="Professional writing and digital services"
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

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link to={`/services/${service.slug}`} className="block h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border border-border rounded-2xl p-6 h-full group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-xs text-foreground-muted flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-center mt-16"
          >
            <p className="text-lg text-foreground-muted mb-6">
              Not sure which service is right for you?
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Let's Discuss Your Needs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;