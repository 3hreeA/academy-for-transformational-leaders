import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const keynote = {
  title: "Leadership is not a position — it is a calling to reshape the world.",
  author: "Prof. Seun Kolade",
  role: "Keynote Address · Group Launching Event · March 2025",
  body: "In 331 BC, Alexander the Great stood before an army two to three times the size of his own at Gaugamela. His victory lay not in numbers, but in strategy, discipline, and the power of collective vision — a lesson as vital today for transformational leaders as it was then.",
  quote: "What made Alexander exceptional was not the size of his army, but the clarity of his vision and the depth of his team's commitment to a shared purpose.",
  image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg",
  link: "https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link",
};

const themes = [
  { title: "Faith & Leadership", body: "How faith-driven purpose creates unique conditions for social transformation and servant leadership. ATL explores how values-grounded leaders build trust, resilience, and lasting institutions." },
  { title: "Collective Impact", body: "The power of unified action — how cross-sector collaboration produces outcomes no single leader can achieve alone. Shared purpose multiplies results exponentially." },
  { title: "Global Perspective", body: "What it means to lead with cultural intelligence and a heart for global communities. ATL members navigate complexity with both local wisdom and international vision." },
  { title: "Legacy Building", body: "Shaping institutions, communities, and next-generation leaders for outcomes that outlast any individual. The greatest leaders build systems that endure." },
];

const reflections = [
  { quote: "True leadership is not about titles or positions — it is about the willingness to serve, to sacrifice, and to see in others what they cannot yet see in themselves.", author: "ATL Member Reflection", category: "Servant Leadership" },
  { quote: "When faith meets strategy, ordinary people accomplish extraordinary things. ATL exists at that intersection.", author: "ATL Community Voice", category: "Faith & Action" },
  { quote: "The leaders our world needs most are not those who seek power, but those who are willing to use influence for the common good.", author: "ATL Insight Series", category: "Transformational Leadership" },
];

const galleryImages = [
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg",
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg",
];

export default function OurInsights() {
  return (
    <div>
      <PageHero
        label="Our Insights"
        title="Thinking That"
        titleHighlight="Moves the World"
        subtitle="Perspectives, keynotes, and reflections from ATL's global community of transformational leaders."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg"
      />

      {/* Featured Keynote */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <img src={keynote.image} alt={keynote.author} className="w-full h-[460px] object-cover object-top" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8 flex flex-col justify-center">
            <span className="section-label mb-4 inline-block">Featured Keynote</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">"{keynote.title}"</h2>
            <p className="text-gold text-sm italic mb-6">{keynote.author} · {keynote.role}</p>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">{keynote.body}</p>
            <blockquote className="border-l-2 border-gold pl-6 mb-8">
              <p className="text-white/80 italic leading-relaxed">"{keynote.quote}"</p>
            </blockquote>
            <a href={keynote.link} target="_blank" rel="noopener noreferrer">
              <button className="group flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
                Read Full Address <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Themes */}
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
                <div className="p-8 border border-border hover:border-gold hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Community Voices</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Reflections from the Network</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reflections.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white p-10 border border-border h-full flex flex-col">
                  <Quote className="w-8 h-8 text-gold/30 mb-6 flex-shrink-0" />
                  <p className="font-heading text-lg text-navy leading-relaxed italic flex-grow mb-6">"{r.quote}"</p>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold block mb-1">{r.category}</span>
                    <span className="text-sm text-muted-foreground">{r.author}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10">
            <span className="section-label mb-4 inline-block">In the Room</span>
            <span className="gold-rule block" />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="aspect-video overflow-hidden group">
                  <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Want to Contribute an Insight?</h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              We welcome thought leadership, essays, and reflections from ATL members, partners, and practitioners.
            </p>
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