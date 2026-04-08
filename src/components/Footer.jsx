import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

const links = {
  Platform: [
    { label: "About ATL", to: "/About" },
    { label: "Sectors", to: "/Sectors" },
    { label: "Programmes", to: "/Programmes" },
    { label: "Projects", to: "/Projects" },
    { label: "Members", to: "/Members" },
    { label: "News & Insights", to: "/News" },
  ],
  Connect: [
    { label: "Contact Us", to: "/Contact" },
    { label: "Apply for Membership", to: "/Members" },
    { label: "ATL Pitch Den", to: "/Projects" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
                alt="ATL Global"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              An international leadership network empowering high-flying professionals to drive collective good and global impact.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-white/40 text-xs leading-relaxed">Unit 82a James Carter Road, Mildenhall, Bury St. Edmunds, Suffolk, England, IP28 7DE</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@atlglobal.org" className="text-white/40 text-xs hover:text-gold transition-colors">info@atlglobal.org</a>
              </div>
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="lg:col-span-2">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/50 text-sm hover:text-white transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA col */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-5">Join the Network</p>
            <p className="text-white/50 text-sm leading-relaxed mb-6">Connect with transformational leaders from across the globe. Your next chapter starts here.</p>
            <Link to="/Contact">
              <button className="group flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                Get In Touch
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs">© 2026 ATL Global. Built by <a href="http://okayvc.com/" target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">Okay</a></p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}