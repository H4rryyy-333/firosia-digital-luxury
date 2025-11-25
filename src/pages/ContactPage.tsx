import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Let's Elevate <span className="text-gold">Your Brand</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              Ready to create something extraordinary? Let's start a conversation about your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default ContactPage;
