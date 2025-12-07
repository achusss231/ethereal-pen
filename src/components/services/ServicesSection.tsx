import { useState } from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  FileText,
  GraduationCap,
  BookOpen,
  Mail,
  Megaphone,
  Briefcase,
  FileEdit,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetailModal } from "./ServiceDetailModal";

const services = [
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Engaging blog posts, articles, and web content that captivates your audience.",
    fullDescription: "Transform your brand's message with professionally crafted content that engages, informs, and converts. From blog posts to website copy, I create content that resonates with your target audience and drives results.",
    process: [
      "Initial consultation to understand your brand voice and goals",
      "Research and outline creation for approval",
      "First draft delivery with SEO optimization",
      "Revisions based on your feedback",
      "Final polished content ready for publishing",
    ],
    deliveryTime: "3-5 Business Days",
    features: [
      "SEO-optimized content",
      "Plagiarism-free guarantee",
      "Unlimited revisions",
      "Research-backed writing",
      "Brand voice consistency",
      "Meta descriptions included",
    ],
    startingPrice: "$50",
  },
  {
    icon: FileText,
    title: "Resume Writing",
    description: "ATS-friendly resumes that get you noticed by top employers and recruiters.",
    fullDescription: "Stand out in the competitive job market with a professionally written, ATS-optimized resume. I craft compelling resumes that highlight your achievements and get past automated screening systems.",
    process: [
      "Career history review and consultation",
      "Achievement identification and quantification",
      "ATS-optimized formatting and keywords",
      "First draft for review",
      "Final polishing with cover letter template",
    ],
    deliveryTime: "2-3 Business Days",
    features: [
      "ATS-friendly formatting",
      "Keyword optimization",
      "Achievement-focused content",
      "Modern, clean design",
      "LinkedIn profile tips",
      "Editable Word/PDF formats",
    ],
    startingPrice: "$75",
  },
  {
    icon: GraduationCap,
    title: "SOP Writing",
    description: "Compelling statements of purpose for university and visa applications.",
    fullDescription: "Your Statement of Purpose is your story. I help craft narratives that showcase your unique journey, aspirations, and why you're the perfect candidate for your dream program or visa application.",
    process: [
      "In-depth questionnaire about your background",
      "Review of program requirements",
      "Draft creation with compelling narrative",
      "Collaborative refinement process",
      "Final SOP tailored to specific programs",
    ],
    deliveryTime: "5-7 Business Days",
    features: [
      "Personalized storytelling",
      "Program-specific customization",
      "Strong opening hooks",
      "Clear career trajectory",
      "Admission committee insights",
      "Multiple program versions",
    ],
    startingPrice: "$100",
  },
  {
    icon: BookOpen,
    title: "Academic Writing",
    description: "Research papers, essays, and dissertations with proper citations.",
    fullDescription: "Excel in your academic pursuits with professionally written research papers, essays, and dissertations. I ensure rigorous research, proper citations, and adherence to academic standards.",
    process: [
      "Topic analysis and research plan",
      "Comprehensive literature review",
      "Structured outline for approval",
      "Draft with proper citations",
      "Final review and formatting",
    ],
    deliveryTime: "7-14 Business Days",
    features: [
      "Thorough research",
      "Proper citation formats",
      "Plagiarism-free content",
      "Academic tone",
      "Bibliography included",
      "Formatting per guidelines",
    ],
    startingPrice: "$120",
  },
  {
    icon: Mail,
    title: "Cover Letters",
    description: "Personalized cover letters that complement your resume perfectly.",
    fullDescription: "Make a memorable first impression with cover letters that tell your professional story. Each letter is crafted to highlight your relevant experience and genuine interest in the role.",
    process: [
      "Job description analysis",
      "Key skills mapping",
      "Draft creation with personal touch",
      "Review and refinement",
      "Final customizable template",
    ],
    deliveryTime: "1-2 Business Days",
    features: [
      "Job-specific customization",
      "Compelling opening",
      "Skills alignment",
      "Professional formatting",
      "Call-to-action closing",
      "Easy customization tips",
    ],
    startingPrice: "$40",
  },
  {
    icon: FileEdit,
    title: "Email & Letter Writing",
    description: "Professional business correspondence that gets results.",
    fullDescription: "From formal business letters to persuasive emails, I craft professional correspondence that communicates clearly, maintains proper etiquette, and achieves your communication goals.",
    process: [
      "Purpose and audience understanding",
      "Tone and format selection",
      "Draft creation",
      "Review for clarity and impact",
      "Final polished version",
    ],
    deliveryTime: "1-2 Business Days",
    features: [
      "Professional tone",
      "Clear messaging",
      "Proper formatting",
      "Persuasive language",
      "Template creation",
      "Quick turnaround",
    ],
    startingPrice: "$30",
  },
  {
    icon: Megaphone,
    title: "Copywriting",
    description: "Persuasive sales copy and marketing content that converts.",
    fullDescription: "Words that sell. I create compelling marketing copy that captures attention, builds desire, and drives action. From landing pages to ad copy, every word is crafted for maximum impact.",
    process: [
      "Brand and audience analysis",
      "Competitive research",
      "Hook and headline creation",
      "Persuasive copy drafting",
      "A/B testing suggestions",
    ],
    deliveryTime: "3-5 Business Days",
    features: [
      "Conversion-focused",
      "Emotional triggers",
      "Clear CTAs",
      "Brand voice alignment",
      "SEO consideration",
      "Multiple variations",
    ],
    startingPrice: "$80",
  },
  {
    icon: Briefcase,
    title: "Portfolio Writing",
    description: "Professional portfolios and bio pages that showcase your work.",
    fullDescription: "Present yourself professionally with compelling portfolio content and bios. I help you articulate your expertise, showcase your achievements, and create a lasting impression on potential clients or employers.",
    process: [
      "Career and achievements review",
      "Unique value proposition identification",
      "Content structure planning",
      "Draft with engaging narrative",
      "Final polished portfolio content",
    ],
    deliveryTime: "4-6 Business Days",
    features: [
      "Professional tone",
      "Achievement highlights",
      "Engaging narrative",
      "SEO-optimized",
      "Platform-specific versions",
      "Visual content suggestions",
    ],
    startingPrice: "$90",
  },
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-foreground mb-6"
          >
            Premium Writing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            From content creation to professional documents, I deliver exceptional 
            writing that elevates your brand and achieves your goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};
