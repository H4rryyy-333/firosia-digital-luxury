import { Card } from "./ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Gen-Z Branding",
    excerpt: "Exploring how Gen-Z consumers are reshaping the luxury brand landscape with authenticity and digital-first experiences.",
    date: "March 15, 2024",
    category: "Trends",
    readTime: "5 min read",
  },
  {
    title: "Minimalism Meets Maximum Impact",
    excerpt: "How clean, minimal design principles create the most memorable and effective brand identities in 2024.",
    date: "March 10, 2024",
    category: "Design",
    readTime: "4 min read",
  },
  {
    title: "Influencer Marketing Done Right",
    excerpt: "The art of crafting authentic influencer partnerships that resonate with modern audiences while maintaining brand integrity.",
    date: "March 5, 2024",
    category: "Marketing",
    readTime: "6 min read",
  },
  {
    title: "Premium Dark Mode Design",
    excerpt: "Why luxury brands are embracing dark mode aesthetics and how to implement them with sophistication.",
    date: "February 28, 2024",
    category: "Design",
    readTime: "5 min read",
  },
  {
    title: "The Gold Standard in Branding",
    excerpt: "Color psychology in premium branding: the timeless appeal of gold accents in modern digital design.",
    date: "February 20, 2024",
    category: "Branding",
    readTime: "4 min read",
  },
  {
    title: "Social Media Strategy 2024",
    excerpt: "Latest strategies for building an engaging social media presence that converts followers into loyal customers.",
    date: "February 15, 2024",
    category: "Social Media",
    readTime: "7 min read",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
            Insights & Ideas
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
            Latest from Our <span className="text-gold">Blog</span>
          </h2>
          <p className="text-foreground/70 text-lg font-inter mt-4 max-w-2xl mx-auto">
            Thoughts on branding, design trends, and the future of digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-gold/25 via-deep-grey to-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-smooth" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-to-t from-gold/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-inter">
                  <span className="text-gold tracking-widest uppercase">{post.category}</span>
                  <span className="text-foreground/60">{post.readTime}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold group-hover:text-gold transition-smooth line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-foreground/70 font-inter text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-foreground/60 text-xs font-inter">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1 text-gold text-sm font-inter group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
