import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Calendar } from "lucide-react";

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

export default function News() {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div>
      <PageHero
        label="Latest Updates"
        title="News &"
        titleHighlight="Insights"
        subtitle="Stay up to date with ATL Global news, events, thought leadership, and community stories."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg"
      />

      {/* Featured */}
      {featured && (
        <section className="bg-white py-20 px-6 lg:px-20 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <p className="section-label mb-6">Featured Story</p>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center cursor-pointer">
                <div className="overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold">{featured.category}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{featured.date}</span>
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy leading-snug mb-5 group-hover:text-gold transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{featured.excerpt}</p>
                  <a href="#" className="group/link flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy hover:text-gold transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-muted py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal><h2 className="font-heading text-3xl font-bold text-navy mb-12">More Articles</h2></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="group bg-white border border-border hover:border-gold transition-colors duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 block">{a.category}</span>
                    <h3 className="font-heading font-bold text-navy text-base mb-3 leading-snug group-hover:text-gold transition-colors flex-grow">{a.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-4">
                      <Calendar className="w-3 h-3" />{a.date}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}