import { Sparkles, Video, Users, Megaphone, TrendingUp, Bot } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useRef } from "react";

const creativeFeatures = [
  // ... keep existing code
];

const AICreativeAds = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate, .ai-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-6 lg:px-12 bg-secondary/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent parallax-slow" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeFeatures.slice(0, 3).map((feature, index) => (
            <Card
              key={feature.title}
              className="ai-card scroll-animate bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium"
              style={{ transitionDelay: `${index * 0.1}s` }}
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
              <div className="p-6 space-y-4">
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
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl mx-auto">
          {creativeFeatures.slice(3).map((feature, index) => (
            <Card
              key={feature.title}
              className="ai-card scroll-animate bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium"
              style={{ transitionDelay: `${(index + 3) * 0.1}s` }}
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
              <div className="p-6 space-y-4">
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
        <div className="text-center mt-12 scroll-animate">
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