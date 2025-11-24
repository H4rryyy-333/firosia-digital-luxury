import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's Elevate Your <span className="text-gold">Brand</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <p className="text-foreground/70 text-lg font-inter leading-relaxed">
              Ready to transform your brand? Let's start a conversation about
              your vision and how we can bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Email</div>
                  <div className="text-foreground/70">hello@firosia.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Phone</div>
                  <div className="text-foreground/70">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Address</div>
                  <div className="text-foreground/70">
                    123 Branding Street
                    <br />
                    New York, NY 10001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Working Hours</div>
                  <div className="text-foreground/70">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-gold transition-smooth font-inter h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-gold transition-smooth font-inter h-12"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-gold transition-smooth font-inter min-h-[160px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold py-6 text-base transition-smooth shadow-premium hover:shadow-card hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
