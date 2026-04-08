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

const whyPoints = [
  "Elite global networking across 15+ countries",
  "One-to-one mentorship & leadership coaching",
  "Access to the ATL Pitch Den seed funding",
  "Exclusive resources, toolkits & opportunities",
  "Cross-sector collaboration & thought leadership",
];

const values = [
  { title: "Faith-Driven", body: "Guided by Christian ethos — leadership as a spiritual responsibility." },
  { title: "Collective Impact", body: "Together we achieve more than individual efforts ever could." },
  { title: "Empowering Others", body: "True success is measured by how much we lift those around us." },
  { title: "Continuous Growth", body: "Excellence demands lifelong learning and skill development." },
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

      {/* Stats */}
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
              ATL is founded on the belief that transformational leadership — grounded in faith, purpose, and excellence — is the catalyst for lasting change. We equip high-flying professionals with knowledge, skills, and a global network.
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
              ATL was born from a vision to create an interconnected global community of leaders who are not only accomplished in their fields but are committed to using their influence for collective good.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our Group Launching Event in March 2025 to our ongoing programmes and initiatives, ATL continues to grow as a catalyst for meaningful change, guided by faith-driven values and a deep commitment to excellence, integrity, and service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="section-label mb-4 inline-block">Foundations</span>
            <span className="gold-rule mx-auto mb-6 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Our Core Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="p-8 border border-border hover:border-gold transition-colors duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="section-label mb-4 inline-block">Membership</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-white leading-snug mb-8">Why Join ATL?</h2>
            <ul className="space-y-5 mb-10">
              {whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/70 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/news-events">
              <button className="border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:-translate-y-0.5">
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