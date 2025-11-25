import Hero from "@/components/Hero";
import GenZCreativeAds from "@/components/GenZCreativeAds";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <GenZCreativeAds />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
