import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, Lightbulb } from "lucide-react";

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

const stats = [
  { label: "Countries Represented", value: "15+", icon: Globe },
  { label: "Network Members", value: "200+", icon: Users },
  { label: "Strategic Sectors", value: "4", icon: Award },
  { label: "Years of Impact", value: "5+", icon: Lightbulb },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[48vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">About ATL Global</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Empowering Leaders.<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-x">Shaping the Future.</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            The Academy for Transformative Leadership is a global network uniting professionals committed to driving meaningful change across sectors.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-background py-16 px-6 sm:px-12 lg:px-20 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedElement key={s.label} delay={i * 80}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-foreground mb-1">{s.value}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14 items-center">
          <AnimatedElement>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-5">
                ATL is an international leadership network empowering high-flying professionals across strategic sectors to drive collective good and global impact. We believe that transformational leadership is the catalyst for a better world.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-5">
                ATL is founded on the belief that leadership is the key to re-imagining and reshaping the world. We equip transformational leaders with knowledge, skills, and a strong network to foster progress in education, business, media, governance, and beyond.
              </p>
              <Link to="/">
                <Button className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  Explore Our Sectors <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={120}>
            <div className="relative">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
                alt="ATL Global Community"
                className="w-full h-auto rounded-sm shadow-2xl object-cover"
              />
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-secondary py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14 items-center">
          <AnimatedElement>
            <div className="relative order-2 sm:order-1">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg"
                alt="ATL Leadership"
                className="w-full h-auto rounded-sm shadow-2xl object-cover"
              />
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </AnimatedElement>
          <AnimatedElement delay={100} className="order-1 sm:order-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6 leading-tight">
                Building a Community of Transformational Leaders
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed text-base mb-5">
                ATL was born from a vision to create an interconnected global community of leaders who are not only accomplished in their fields but are committed to using their influence for collective good. Our network spans multiple countries and sectors.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed text-base">
                From our Group Launching Event in March 2025 to our ongoing programmes and initiatives, ATL continues to grow as a catalyst for meaningful change. We are guided by faith-driven values and a deep commitment to excellence, integrity, and service.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Prof Kolade Keynote */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <AnimatedElement>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Featured Keynote</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-snug">
              Keynote address from the Group Launching Event, Delivered by Prof. Seun Kolade - March 1st, 2025
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
              <p>
                Ladies and gentlemen, let me begin by taking you back over two thousand years ago to the vast, open plains of Gaugamela, where one of history's most remarkable battles unfolded. In 331 BC, Alexander the Great stood before the colossal army of the Persian Emperor Darius III. The Macedonian force, numbering around 47,000, faced an opponent that outnumbered them by at least two to one, possibly three.
              </p>
              <p>
                But something extraordinary happened that day. Alexander's army, though smaller, was not weaker. It was meticulously trained, its movements rehearsed with near-perfect precision. It was disciplined, each soldier knowing not just his role but how it connected to the greater vision of victory. And above all, it was strategically organised...
              </p>
            </div>
            <a href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                Read Full Address <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </AnimatedElement>
          <AnimatedElement delay={120}>
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
              alt="Prof Seun Kolade"
              className="w-full h-auto rounded-sm shadow-2xl object-cover"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")' }} />
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-5 leading-tight">
              Ready to Join Our Network?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg leading-relaxed">
              Connect with high-flying professionals and transformational leaders from around the world.
            </p>
            <a href="#">
              <Button className="bg-secondary text-secondary-foreground hover:opacity-90 px-8 py-4 text-sm font-bold tracking-widest uppercase relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-foreground/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]" />
                Contact Us to Know More
              </Button>
            </a>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
}