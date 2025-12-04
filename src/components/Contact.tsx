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
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
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
            <p className="text-foreground/70 text-lg font-inter leading-relaxed text-justify">
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
                  <div className="text-foreground/70">firosiabrandings@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Phone</div>
                  <div className="text-foreground/70">+91 9884264816</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-smooth">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-inter font-semibold mb-1">Address</div>
                  <div className="text-foreground/70">
                    No. 176, Y Block, 1st Street
                    <br />
                    Anna Nagar, Chennai – 600040
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

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0088078044766!2d80.20887!3d13.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6e262c91!2sY%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
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
                  className="bg-background/50 border-gold/30 focus:border-gold transition-smooth font-inter h-12"
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
                  className="bg-background/50 border-gold/30 focus:border-gold transition-smooth font-inter h-12"
                />
              </div>

              <div>
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-background/50 border-gold/30 focus:border-gold transition-smooth font-inter h-12"
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
                  className="bg-background/50 border-gold/30 focus:border-gold transition-smooth font-inter min-h-[160px] resize-none"
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