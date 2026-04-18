import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, GraduationCap, Briefcase, Megaphone, Landmark, ChevronRight } from "lucide-react";

/* ── Scroll-reveal ── */
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
    <div ref={ref} className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const stats = [
  { value: "15+", label: "Countries", sub: "of global reach" },
  { value: "200+", label: "Members", sub: "senior-level leaders" },
  { value: "4", label: "Sectors", sub: "strategic pillars" },
  { value: "5+", label: "Years", sub: "of impact" },
];

const sectors = [
  { icon: GraduationCap, title: "Higher Education", desc: "Shaping the next generation of academic and research leaders.", tag: "01" },
  { icon: Briefcase, title: "Business & Private Sector", desc: "Empowering entrepreneurs and executives to build sustainable enterprises.", tag: "02" },
  { icon: Megaphone, title: "Media, Church & Third Sector", desc: "Equipping leaders who shape public discourse and inspire communities.", tag: "03" },
  { icon: Landmark, title: "Politics & Public Sector", desc: "Cultivating ethical, transformational governance across nations.", tag: "04" },
];

const values = [
  { title: "Faith-Driven", body: "Guided by Christian ethos — leadership as a spiritual responsibility." },
  { title: "Collective Impact", body: "Together we achieve more than individual efforts ever could." },
  { title: "Empowering Others", body: "True success is measured by how much we lift those around us." },
  { title: "Continuous Growth", body: "Excellence demands lifelong learning and skill development." },
];

