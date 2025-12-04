import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData: Record<string, {
  title: string;
  description: string;
  heroImage: string;
  fullImage: string;
  tags: string[];
  details: string[];
}> = {
  "brand-identity": {
    title: "Brand Identity Design",
    description: "We create distinctive brand identities that capture your essence and resonate with your audience. From logo design to complete visual systems, we craft every element with precision and purpose, ensuring your brand stands out in a crowded marketplace.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2000",
    tags: ["Logo Design", "Visual Identity", "Brand Guidelines", "Stationery Design"],
    details: [
      "Comprehensive brand discovery and strategy sessions",
      "Custom logo design with multiple concept iterations",
      "Complete visual identity system development",
      "Brand guidelines documentation for consistent application",
      "Stationery and collateral design"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing Solutions",
    description: "Strategic digital marketing that drives results. We leverage AI-powered insights and data-driven strategies to amplify your brand's presence, engage your target audience, and convert prospects into loyal customers across all digital channels.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2000",
    tags: ["SEO", "PPC Advertising", "Analytics", "Performance Marketing"],
    details: [
      "Comprehensive digital strategy development",
      "Search engine optimization (SEO) implementation",
      "Pay-per-click advertising campaigns",
      "Performance tracking and analytics",
      "Conversion rate optimization"
    ]
  },
  "social-media": {
    title: "Social Media Branding",
    description: "Build a powerful social media presence that engages and inspires. We create scroll-stopping content, manage your communities, and develop strategies that turn followers into brand advocates.",
    heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2000",
    tags: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Ads"],
    details: [
      "Platform-specific content strategy",
      "Visual content creation and curation",
      "Community management and engagement",
      "Influencer partnership coordination",
      "Social media advertising campaigns"
    ]
  },
  "website-design": {
    title: "Website Design & Development",
    description: "Premium websites that captivate visitors and drive conversions. We design and develop responsive, high-performance websites that reflect your brand's sophistication and provide seamless user experiences.",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000",
    tags: ["UI/UX Design", "Responsive Development", "E-commerce", "CMS Integration"],
    details: [
      "Custom UI/UX design tailored to your brand",
      "Responsive development for all devices",
      "E-commerce functionality and integration",
      "Content management system setup",
      "Performance optimization and SEO"
    ]
  },
  "content-creation": {
    title: "Content Creation",
    description: "Compelling content that tells your brand story. From stunning photography and videography to engaging copy, we create content that captures attention, communicates value, and drives action.",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2000",
    tags: ["Photography", "Videography", "Copywriting", "Motion Graphics"],
    details: [
      "Professional product and lifestyle photography",
      "Video production and editing",
      "Compelling copywriting and storytelling",
      "Motion graphics and animation",
      "Content calendar planning and execution"
    ]
  },
  "brand-strategy": {
    title: "Brand Strategy",
    description: "Strategic foundations for lasting brand success. We develop comprehensive brand strategies that define your positioning, clarify your messaging, and create roadmaps for sustainable growth in competitive markets.",
    heroImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2000",
    fullImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",
    tags: ["Brand Positioning", "Market Research", "Competitive Analysis", "Growth Strategy"],
    details: [
      "In-depth market and competitive analysis",
      "Brand positioning and differentiation strategy",
      "Target audience research and personas",
      "Messaging framework development",
      "Long-term growth roadmap creation"
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold mb-6 hover:text-gold/80 transition-smooth">
              <ArrowLeft size={20} />
              <span className="font-inter text-sm">Back to Services</span>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              {service.title}
            </h1>
            <div className="flex flex-wrap gap-3 mt-6">
              {service.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-gold/20 text-gold font-inter text-sm rounded-full border border-gold/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <p className="text-foreground/80 font-inter text-xl leading-relaxed text-justify">
            {service.description}
          </p>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={service.fullImage}
              alt={`${service.title} showcase`}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
            What's <span className="text-gold">Included</span>
          </h2>
          <div className="space-y-4">
            {service.details.map((detail, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/30"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-gold" size={16} />
                </div>
                <p className="text-foreground/80 font-inter text-lg text-justify">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-gold">Started</span>?
          </h2>
          <p className="text-foreground/70 font-inter text-lg mb-8 max-w-2xl mx-auto text-justify">
            Let's discuss how our {service.title.toLowerCase()} services can elevate your brand to new heights.
          </p>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-6 text-base transition-smooth shadow-premium hover:shadow-card hover:scale-105">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;