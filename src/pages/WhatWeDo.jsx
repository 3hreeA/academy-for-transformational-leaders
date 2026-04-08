import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, GraduationCap, Briefcase, Megaphone, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: GraduationCap, num: "01", title: "Higher Education",
    description: "Supporting professionals in achieving leadership roles in academia and research, fostering intellectual excellence and creating opportunities for the next generation.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  },
  {
    icon: Briefcase, num: "02", title: "Business & Private Sector",
    description: "Empowering business leaders and entrepreneurs with strategic insights, mentorship, and networking to build sustainable enterprises that drive collective wealth.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    icon: Megaphone, num: "03", title: "Media, Church & Third Sector",
    description: "Equipping leaders in media, Churches, and nonprofits with the tools to influence public discourse, inspire communities, and drive social change.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  },
  {
    icon: Landmark, num: "04", title: "Politics & Public Sector",
    description: "Developing transformational leaders for impactful roles in government and public service, ensuring ethical governance and progressive policies.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  },
];

const programmes = [
  {
    title: "ATL Leadership Accelerator", duration: "6 Months", format: "Online & In-Person",
    description: "An intensive development journey for mid-to-senior level professionals ready to take their leadership to a global stage.",
    features: ["Executive coaching sessions", "Peer learning cohorts", "Global mentorship access", "Leadership project capstone"],
  },
  {
    title: "ATL Pitch Den", duration: "Rolling Applications", format: "In-Person",
    description: "A competitive pitching programme giving business owners the chance to win seed funding up to $5,000 and gain mentorship from seasoned entrepreneurs.",
    features: ["Up to $5,000 seed investment", "Expert panel mentorship", "Brand exposure opportunities", "Ongoing network support"],
  },
  {
    title: "Sector Leadership Tracks", duration: "3 Months", format: "Online",
    description: "Tailored leadership tracks for professionals across ATL's four strategic sectors.",
    features: ["Sector-specific curriculum", "Guest expert sessions", "Peer networking", "Certificate of completion"],
  },
  {
    title: "ATL Annual Summit", duration: "2 Days", format: "In-Person",
    description: "Our flagship annual gathering with keynote addresses, panel discussions, workshops, and high-value networking.",
    features: ["Keynote speakers", "Interactive workshops", "Cross-sector networking", "Recognition awards"],
  },
];

export default function WhatWeDo() {
  return (
    <div>
      <PageHero
        label="What We Do"
        title="Programmes, Sectors"
        titleHighlight="& Projects"
        subtitle="From leadership development programmes to sector-specific initiatives, ATL equips leaders to create lasting impact."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
      />

      {/* Sectors */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-4">
          <Reveal>
            <span className="section-label mb-4 inline-block">Our Sectors</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">Four Pillars of Impact</h2>
          </Reveal>
        </div>
        {sectors.map((s, i) => {
          const Icon = s.icon;
          const even = i % 2 === 0;
          return (
            <Reveal key={s.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className={`${even ? "lg:order-1" : "lg:order-2"} relative overflow-hidden`}>
                  <img src={s.image} alt={s.title} className="w-full h-[360px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-gold text-white font-heading font-bold w-12 h-12 flex items-center justify-center text-sm">
                    {s.num}
                  </div>
                </div>
                <div className={`${even ? "lg:order-2" : "lg:order-1"} px-12 py-14 flex flex-col justify-center bg-white`}>
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Programmes */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Our Programmes</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">How We Develop Leaders</h2>
          </Reveal>
          <div className="space-y-0 divide-y divide-border bg-white">
            {programmes.map((prog, i) => (
              <Reveal key={prog.title} delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">{prog.format}</span>
                      <span className="text-xs text-muted-foreground">{prog.duration}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-3">{prog.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{prog.description}</p>
                    <a href="#">
                      <button className="group flex items-center gap-3 bg-navy text-white px-7 py-3 text-[10px] font-bold tracking-widest uppercase hover:-translate-y-0.5 transition-all">
                        Apply Now <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </a>
                  </div>
                  <div className="lg:col-span-5">
                    <ul className="space-y-4 pt-2">
                      {prog.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          <span className="text-foreground/80 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATL Pitch Den Banner */}
      <section className="bg-gold py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-4">Featured Initiative</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-snug">ATL Pitch Den</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              An exclusive platform for business owners to secure seed investment of up to <strong className="text-white">$5,000</strong> and gain expert mentorship and brand exposure.
            </p>
            <Link to="/news-events">
              <button className="bg-navy text-white hover:opacity-90 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5">
                Contact Us to Apply
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}