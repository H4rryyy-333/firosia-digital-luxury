import { Package } from "lucide-react";
import { Card } from "./ui/card";

const ProductAds = () => {
  return (
    <section id="product-ads" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <Package className="text-gold" size={24} />
              <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
                Luxury Product Focus
              </span>
            </div>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Product Ads
            </h2>
          </div>

          {/* Content Card */}
          <Card className="bg-card border-gold/20 p-12 lg:p-16 hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in group">
            <div className="text-center space-y-6">
              <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
                Premium product ads with modern, Gen-Z inspired aesthetics and clean minimal 
                compositions designed for maximum appeal.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 text-gold font-inter text-sm tracking-wider">
                  <span className="w-8 h-px bg-gold" />
                  MINIMAL. PREMIUM. IMPACTFUL.
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

export default ProductAds;
