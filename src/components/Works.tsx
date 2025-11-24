import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

const worksItems = [
  {
    title: "Fashion Brand Campaign 2024",
    category: "Full Campaign",
    description: "Complete visual identity and digital campaign for emerging fashion brand",
    tags: ["Branding", "Photography", "Social Media"],
  },
  {
    title: "Tech Startup Visual Identity",
    category: "Brand Design",
    description: "Modern brand system with web and mobile application design",
    tags: ["Identity", "Web Design", "UI/UX"],
  },
  {
    title: "Luxury E-commerce Platform",
    category: "Digital Experience",
    description: "Premium e-commerce website with custom photography and content",
    tags: ["E-commerce", "Photography", "Development"],
  },
  {
    title: "Restaurant Brand Refresh",
    category: "Rebranding",
    description: "Complete rebrand including menu design, interior graphics, and digital presence",
    tags: ["Branding", "Print", "Digital"],
  },
  {
    title: "Beauty Product Launch",
    category: "Product Marketing",
    description: "Product photography, packaging design, and launch campaign",
    tags: ["Photography", "Packaging", "Campaign"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Sophisticated property platform with advanced filtering and virtual tours",
    tags: ["Web Development", "UI/UX", "3D"],
  },
  {
    title: "Fitness App Branding",
    category: "App Design",
    description: "Complete app design system with motion graphics and marketing materials",
    tags: ["App Design", "Motion", "Branding"],
  },
  {
    title: "Financial Services Rebrand",
    category: "Corporate Identity",
    description: "Premium corporate identity with extensive brand guidelines",
    tags: ["Corporate", "Strategy", "Guidelines"],
  },
  {
    title: "Influencer Content Series",
    category: "Content Creation",
    description: "Multi-platform content series with photography and video production",
    tags: ["Content", "Video", "Photography"],
  },
];

const Works = () => {
  return (
    <section id="works" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Our Work
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Recent <span className="text-gold">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg font-inter mt-4 max-w-2xl mx-auto">
            Real projects, real results. Explore our latest work across branding, digital marketing, and content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder with gradient */}
              <div className="relative h-72 bg-gradient-to-br from-gold/30 via-deep-grey to-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-premium">
                    <ExternalLink className="text-charcoal" size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-gold text-xs font-inter tracking-widest uppercase">
                  {item.category}
                </div>
                <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-smooth">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-inter px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