/* ── HERO ── */
function Hero() {
  const words = ["Leaders", "Communities", "Nations", "the World"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#080E1C] overflow-hidden flex flex-col">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block bg-[#080E1C]" />
        <div className="absolute inset-0 lg:relative opacity-20 lg:opacity-100">
          <img
            src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080E1C] via-[#080E1C]/60 to-transparent lg:via-[#080E1C]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1C] via-transparent to-transparent" />
        </div>
      </div>

      {/* Thin gold vertical line accent */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gold/10 hidden lg:block" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(38,72%,47%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-20 pt-36 pb-24 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Academy for Transformational Leadership</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.02] mb-3">
            Transforming
          </h1>
          <div className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.02] mb-10 overflow-hidden h-[1.12em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{ color: "#C49A2E" }}
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-white/50 text-base lg:text-lg max-w-md leading-relaxed mb-12 font-light">
            An international leadership network empowering professionals across sectors to drive collective good and global impact.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/who-we-are">
              <button className="group relative overflow-hidden bg-gold text-white px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-gold/25">
                <span className="relative z-10 flex items-center gap-2">Discover ATL <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
                <div className="absolute inset-0 bg-[#9E7A22] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/join-us" className="group flex items-center gap-2 text-white/50 text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
              Join the Network <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="border-t border-white/10 grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-7 px-6 ${i < 3 ? "border-r border-white/10" : ""}`}>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-gold mb-0.5">{s.value}</p>
                <p className="text-white text-xs font-semibold">{s.label}</p>
                <p className="text-white/30 text-[10px] mt-0.5 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── MISSION ── */
function Mission() {
  return (
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top label row */}
        <Reveal className="flex items-center gap-4 mb-16">
          <span className="w-6 h-px bg-gold" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Who We Are</span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: headline */}
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#080E1C] leading-[1.1]">
              Leadership is the key to re-imagining the world.
            </h2>
          </Reveal>

          {/* Right: copy + image */}
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-gray-500 leading-relaxed text-base mb-5">
              ATL is founded on the belief that transformational leadership — grounded in faith, purpose, and excellence — is the catalyst for lasting change. We equip high-flying professionals with knowledge, skills, and a global network.
            </p>
            <p className="text-gray-500 leading-relaxed text-base mb-10">
              From higher education to business, governance to media, our network spans 15+ countries and continues to grow as a force for collective good.
            </p>
            <Link to="/who-we-are">
              <button className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#080E1C] border-b border-gold pb-1 hover:text-gold transition-colors">
                Our Story <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </Reveal>
        </div>

        {/* Image row */}
        <Reveal delay={200} className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 h-80 lg:h-[420px] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
                alt="ATL Community"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-4 bg-[#080E1C] p-10 flex flex-col justify-between h-80 lg:h-[420px]">
              <p className="font-heading text-4xl font-bold text-gold">5+</p>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Years of Impact</p>
                <p className="text-white/40 text-xs leading-relaxed">Building transformational leaders across continents since 2019.</p>
              </div>
              <div className="w-12 h-px bg-gold/40" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTORS ── */
function Sectors() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#F7F6F3] py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-gold" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Areas of Focus</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#080E1C] leading-[1.1] max-w-lg">
              Four pillars where leadership creates the greatest ripple.
            </h2>
          </div>
          <Link to="/what-we-do" className="flex-shrink-0">
            <button className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#080E1C] border-b border-[#080E1C]/30 pb-1 hover:border-gold hover:text-gold transition-all">
              All Sectors <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div
                  className="group relative bg-white p-8 h-full cursor-pointer transition-all duration-500 hover:bg-[#080E1C] hover:shadow-2xl hover:shadow-[#080E1C]/20 overflow-hidden"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Number */}
                  <p className="text-[10px] font-bold tracking-widest text-gray-300 group-hover:text-white/20 mb-6 transition-colors">{s.tag}</p>

                  {/* Icon */}
                  <div className="w-10 h-10 border border-gray-200 group-hover:border-gold/40 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-gold" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#080E1C] group-hover:text-white mb-3 transition-colors leading-snug">{s.title}</h3>
                  <p className="text-gray-400 group-hover:text-white/50 text-sm leading-relaxed transition-colors">{s.desc}</p>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center gap-2 text-gold text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── PITCH DEN ── */
function PitchDen() {
  return (
    <section className="relative overflow-hidden bg-[#080E1C] py-28 px-6 lg:px-20">
      {/* Gold accent block */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold/5 hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gold/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-gold" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Featured Initiative</span>
            </div>
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-0">
              ATL<br /><span className="text-gold">Pitch Den</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              An exclusive platform for business owners to secure seed investment of up to <span className="text-white font-semibold">$5,000</span> and gain expert mentorship and brand exposure.
            </p>
            <a href="#">
              <button className="group relative overflow-hidden border border-gold text-gold px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:text-white">
                <span className="relative z-10 flex items-center gap-2">Apply Now <ArrowUpRight className="w-3.5 h-3.5" /></span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </a>
          </Reveal>
        </div>
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
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-gold" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Membership</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#080E1C] leading-[1.1] mb-10">
            Why Join ATL?
          </h2>
          <ul className="space-y-0 mb-10">
            {points.map((p, i) => (
              <li key={i} className="group flex items-center gap-5 py-4 border-b border-gray-100 hover:border-gold/40 transition-colors cursor-default">
                <span className="text-[10px] text-gold font-bold tracking-widest min-w-[1.5rem]">0{i + 1}</span>
                <span className="text-gray-600 text-sm leading-relaxed group-hover:text-[#080E1C] transition-colors">{p}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </li>
            ))}
          </ul>
          <Link to="/join-us">
            <button className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#080E1C] border-b border-gold pb-1 hover:text-gold transition-colors">
              View Membership Options <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg"
              alt="Why Join"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-gold/10 border border-gold/30 backdrop-blur-sm p-6 max-w-[200px]">
              <p className="font-heading text-3xl font-bold text-[#080E1C]">200+</p>
              <p className="text-[10px] tracking-widest uppercase text-gray-500 mt-1">Senior Leaders</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CORE VALUES ── */
function CoreValues() {
  return (
    <section className="bg-[#F7F6F3] py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-16 flex-col sm:flex-row gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-gold" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Foundations</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#080E1C] leading-[1.1]">Our Core Values</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="group bg-[#F7F6F3] hover:bg-white p-10 h-full transition-colors duration-300">
                <p className="text-[10px] font-bold tracking-widest text-gold mb-6">0{i + 1}</p>
                <div className="w-8 h-0.5 bg-gold mb-6 transition-all group-hover:w-14 duration-300" />
                <h3 className="font-heading text-xl font-bold text-[#080E1C] mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── KEYNOTE ── */
function Keynote() {
  return (
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-center gap-3 mb-16">
          <span className="w-6 h-px bg-gold" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Keynote Address</span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4">
            <div className="relative">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
                alt="Prof Seun Kolade"
                className="w-full h-[480px] object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1C]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-sm font-semibold">Prof. Seun Kolade</p>
                <p className="text-white/50 text-xs">Founding Patron, ATL Global</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8 flex flex-col justify-center pt-4">
            <div className="text-gold font-heading text-8xl lg:text-9xl leading-none opacity-20 mb-2 select-none">"</div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#080E1C] leading-[1.2] mb-8 -mt-6">
              Leadership is not a position — it is a calling to reshape the world.
            </h2>
            <p className="text-gray-400 text-xs mb-6 italic tracking-wide">
              Group Launching Event · March 1st, 2025
            </p>
            <p className="text-gray-500 leading-relaxed text-base mb-10 max-w-2xl">
              In 331 BC, Alexander the Great stood before an army two to three times the size of his own at Gaugamela. His victory lay not in numbers, but in strategy, discipline, and the power of collective vision — a lesson as vital today for transformational leaders as it was then.
            </p>
            <a
              href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link"
              target="_blank" rel="noopener noreferrer"
            >
              <button className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#080E1C] border-b border-gold pb-1 hover:text-gold transition-colors">
                Read Full Address <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </Reveal>
        </div>
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
    <section className="bg-[#F7F6F3] py-0">
      <div className="grid grid-cols-3">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="aspect-[4/3] overflow-hidden group relative">
              <img src={src} alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-[#080E1C]/0 group-hover:bg-[#080E1C]/10 transition-all duration-500" />
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
    <section className="relative bg-[#080E1C] py-36 px-6 lg:px-20 overflow-hidden">
      {/* Subtle gold gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 blur-[100px] pointer-events-none rounded-full" />

      <Reveal>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-6 h-px bg-gold" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">Take Action</span>
            <span className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Lead. Inspire.<br />
            <span className="text-gold">Transform.</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Join a global network of changemakers dedicated to reshaping their sectors and the world.
          </p>
          <Link to="/news-events">
            <button className="group relative overflow-hidden bg-gold text-white px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20">
              <span className="relative z-10 flex items-center gap-3">Contact Us To Know More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              <div className="absolute inset-0 bg-[#9E7A22] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default function Clone1() {
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