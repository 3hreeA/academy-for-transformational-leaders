import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const AnimatedElement = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setIsVisible(true); return; }
    const fallback = setTimeout(() => setIsVisible(true), 800 + delay);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { clearTimeout(fallback); setTimeout(() => setIsVisible(true), delay); observer.unobserve(el); }
    }, { threshold: 0.05, rootMargin: "0px 0px 200px 0px" });
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className || ""}`}>
      {children}
    </div>
  );
};

const articles = [
  {
    title: "ATL Global Launches with a Powerful Keynote by Prof. Seun Kolade",
    date: "March 1, 2025",
    category: "Events",
    excerpt: "ATL Global held its landmark Group Launching Event, bringing together leaders from across sectors. Prof. Seun Kolade delivered a stirring keynote drawing on historical strategy and modern leadership.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg",
    featured: true,
  },
  {
    title: "Introducing the ATL Pitch Den — Seed Funding for Business Leaders",
    date: "March 15, 2025",
    category: "Business",
    excerpt: "ATL Global announces the Pitch Den, an exclusive platform giving business owners the chance to pitch for up to $5,000 in seed investment plus expert mentorship.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
    featured: false,
  },
  {
    title: "Building Leaders Across Borders: ATL's Global Vision",
    date: "April 2, 2025",
    category: "Leadership",
    excerpt: "As ATL grows its international membership, we explore what it means to build a truly global leadership network rooted in faith-driven values and collective impact.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg",
    featured: false,
  },
  {
    title: "ATL Members Spotlight: Changemakers Across Sectors",
    date: "April 20, 2025",
    category: "Community",
    excerpt: "Meet some of the incredible professionals who have joined the ATL network — from educators and entrepreneurs to public servants and media leaders.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
    featured: false,
  },
  {
    title: "Faith, Leadership and Social Transformation",
    date: "May 5, 2025",
    category: "Thought Leadership",
    excerpt: "A reflection on how faith-driven leadership creates unique conditions for social transformation, drawing on ATL's founding ethos and early member experiences.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
    featured: false,
  },
];

const categoryColors = {
  Events: "bg-primary/10 text-primary",
  Business: "bg-secondary/10 text-secondary-foreground",
  Leadership: "bg-accent/20 text-accent-foreground",
  Community: "bg-muted text-muted-foreground",
  "Thought Leadership": "bg-primary/5 text-primary",
};

export default function News() {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Latest Updates</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            News &<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            Stay up to date with ATL Global news, events, thought leadership, and community stories.
          </p>
        </motion.div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-background py-16 px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement>
              <div className="group grid grid-cols-1 sm:grid-cols-2 gap-8 items-center cursor-pointer">
                <div className="overflow-hidden rounded-sm shadow-xl">
                  <img src={featured.image} alt={featured.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[featured.category]}`}>{featured.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{featured.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-muted py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement>
            <h2 className="text-2xl font-bold text-foreground mb-10">More Articles</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((article, i) => (
              <AnimatedElement key={article.title} delay={i * 80}>
                <div className="group bg-card rounded-sm border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>{article.category}</span>
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow">{article.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-auto">
                      <Calendar className="w-3 h-3" />{article.date}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}