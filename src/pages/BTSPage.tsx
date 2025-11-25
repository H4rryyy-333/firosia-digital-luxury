import { Card } from "@/components/ui/card";
import { Play, Film, Camera, Megaphone } from "lucide-react";

const btsCategories = [
  {
    icon: Film,
    title: "Ad Shoots",
    description: "Behind-the-scenes footage of ad film production with Gen-Z aesthetic lighting",
    color: "from-gold/30"
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Reels-style vertical BTS footage of influencers recording collaborations",
    color: "from-gold/25"
  },
  {
    icon: Megaphone,
    title: "PR Marketing",
    description: "Press event BTS and studio shoots with editorial-style visuals",
    color: "from-gold/20"
  },
  {
    icon: Camera,
    title: "Product Shoot",
    description: "Clean studio setup with macro lens clips and soft gold lighting",
    color: "from-gold/25"
  }
];

const btsVideos = [
  { title: "Fashion Campaign BTS", duration: "2:34", category: "Ad Shoots", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800" },
  { title: "Tech Product Launch", duration: "3:12", category: "Ad Shoots", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800" },
  { title: "Beauty Collab Session", duration: "1:45", category: "Influencer", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800" },
  { title: "Fashion Week Content", duration: "2:18", category: "Influencer", image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1724?q=80&w=800" },
  { title: "Product Launch Event", duration: "3:45", category: "PR", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
  { title: "Press Conference Setup", duration: "2:10", category: "PR", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" },
  { title: "Luxury Watch Series", duration: "2:20", category: "Product", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800" },
  { title: "Cosmetics Collection", duration: "1:52", category: "Product", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800" },
  { title: "Lifestyle Brand Shoot", duration: "1:58", category: "Ad Shoots", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800" },
  { title: "Lifestyle Creator Day", duration: "3:02", category: "Influencer", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800" },
  { title: "Media Interview Day", duration: "2:55", category: "PR", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800" },
  { title: "Tech Gadget Reveal", duration: "3:15", category: "Product", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800" }
];

const BTSPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Behind The Scenes
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              The Making of <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              Go behind the curtain and witness the creative process that brings our campaigns to life
            </p>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btsCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-card border-border/50 p-6 hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <category.icon className="text-gold" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-foreground/60 font-inter text-sm">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Video Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4">All BTS Content</h2>
            <p className="text-foreground/70 font-inter">Explore the creative process across all our projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btsVideos.map((video, index) => (
              <Card
                key={video.title}
                className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-smooth shadow-premium">
                      <Play className="text-charcoal ml-1" size={28} fill="currentColor" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-gold text-xs font-inter font-semibold">
                      {video.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-foreground text-xs font-inter font-semibold">
                      {video.duration}
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-gold/10 to-transparent" />
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h4 className="font-inter font-semibold text-foreground group-hover:text-gold transition-smooth">
                    {video.title}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BTSPage;
