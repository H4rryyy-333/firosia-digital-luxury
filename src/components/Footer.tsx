import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/firosia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-6 lg:px-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Firosia Brandings" className="h-10 w-auto" />
            <p className="text-gray-600 font-inter text-sm leading-relaxed text-justify">
              Crafting refined digital identities with precision, creativity, and
              strategic clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Works", path: "/works" },
                { label: "Blogs", path: "/blogs" },
                { label: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gold transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gold/20 border border-gray-200 hover:border-gold/50 flex items-center justify-center transition-smooth group"
                >
                  <social.icon
                    className="text-gray-600 group-hover:text-gold transition-smooth"
                    size={18}
                  />
                </a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-gray-600 font-inter">
              <p>+91 9884264816</p>
              <p>firosiabrandings@gmail.com</p>
              <p>Anna Nagar, Chennai – 600040</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 font-inter text-sm">
            © {currentYear} Firosia Brandings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;