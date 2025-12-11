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
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Content Writing",
    slug: "content-writing",
    description: "Engaging blog posts, articles, and web content that captivates your audience and drives engagement.",
    features: ["SEO-optimized content", "Blog posts & articles", "Website copy", "Social media content"],
  },
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive websites and web applications built with the latest technologies.",
    features: ["Custom websites", "Web applications", "E-commerce solutions", "Maintenance & support"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing solutions to grow your online presence and reach your target audience.",
    features: ["Social media marketing", "Email campaigns", "Content strategy", "Analytics & reporting"],
  },
  {
    icon: Palette,
    title: "Branding",
    slug: "branding",
    description: "Comprehensive branding services to establish and strengthen your brand identity.",
    features: ["Brand strategy", "Visual identity", "Brand guidelines", "Brand messaging"],
  },
  {
    icon: Search,
    title: "SEO",
    slug: "seo",
    description: "Search engine optimization to improve your visibility and drive organic traffic.",
    features: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"],
  },
  {
    icon: FileText,
    title: "Resume Writing",
    slug: "resume-writing",
    description: "ATS-friendly resumes that get you noticed by top employers and recruiters.",
    features: ["ATS optimization", "Keyword targeting", "Cover letters", "LinkedIn optimization"],
  },
  {
    icon: GraduationCap,
    title: "SOP Writing",
    slug: "sop-writing",
    description: "Compelling statements of purpose for university and visa applications.",
    features: ["University applications", "Visa SOPs", "Personal statements", "Scholarship essays"],
  },
  {
    icon: Megaphone,
    title: "Copywriting",
    slug: "copywriting",
    description: "Persuasive sales copy and marketing content that converts visitors into customers.",
    features: ["Sales pages", "Ad copy", "Email sequences", "Landing pages"],
  },
];

const Services = () => {
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
              What I Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Premium <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              From content creation to digital solutions, I deliver exceptional services 
              that elevate your brand and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="glass-card-hover p-6 h-full group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
            className="text-center mt-16"
          >
            <p className="text-lg text-foreground-muted mb-6">
              Not sure which service is right for you?
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Let's Discuss Your Needs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
