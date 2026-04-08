import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, ArrowRight, Network, BookOpen, Briefcase, Award, Globe, Target } from "lucide-react";

const benefits = [
  {
    icon: Network,
    title: "Global Network Access",
    body: "Connect with 500+ high-flying professionals across UK, US, Nigeria, and beyond. Our advanced member directory makes finding collaborators effortless.",
  },
  {
    icon: BookOpen,
    title: "Exclusive Resources",
    body: "Access our Expertise Vault with 100+ templates, guides, and toolkits covering public procurement, leadership development, and more.",
  },
  {
    icon: Briefcase,
    title: "Opportunity Pipeline",
    body: "First access to board positions, consulting engagements, and international development projects shared exclusively within our community.",
  },
  {
    icon: Award,
    title: "Leadership Development",
    body: "Participate in our Executive Leadership Programme, Emerging Leaders Fellowship, and sector-specific masterclasses.",
  },
  {
    icon: Globe,
    title: "Cross-Continental Events",
    body: "Attend our Global Leadership Summit, monthly network meetings, and sector symposiums across three continents.",
  },
  {
    icon: Target,
    title: "Collective Impact",
    body: "Collaborate on transformational projects and initiatives that drive systemic change across the African diaspora.",
  },
];

const criteria = [
  "Demonstrated leadership in your field",
  "Commitment to collective synergy and impact",
  "Connection to the African diaspora",
  "Senior-level professional experience",
  "Willingness to contribute expertise to the community",
];

const steps = [
  { num: "1", title: "Submit Application", body: "Complete detailed application form" },
  { num: "2", title: "Initial Review", body: "2–3 weeks review period" },
  { num: "3", title: "Interview", body: "Conversation with selection committee" },
  { num: "4", title: "Onboarding", body: "Join the ATL community" },
];

export default function JoinUs() {
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      <PageHero
        label="Join ATL"
        title="Become Part of"
        titleHighlight="Something Greater"
        subtitle="Join a global network of transformational leaders committed to collective impact, faith-driven excellence, and lasting change."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
      />

      {/* Member Benefits */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16 text-center">
            <span className="section-label mb-4 inline-block">Membership</span>
            <span className="gold-rule mx-auto mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Member Benefits</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 70}>
                  <div className="p-8 border border-border hover:border-gold transition-colors duration-300 h-full">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-3">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Criteria */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="section-label mb-4 inline-block">Standards</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy mb-6">Membership Criteria</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              ATL maintains high standards to ensure a community of exceptional leaders committed to collective impact. Prospective members should demonstrate:
            </p>
            <ul className="space-y-5">
              {criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
              alt="ATL Leadership"
              className="w-full h-[420px] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="section-label mb-4 inline-block">How It Works</span>
            <span className="gold-rule mx-auto mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-white">Application Process</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="flex flex-col items-center text-center px-10 py-8">
                  <div className="w-14 h-14 bg-gold text-white font-heading font-bold text-xl flex items-center justify-center mb-6">
                    {s.num}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <span className="section-label mb-4 inline-block">Apply Now</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Start Your Application</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Fill in your details below and a member of the ATL team will be in touch to guide you through the next steps.</p>
          </Reveal>

          {sent ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center py-20 text-center border border-gold/20 bg-gold/5 px-10">
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Check className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-3">Application Received</h3>
                <p className="text-muted-foreground text-sm max-w-xs">Thank you for your interest in ATL. A member of our team will be in touch with you shortly.</p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={80}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Full Name</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="border-border focus:border-gold rounded-none h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Email</Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="border-border focus:border-gold rounded-none h-12" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="sector" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Your Sector</Label>
                  <select id="sector" name="sector" value={form.sector} onChange={handleChange} required className="w-full h-12 border border-border px-3 text-sm text-foreground bg-white focus:outline-none focus:border-gold">
                    <option value="">Select your sector...</option>
                    <option value="higher-education">Higher Education</option>
                    <option value="business">Business & Private Sector</option>
                    <option value="media-church">Media, Church & Third Sector</option>
                    <option value="politics">Politics & Public Sector</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Why do you want to join ATL?</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about yourself and your leadership journey..." rows={5} required className="border-border focus:border-gold rounded-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-navy text-white py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-navy/20">
                  Submit Application
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}