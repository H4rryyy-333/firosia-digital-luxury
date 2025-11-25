import { Card } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Evolution of Luxury Branding in Digital Spaces",
    excerpt: "Exploring how premium brands are adapting their visual identity for modern digital platforms while maintaining sophistication.",
    category: "Brand Strategy",
    readTime: "8 min read",
    date: "Nov 20, 2025",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
  },
  {
    title: "Gen-Z Marketing: Bridging Authenticity and Luxury",
    excerpt: "How to create campaigns that resonate with Gen-Z audiences without compromising on premium brand positioning.",
    category: "Marketing",
    readTime: "6 min read",
    date: "Nov 18, 2025",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000"
  },
  {
    title: "Minimalist Design: The Power of Less",
    excerpt: "Why minimal design principles are dominating the luxury sector and how to implement them effectively.",
    category: "Design",
    readTime: "5 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000"
  },
  {
    title: "Behind the Lens: Product Photography Essentials",
    excerpt: "Professional techniques for creating stunning product imagery that converts browsers into buyers.",
    category: "Photography",
    readTime: "10 min read",
    date: "Nov 12, 2025",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1000"
  },
  {
    title: "Social Media Strategy for Premium Brands",
    excerpt: "Building a cohesive social presence that elevates your brand while engaging modern audiences.",
    category: "Social Media",
    readTime: "7 min read",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000"
  },
  {
    title: "The Future of E-commerce Design",
    excerpt: "Emerging trends in luxury e-commerce UX that are redefining the online shopping experience.",
    category: "Web Design",
    readTime: "9 min read",
    date: "Nov 8, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
  }
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-gold font-inter text-sm tracking-[0.2em] uppercase">
              Insights & Ideas
            </span>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-2 mb-8" />
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Brand <span className="text-gold">Journal</span>
            </h1>
            <p className="text-foreground/80 font-inter text-lg lg:text-xl leading-relaxed">
              Expert perspectives on branding, design, marketing, and the creative process.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <Card className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
              </div>
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="text-gold text-xs font-inter tracking-widest uppercase mb-4">
                  Featured Article
                </div>
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6 group-hover:text-gold transition-smooth">
                  {blogPosts[0].title}
                </h2>
                <p className="text-foreground/70 font-inter text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-foreground/60 font-inter text-sm mb-8">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-gold font-inter font-semibold group-hover:gap-4 transition-all">
                  Read Full Article
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="container mx-auto">
          <div className="mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-foreground/70 font-inter">Insights from the world of branding and design</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.title}
                className="bg-card border-border/50 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-500 hover:shadow-premium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gold/90 text-charcoal text-xs font-inter font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-playfair text-2xl font-semibold group-hover:text-gold transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-foreground/60 font-inter text-xs pt-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-gold/10 via-card to-card border-gold/20 p-12 lg:p-16 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              Stay <span className="text-gold">Inspired</span>
            </h2>
            <p className="text-foreground/70 font-inter text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly insights, case studies, and creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-background border border-border/50 text-foreground font-inter focus:outline-none focus:border-gold/50 transition-smooth"
              />
              <button className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-4 rounded-lg transition-smooth shadow-premium hover:scale-105">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
