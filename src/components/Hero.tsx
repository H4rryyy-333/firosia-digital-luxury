import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Refined{" "}
                <span className="text-gold">Digital Identities</span>
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl font-inter leading-relaxed max-w-xl">
                Firosia Brandings is a high-end digital marketing and branding
                agency dedicated to elevating businesses with precision,
                creativity, and strategic clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-6 text-base transition-smooth shadow-premium hover:shadow-card hover:scale-105 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("work")}
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-inter font-semibold px-8 py-6 text-base transition-smooth group"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl md:text-4xl font-playfair font-bold text-gold">
                  150+
                </div>
                <div className="text-sm text-foreground/60 font-inter mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-playfair font-bold text-gold">
                  98%
                </div>
                <div className="text-sm text-foreground/60 font-inter mt-1">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-playfair font-bold text-gold">
                  5+
                </div>
                <div className="text-sm text-foreground/60 font-inter mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={heroImage}
                alt="Luxury Digital Workspace"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating accent */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gold/20 rounded-full blur-3xl animate-glow" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
