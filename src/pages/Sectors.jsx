import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Megaphone, Landmark } from "lucide-react";

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

const sectors = [
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Supporting professionals in achieving leadership roles in academia and research, fostering intellectual excellence, and creating opportunities for the next generation.",
    detail: "Our Higher Education network includes vice-chancellors, professors, heads of department, and aspiring academic leaders who are committed to reshaping the landscape of learning and research. ATL provides a platform for knowledge exchange, peer mentorship, and collaborative research initiatives.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
  },
  {
    icon: Briefcase,
    title: "Business & Private Sector",
    description: "Empowering business leaders and entrepreneurs with strategic insights, mentorship, and networking to build sustainable enterprises that drive collective wealth.",
    detail: "From start-up founders to seasoned executives, our Business & Private Sector network is built for those who understand that business success must be coupled with social responsibility. We offer the ATL Pitch Den, executive roundtables, and peer advisory groups.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    icon: Megaphone,
    title: "Media, Church & Third Sector",
    description: "Equipping leaders in media, Churches, and nonprofits with the tools to influence public discourse, inspire communities, and drive social change.",
    detail: "Leaders in this sector shape culture, faith communities, and public narratives. ATL's network for media professionals, church leaders, and NGO directors offers leadership formation rooted in integrity, purpose, and collective responsibility.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  },
  {
    icon: Landmark,
    title: "Politics & Public Sector",
    description: "Developing transformational leaders for impactful roles in government and public service, ensuring ethical governance and progressive policies that uplift communities.",
    detail: "ATL works with current and aspiring politicians, civil servants, and public policy experts to cultivate a culture of servant leadership and ethical governance. Our network creates spaces for cross-sector collaboration on policy and social development.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  },
];

export default function Sectors() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Areas of Focus</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Our Strategic<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sectors</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            ATL focuses on four pillars of society where transformational leadership creates the greatest ripple effects.
          </p>
        </motion.div>
      </section>

      {/* Sectors */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <AnimatedElement key={sector.title} delay={i * 80}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 items-center`}>
                  <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{sector.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-base mb-4">{sector.description}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{sector.detail}</p>
                  </div>
                  <div className={`relative ${i % 2 === 1 ? "sm:order-1" : ""}`}>
                    <img src={sector.image} alt={sector.title} className="w-full h-64 object-cover rounded-sm shadow-xl" />
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </div>
                {i < sectors.length - 1 && <div className="mt-16 border-b border-border" />}
              </AnimatedElement>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 sm:px-12 lg:px-20">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Which Sector Are You In?</h2>
            <p className="text-primary-foreground/70 mb-8">Join ATL and connect with leaders who share your context and ambitions.</p>
            <a href="#">
              <Button className="bg-secondary text-secondary-foreground hover:opacity-90 px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5">
                Join Our Network
              </Button>
            </a>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
}