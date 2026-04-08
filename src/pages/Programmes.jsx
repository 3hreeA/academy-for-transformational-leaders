import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const AnimatedElement = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setIsVisible(true); return; }
    const fallback = setTimeout(() => setIsVisible(true), 800 + delay);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { clearTimeout(fallback); setTimeout(() => setIsVisible(true), delay); observer.unobserve(el); }
    }, { threshold: 0.05, rootMargin: "0px 0px 200px 0px" });
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className || ""}`}>
      {children}
    </div>
  );
};

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
    description: "Tailored leadership tracks for professionals in Higher Education, Business, Media/Church/Third Sector, and Politics & Public Sector. Specialised content for each sector's unique challenges.",
    features: ["Sector-specific curriculum", "Guest expert sessions", "Peer networking", "Certificate of completion"],
  },
  {
    title: "ATL Annual Summit",
    duration: "2 Days",
    format: "In-Person",
    description: "Our flagship annual gathering bringing together ATL members and guests for keynote addresses, panel discussions, workshops, and high-value networking across sectors.",
    features: ["Keynote speakers", "Interactive workshops", "Cross-sector networking", "Recognition awards"],
  },
];

export default function Programmes() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Our<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Programmes</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            Transformational programmes designed to equip leaders with the tools, networks, and confidence to drive real change.
          </p>
        </motion.div>
      </section>

      {/* Programmes */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-10">
          {programmes.map((prog, i) => (
            <AnimatedElement key={prog.title} delay={i * 80}>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center p-8 border border-border rounded-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${i % 2 === 1 ? "bg-muted" : "bg-card"}`}>
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/30 px-2 py-0.5 rounded-full">{prog.format}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{prog.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{prog.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{prog.description}</p>
                  <a href="#">
                    <Button className="bg-primary text-primary-foreground hover:opacity-90 px-5 py-2 text-xs font-bold tracking-wide uppercase flex items-center gap-2 transition-all hover:-translate-y-0.5">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
                <div className={i % 2 === 1 ? "sm:order-1" : ""}>
                  <ul className="space-y-3">
                    {prog.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 px-6 sm:px-12 lg:px-20">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-foreground mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-secondary-foreground/70 mb-8">Contact us to learn more about our programmes and how to get involved.</p>
            <a href="#">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5">
                Get In Touch
              </Button>
            </a>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
}