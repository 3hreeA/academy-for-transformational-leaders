import { useState, useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
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
}