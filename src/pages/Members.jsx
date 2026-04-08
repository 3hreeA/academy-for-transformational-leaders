import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Check, Users, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Associate",
    icon: Users,
    description: "Entry-level membership for professionals looking to join the ATL community.",
    benefits: ["ATL newsletter & resources", "Invitation to public events", "Online community access", "Sector-specific updates"],
  },
  {
    name: "Full Member",
    icon: Star,
    featured: true,
    description: "Full access to the ATL network, programmes, and leadership development opportunities.",
    benefits: ["All Associate benefits", "Priority programme access", "One-to-one mentorship matching", "ATL Pitch Den eligibility", "Cross-sector networking events", "ATL Summit invitation"],
  },
  {
    name: "Global Member",
    icon: Globe,
    description: "For seasoned professionals seeking international reach and high-level strategic connections.",
    benefits: ["All Full Member benefits", "Global cohort access", "International delegation opportunities", "Board advisory access", "VIP Summit seating"],
  },
];

const whyPoints = [
  "Elite global networking across 15+ countries",
  "One-to-one mentorship & leadership coaching",
  "Access to the ATL Pitch Den seed funding",
  "Exclusive resources, toolkits & opportunities",
  "Cross-sector collaboration & thought leadership",
];

export default function Members() {
  return (
    <div>
      <PageHero
        label="Community"
        title="Join Our"
        titleHighlight="Network"
        subtitle="Become part of a global community of transformational leaders committed to collective good and lasting impact."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
      />

      {/* Why Join */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <img src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg" alt="ATL Members" className="w-full h-[420px] object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <span className="section-label mb-4 inline-block">Why ATL?</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy leading-snug mb-8">More Than a Network</h2>
            <ul className="space-y-5 mb-10">
              {whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="section-label mb-4 inline-block">Membership Tiers</span>
            <span className="gold-rule mx-auto mb-6 block" />
            <h2 className="font-heading text-4xl font-bold text-white">Choose Your Level</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
            {tiers.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.name} delay={i * 80}>
                  <div className={`relative p-10 h-full flex flex-col ${t.featured ? "bg-gold" : "bg-navy-mid hover:bg-navy-light"} transition-colors duration-300`}>
                    {t.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />}
                    <div className={`w-10 h-10 border flex items-center justify-center mb-6 ${t.featured ? "border-white/40" : "border-gold/40"}`}>
                      <Icon className={`w-5 h-5 ${t.featured ? "text-white" : "text-gold"}`} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">{t.name}</h3>
                    <p className={`text-sm leading-relaxed mb-8 ${t.featured ? "text-white/80" : "text-white/50"}`}>{t.description}</p>
                    <ul className="space-y-3 mb-10 flex-grow">
                      {t.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.featured ? "text-white" : "text-gold"}`} />
                          <span className={t.featured ? "text-white/90" : "text-white/60"}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="mt-auto">
                      <button className={`w-full py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 ${t.featured ? "bg-white text-gold hover:bg-white/90" : "border border-gold text-gold hover:bg-gold hover:text-white"}`}>
                        Apply Now
                      </button>
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-navy mb-5">Ready to Join?</h2>
            <p className="text-muted-foreground mb-8">Reach out to our team and take your first step into the ATL community.</p>
            <Link to="/Contact">
              <button className="bg-navy text-white hover:opacity-90 px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Contact Us
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}