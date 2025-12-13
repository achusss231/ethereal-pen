import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
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
  Sparkles,
  Zap,
  Shield,
  Target,
  Lightbulb,
  Users,
  Award
} from "lucide-react";

// Service-specific 3D illustrations
import serviceContentWriting from "@/assets/service-content-writing.png";
import serviceWebDev from "@/assets/service-web-dev.png";
import serviceMarketing from "@/assets/service-marketing.png";
import serviceBranding from "@/assets/service-branding.png";
import serviceSeo from "@/assets/service-seo.png";
import serviceResume from "@/assets/service-resume.png";
import serviceSop from "@/assets/service-sop.png";
import serviceCopywriting from "@/assets/service-copywriting.png";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const servicesData: Record<string, {
  icon: typeof PenTool;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  process: { title: string; description: string }[];
  deliveryTime: string;
  benefits: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  illustration: string;
}> = {
  "content-writing": {
    icon: PenTool,
    title: "Content Writing",
    tagline: "Words that captivate and convert",
    description: "Engaging blog posts, articles, and web content that captivates your audience.",
    fullDescription: "Transform your brand's message with professionally crafted content that engages, informs, and converts. From blog posts to website copy, I create content that resonates with your target audience and drives measurable results.",
    problem: "Struggling to create consistent, high-quality content that ranks well and engages your audience?",
    solution: "Get professionally crafted, SEO-optimized content that positions your brand as an industry authority and drives organic traffic.",
    features: [
      "SEO-optimized content that ranks",
      "Engaging blog posts & articles",
      "Compelling website copy",
      "Social media content",
      "Product descriptions",
      "Email newsletters",
    ],
    process: [
      { title: "Discovery", description: "Understanding your brand voice, target audience, and content goals" },
      { title: "Research", description: "In-depth research and keyword analysis for your niche" },
      { title: "Creation", description: "Writing SEO-optimized, engaging content tailored to your needs" },
      { title: "Review", description: "Collaborative feedback and revisions until perfect" },
      { title: "Delivery", description: "Final polished content ready for publishing" },
    ],
    deliveryTime: "3-5 Business Days",
    benefits: [
      "Increase organic traffic",
      "Build brand authority",
      "Engage your audience",
      "Drive conversions",
    ],
    accentColor: "primary",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-orange-500/5",
    illustration: serviceContentWriting,
  },
  "web-development": {
    icon: Code,
    title: "Web Development",
    tagline: "Beautiful, functional websites",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    fullDescription: "Create a stunning online presence with custom-built websites and web applications. Using modern frameworks and best practices, I deliver fast, responsive, and user-friendly digital experiences.",
    problem: "Need a website that not only looks stunning but also performs exceptionally across all devices?",
    solution: "Get a custom-built, blazing-fast website optimized for conversions and designed to impress your visitors.",
    features: [
      "Custom website design & development",
      "Responsive mobile-first approach",
      "E-commerce solutions",
      "Web applications",
      "Performance optimization",
      "Ongoing maintenance & support",
    ],
    process: [
      { title: "Planning", description: "Understanding your requirements and creating a roadmap" },
      { title: "Design", description: "Creating wireframes and stunning visual mockups" },
      { title: "Development", description: "Building your website with clean, efficient code" },
      { title: "Testing", description: "Rigorous testing across devices and browsers" },
      { title: "Launch", description: "Deployment and post-launch support" },
    ],
    deliveryTime: "2-6 Weeks",
    benefits: [
      "Professional online presence",
      "Better user experience",
      "Increased conversions",
      "Scalable solutions",
    ],
    accentColor: "accent",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-purple-500/5",
    illustration: serviceWebDev,
  },
  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Strategies that drive growth",
    description: "Strategic digital marketing solutions to grow your online presence.",
    fullDescription: "Drive growth with data-driven digital marketing strategies tailored to your business goals. From social media to email campaigns, I help you reach and convert your target audience.",
    problem: "Finding it hard to reach your target audience and generate quality leads online?",
    solution: "Get comprehensive digital marketing strategies that boost visibility, engagement, and conversions.",
    features: [
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing strategy",
      "PPC advertising management",
      "Analytics & reporting",
      "Marketing automation",
    ],
    process: [
      { title: "Audit", description: "Analyzing your current marketing efforts and opportunities" },
      { title: "Strategy", description: "Developing a comprehensive marketing plan" },
      { title: "Execute", description: "Implementing campaigns across channels" },
      { title: "Optimize", description: "Continuous A/B testing and refinement" },
      { title: "Report", description: "Monthly analytics and insights" },
    ],
    deliveryTime: "Ongoing Partnership",
    benefits: [
      "Increased brand visibility",
      "Higher engagement rates",
      "Quality lead generation",
      "Measurable ROI",
    ],
    accentColor: "primary",
    gradientFrom: "from-orange-500/10",
    gradientTo: "to-red-500/5",
    illustration: serviceMarketing,
  },
  "branding": {
    icon: Palette,
    title: "Branding",
    tagline: "Identity that stands out",
    description: "Comprehensive branding services to establish your unique identity.",
    fullDescription: "Build a memorable brand that resonates with your audience and stands out from the competition. From strategy to visual identity, I create cohesive brand experiences.",
    problem: "Struggling to create a brand identity that truly reflects your values and connects with customers?",
    solution: "Get a complete brand package that communicates your unique story and builds lasting recognition.",
    features: [
      "Brand strategy & positioning",
      "Visual identity design",
      "Logo design & variations",
      "Brand guidelines document",
      "Brand voice & messaging",
      "Collateral design",
    ],
    process: [
      { title: "Discovery", description: "Deep dive into your brand values and vision" },
      { title: "Research", description: "Market and competitor analysis" },
      { title: "Concept", description: "Creating unique visual identity concepts" },
      { title: "Refinement", description: "Perfecting every detail based on feedback" },
      { title: "Delivery", description: "Complete brand guidelines package" },
    ],
    deliveryTime: "2-4 Weeks",
    benefits: [
      "Distinctive brand identity",
      "Consistent brand experience",
      "Stronger customer connection",
      "Competitive advantage",
    ],
    accentColor: "accent",
    gradientFrom: "from-purple-500/10",
    gradientTo: "to-pink-500/5",
    illustration: serviceBranding,
  },
  "seo": {
    icon: Search,
    title: "SEO",
    tagline: "Rankings that matter",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
    fullDescription: "Improve your search engine rankings and drive qualified organic traffic with comprehensive SEO services using proven strategies and ethical techniques.",
    problem: "Is your website invisible to potential customers searching for your services?",
    solution: "Get comprehensive SEO that puts your business in front of the right audience at the right time.",
    features: [
      "Comprehensive keyword research",
      "On-page SEO optimization",
      "Technical SEO audit & fixes",
      "Link building strategies",
      "Local SEO optimization",
      "SEO content creation",
    ],
    process: [
      { title: "Audit", description: "Complete website and competitor analysis" },
      { title: "Strategy", description: "Keyword research and SEO roadmap" },
      { title: "Optimize", description: "On-page and technical improvements" },
      { title: "Build", description: "Quality link building campaigns" },
      { title: "Monitor", description: "Ongoing tracking and adjustments" },
    ],
    deliveryTime: "3-6 Months for Results",
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Long-term growth",
    ],
    accentColor: "primary",
    gradientFrom: "from-teal-500/10",
    gradientTo: "to-cyan-500/5",
    illustration: serviceSeo,
  },
  "resume-writing": {
    icon: FileText,
    title: "Resume Writing",
    tagline: "Resumes that open doors",
    description: "ATS-friendly resumes that get you noticed by employers.",
    fullDescription: "Stand out in the competitive job market with a professionally written, ATS-optimized resume that highlights your achievements and lands you interviews.",
    problem: "Is your resume getting lost in ATS systems or failing to impress recruiters?",
    solution: "Get a professionally crafted resume that passes ATS screening and makes recruiters take notice.",
    features: [
      "ATS-optimized formatting",
      "Keyword optimization for your industry",
      "Achievement-focused content",
      "Clean, modern design",
      "Cover letter writing",
      "LinkedIn profile optimization",
    ],
    process: [
      { title: "Review", description: "Analyzing your career history and goals" },
      { title: "Strategy", description: "Identifying key achievements and keywords" },
      { title: "Draft", description: "Creating ATS-optimized content" },
      { title: "Design", description: "Professional formatting and layout" },
      { title: "Finalize", description: "Final polish with cover letter" },
    ],
    deliveryTime: "2-3 Business Days",
    benefits: [
      "Pass ATS screening",
      "Stand out to recruiters",
      "Highlight your strengths",
      "Land more interviews",
    ],
    accentColor: "accent",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-yellow-500/5",
    illustration: serviceResume,
  },
  "sop-writing": {
    icon: GraduationCap,
    title: "SOP Writing",
    tagline: "Stories that inspire admission",
    description: "Compelling statements of purpose for university and visa applications.",
    fullDescription: "Your Statement of Purpose is your story. I help craft narratives that showcase your unique journey and aspirations, making you the perfect candidate.",
    problem: "Struggling to articulate your journey and aspirations in a compelling SOP?",
    solution: "Get a personalized SOP that tells your unique story and stands out to admissions committees.",
    features: [
      "University admission SOPs",
      "Visa application SOPs",
      "Personal statements",
      "Scholarship essays",
      "Letters of motivation",
      "Research proposals",
    ],
    process: [
      { title: "Interview", description: "In-depth discussion about your background" },
      { title: "Research", description: "Understanding program requirements" },
      { title: "Draft", description: "Crafting your compelling narrative" },
      { title: "Refine", description: "Collaborative editing process" },
      { title: "Perfect", description: "Final polished SOP" },
    ],
    deliveryTime: "5-7 Business Days",
    benefits: [
      "Compelling personal story",
      "Program-specific customization",
      "Higher acceptance rates",
      "Stand out from applicants",
    ],
    accentColor: "primary",
    gradientFrom: "from-indigo-500/10",
    gradientTo: "to-blue-500/5",
    illustration: serviceSop,
  },
  "copywriting": {
    icon: Megaphone,
    title: "Copywriting",
    tagline: "Words that sell",
    description: "Persuasive sales copy that converts visitors into customers.",
    fullDescription: "Words that sell. I create compelling marketing copy that captures attention, builds desire, and drives action using proven copywriting frameworks.",
    problem: "Is your copy failing to convert visitors into paying customers?",
    solution: "Get persuasive, conversion-focused copy that compels your audience to take action.",
    features: [
      "Landing page copy",
      "Sales page writing",
      "Email sequences",
      "Ad copy (Google, Facebook, etc.)",
      "Product descriptions",
      "Marketing collateral",
    ],
    process: [
      { title: "Analysis", description: "Understanding your brand and audience" },
      { title: "Research", description: "Competitive and market analysis" },
      { title: "Hooks", description: "Crafting attention-grabbing headlines" },
      { title: "Write", description: "Creating persuasive, action-driven copy" },
      { title: "Optimize", description: "A/B testing recommendations" },
    ],
    deliveryTime: "3-5 Business Days",
    benefits: [
      "Higher conversion rates",
      "Compelling brand voice",
      "Effective CTAs",
      "Measurable results",
    ],
    accentColor: "accent",
    gradientFrom: "from-rose-500/10",
    gradientTo: "to-orange-500/5",
    illustration: serviceCopywriting,
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    window.scrollTo(0, 0);
  }, [slug]);

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
      
      {/* Hero Section with Gradient Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`pt-32 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background to-background" />
        <div className={`absolute inset-0 ${service.gradientFrom} ${service.gradientTo} bg-gradient-to-br opacity-60`} />
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={isPageLoaded ? "animate" : "initial"}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Service</span>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xl text-primary font-medium mt-2">{service.tagline}</p>
                </div>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-foreground-muted leading-relaxed max-w-xl"
              >
                {service.fullDescription}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#process" className="btn-outline">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
            
            {/* Hero Illustration with Blend Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isPageLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg floating-image-container">
                {/* Glow Effect Behind Image */}
                <div className={`absolute inset-0 ${service.gradientFrom} blur-3xl opacity-40 rounded-full scale-90`} />
                <LazyImage
                  src={service.illustration}
                  alt={`${service.title} illustration`}
                  className="w-full relative z-10 image-glow"
                  containerClassName="w-full"
                  priority
                  blend="radial"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem & Solution Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="service-section-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Problem</h3>
              <p className="text-foreground-muted text-lg leading-relaxed">{service.problem}</p>
            </motion.div>
            
            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="service-section-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Solution</h3>
              <p className="text-foreground-muted text-lg leading-relaxed">{service.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-foreground mb-4">What's Included</h2>
            <p className="section-subtitle mx-auto">Everything you need to succeed</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-lg leading-relaxed">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-background-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-foreground mb-4">My Process</h2>
            <p className="section-subtitle mx-auto">A structured approach to deliver excellence</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Timeline Line */}
                {index < service.process.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent" />
                )}
                
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-display font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-foreground-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-foreground mb-6">Why Choose This Service?</h2>
              <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                Get results that make a difference. Every project is crafted with attention to detail and a focus on your success.
              </p>
              
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">100%</div>
                <div className="text-foreground-muted text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">{service.deliveryTime.split(' ')[0]}</div>
                <div className="text-foreground-muted text-sm">Delivery Time</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">500+</div>
                <div className="text-foreground-muted text-sm">Happy Clients</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">5★</div>
                <div className="text-foreground-muted text-sm">Average Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="section-title text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-foreground-muted text-lg mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Contact Me <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
