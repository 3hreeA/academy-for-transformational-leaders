import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Users, Globe, Award, Lightbulb, CheckCircle } from "lucide-react";

const stats = [
  { label: "Countries", value: "15+", icon: Globe },
  { label: "Network Members", value: "200+", icon: Users },
  { label: "Strategic Sectors", value: "4", icon: Award },
  { label: "Years of Impact", value: "5+", icon: Lightbulb },
];

const values = [
  { title: "Faith-Driven", body: "Guided by Christian ethos — leadership as a spiritual responsibility and a calling to serve others with excellence." },
  { title: "Collective Impact", body: "Together we achieve more than individual efforts ever could. Unity across sectors multiplies our reach and power." },
  { title: "Empowering Others", body: "True success is measured by how much we lift those around us. We invest in the growth of every member." },
  { title: "Continuous Growth", body: "Excellence demands lifelong learning, intellectual curiosity, and the courage to evolve and adapt." },
];

const milestones = [
  { year: "2020", event: "ATL Global Founded", detail: "The vision of a faith-driven global leadership network is born." },
  { year: "2022", event: "First International Cohort", detail: "ATL expands to 5 countries, welcoming its first cross-border membership cohort." },
  { year: "2024", event: "ATL Pitch Den Launched", detail: "The flagship seed funding initiative opens doors for business leaders in the network." },
  { year: "2025", event: "Group Launching Event", detail: "A landmark public launch in March 2025 marks ATL's emergence on the global stage." },
];

const whyPoints = [
  "Elite global networking across 15+ countries",
  "One-to-one mentorship & leadership coaching",
  "Access to the ATL Pitch Den seed funding",
  "Exclusive resources, toolkits & opportunities",
  "Cross-sector collaboration & thought leadership",
  "Faith-centred community grounded in shared values",
];

export default function WhoWeAre() {
  return (
    <div>
      <PageHero
        label="Who We Are"
        title="Empowering Leaders."
        titleHighlight="Shaping the Future."
        subtitle="The Academy for Transformational Leadership is a global network uniting professionals committed to driving meaningful change across sectors."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
      />

      {/* Stats Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-12 px-8 text-center">
                <p className="font-heading text-4xl font-bold text-gold mb-1">{s.value}</p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="section-label mb-4 inline-block">Our Mission</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy leading-snug mb-6">
              Leadership is the key to re-imagining the world.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              ATL is founded on the belief that transformational leadership — grounded in faith, purpose, and excellence — is the catalyst for lasting change. We equip high-flying professionals with the knowledge, skills, and global network they need to make their mark.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From higher education to business, governance to media, our network spans 15+ countries and continues to grow as a force for collective good.
            </p>
            <Link to="/what-we-do">
              <button className="group flex items-center gap-3 text-navy font-semibold text-sm border-b-2 border-gold pb-1 hover:gap-5 transition-all duration-300">
                Explore What We Do <ArrowRight className="w-4 h-4" />
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
              <div className="absolute -bottom-6 -right-6 z-20 bg-gold text-white p-6 shadow-2xl w-36 text-center">
                <p className="font-heading text-3xl font-bold">5+</p>
                <p className="text-white/80 text-[10px] tracking-widest uppercase mt-1">Years of Impact</p>
              </div>
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
              ATL was born from a vision to create an interconnected global community of leaders who are not only accomplished in their fields, but committed to using their influence for collective good.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our Group Launching Event in March 2025 to our ongoing programmes and initiatives, ATL continues to grow as a catalyst for meaningful change, guided by faith-driven values and a deep commitment to excellence, integrity, and service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Our Journey</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Key Milestones</h2>
          </Reveal>
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                  <div className="flex-shrink-0 w-28 flex flex-col items-center">
                    <div className="w-14 h-14 border-2 border-gold bg-white flex items-center justify-center">
                      <span className="font-heading font-bold text-gold text-sm">{m.year}</span>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-border w-full">
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">{m.event}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Foundations</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-white">Our Core Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="p-10 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Voice */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
              alt="Prof Seun Kolade"
              className="w-full h-[400px] object-cover object-top"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8 lg:pt-4">
            <span className="section-label mb-4 inline-block">Voice of ATL</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-3xl font-bold text-navy mb-2">Prof. Seun Kolade</h2>
            <p className="text-gold text-sm italic mb-6">Founding Keynote Speaker</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Professor of Entrepreneurship & Innovation. His landmark keynote at the ATL Group Launching Event drew on historical strategy and modern leadership theory to inspire a new generation of transformational leaders.
            </p>
            <a href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="group flex items-center gap-3 text-navy text-xs font-bold tracking-widest uppercase border-b-2 border-gold pb-1 hover:gap-5 transition-all">
                Read the Keynote <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="section-label mb-4 inline-block">Membership</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy leading-snug mb-8">Why Join ATL?</h2>
            <ul className="space-y-4 mb-10">
              {whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/news-events">
              <button className="bg-navy text-white hover:opacity-90 transition-all duration-300 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:-translate-y-0.5">
                Get In Touch
              </button>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg"
              alt="Why Join"
              className="w-full h-[420px] object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}