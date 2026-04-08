import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { ArrowRight, Calendar, MapPin, Mail, Clock, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "ATL Global Launches with a Powerful Keynote by Prof. Seun Kolade",
    date: "March 1, 2025", category: "Events", featured: true,
    excerpt: "ATL Global held its landmark Group Launching Event, bringing together leaders from across sectors. Prof. Seun Kolade delivered a stirring keynote drawing on historical strategy and modern leadership.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/05e72e292_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-4-777x1024_feb3d476.jpeg",
    link: "https://drive.google.com/file/d/10W3rAsg91rIq3RNHUCTOsvhCOGSUZwGa/view?usp=drive_link",
  },
  {
    title: "Introducing the ATL Pitch Den — Seed Funding for Business Leaders",
    date: "March 15, 2025", category: "Business",
    excerpt: "ATL Global announces the Pitch Den, an exclusive platform giving business owners the chance to pitch for up to $5,000 in seed investment plus expert mentorship.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/b19b71d60_atlglobal_org_WhatsApp-Image-2025-03-02-at-104508-PM-1-1024x697_582f9770.jpeg",
  },
  {
    title: "Building Leaders Across Borders: ATL's Global Vision",
    date: "April 2, 2025", category: "Leadership",
    excerpt: "As ATL grows its international membership, we explore what it means to build a truly global leadership network rooted in faith-driven values and collective impact.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg",
  },
  {
    title: "ATL Members Spotlight: Changemakers Across Sectors",
    date: "April 20, 2025", category: "Community",
    excerpt: "Meet some of the incredible professionals who have joined the ATL network — from educators and entrepreneurs to public servants and media leaders.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/a04551ee6_atlglobal_org_WhatsApp-Image-2025-03-02-at-104501-PM-3-768x523_612cfe60.jpeg",
  },
  {
    title: "Faith, Leadership and Social Transformation",
    date: "May 5, 2025", category: "Thought Leadership",
    excerpt: "A reflection on how faith-driven leadership creates unique conditions for social transformation, drawing on ATL's founding ethos and early member experiences.",
    image: "https://media.base44.com/images/public/69d676e0211478cf568f8bc7/c9142d7d8_atlglobal_org_WhatsApp-Image-2025-03-02-at-104506-PM-2-768x523_c9436761.jpeg",
  },
];

const upcomingEvents = [
  {
    title: "ATL Leadership Accelerator — Cohort 2",
    date: "June 2025", location: "Online & London, UK", type: "Programme",
    description: "Applications open for the second cohort of our flagship 6-month leadership development programme.",
  },
  {
    title: "ATL Pitch Den — Open Applications",
    date: "Rolling", location: "In-Person", type: "Initiative",
    description: "Business owners can now apply to pitch for seed funding up to $5,000 to the ATL expert panel.",
  },
  {
    title: "ATL Annual Summit 2025",
    date: "Q4 2025", location: "TBA", type: "Summit",
    description: "Our flagship annual gathering — keynotes, workshops, and cross-sector networking. Save the date.",
  },
];

export default function NewsEvents() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "info@atlglobal.org",
      subject: `[ATL Website] ${form.subject}`,
      body: `New message from ${form.name} (${form.email}):\n\n${form.message}`,
    });
    setSending(false);
    setSent(true);
  };

  return (
    <div>
      <PageHero
        label="News & Events"
        title="Stay"
        titleHighlight="Connected"
        subtitle="The latest stories, events, and updates from across the ATL Global community."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/9edfd9a50_atlglobal_org_WhatsApp-Image-2025-03-02-at-104459-PM-1-768x523_7002302e.jpeg"
      />

      {/* Featured Article */}
      {featured && (
        <section className="bg-white py-20 px-6 lg:px-20 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <p className="section-label mb-6">Featured Story</p>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold">{featured.category}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{featured.date}</span>
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy leading-snug mb-5 group-hover:text-gold transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{featured.excerpt}</p>
                  {featured.link && (
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy hover:text-gold transition-colors">
                      Read More <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-muted py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal><h2 className="font-heading text-3xl font-bold text-navy mb-12">More Stories</h2></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="group bg-white border border-border hover:border-gold transition-colors duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 block">{a.category}</span>
                    <h3 className="font-heading font-bold text-navy text-base mb-3 leading-snug group-hover:text-gold transition-colors flex-grow">{a.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
                      <Calendar className="w-3 h-3" />{a.date}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <span className="section-label mb-4 inline-block">What's Coming</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy">Upcoming Events & Programmes</h2>
          </Reveal>
          <div className="space-y-0 divide-y divide-border border border-border">
            {upcomingEvents.map((ev, i) => (
              <Reveal key={ev.title} delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 hover:bg-muted transition-colors duration-200">
                  <div className="lg:col-span-2 flex flex-col gap-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-white bg-gold px-3 py-1 w-fit">{ev.type}</span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3 text-gold" />{ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 text-gold" />{ev.location}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">{ev.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ev.description}</p>
                  </div>
                  <div className="lg:col-span-2 flex items-center lg:justify-end">
                    <button
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gold hover:text-navy border-b border-gold pb-0.5 transition-colors"
                    >
                      Enquire <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-navy py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal>
            <span className="section-label mb-4 inline-block">Get In Touch</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Whether you're interested in joining the ATL network, applying to a programme, pitching at the Pitch Den, or exploring a partnership — we'd love to hear from you.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 text-sm">Address</p>
                  <p className="text-white/40 text-sm leading-relaxed">Unit 82a James Carter Road, Mildenhall,<br />Bury St. Edmunds, Suffolk, England, IP28 7DE</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1 text-sm">Email</p>
                  <a href="mailto:info@atlglobal.org" className="text-gold text-sm hover:underline">info@atlglobal.org</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center border border-gold/20 bg-white/5 px-10">
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Message Sent</h3>
                <p className="text-white/50 text-sm max-w-xs">Thank you for reaching out. A member of the ATL team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">Full Name</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-gold rounded-none h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">Email</Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-gold rounded-none h-12" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">Subject</Label>
                  <Input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-gold rounded-none h-12" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">Message</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." rows={6} required className="border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-gold rounded-none resize-none" />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gold text-white py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-gold/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}