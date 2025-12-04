import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/firosia-logo.png";

const services = [
  { label: "Brand Identity Design", path: "/services/brand-identity" },
  { label: "Digital Marketing Solutions", path: "/services/digital-marketing" },
  { label: "Social Media Branding", path: "/services/social-media" },
  { label: "Website Design & Development", path: "/services/website-design" },
  { label: "Content Creation", path: "/services/content-creation" },
  { label: "Brand Strategy", path: "/services/brand-strategy" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Works", path: "/works" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "bg-white shadow-card" : "bg-white/95 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 animate-fade-in-left">
            <img src={logo} alt="Firosia Brandings" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 animate-fade-in">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`text-charcoal hover:text-gold transition-smooth font-inter text-sm tracking-wide relative group flex items-center gap-1 ${
                    location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith('/services')) ? 'text-gold' : ''
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith('/services')) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>

                {/* Mega Menu for Services */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-white rounded-xl shadow-card border border-border/20 p-6 min-w-[600px] grid grid-cols-2 gap-4 animate-fade-in">
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          to={service.path}
                          className="px-4 py-3 rounded-lg hover:bg-secondary/10 transition-smooth text-charcoal hover:text-gold font-inter text-sm"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in-right">
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-6 transition-smooth shadow-premium hover:shadow-card hover:scale-105">
                Start Your Journey
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in bg-white">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left text-charcoal hover:text-gold transition-smooth font-inter py-2 ${
                    location.pathname === item.path ? 'text-gold' : ''
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        to={service.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-charcoal/70 hover:text-gold transition-smooth font-inter text-sm py-1"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold transition-smooth">
                Start Your Journey
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;