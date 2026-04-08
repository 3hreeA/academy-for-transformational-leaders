import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "ATL Pitch Den",
    category: "Business & Investment",
    description: "An exclusive platform for business owners to secure seed investment of up to $5,000 and gain valuable mentorship from industry experts and exposure for their brand.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
    status: "Active",
  },
  {
    title: "Leadership Development Programme",
    category: "Education & Training",
    description: "A comprehensive programme equipping transformational leaders with the knowledge, skills, and networks needed to drive progress across sectors.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg",
    status: "Active",
  },
  {
    title: "Global Impact Initiative",
    category: "Community & Governance",
    description: "Strategic engagements bringing together leaders from across the world to tackle shared challenges and co-create solutions for lasting social impact.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
    status: "Upcoming",
  },
  {
    title: "Faith & Leadership Forum",
    category: "Church & Third Sector",
    description: "A dedicated space for faith-driven leaders in churches and nonprofits to exchange ideas, share best practices, and build collaborative networks for social good.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
    status: "Upcoming",
  },
];

export default function Projects() {
  return (
    <div>
      <PageHero
        label="Our Work"
        title="Projects &"
        titleHighlight="Initiatives"
        subtitle="Discover the programmes and projects ATL Global runs to empower leaders and create impact across communities."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg"
      />

      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group border border-border hover:border-gold transition-colors duration-300 overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold">{p.category}</span>
                    <span className={`text-[10px] font-bold px-3 py-1 tracking-wider uppercase ${p.status === "Active" ? "bg-gold/10 text-gold" : "bg-muted text-muted-foreground"}`}>{p.status}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>
                  <a href="#" className="group/link flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gold py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Interested in Partnering With Us?</h2>
            <p className="text-white/70 mb-8">Get in touch to explore how you can collaborate on our projects.</p>
            <Link to="/Contact">
              <button className="bg-navy text-white px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Contact Us
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}