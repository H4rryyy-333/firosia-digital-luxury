import { Target, Users, Sparkles, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              About Firosia
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Elevating Brands Through <span className="text-gold">Strategic Creativity</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              At Firosia Brandings, we craft brand experiences built on strategy, precision, and elegant creativity. 
              Our mission is to elevate ambitious brands with thoughtful, timeless, and impactful digital identity systems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold">
                Our Philosophy
              </h2>
              <p className="text-foreground/70 font-inter text-lg leading-relaxed">
                We believe that exceptional branding is born from the intersection of strategic insight and creative excellence. 
                Every project we undertake is guided by deep understanding, meticulous attention to detail, and an unwavering 
                commitment to elevating our clients' vision.
              </p>
              <p className="text-foreground/70 font-inter text-lg leading-relaxed">
                Our approach combines timeless design principles with contemporary trends, creating brand identities that 
                resonate with modern audiences while maintaining sophistication and longevity.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Our Values
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Precision",
                description: "Every decision backed by research, insight, and strategic thinking."
              },
              {
                icon: Sparkles,
                title: "Creative Excellence",
                description: "Pushing boundaries while maintaining sophistication and clarity."
              },
              {
                icon: Users,
                title: "Client Partnership",
                description: "Collaborative approach building lasting relationships beyond projects."
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Uncompromising standards in every deliverable we produce."
              }
            ].map((value, index) => (
              <Card 
                key={value.title}
                className="bg-card border-border/50 p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/70 font-inter leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Meet The Team
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Creative Minds Behind <span className="text-gold">Your Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
                name: "Sarah Mitchell",
                role: "Creative Director"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
                name: "James Anderson",
                role: "Brand Strategist"
              },
              {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
                name: "Emily Chen",
                role: "Lead Designer"
              }
            ].map((member, index) => (
              <Card 
                key={member.name}
                className="bg-card border-border/50 overflow-hidden group hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gold font-inter text-sm tracking-wider uppercase">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
