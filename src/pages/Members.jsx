import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Users, Globe, Star } from "lucide-react";

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

const tiers = [
  {
    name: "Associate Member",
    icon: Users,
    description: "Entry-level membership for professionals looking to join the ATL community and begin their leadership journey.",
    benefits: [
      "Access to ATL newsletter & resources",
      "Invitation to public ATL events",
      "Online community access",
      "Sector-specific updates",
    ],
  },
  {
    name: "Full Member",
    icon: Star,
    featured: true,
    description: "Full access to the ATL network, programmes, and exclusive leadership development opportunities.",
    benefits: [
      "All Associate Member benefits",
      "Priority access to ATL programmes",
      "One-to-one mentorship matching",
      "ATL Pitch Den eligibility",
      "Cross-sector networking events",
      "ATL Summit invitation",
    ],
  },
  {
    name: "Global Member",
    icon: Globe,
    description: "For seasoned professionals seeking international reach and high-level strategic connections worldwide.",
    benefits: [
      "All Full Member benefits",
      "Global cohort access",
      "International delegation opportunities",
      "Board advisory access",
      "VIP Summit seating",
    ],
  },
];

export default function Members() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Community</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Join Our<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Network</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            Become part of a global community of transformational leaders committed to collective good and lasting impact.
          </p>
        </motion.div>
      </section>

      {/* Why Join */}
      <section className="bg-muted py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <img src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg" alt="ATL Members" className="w-full h-72 object-cover rounded-sm shadow-xl" />
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Why ATL?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">More Than a Network</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              ATL membership gives you access to a curated community of high-performing professionals who are equally committed to their own growth and the advancement of their sectors. This is not a passive directory — it's an active, vibrant ecosystem of collaboration, mentorship, and mutual accountability.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Whether you are in academia, business, media, or governance, ATL provides the platform and the people to accelerate your leadership impact.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-foreground text-center mb-14">Membership Tiers</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <AnimatedElement key={tier.name} delay={i * 80}>
                  <div className={`relative p-8 rounded-sm border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tier.featured ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border bg-card hover:shadow-primary/5"}`}>
                    {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-0.5 rounded-full tracking-wider">Most Popular</div>}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${tier.featured ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {tier.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="mt-auto">
                      <Button className={`w-full text-xs font-bold tracking-widest uppercase py-2 transition-all hover:-translate-y-0.5 ${tier.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:opacity-90"}`}>
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 px-6 sm:px-12 lg:px-20">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-foreground mb-4">Ready to Join?</h2>
            <p className="text-secondary-foreground/70 mb-8">Reach out to our team and take your first step into the ATL community.</p>
            <a href="#">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5">
                Contact Us
              </Button>
            </a>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
}