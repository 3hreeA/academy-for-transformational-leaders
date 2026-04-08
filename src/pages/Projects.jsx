import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    description: "A series of strategic engagements bringing together leaders from across the world to tackle shared challenges and co-create solutions for lasting social impact.",
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
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Projects &<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Initiatives</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            Discover the programmes and projects ATL Global runs to empower leaders and create impact across communities.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedElement key={project.title} delay={i * 80}>
              <div className="group border border-border rounded-sm overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">{project.category}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${project.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{project.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 sm:px-12 lg:px-20">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Interested in Partnering With Us?</h2>
            <p className="text-primary-foreground/70 mb-8">Get in touch to find out how you can collaborate on our projects or bring ATL to your community.</p>
            <a href="#">
              <Button className="bg-secondary text-secondary-foreground hover:opacity-90 px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5">
                Contact Us
              </Button>
            </a>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
}