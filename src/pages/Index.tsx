import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ads from "@/components/Ads";
import ProductAds from "@/components/ProductAds";
import Influencer from "@/components/Influencer";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Works from "@/components/Works";
import BTS from "@/components/BTS";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Ads />
      <ProductAds />
      <Influencer />
      <About />
      <Services />
      <Portfolio />
      <Works />
      <BTS />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
