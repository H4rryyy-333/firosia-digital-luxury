import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const worksItems = [
  {
    title: "Fashion Brand Campaign 2024",
    category: "Full Campaign",
    description: "Complete visual identity and digital campaign for emerging fashion brand",
    tags: ["Branding", "Photography", "Social Media"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000"
  },
  {
    title: "Tech Startup Visual Identity",
    category: "Brand Design",
    description: "Modern brand system with web and mobile application design",
    tags: ["Identity", "Web Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000"
  },
  {
    title: "Luxury E-commerce Platform",
    category: "Digital Experience",
    description: "Premium e-commerce website with custom photography and content",
    tags: ["E-commerce", "Photography", "Development"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000"
  },
  {
    title: "Restaurant Brand Refresh",
    category: "Rebranding",
    description: "Complete rebrand including menu design, interior graphics, and digital presence",
    tags: ["Branding", "Print", "Digital"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000"
  },
  {
    title: "Beauty Product Launch",
    category: "Product Marketing",
    description: "Product photography, packaging design, and launch campaign",
    tags: ["Photography", "Packaging", "Campaign"],
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1000"
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Sophisticated property platform with advanced filtering and virtual tours",
    tags: ["Web Development", "UI/UX", "3D"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
  },
  {
    title: "Fitness App Branding",
    category: "App Design",
    description: "Complete app design system with motion graphics and marketing materials",
    tags: ["App Design", "Motion", "Branding"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000"
  },
  {
    title: "Financial Services Rebrand",
    category: "Corporate Identity",
    description: "Premium corporate identity with extensive brand guidelines",
    tags: ["Corporate", "Strategy", "Guidelines"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
  },
  {
    title: "Influencer Content Series",
    category: "Content Creation",
    description: "Multi-platform content series with photography and video production",
    tags: ["Content", "Video", "Photography"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000"
  },
  {
    title: "Automotive Ad Campaign",
    category: "Advertising",
    description: "Cinematic commercial campaign for luxury vehicle launch",
    tags: ["Video", "Photography", "Ads"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000"
  },
  {
    title: "Social Media Transformation",
    category: "Social Strategy",
    description: "Complete social media overhaul with content strategy and visuals",
    tags: ["Social Media", "Strategy", "Content"],
    image: "https://images.unsplash.com/photo-1611926653670-e2c8e4e17a28?q=80&w=1000"
  },
  {
    title: "PR Event Campaign",
    category: "PR Marketing",
    description: "Press event production and media coverage campaign",
    tags: ["PR", "Events", "Media"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000"
  }
];

const WorksPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Our Work
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Recent <span className="text-gold">Projects</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              Real projects, real results. Explore our latest work across branding, digital marketing, and content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worksItems.map((item, index) => (
              <Card
                key={item.title}
                className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
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
    </div>
  );
};

export default WorksPage;
