import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/firosia-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in-left">
            <img src={logo} alt="Firosia Brandings" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 animate-fade-in">
            {["Home", "About", "Services", "Portfolio", "Works", "Blogs", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase())}
                className="text-foreground/80 hover:text-gold transition-smooth font-inter text-sm tracking-wide relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in-right">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-6 transition-smooth shadow-premium hover:shadow-card hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in">
            {["Home", "About", "Services", "Portfolio", "Works", "Blogs", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase())}
                className="block w-full text-left text-foreground/80 hover:text-gold transition-smooth font-inter py-2"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold transition-smooth"
            >
              Start Your Journey
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
