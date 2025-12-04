import { Sparkles, TrendingUp, Share2, Globe, Feather, Palette, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    slug: "brand-identity",
    description: "Comprehensive visual identity systems that capture your brand's essence with sophistication and clarity.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000",
    features: ["Logo Design", "Brand Guidelines", "Visual Systems", "Stationery Design"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    slug: "digital-marketing",
    description: "Strategic campaigns designed to amplify your reach and drive meaningful engagement across all digital channels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    features: ["Campaign Strategy", "Performance Marketing", "Analytics", "Growth Hacking"]
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    slug: "social-media",
    description: "Curated social presence that tells your brand story with consistency, creativity, and premium aesthetics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
    features: ["Content Strategy", "Visual Templates", "Community Management", "Influencer Outreach"]
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    slug: "website-design",
    description: "Elegant, high-performance websites built to convert visitors into loyal customers with refined user experiences.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000",
    features: ["UI/UX Design", "Responsive Development", "E-commerce", "CMS Integration"]
  },
  {
    icon: Feather,
    title: "Content Creation",
    slug: "content-creation",
    description: "Compelling visual and written content crafted to resonate with your audience and elevate your brand narrative.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000",
    features: ["Photography", "Videography", "Copywriting", "Editorial Content"]
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    slug: "brand-strategy",
    description: "In-depth strategic guidance to position your brand for long-term success in competitive markets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
    features: ["Brand Positioning", "Market Research", "Competitive Analysis", "Strategic Roadmaps"]
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Comprehensive Brand <span className="text-gold">Solutions</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed text-justify max-w-3xl mx-auto">
              From strategic vision to flawless execution, Firosia Brandings provides end-to-end branding and marketing services 
              designed to elevate your business and captivate your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Link to={`/services/${service.slug}`}>
                    <Card className="bg-card border-border/50 overflow-hidden group hover:border-gold/50 transition-all duration-500 hover:shadow-premium cursor-pointer">
                      <div className="relative h-96 overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                          <ArrowRight className="text-charcoal" size={20} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <service.icon className="text-gold" size={28} />
                  </div>
                  <h2 className="font-playfair text-4xl lg:text-5xl font-bold">{service.title}</h2>
                  <p className="text-foreground/70 font-inter text-lg leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/20 font-inter text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link to={`/services/${service.slug}`}>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-gold text-gold hover:bg-gold hover:text-charcoal transition-smooth group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gold">Elevate</span> Your Brand?
          </h2>
          <p className="text-foreground/70 font-inter text-lg mb-8 max-w-2xl mx-auto text-justify">
            Let's collaborate to create something extraordinary that resonates with your audience.
          </p>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-6 text-base transition-smooth shadow-premium hover:scale-105">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;