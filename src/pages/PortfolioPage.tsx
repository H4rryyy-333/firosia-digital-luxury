import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Branding", "Product Shoots", "Digital Campaigns", "Social Media"];

const portfolioProjects = [
  {
    title: "Luxury Fashion Rebrand",
    category: "Branding",
    description: "Complete visual identity redesign for a premium fashion house",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1000",
    featured: true
  },
  {
    title: "Tech Startup Launch",
    category: "Digital Campaigns",
    description: "Strategic launch campaign resulting in 300% user growth",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000",
    featured: true
  },
  {
    title: "E-commerce Platform",
    category: "Branding",
    description: "High-conversion luxury e-commerce experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    featured: false
  },
  {
    title: "Premium Cosmetics",
    category: "Product Shoots",
    description: "Studio photography with elegant gold lighting",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
    featured: false
  },
  {
    title: "Financial Services Brand",
    category: "Branding",
    description: "Comprehensive brand positioning and visual identity",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    featured: false
  },
  {
    title: "Restaurant Chain Social",
    category: "Social Media",
    description: "Premium social media presence across 15 locations",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
    featured: false
  },
  {
    title: "Real Estate Platform",
    category: "Digital Campaigns",
    description: "Sophisticated property showcase campaign",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    featured: false
  },
  {
    title: "Luxury Watch Collection",
    category: "Product Shoots",
    description: "Macro photography with dramatic lighting",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    featured: false
  },
  {
    title: "Fitness App Branding",
    category: "Branding",
    description: "Complete app design system and marketing materials",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
    featured: false
  },
  {
    title: "Automotive Campaign",
    category: "Digital Campaigns",
    description: "Multi-channel campaign for luxury vehicle launch",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
    featured: false
  },
  {
    title: "Beauty Brand Social",
    category: "Social Media",
    description: "Instagram-first visual strategy and content",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
    featured: false
  },
  {
    title: "Premium Jewelry",
    category: "Product Shoots",
    description: "Editorial-style product photography",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000",
    featured: false
  }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  const featuredProjects = portfolioProjects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Portfolio
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Featured <span className="text-gold">Projects</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              A curated selection of our most refined work across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-foreground/70 font-inter">Our most impactful projects</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                      <ExternalLink className="text-charcoal" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-3">
                  <div className="text-gold text-xs font-inter tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="font-playfair text-3xl font-semibold group-hover:text-gold transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 font-inter leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-inter text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-charcoal shadow-premium"
                    : "bg-card border border-border/50 text-foreground/70 hover:border-gold/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                      <ExternalLink className="text-charcoal" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-gold text-xs font-inter tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
