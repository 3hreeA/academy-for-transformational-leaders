import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { GraduationCap, Briefcase, Megaphone, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: GraduationCap,
    num: "01",
    title: "Higher Education",
    description: "Supporting professionals in achieving leadership roles in academia and research, fostering intellectual excellence, and creating opportunities for the next generation.",
    detail: "Our Higher Education network includes vice-chancellors, professors, heads of department, and aspiring academic leaders committed to reshaping the landscape of learning and research. ATL provides a platform for knowledge exchange, peer mentorship, and collaborative research initiatives.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  },
  {
    icon: Briefcase,
    num: "02",
    title: "Business & Private Sector",
    description: "Empowering business leaders and entrepreneurs with strategic insights, mentorship, and networking to build sustainable enterprises that drive collective wealth.",
    detail: "From start-up founders to seasoned executives, our Business & Private Sector network is built for those who understand that business success must be coupled with social responsibility. We offer the ATL Pitch Den, executive roundtables, and peer advisory groups.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Media, Church & Third Sector",
    description: "Equipping leaders in media, Churches, and nonprofits with the tools to influence public discourse, inspire communities, and drive social change.",
    detail: "Leaders in this sector shape culture, faith communities, and public narratives. ATL's network offers leadership formation rooted in integrity, purpose, and collective responsibility.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  },
  {
    icon: Landmark,
    num: "04",
    title: "Politics & Public Sector",
    description: "Developing transformational leaders for impactful roles in government and public service, ensuring ethical governance and progressive policies.",
    detail: "ATL works with current and aspiring politicians, civil servants, and public policy experts to cultivate a culture of servant leadership and ethical governance, creating spaces for cross-sector collaboration on policy and social development.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  },
];

export default function Sectors() {
  return (
    <div>
      <PageHero
        label="Areas of Focus"
        title="Our Strategic"
        titleHighlight="Sectors"
        subtitle="ATL focuses on four pillars of society where transformational leadership creates the greatest ripple effects."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg"
      />

      <section className="bg-white py-0">
        {sectors.map((s, i) => {
          const Icon = s.icon;
          const even = i % 2 === 0;
          return (
            <Reveal key={s.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className={`${even ? "lg:order-1" : "lg:order-2"} relative overflow-hidden`}>
                  <img src={s.image} alt={s.title} className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-gold text-white font-heading text-4xl font-bold w-14 h-14 flex items-center justify-center text-sm">
                    {s.num}
                  </div>
                </div>
                <div className={`${even ? "lg:order-2" : "lg:order-1"} px-12 py-16 flex flex-col justify-center bg-white`}>
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-navy mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-gold py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Which Sector Are You In?</h2>
            <p className="text-white/70 mb-8">Join ATL and connect with leaders who share your context and ambitions.</p>
            <Link to="/Members">
              <button className="bg-navy text-white px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Join Our Network
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}