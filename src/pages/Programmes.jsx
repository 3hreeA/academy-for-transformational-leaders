import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const programmes = [
  {
    title: "ATL Leadership Accelerator",
    duration: "6 Months",
    format: "Online & In-Person",
    description: "An intensive development journey for mid-to-senior level professionals ready to take their leadership to a global stage. Covers strategic thinking, influence, and impact creation.",
    features: ["Executive coaching sessions", "Peer learning cohorts", "Global mentorship access", "Leadership project capstone"],
  },
  {
    title: "ATL Pitch Den",
    duration: "Rolling Applications",
    format: "In-Person",
    description: "A competitive pitching programme giving business owners the chance to win seed funding up to $5,000 and gain mentorship from seasoned entrepreneurs and investors.",
    features: ["Up to $5,000 seed investment", "Expert panel mentorship", "Brand exposure opportunities", "Ongoing network support"],
  },
  {
    title: "Sector Leadership Tracks",
    duration: "3 Months",
    format: "Online",
    description: "Tailored leadership tracks for professionals in Higher Education, Business, Media/Church/Third Sector, and Politics & Public Sector.",
    features: ["Sector-specific curriculum", "Guest expert sessions", "Peer networking", "Certificate of completion"],
  },
  {
    title: "ATL Annual Summit",
    duration: "2 Days",
    format: "In-Person",
    description: "Our flagship annual gathering with keynote addresses, panel discussions, workshops, and high-value networking across sectors.",
    features: ["Keynote speakers", "Interactive workshops", "Cross-sector networking", "Recognition awards"],
  },
];

export default function Programmes() {
  return (
    <div>
      <PageHero
        label="What We Offer"
        title="Our"
        titleHighlight="Programmes"
        subtitle="Transformational programmes designed to equip leaders with the tools, networks, and confidence to drive real change."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
      />

      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-0 divide-y divide-border">
          {programmes.map((prog, i) => (
            <Reveal key={prog.title} delay={i * 60}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">{prog.format}</span>
                    <span className="text-xs text-muted-foreground">{prog.duration}</span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-navy mb-4">{prog.title}</h3>
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
      </section>

      <section className="bg-navy py-20 px-6 lg:px-20">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-white mb-5">Ready to Begin Your Journey?</h2>
            <p className="text-white/50 mb-8">Contact us to learn more about our programmes and how to get involved.</p>
            <Link to="/Contact">
              <button className="border border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:-translate-y-0.5">
                Get In Touch
              </button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}