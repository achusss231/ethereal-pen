import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  CheckCircle,
  Clock,
  Star,
  ArrowLeft,
  Sparkles
} from "lucide-react";

// Service-specific 3D illustrations (would be unique per service)
import contentWriting3d from "@/assets/3d-content-writing.png";
import services3d from "@/assets/3d-services.png";

const servicesData: Record<string, {
  icon: typeof PenTool;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  process: string[];
  deliveryTime: string;
  benefits: string[];
  accentColor: string;
  illustration: string;
}> = {
  "content-writing": {
    icon: PenTool,
    title: "Content Writing",
    description: "Engaging blog posts, articles, and web content that captivates your audience.",
    fullDescription: "Transform your brand's message with professionally crafted content that engages, informs, and converts. From blog posts to website copy, I create content that resonates with your target audience and drives measurable results. Every piece is meticulously researched and optimized for both readers and search engines.",
    features: [
      "SEO-optimized content that ranks",
      "Engaging blog posts & articles",
      "Compelling website copy",
      "Social media content",
      "Product descriptions",
      "Email newsletters",
    ],
    process: [
      "Initial consultation to understand your brand voice and goals",
      "Research and outline creation for approval",
      "First draft delivery with SEO optimization",
      "Revisions based on your feedback",
      "Final polished content ready for publishing",
    ],
    deliveryTime: "3-5 Business Days",
    benefits: [
      "Increase organic traffic",
      "Build brand authority",
      "Engage your audience",
      "Drive conversions",
    ],
    accentColor: "primary",
    illustration: contentWriting3d,
  },
  "web-development": {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    fullDescription: "Create a stunning online presence with custom-built websites and web applications. Using modern frameworks and best practices, I deliver fast, responsive, and user-friendly digital experiences that help your business stand out in the competitive digital landscape.",
    features: [
      "Custom website design & development",
      "Responsive mobile-first approach",
      "E-commerce solutions",
      "Web applications",
      "Performance optimization",
      "Ongoing maintenance & support",
    ],
    process: [
      "Discovery call to understand your requirements",
      "Wireframing and design mockups",
      "Development with regular updates",
      "Testing across devices and browsers",
      "Launch and post-launch support",
    ],
    deliveryTime: "2-6 Weeks",
    benefits: [
      "Professional online presence",
      "Better user experience",
      "Increased conversions",
      "Scalable solutions",
    ],
    accentColor: "accent",
    illustration: services3d,
  },
  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence.",
    fullDescription: "Drive growth with data-driven digital marketing strategies tailored to your business goals. From social media marketing to email campaigns, I help you reach your target audience, build brand awareness, and generate quality leads that convert into loyal customers.",
    features: [
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing strategy",
      "PPC advertising management",
      "Analytics & reporting",
      "Marketing automation",
    ],
    process: [
      "Audit of current marketing efforts",
      "Strategy development and goal setting",
      "Campaign creation and implementation",
      "Continuous optimization and A/B testing",
      "Monthly reporting and analysis",
    ],
    deliveryTime: "Ongoing Partnership",
    benefits: [
      "Increased brand visibility",
      "Higher engagement rates",
      "Quality lead generation",
      "Measurable ROI",
    ],
    accentColor: "primary",
    illustration: services3d,
  },
  "branding": {
    icon: Palette,
    title: "Branding",
    description: "Comprehensive branding services to establish your unique identity.",
    fullDescription: "Build a memorable brand that resonates with your audience and stands out from the competition. From strategy to visual identity, I help you create a cohesive brand experience that communicates your values, story, and unique value proposition effectively.",
    features: [
      "Brand strategy & positioning",
      "Visual identity design",
      "Logo design & variations",
      "Brand guidelines document",
      "Brand voice & messaging",
      "Collateral design",
    ],
    process: [
      "Brand discovery and research",
      "Strategy and positioning development",
      "Visual identity concept creation",
      "Refinement based on feedback",
      "Final brand guidelines delivery",
    ],
    deliveryTime: "2-4 Weeks",
    benefits: [
      "Distinctive brand identity",
      "Consistent brand experience",
      "Stronger customer connection",
      "Competitive advantage",
    ],
    accentColor: "accent",
    illustration: services3d,
  },
  "seo": {
    icon: Search,
    title: "SEO",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
    fullDescription: "Improve your search engine rankings and drive qualified organic traffic with comprehensive SEO services. I use proven strategies and ethical techniques to help your website rank higher, attract more visitors, and convert them into customers.",
    features: [
      "Comprehensive keyword research",
      "On-page SEO optimization",
      "Technical SEO audit & fixes",
      "Link building strategies",
      "Local SEO optimization",
      "SEO content creation",
    ],
    process: [
      "Website and competitor analysis",
      "Keyword research and strategy",
      "On-page optimization implementation",
      "Technical SEO improvements",
      "Ongoing monitoring and adjustments",
    ],
    deliveryTime: "3-6 Months for Results",
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Long-term growth",
    ],
    accentColor: "primary",
    illustration: services3d,
  },
  "resume-writing": {
    icon: FileText,
    title: "Resume Writing",
    description: "ATS-friendly resumes that get you noticed by employers.",
    fullDescription: "Stand out in the competitive job market with a professionally written, ATS-optimized resume. I craft compelling resumes that highlight your achievements, pass automated screening systems, and land you interviews at top companies.",
    features: [
      "ATS-optimized formatting",
      "Keyword optimization for your industry",
      "Achievement-focused content",
      "Clean, modern design",
      "Cover letter writing",
      "LinkedIn profile optimization",
    ],
    process: [
      "Career history review and consultation",
      "Achievement identification and quantification",
      "ATS-optimized formatting and keywords",
      "First draft for review",
      "Final polishing with cover letter",
    ],
    deliveryTime: "2-3 Business Days",
    benefits: [
      "Pass ATS screening",
      "Stand out to recruiters",
      "Highlight your strengths",
      "Land more interviews",
    ],
    accentColor: "accent",
    illustration: contentWriting3d,
  },
  "sop-writing": {
    icon: GraduationCap,
    title: "SOP Writing",
    description: "Compelling statements of purpose for university and visa applications.",
    fullDescription: "Your Statement of Purpose is your story. I help craft narratives that showcase your unique journey, aspirations, and why you're the perfect candidate for your dream program or visa application. Every SOP is personalized to highlight your strengths.",
    features: [
      "University admission SOPs",
      "Visa application SOPs",
      "Personal statements",
      "Scholarship essays",
      "Letters of motivation",
      "Research proposals",
    ],
    process: [
      "In-depth questionnaire about your background",
      "Review of program/visa requirements",
      "Draft creation with compelling narrative",
      "Collaborative refinement process",
      "Final SOP tailored to specific programs",
    ],
    deliveryTime: "5-7 Business Days",
    benefits: [
      "Compelling personal story",
      "Program-specific customization",
      "Higher acceptance rates",
      "Stand out from applicants",
    ],
    accentColor: "primary",
    illustration: contentWriting3d,
  },
  "copywriting": {
    icon: Megaphone,
    title: "Copywriting",
    description: "Persuasive sales copy that converts visitors into customers.",
    fullDescription: "Words that sell. I create compelling marketing copy that captures attention, builds desire, and drives action. From landing pages to ad copy, every word is crafted for maximum impact and conversion using proven copywriting frameworks.",
    features: [
      "Landing page copy",
      "Sales page writing",
      "Email sequences",
      "Ad copy (Google, Facebook, etc.)",
      "Product descriptions",
      "Marketing collateral",
    ],
    process: [
      "Brand and audience analysis",
      "Competitive research",
      "Hook and headline creation",
      "Persuasive copy drafting",
      "A/B testing suggestions",
    ],
    deliveryTime: "3-5 Business Days",
    benefits: [
      "Higher conversion rates",
      "Compelling brand voice",
      "Effective CTAs",
      "Measurable results",
    ],
    accentColor: "accent",
    illustration: contentWriting3d,
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-foreground-muted mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

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
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8 group focus:outline-none focus:text-primary"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                Back to Services
              </Link>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">Premium Service</span>
              </motion.div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Icon className="w-10 h-10 text-primary-foreground" aria-hidden="true" />
                </motion.div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Service-specific illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {!imageLoaded && (
                  <div className="lazy-skeleton w-full aspect-square rounded-2xl" />
                )}
                
                <motion.img
                  src={service.illustration}
                  alt={`${service.title} illustration`}
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

      {/* Content Section - Problem → Solution → Process → Benefits → CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview / Problem + Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
                <p className="text-foreground-muted leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Features / What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-foreground-muted">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">My Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-foreground-muted pt-1">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="bg-card border border-border rounded-2xl p-6 sticky top-32 shadow-sm"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">Quick Info</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    <div>
                      <div className="text-sm text-foreground-muted">Delivery Time</div>
                      <div className="font-medium text-foreground">{service.deliveryTime}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-foreground-muted mb-3">Key Benefits</div>
                  <div className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;