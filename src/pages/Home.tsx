import Hero from "@/components/Hero";
import AICreativeAds from "@/components/AICreativeAds";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AICreativeAds />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;