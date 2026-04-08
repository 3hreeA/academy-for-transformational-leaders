import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Who We Are", to: "/who-we-are" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Our Insights", to: "/our-insights" },
  { label: "News & Events", to: "/news-events" },
  { label: "Join Us", to: "/join-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy shadow-2xl shadow-navy/30 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
              alt="ATL Global"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${isActive(link.to) ? "text-gold" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/Contact">
              <button className="border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden text-white p-2">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 bg-navy flex flex-col pt-24 px-8 pb-10 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col gap-1 flex-1">
          <Link to="/" className={`py-4 border-b border-white/10 text-sm font-semibold tracking-widest uppercase ${isActive("/") ? "text-gold" : "text-white/80"}`}>Home</Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`py-4 border-b border-white/10 text-sm font-semibold tracking-widest uppercase ${isActive(link.to) ? "text-gold" : "text-white/80"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to="/Contact" className="mt-8">
          <button className="w-full border border-gold text-gold py-4 text-xs font-bold tracking-[0.2em] uppercase">
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
}