import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      <PageHero
        label="Get In Touch"
        title="Contact"
        titleHighlight="ATL Global"
        subtitle="We'd love to hear from you. Reach out to learn more, join the network, or explore partnership opportunities."
        image="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/1416acf1e_atlglobal_org_WhatsApp-Image-2025-03-02-at-104517-PM-1024x697_101c25e8.jpeg"
      />

      <section className="bg-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <Reveal>
            <span className="section-label mb-4 inline-block">Find Us</span>
            <span className="gold-rule mb-8 block" />
            <h2 className="font-heading text-4xl font-bold text-navy mb-10">Let's Connect</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">Address</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Unit 82a James Carter Road, Mildenhall,<br />Bury St. Edmunds, Suffolk, England, IP28 7DE</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">Email</p>
                  <a href="mailto:info@atlglobal.org" className="text-gold text-sm hover:underline">info@atlglobal.org</a>
                </div>
              </div>
            </div>
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/213701590_atlglobal_org_WhatsApp-Image-2025-03-02-at-104510-PM-1024x768_6bb1c5a1.jpeg"
              alt="ATL Global"
              className="w-full h-56 object-cover grayscale"
            />
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center border border-gold/20 bg-gold/5 px-10">
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-3">Message Sent</h3>
                <p className="text-muted-foreground text-sm max-w-xs">Thank you for reaching out. A member of the ATL team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="section-label mb-4 inline-block">Send a Message</span>
                  <span className="gold-rule mb-8 block" />
                </div>
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
                  <Label htmlFor="subject" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Subject</Label>
                  <Input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required className="border-border focus:border-gold rounded-none h-12" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-navy mb-2 block">Message</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." rows={6} required className="border-border focus:border-gold rounded-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-navy text-white py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-navy/20">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}