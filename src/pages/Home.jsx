import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Megaphone, Landmark, ChevronLeft, ChevronRight, ArrowRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";

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
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className || ""}`}>
      {children}
    </div>
  );
};

const ICON_MAP = { GraduationCap, Briefcase, Megaphone, Landmark };

function HeroSection() {
  const words = ["Leaders...", "Communities...", "Nations...", "the World..."];
  const [wordIdx, setWordIdx] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-background flex flex-col pt-20">
      {/* Cityscape Silhouette Watermark */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' fill-opacity=\'1\' d=\'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'bottom' }} />
      
      {/* Ambient glows */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left text panel */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[3.5rem] sm:text-7xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-foreground mb-1">
              Transforming
            </h1>
            <h1 className="text-[3.5rem] sm:text-7xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight mb-10 h-[1.2em]">
              <span className="text-primary bg-clip-text">
                {words[wordIdx]}
              </span>
            </h1>
            
            <Link to="/Contact">
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-sm">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Floating decoratives */}
          <div className="absolute top-1/4 right-20 w-4 h-4 border-2 border-primary/30 rounded-full pointer-events-none" style={{ animation: "floatA 6s ease-in-out infinite" }} />
          <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-primary/40 rounded-full pointer-events-none" style={{ animation: "floatB 8s ease-in-out 1s infinite" }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-foreground/20 rounded-full pointer-events-none" style={{ animation: "floatA 5s ease-in-out 2s infinite" }} />
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative min-h-[50vh] lg:min-h-full w-full h-full lg:pl-10 pb-10 pr-10 lg:py-10"
        >
          <div className="w-full h-full relative overflow-hidden rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
              alt="ATL Global Leaders"
              className="w-full h-full object-cover object-center transform transition-transform duration-[20s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 to-transparent pointer-events-none mix-blend-multiply" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (base44?.entities?.Sector) {
      base44.entities.Sector.list().then(setSectors).catch(() => {}).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const staticFallback = [
    { title: "Higher\nEducation", description: "Supporting professionals in achieving leadership roles in academia and research, fostering intellectual excellence, and creating opportunities for the next generation.", icon: "GraduationCap" },
    { title: "Business &\nPrivate Sector", description: "Empowering business leaders and entrepreneurs with strategic insights, mentorship, and networking to build sustainable enterprises that drive collective wealth.", icon: "Briefcase" },
    { title: "Media, Church &\nThird Sector", description: "Equipping leaders in media, Churches, and nonprofits with the tools to influence public discourse, inspire communities, and drive social change.", icon: "Megaphone" },
    { title: "Politics &\nPublic Sector", description: "Developing transformational leaders for impactful roles in government and public service, ensuring ethical governance and progressive policies that uplift communities.", icon: "Landmark" },
  ];
  const items = sectors.length > 0 ? sectors : staticFallback;

  return (
    <section className="bg-[#24252a] text-white py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedElement>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] max-w-4xl mb-20 text-white">
            ATL is an international leadership network empowering high-flying professionals across strategic sectors to drive collective good and global impact.
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {items.map((sector, i) => {
            const Icon = ICON_MAP[sector.icon] || Briefcase;
            return (
              <AnimatedElement key={sector.title || i} delay={i * 100}>
                <div className="group h-full flex flex-col items-start p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h4 className="font-bold text-xl sm:text-2xl mb-4 whitespace-pre-line leading-tight text-white group-hover:text-primary transition-colors">
                    {sector.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {sector.description}
                  </p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
        
        <AnimatedElement delay={400}>
          <Link to="/About">
            <Button className="bg-[#cd9a35] hover:bg-[#b8892f] text-white px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-sm">
              Learn More
            </Button>
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
}

function PitchDenSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="bg-[#cd9a35] py-20 px-8 sm:px-16 lg:px-24 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
        <AnimatedElement className="w-full max-w-lg relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
            ATL Pitch Den<br />Application Form
          </h2>
        </AnimatedElement>
      </div>
      
      {/* Right Side */}
      <div className="bg-[#b8892f] py-20 px-8 sm:px-16 lg:px-24 flex items-center justify-center relative">
        <AnimatedElement delay={200} className="w-full max-w-lg">
          <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed mb-10">
            The ATL Pitch Den is an exclusive platform for business owners to secure a seed investment of up to $5,000 and gain valuable mentorship from industry experts and exposure for their brand.
          </p>
          <a href="#">
            <Button className="bg-[#1a1a1a] text-white hover:bg-black px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-sm">
              Click Here To Fill The Form
            </Button>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-background py-24 px-6 sm:px-12 lg:px-20 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedElement>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
              alt="ATL Global Trust"
              className="relative z-10 w-full h-auto rounded-sm shadow-xl object-cover"
            />
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={200} className="lg:pl-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">You can always Trust Us</h3>
          <p className="text-foreground/80 leading-relaxed text-lg mb-6">
            ATL is founded on the belief that leadership is the key to re-imagining and reshaping the world. We equip transformational leaders with knowledge, skills, and a strong network to foster progress in education, business, media, governance, and beyond.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  const benefits = [
    "Elite networking opportunities",
    "Leadership mentorship & skill development",
    "Strategic support for professional growth",
    "Access to exclusive resources & global impact projects",
  ];
  
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="bg-[#cd9a35] py-24 px-8 sm:px-16 lg:px-24 flex items-center justify-end">
        <AnimatedElement className="w-full max-w-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">Why Join Us?</h2>
          <ul className="space-y-6">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-150" />
                <span className="text-foreground font-bold text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </AnimatedElement>
      </div>
      
      {/* Right Side */}
      <div className="relative min-h-[50vh] lg:min-h-full">
        <AnimatedElement delay={200} className="h-full">
          <img
            src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg"
            alt="Why Join ATL"
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatedElement>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const [coreValues, setCoreValues] = useState([]);
  
  useEffect(() => {
    if (base44?.entities?.CoreValue) {
      base44.entities.CoreValue.list("order").then(setCoreValues).catch(() => {});
    }
  }, []);

  const staticFallback = [
    { title: "Faith-Driven\nLeadership", description: "Guided by Christian ethos, we see leadership as a spiritual responsibility.", icon_url: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/5fa5833ae_svg_003.svg" },
    { title: "Empowering\nOthers", description: "True success is measured by how much we lift others.", icon_url: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/cf2ca2f71_svg_004.svg" },
    { title: "Collective\nImpact", description: "Together, we achieve more than individual efforts can.", icon_url: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/5b035e101_svg_005.svg" },
    { title: "Continuous\nGrowth", description: "Excellence requires lifelong learning and skill development.", icon_url: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/7d8fb7903_svg_006.svg" },
  ];
  const items = coreValues.length > 0 ? coreValues : staticFallback;

  return (
    <section className="bg-[#f4f4f4] py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedElement>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-20">Our Core Values</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {items.map((val, i) => (
            <AnimatedElement key={val.title || i} delay={i * 150}>
              <div className="group flex flex-col items-center">
                <div className="h-20 w-20 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  <img src={val.icon_url} alt={val.title} className="w-16 h-16 object-contain filter drop-shadow-md" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(42%) saturate(996%) hue-rotate(10deg) brightness(91%) contrast(85%)' }} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-4 whitespace-pre-line leading-tight">{val.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed max-w-[250px]">{val.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { src: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg", alt: "ATL Event 1" },
    { src: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg", alt: "ATL Event 2" },
    { src: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg", alt: "ATL Event 3" },
  ];

  return (
    <section className="bg-background py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <AnimatedElement key={i} delay={i * 200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm group shadow-lg">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
              </div>
            </AnimatedElement>
          ))}
        </div>
        <AnimatedElement delay={600} className="flex justify-center gap-2 mt-8">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 2 ? "bg-primary w-3" : "bg-border"}`} />
            ))}
        </AnimatedElement>
      </div>
    </section>
  );
}

