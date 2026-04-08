import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, GraduationCap, Briefcase, Megaphone, Landmark, DollarSign, Users, Mic2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: GraduationCap, num: "01", title: "Higher Education",
    description: "Supporting professionals in achieving leadership roles in academia and research. We foster intellectual excellence and create opportunities for the next generation of scholars and institutional leaders.",
    focus: ["Academic leadership development", "Research collaboration networks", "University governance support", "Scholar mentorship pathways"],
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  },
  {
    icon: Briefcase, num: "02", title: "Business & Private Sector",
    description: "Empowering business leaders and entrepreneurs with strategic insights, mentorship, and networking to build sustainable enterprises that drive collective wealth and social value.",
    focus: ["Entrepreneurship & startup support", "Executive leadership coaching", "ATL Pitch Den seed funding", "Cross-border trade connections"],
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    icon: Megaphone, num: "03", title: "Media, Church & Third Sector",
    description: "Equipping leaders in media, churches, and nonprofits with the tools to influence public discourse, inspire communities, and drive meaningful social change at scale.",
    focus: ["Media leadership & communications", "Faith-based community building", "NGO strategy & governance", "Social impact storytelling"],
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  },
  {
    icon: Landmark, num: "04", title: "Politics & Public Sector",
    description: "Developing transformational leaders for impactful roles in government and public service, ensuring ethical governance, progressive policies, and servant-hearted leadership.",
    focus: ["Public policy leadership", "Civic engagement & advocacy", "Government innovation", "Community representation"],
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  },
];

const programmes = [
  {
    icon: Users,
    title: "ATL Leadership Accelerator", duration: "6 Months", format: "Online & In-Person",
    description: "An intensive development journey for mid-to-senior level professionals ready to take their leadership to a global stage. Combining executive coaching, peer learning, and real-world project work.",
    features: ["Executive coaching sessions", "Peer learning cohorts", "Global mentorship access", "Leadership project capstone"],
  },
  {
    icon: DollarSign,
    title: "ATL Pitch Den", duration: "Rolling Applications", format: "In-Person",
    description: "A competitive pitching programme giving business owners the chance to win seed funding up to $5,000 and gain mentorship from seasoned entrepreneurs and investors.",
    features: ["Up to $5,000 seed investment", "Expert panel mentorship", "Brand exposure opportunities", "Ongoing network support"],
  },
  {
    icon: Mic2,
    title: "Sector Leadership Tracks", duration: "3 Months", format: "Online",
    description: "Tailored leadership tracks for professionals across ATL's four strategic sectors. Expert-led curriculum built around the real challenges you face in your field.",
    features: ["Sector-specific curriculum", "Guest expert sessions", "Peer networking circles", "Certificate of completion"],
  },
  {
    icon: Calendar,
    title: "ATL Annual Summit", duration: "2 Days", format: "In-Person",
    description: "Our flagship annual gathering bringing together the full ATL community for keynote addresses, panel discussions, hands-on workshops, and high-value networking.",
    features: ["World-class keynote speakers", "Interactive workshops", "Cross-sector networking", "Recognition awards"],
  },
];

const projects = [
  {
    title: "ATL Pitch Den",
    category: "Business Initiative",
    status: "Active",
    description: "An exclusive seed-funding platform where ATL business members pitch to a panel of experts for investment up to $5,000 plus mentorship and brand exposure.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    title: "ATL Mentorship Programme",
    category: "Leadership Development",
    status: "Active",
    description: "Matching emerging leaders with seasoned professionals across sectors for one-to-one coaching, career guidance, and knowledge transfer.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  },
  {
    title: "Global Expansion Initiative",
    category: "Strategic Growth",
    status: "Ongoing",
    description: "Extending ATL's reach into new regions and countries — building local chapters, partnerships, and cultural bridges to strengthen the global leadership network.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg",
  },
];

export default function WhatWeDo() {
  return (
    <div>
      <PageHero
        label="What We Do"
        title="Programmes, Sectors"
        titleHighlight="& Projects"
        subtitle="From leadership development programmes to sector-specific initiatives, ATL equips leaders to create lasting impact across the globe."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
      />

      {/* Sectors */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-4">
          <Reveal>
            <span className="section-label mb-4 inline-block">Our Sectors</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">Four Pillars of Impact</h2>
            <p className="text-muted-foreground max-w-2xl">
              ATL operates across four interconnected sectors where transformational leadership has the greatest capacity to drive change.
            </p>
          </Reveal>
        </div>
        {sectors.map((s, i) => {
          const Icon = s.icon;
          const even = i % 2 === 0;
          return (
            <Reveal key={s.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className={`${even ? "lg:order-1" : "lg:order-2"} relative overflow-hidden`}>
                  <img src={s.image} alt={s.title} className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-gold text-white font-heading font-bold w-12 h-12 flex items-center justify-center text-sm">
                    {s.num}
                  </div>
                </div>
                <div className={`${even ? "lg:order-2" : "lg:order-1"} px-12 py-14 flex flex-col justify-center bg-white`}>
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2">
                    {s.focus.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground/70">
                        <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
            {programmes.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <Reveal key={prog.title} delay={i * 60}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">{prog.format}</span>
                        <span className="text-xs text-muted-foreground">{prog.duration}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{prog.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{prog.description}</p>
                      <Link to="/news-events">
                        <button className="group flex items-center gap-3 bg-navy text-white px-7 py-3 text-[10px] font-bold tracking-widest uppercase hover:-translate-y-0.5 transition-all">
                          Apply Now <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Our Projects</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Initiatives in Action</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <Reveal key={proj.title} delay={i * 80}>
                <div className="group border border-border hover:border-gold transition-colors duration-300 h-full flex flex-col overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gold">{proj.category}</span>
                      <span className="text-[9px] font-bold tracking-widest uppercase text-white bg-navy px-2 py-0.5">{proj.status}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{proj.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{proj.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Den Banner */}
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