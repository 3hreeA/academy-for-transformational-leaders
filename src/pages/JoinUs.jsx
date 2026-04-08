import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, ArrowRight, Users, Globe, Award, Lightbulb } from "lucide-react";

const tiers = [
  {
    name: "Associate Member",
    price: "£99 / year",
    description: "For emerging leaders and professionals beginning their transformational journey.",
    features: [
      "Access to ATL community platform",
      "Invitation to regional networking events",
      "Monthly leadership newsletter",
      "Discounted summit registration",
    ],
  },
  {
    name: "Full Member",
    price: "£249 / year",
    featured: true,
    description: "For established professionals ready to accelerate their global leadership impact.",
    features: [
      "All Associate benefits",
      "One-to-one mentorship matching",
      "Access to Sector Leadership Tracks",
      "Priority ATL Pitch Den consideration",
      "Global member directory access",
      "Featured member spotlight opportunity",
    ],
  },
  {
    name: "Global Member",
    price: "£499 / year",
    description: "For senior leaders seeking the highest level of engagement and influence within ATL.",
    features: [
      "All Full Member benefits",
      "Executive coaching sessions",
      "Advisory board consideration",
      "Speaking & panel opportunities",
      "Co-branding & partnership access",
      "Annual summit VIP access",
    ],
  },
];

const benefits = [
  { icon: Globe, title: "15+ Countries", body: "Connect with leaders across a truly global network." },
  { icon: Users, title: "200+ Members", body: "Join a growing community of transformational professionals." },
  { icon: Award, title: "4 Sectors", body: "Collaborate across education, business, media, and governance." },
  { icon: Lightbulb, title: "Ongoing Growth", body: "Access programmes and resources designed for lifelong excellence." },
];

export default function JoinUs() {
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "", tier: "" });
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

      {/* Why Join — Benefits */}
      <section className="bg-white py-20 px-6 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-14">
            <span className="section-label mb-4 inline-block">Why ATL</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">What Membership Unlocks</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="p-8 border border-border hover:border-gold transition-colors duration-300 h-full">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="bg-muted py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">Membership Tiers</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Choose Your Path</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border bg-white">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className={`relative p-10 h-full flex flex-col ${tier.featured ? "bg-navy text-white" : "bg-white"}`}>
                  {tier.featured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                  )}
                  {tier.featured && (
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold mb-4 inline-block">Most Popular</span>
                  )}
                  <h3 className={`font-heading text-2xl font-bold mb-1 ${tier.featured ? "text-white" : "text-navy"}`}>{tier.name}</h3>
                  <p className={`text-2xl font-heading font-bold mb-4 ${tier.featured ? "text-gold" : "text-gold"}`}>{tier.price}</p>
                  <p className={`text-sm leading-relaxed mb-8 ${tier.featured ? "text-white/60" : "text-muted-foreground"}`}>{tier.description}</p>
                  <ul className="space-y-4 flex-grow mb-10">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? "bg-gold/20" : "bg-gold/10"}`}>
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className={`text-sm ${tier.featured ? "text-white/80" : "text-foreground/80"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#apply">
                    <button className={`group w-full flex items-center justify-center gap-2 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 ${tier.featured ? "bg-gold text-white hover:bg-gold-dark" : "bg-navy text-white hover:bg-navy/90"}`}>
                      Apply Now <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </a>
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
            <span className="section-label mb-4 inline-block">Apply</span>
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
                  <Label htmlFor="tier" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Membership Tier</Label>
                  <select id="tier" name="tier" value={form.tier} onChange={handleChange} required className="w-full h-12 border border-border px-3 text-sm text-foreground bg-white focus:outline-none focus:border-gold">
                    <option value="">Select a tier...</option>
                    <option value="associate">Associate Member</option>
                    <option value="full">Full Member</option>
                    <option value="global">Global Member</option>
                  </select>
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