function KeynoteSection() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <AnimatedElement className="lg:col-span-5">
          <div className="relative rounded-sm overflow-hidden shadow-2xl group">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg"
              alt="ATL Prof Kolade"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={200} className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            Keynote address from the Group Launching Event, Delivered by Prof. Seun Kolade - March 1st, 2025
          </h2>
          <div className="space-y-6 text-foreground/70 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              Ladies and gentlemen, let me begin by taking you back over two thousand years ago to the vast, open plains of Gaugamela, where one of history's most remarkable battles unfolded. In 331 BC, Alexander the Great stood before the colossal army of the Persian Emperor Darius III. The Macedonian force, numbering around 47,000, faced an opponent that outnumbered them by at least two to one, possibly three. The Persians had the advantage in manpower, chariots armed with scythed wheels, war elephants, and an empire's worth of resources. By all conventional wisdom, the Macedonians should have been swallowed whole.
            </p>
            <p>
              But something extraordinary happened that day. Alexander's army, though smaller, was not weaker. It was meticulously trained, its movements rehearsed with near-perfect precision...
            </p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block">
              <span className="text-foreground font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                Read Full Address <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg" 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-[#24252a]/90 backdrop-blur-sm" />
      </div>

      <AnimatedElement>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Join a Network of Changemakers.
          </h2>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Lead. Inspire. Transform.
          </h2>
          
          <div className="flex justify-center">
            <Link to="/Contact">
              <Button className="bg-[#cd9a35] hover:bg-[#b8892f] text-white px-10 py-7 text-xs font-bold tracking-widest uppercase relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#cd9a35]/40 rounded-sm">
                Contact Us To Know More
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedElement>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatA { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
      `}} />
      <HeroSection />
      <MissionSection />
      <PitchDenSection />
      <TrustSection />
      <WhyJoinSection />
      <CoreValuesSection />
      <GallerySection />
      <KeynoteSection />
      <CTASection />
    </div>
  );
}