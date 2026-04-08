import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Users, Globe, Award, Lightbulb } from "lucide-react";

const stats = [
  { label: "Countries", value: "15+", icon: Globe },
  { label: "Network Members", value: "200+", icon: Users },
  { label: "Strategic Sectors", value: "4", icon: Award },
  { label: "Years of Impact", value: "5+", icon: Lightbulb },
];

export default function About() {
  return (
    <div>
      <PageHero
        label="About ATL Global"
        title="Empowering Leaders."
        titleHighlight="Shaping the Future."
        subtitle="The Academy for Transformational Leadership is a global network uniting professionals committed to driving meaningful change across sectors."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
      />

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 80}>
                <div className="py-12 px-8 text-center">
                  <p className="font-heading text-4xl font-bold text-gold mb-1">{s.value}</p>
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="section-label mb-4 inline-block">Our Mission</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy leading-snug mb-6">
              Leadership as the key to re-imagining the world.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              ATL is an international leadership network empowering high-flying professionals across strategic sectors to drive collective good and global impact. We believe that transformational leadership is the catalyst for a better world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We equip transformational leaders with knowledge, skills, and a strong network to foster progress in education, business, media, governance, and beyond.
            </p>
            <Link to="/Sectors">
              <button className="group flex items-center gap-3 text-navy font-semibold text-sm border-b-2 border-gold pb-1 hover:gap-5 transition-all duration-300">
                Explore Our Sectors <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 pointer-events-none" />
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
                alt="ATL Community"
                className="w-full h-[420px] object-cover relative z-10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg"
              alt="ATL Leadership"
              className="w-full h-[400px] object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="section-label mb-4 inline-block">Our Story</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy leading-snug mb-6">
              Building a Community of Transformational Leaders
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              ATL was born from a vision to create an interconnected global community of leaders who are not only accomplished in their fields but are committed to using their influence for collective good. Our network spans multiple countries and sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our Group Launching Event in March 2025 to our ongoing programmes and initiatives, ATL continues to grow as a catalyst for meaningful change, guided by faith-driven values and a deep commitment to excellence, integrity, and service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Keynote */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
              alt="Prof Seun Kolade"
              className="w-full h-[380px] object-cover object-top"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <span className="section-label mb-4 inline-block">Featured Keynote</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-3xl font-bold text-white mb-3 leading-snug">
              Prof. Seun Kolade — Group Launching Event
            </h2>
            <p className="text-gold text-sm mb-6 italic">March 1st, 2025</p>
            <p className="text-white/60 leading-relaxed mb-4">
              "Ladies and gentlemen, let me begin by taking you back over two thousand years ago to the vast, open plains of Gaugamela, where one of history's most remarkable battles unfolded…"
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Alexander's army, though smaller, was not weaker. It was meticulously trained, strategically organised, and led by a leader who understood that vision and collective purpose transcend raw numbers.
            </p>
            <a href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="group flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
                Read Full Address <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Ready to Join Our Network?</h2>
            <p className="text-white/70 mb-8 text-lg">Connect with high-flying professionals and transformational leaders from around the world.</p>
            <Link to="/Contact">
              <button className="bg-navy text-white hover:opacity-90 px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Contact Us to Know More
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}