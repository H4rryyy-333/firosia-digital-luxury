import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/firosia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Firosia Brandings" className="h-10 w-auto" />
            <p className="text-foreground/70 font-inter text-sm leading-relaxed">
              Crafting refined digital identities with precision, creativity, and
              strategic clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              {["Services", "Work", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-gold transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-gold/20 border border-border/50 hover:border-gold/50 flex items-center justify-center transition-smooth group"
                >
                  <social.icon
                    className="text-foreground/70 group-hover:text-gold transition-smooth"
                    size={18}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-foreground/60 font-inter text-sm">
            © {currentYear} Firosia Brandings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
