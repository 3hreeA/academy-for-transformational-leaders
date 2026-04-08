import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-secondary flex items-center px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Contact<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ATL Global</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed max-w-xl">
            We'd love to hear from you. Reach out to learn more, join the network, or explore partnership opportunities.
          </p>
        </motion.div>
      </section>

      {/* Contact Body */}
      <section className="bg-background py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <AnimatedElement>
            <h2 className="text-2xl font-bold text-foreground mb-8">Let's Connect</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Unit 82a James Carter Road, Mildenhall,<br />Bury St. Edmunds, Suffolk,<br />England, IP28 7DE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:info@atlglobal.org" className="text-primary text-sm hover:underline">info@atlglobal.org</a>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
                alt="ATL Global"
                className="w-full h-56 object-cover"
              />
            </div>
          </AnimatedElement>

          {/* Form */}
          <AnimatedElement delay={100}>
            {submitted ? (
              <div className="p-10 bg-primary/5 border border-primary/20 rounded-sm text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">Thank you for reaching out. A member of the ATL team will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-muted border-border focus:border-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="bg-muted border-border focus:border-primary" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required className="bg-muted border-border focus:border-primary" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." rows={6} required className="bg-muted border-border focus:border-primary resize-none" />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]" />
                  Send Message
                </Button>
              </form>
            )}
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}