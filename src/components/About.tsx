const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Section Label */}
          <div className="inline-block">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          {/* Headline */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Elevated Brand <span className="text-gold">Experiences</span>
          </h2>

          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl font-inter leading-relaxed max-w-3xl mx-auto">
            At Firosia Brandings, we craft brand experiences built on strategy,
            precision, and elegant creativity. Our mission is to elevate
            ambitious brands with thoughtful, timeless, and impactful digital
            identity systems.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
