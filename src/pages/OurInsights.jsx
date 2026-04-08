import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const insights = [
  {
    title: "Leadership is not a position — it is a calling to reshape the world.",
    author: "Prof. Seun Kolade",
    role: "Keynote Address · Group Launching Event · March 2025",
    body: "In 331 BC, Alexander the Great stood before an army two to three times the size of his own at Gaugamela. His victory lay not in numbers, but in strategy, discipline, and the power of collective vision — a lesson as vital today for transformational leaders as it was then.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg",
    link: "https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link",
    linkLabel: "Read Full Address",
  },
];

const themes = [
  {
    title: "Faith & Leadership",
    body: "How faith-driven purpose creates unique conditions for social transformation and servant leadership.",
  },
  {
    title: "Collective Impact",
    body: "The power of unified action — how cross-sector collaboration produces outcomes no single leader can achieve alone.",
  },
  {
    title: "Global Perspective",
    body: "What it means to lead with cultural intelligence and a heart for global communities.",
  },
  {
    title: "Legacy Building",
    body: "Shaping institutions, communities, and next-generation leaders for outcomes that outlast any individual.",
  },
];

export default function OurInsights() {
  return (
    <div>
      <PageHero
        label="Our Insights"
        title="Thinking That"
        titleHighlight="Moves the World"
        subtitle="Perspectives, keynotes, and reflections from ATL's community of transformational leaders."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg"
      />

      {/* Featured Keynote */}
      {insights.map((item, i) => (
        <section key={i} className="bg-navy py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <Reveal className="lg:col-span-4">
              <img src={item.image} alt={item.author} className="w-full h-[420px] object-cover object-top" />
            </Reveal>
            <Reveal delay={120} className="lg:col-span-8 flex flex-col justify-center">
              <span className="section-label mb-4 inline-block">Featured Keynote</span>
              <span className="gold-rule mb-8 block" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">
                "{item.title}"
              </h2>
              <p className="text-gold text-sm italic mb-6">{item.author} · {item.role}</p>
              <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">{item.body}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="group flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
                  {item.linkLabel} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Insight Themes */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Themes We Explore</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">The Ideas That Shape ATL</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="p-8 border border-border hover:border-gold transition-colors duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-muted py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3">
          {[
            "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
            "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
            "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
          ].map((src, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="aspect-[4/3] overflow-hidden group">
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Want to Contribute an Insight?</h2>
            <p className="text-white/70 mb-8">We welcome thought leadership from ATL members and partners.</p>
            <Link to="/news-events">
              <button className="bg-navy text-white px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Get In Touch
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}