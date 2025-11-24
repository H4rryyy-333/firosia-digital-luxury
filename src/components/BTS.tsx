import { Card } from "./ui/card";
import { Play, Film, Camera, Megaphone } from "lucide-react";

const btsCategories = [
  {
    icon: Film,
    title: "Ad Shoots",
    description: "Behind-the-scenes footage of ad film production with Gen-Z aesthetic lighting",
    videos: [
      { title: "Fashion Campaign BTS", duration: "2:34" },
      { title: "Tech Product Launch", duration: "3:12" },
      { title: "Lifestyle Brand Shoot", duration: "1:58" },
      { title: "Automotive Commercial", duration: "4:05" },
    ],
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Reels-style vertical BTS footage of influencers recording collaborations",
    videos: [
      { title: "Beauty Collab Session", duration: "1:45" },
      { title: "Fashion Week Content", duration: "2:18" },
      { title: "Lifestyle Creator Day", duration: "3:02" },
      { title: "Tech Review Setup", duration: "2:25" },
    ],
  },
  {
    icon: Megaphone,
    title: "PR Marketing",
    description: "Press event BTS and studio shoots with editorial-style visuals",
    videos: [
      { title: "Product Launch Event", duration: "3:45" },
      { title: "Press Conference Setup", duration: "2:10" },
      { title: "Media Interview Day", duration: "2:55" },
      { title: "Brand Announcement", duration: "1:38" },
    ],
  },
  {
    icon: Camera,
    title: "Product Shoot",
    description: "Clean studio setup with macro lens clips and soft gold lighting",
    videos: [
      { title: "Luxury Watch Series", duration: "2:20" },
      { title: "Cosmetics Collection", duration: "1:52" },
      { title: "Tech Gadget Reveal", duration: "3:15" },
      { title: "Fashion Accessories", duration: "2:08" },
    ],
  },
];

const BTS = () => {
  return (
    <section id="bts" className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Behind The Scenes
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            The Making of <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-foreground/70 text-lg font-inter mt-4 max-w-2xl mx-auto">
            Go behind the curtain and witness the creative process that brings our campaigns to life
          </p>
        </div>

        {/* BTS Categories */}
        <div className="space-y-16">
          {btsCategories.map((category, catIndex) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <category.icon className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-3xl font-semibold text-foreground">
                    BTS – {category.title}
                  </h3>
                  <p className="text-foreground/60 font-inter text-sm mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.videos.map((video, videoIndex) => (
                  <Card
                    key={video.title}
                    className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium"
                    style={{ animationDelay: `${videoIndex * 0.1}s` }}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-gold/20 via-deep-grey to-charcoal overflow-hidden">
                      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-smooth" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-smooth shadow-premium group-hover:shadow-card">
                          <Play className="text-charcoal ml-1" size={28} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-foreground text-xs font-inter font-semibold">
                          {video.duration}
                        </span>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-gold/10 to-transparent" />
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-inter font-semibold text-foreground group-hover:text-gold transition-smooth">
                        {video.title}
                      </h4>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BTS;
