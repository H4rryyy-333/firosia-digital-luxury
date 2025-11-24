import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const Ads = () => {
  return (
    <section id="ads" className="py-24 lg:py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-gold" size={24} />
              <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
                Gen-Z Advertising
              </span>
            </div>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Ads
            </h2>
          </div>

          {/* Content Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-12 lg:p-16 hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in">
            <div className="text-center space-y-6">
              <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
                High-impact, visually striking ad campaigns crafted for the Gen-Z audience 
                with elegant, trend-driven storytelling.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 text-gold font-inter text-sm tracking-wider">
                  <span className="w-8 h-px bg-gold" />
                  BOLD. MODERN. AUTHENTIC.
                  <span className="w-8 h-px bg-gold" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ads;
