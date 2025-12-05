import { Sparkles, TrendingUp, Share2, Globe, Feather, Palette, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    slug: "brand-identity-design",
    description:
      "Comprehensive visual identity systems that capture your brand's essence with sophistication and clarity.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    slug: "digital-marketing-solutions",
    description:
      "Strategic campaigns designed to amplify your reach and drive meaningful engagement across all digital channels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    slug: "social-media-branding",
    description:
      "Curated social presence that tells your brand story with consistency, creativity, and premium aesthetics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    slug: "website-design-development",
    description:
      "Elegant, high-performance websites built to convert visitors into loyal customers with refined user experiences.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    icon: Feather,
    title: "Content Creation",
    slug: "content-creation",
    description:
      "Compelling visual and written content crafted to resonate with your audience and elevate your brand narrative.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    slug: "brand-strategy",
    description:
      "In-depth strategic guidance to position your brand for long-term success in competitive markets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    if (headerRef.current) observer.observe(headerRef.current);
    const cards = sectionRef.current?.querySelectorAll(".service-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-24 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      {/* Subtle parallax background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent parallax-slow" />
      
      <div className="container mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-12 scroll-animate">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Our Services
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Comprehensive Brand <span className="text-gold">Solutions</span>
          </h2>
        </div>

        {/* Horizontal Services List with Hover Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={`/services/${service.slug}`}
                className="service-item scroll-animate block group"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={`flex items-center justify-between py-6 border-b border-border/30 transition-all duration-500 ${activeIndex === index ? 'border-gold/50' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-gold/20' : 'bg-gold/10'}`}>
                      <service.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className={`font-playfair text-xl md:text-2xl font-semibold transition-all duration-300 ${activeIndex === index ? 'text-gold' : 'text-foreground group-hover:text-gold'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-foreground/60 font-inter text-sm mt-1 max-w-md transition-all duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 lg:opacity-60'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight 
                    className={`text-gold transition-all duration-500 ${activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} 
                    size={24} 
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Image Preview */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`absolute inset-0 transition-all duration-700 ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-playfair text-3xl font-bold text-white mt-2">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
              {/* Gold accent border */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-12 scroll-animate">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-gold font-inter tracking-wide hover:gap-4 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;