import { Sparkles, TrendingUp, Share2, Globe, Feather, Palette } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Comprehensive visual identity systems that capture your brand's essence with sophistication and clarity.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    description:
      "Strategic campaigns designed to amplify your reach and drive meaningful engagement across all digital channels.",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    description:
      "Curated social presence that tells your brand story with consistency, creativity, and premium aesthetics.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Elegant, high-performance websites built to convert visitors into loyal customers with refined user experiences.",
  },
  {
    icon: Feather,
    title: "Content Creation",
    description:
      "Compelling visual and written content crafted to resonate with your audience and elevate your brand narrative.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description:
      "In-depth strategic guidance to position your brand for long-term success in competitive markets.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Our Services
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Comprehensive Brand <span className="text-gold">Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border/50 hover:border-gold/50 transition-all duration-500 group hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-smooth group-hover:scale-110">
                  <service.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-smooth">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 font-inter leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
