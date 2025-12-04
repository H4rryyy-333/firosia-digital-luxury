import { Sparkles, Video, Users, Megaphone, TrendingUp, Bot } from "lucide-react";
import { Card } from "./ui/card";

const creativeFeatures = [
  {
    icon: TrendingUp,
    title: "Trend-Driven AI Ad Campaigns",
    description: "High-impact campaigns powered by AI insights, designed for modern audiences with viral potential and data-driven optimization.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000"
  },
  {
    icon: Users,
    title: "Influencer + UGC + AI Engagement",
    description: "Authentic collaborations enhanced by AI-powered engagement analysis, blending influencer reach with user-generated content.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000"
  },
  {
    icon: Sparkles,
    title: "AI Aesthetic Product Ads",
    description: "Premium product visuals crafted with AI-enhanced aesthetics and clean minimal compositions designed for maximum appeal.",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1000"
  },
  {
    icon: Video,
    title: "Short-Form Video + AI Edits",
    description: "Engaging reels and stories optimized with AI editing tools for social platforms and maximum shareability.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000"
  },
  {
    icon: Megaphone,
    title: "AI-Powered PR + Viral Engineering",
    description: "Strategic PR campaigns designed with AI analytics to create buzz, predict trends, and capture attention at scale.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000"
  }
];

const AICreativeAds = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="text-gold" size={24} />
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              AI-Powered Advertising
            </span>
          </div>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            AI-Driven Creative <span className="text-gold">Advertising Suite</span>
          </h2>
          <p className="text-foreground/70 text-lg font-inter mt-4 max-w-3xl mx-auto leading-relaxed text-justify">
            Cutting-edge advertising solutions powered by artificial intelligence, blending authenticity, modern aesthetics, 
            and strategic virality to captivate today's audiences while maintaining premium brand positioning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creativeFeatures.slice(0, 3).map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center">
                    <feature.icon className="text-charcoal" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <feature.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold group-hover:text-gold transition-smooth">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-foreground/70 font-inter leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {creativeFeatures.slice(3).map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center">
                    <feature.icon className="text-charcoal" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <feature.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold group-hover:text-gold transition-smooth">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-foreground/70 font-inter leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-gold font-inter text-sm tracking-wider">
            <span className="w-8 h-px bg-gold" />
            AI-POWERED. AUTHENTIC. PREMIUM.
            <span className="w-8 h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICreativeAds;