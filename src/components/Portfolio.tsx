import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Luxury Fashion Rebrand",
    category: "Brand Identity",
    description: "Complete visual identity redesign for a premium fashion house",
  },
  {
    title: "Tech Startup Launch",
    category: "Digital Marketing",
    description: "Strategic launch campaign resulting in 300% user growth",
  },
  {
    title: "E-commerce Platform",
    category: "Website Design",
    description: "High-conversion luxury e-commerce experience",
  },
  {
    title: "Financial Services Brand",
    category: "Brand Strategy",
    description: "Comprehensive brand positioning and visual identity",
  },
  {
    title: "Restaurant Chain",
    category: "Social Media",
    description: "Premium social media presence across 15 locations",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Sophisticated property showcase with advanced filtering",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Portfolio
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg font-inter mt-4 max-w-2xl mx-auto">
            A curated selection of our most refined work across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder with gradient */}
              <div className="relative h-64 bg-gradient-to-br from-gold/20 via-deep-grey to-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                    <ExternalLink className="text-charcoal" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="text-gold text-xs font-inter tracking-widest uppercase">
                  {item.category}
                </div>
                <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-smooth">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
