import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "Luxe Cosmetics",
    category: "Brand Identity",
    description: "Complete visual rebrand for a premium skincare line with elegant packaging design.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
  },
  {
    title: "Artisan Coffee Co.",
    category: "Digital Campaign",
    description: "Multi-platform social media campaign showcasing artisanal brewing techniques.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    title: "Velvet Fashion House",
    category: "Website Design",
    description: "E-commerce platform with immersive product showcases and seamless checkout.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Terra Botanicals",
    category: "Product Photography",
    description: "Studio product shoots highlighting organic ingredients and sustainable packaging.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
  },
  {
    title: "Noir Jewelry",
    category: "Social Media",
    description: "Curated Instagram presence with cohesive visual storytelling and engagement strategy.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    title: "Altitude Fitness",
    category: "Brand Strategy",
    description: "Complete brand positioning and identity for a premium fitness studio chain.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
];

const Portfolio = () => {
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

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate, .portfolio-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animate">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.title}
              className="portfolio-card scroll-animate bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="text-charcoal" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="text-gold text-xs font-inter tracking-widest uppercase">
                  {item.category}
                </div>
                <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 scroll-animate">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-gold font-inter tracking-wide hover:gap-4 transition-all duration-300 group"
          >
            View All Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;