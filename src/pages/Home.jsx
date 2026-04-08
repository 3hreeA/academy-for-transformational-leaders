import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Megaphone, Landmark } from "lucide-react";

/* ── Scroll-reveal wrapper ── */
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) { setVisible(true); return; }
    const t = setTimeout(() => setVisible(true), 600 + delay);
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { clearTimeout(t); setTimeout(() => setVisible(true), delay); obs.unobserve(el); }
    }, { threshold: 0.05, rootMargin: "0px 0px 160px 0px" });
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>
  );
};

const sectors = [
  { icon: GraduationCap, title: "Higher Education", desc: "Shaping the next generation of academic and research leaders." },
  { icon: Briefcase,     title: "Business & Private Sector", desc: "Empowering entrepreneurs and executives to build sustainable enterprises." },
  { icon: Megaphone,     title: "Media, Church & Third Sector", desc: "Equipping leaders who shape public discourse and inspire communities." },
  { icon: Landmark,      title: "Politics & Public Sector", desc: "Cultivating ethical, transformational governance across nations." },
];

const stats = [
  { value: "15+", label: "Countries" },
  { value: "200+", label: "Network Members" },
  { value: "4", label: "Strategic Sectors" },
  { value: "5+", label: "Years of Impact" },
];

/* ── HERO ── */
function Hero() {
  const words = ["Leaders", "Communities", "Nations", "the World"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* Grid overlay texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(hsl(38,72%,47%) 1px, transparent 1px), linear-gradient(90deg, hsl(38,72%,47%) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <span className="section-label mb-6 inline-block">Academy for Transformational Leadership</span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-2">
            Transforming
          </h1>
          <div className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] mb-10 h-[1.15em] overflow-hidden">
            <motion.span
              key={idx}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="block text-gold"
            >
              {words[idx]}
            </motion.span>
          </div>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed mb-10 font-body">
            An international leadership network empowering professionals across sectors to drive collective good and global impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/About">
              <button className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30">
                Discover ATL
              </button>
            </Link>
            <Link to="/Members">
              <button className="border border-white/30 text-white/80 hover:border-white hover:text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300">
                Join the Network
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 border-t border-white/10 bg-navy/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map(s => (
            <div key={s.label} className="py-6 px-8 text-center">
              <p className="font-heading text-3xl font-bold text-gold">{s.value}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ── MISSION ── */
function Mission() {
  return (
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <span className="section-label mb-4 inline-block">Who We Are</span>
          <span className="gold-rule mb-8 block" />
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy leading-snug mb-7">
            Leadership is the key to re-imagining the world.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ATL is founded on the belief that transformational leadership — grounded in faith, purpose, and excellence — is the catalyst for lasting change. We equip high-flying professionals with knowledge, skills, and a global network.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            From higher education to business, governance to media, our network spans 15+ countries and continues to grow as a force for collective good.
          </p>
          <Link to="/About">
            <button className="group flex items-center gap-3 text-navy font-semibold text-sm border-b-2 border-gold pb-1 hover:gap-5 transition-all duration-300">
              Our Story <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 pointer-events-none" />
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
              alt="ATL Community"
              className="w-full h-[480px] object-cover relative z-10"
            />
            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-gold text-white p-6 shadow-2xl w-36 text-center">
              <p className="font-heading text-3xl font-bold">5+</p>
              <p className="text-white/80 text-[10px] tracking-widest uppercase mt-1">Years of Impact</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTORS ── */
function Sectors() {
  return (
    <section className="bg-navy py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label mb-4 inline-block">Areas of Focus</span>
              <span className="gold-rule mb-6 block" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-snug max-w-xl">
                Four pillars where leadership creates the greatest ripple.
              </h2>
            </div>
            <Link to="/Sectors" className="flex-shrink-0">
              <button className="group flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
                All Sectors <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group bg-navy hover:bg-navy-mid transition-colors duration-300 p-10 h-full flex flex-col cursor-pointer border border-transparent hover:border-gold/20">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4 leading-snug">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-grow">{s.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-gold text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── PITCH DEN BANNER ── */
function PitchDen() {
  return (
    <section className="bg-gold">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-4">Featured Initiative</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-snug mb-0">
            ATL Pitch Den
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            An exclusive platform for business owners to secure seed investment of up to <strong className="text-white">$5,000</strong> and gain expert mentorship and brand exposure.
          </p>
          <a href="#">
            <button className="bg-navy text-white hover:bg-navy-mid transition-all duration-300 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:-translate-y-0.5 hover:shadow-2xl">
              Apply Now
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ── WHY JOIN ── */
function WhyJoin() {
  const points = [
    "Elite global networking across 15+ countries",
    "One-to-one mentorship & leadership coaching",
    "Access to the ATL Pitch Den seed funding",
    "Exclusive resources, toolkits & opportunities",
    "Cross-sector collaboration & thought leadership",
  ];

  return (
    <section className="bg-muted py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg"
              alt="Why Join"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="section-label mb-4 inline-block">Membership</span>
          <span className="gold-rule mb-8 block" />
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy leading-snug mb-8">
            Why Join ATL?
          </h2>
          <ul className="space-y-5 mb-10">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/80 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/Members">
            <button className="bg-navy text-white hover:bg-navy-mid transition-all duration-300 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:-translate-y-0.5">
              View Membership Options
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CORE VALUES ── */
function CoreValues() {
  const values = [
    { title: "Faith-Driven", body: "Guided by Christian ethos — leadership as a spiritual responsibility." },
    { title: "Collective Impact", body: "Together we achieve more than individual efforts ever could." },
    { title: "Empowering Others", body: "True success is measured by how much we lift those around us." },
    { title: "Continuous Growth", body: "Excellence demands lifelong learning and skill development." },
  ];

  return (
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Foundations</span>
          <span className="gold-rule mx-auto mb-6 block" />
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy">Our Core Values</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group p-8 border border-border hover:border-gold transition-colors duration-300 h-full">
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── KEYNOTE EXCERPT ── */
function Keynote() {
  return (
    <section className="bg-navy py-28 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        <Reveal className="lg:col-span-4">
          <img
            src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
            alt="Prof Seun Kolade"
            className="w-full h-[420px] object-cover object-top"
          />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8 flex flex-col justify-center">
          <span className="section-label mb-4 inline-block">Keynote Address</span>
          <span className="gold-rule mb-8 block" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
            "Leadership is not a position — it is a calling to reshape the world."
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-4 italic">
            Delivered by Prof. Seun Kolade · Group Launching Event · March 1st, 2025
          </p>
          <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
            In 331 BC, Alexander the Great stood before an army two to three times the size of his own at Gaugamela. His victory lay not in numbers, but in strategy, discipline, and the power of collective vision — a lesson as vital today for transformational leaders as it was then.
          </p>
          <a href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className="group flex items-center gap-3 text-gold text-xs font-bold tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-all">
              Read Full Address <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ── GALLERY ── */
function Gallery() {
  const imgs = [
    "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
    "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg",
    "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  ];
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="aspect-[4/3] overflow-hidden group">
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="relative bg-navy py-32 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(hsl(38,72%,47%) 1px, transparent 1px), linear-gradient(90deg, hsl(38,72%,47%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <Reveal>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="section-label mb-6 inline-block">Take Action</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Lead. Inspire.<br />Transform.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Join a global network of changemakers dedicated to reshaping their sectors and the world.
          </p>
          <Link to="/Contact">
            <button className="bg-gold hover:bg-gold-dark text-white px-10 py-5 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/30">
              Contact Us To Know More
            </button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Sectors />
      <PitchDen />
      <WhyJoin />
      <CoreValues />
      <Keynote />
      <Gallery />
      <CTA />
    </div>
  );
}