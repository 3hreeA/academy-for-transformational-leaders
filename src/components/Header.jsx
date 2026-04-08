import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/About" },
    { label: "Projects", to: "/Projects" },
    { label: "Programmes", to: "/Programmes" },
    { label: "Sectors", to: "/Sectors" },
    { label: "Members", to: "/Members" },
    { label: "News", to: "/News" },
    { label: "Contact Us", to: "/Contact" },
  ];

  const isActive = (to) => to && location.pathname === to;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-md py-2" : "bg-background py-4"} border-b border-border/40`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center group">
          <img
            src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
            alt="ATL Global"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "inline";
            }}
          />
          <span className="font-bold text-xl text-foreground" style={{ display: "none" }}>ATL Global</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 rounded-md ${isActive(link.to) ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-primary/5"}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-[11px] font-bold tracking-widest uppercase text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-md"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block flex-shrink-0">
          <a href="#">
            <Button className="bg-[#cd9a35] hover:bg-[#b8892f] text-white border-none px-6 py-5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#cd9a35]/20 rounded-sm">
              Find Out More
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-80 sm:w-96 shadow-2xl">
            <div className="flex flex-col gap-2 mt-12">
              <Link to="/" className="flex-shrink-0 mb-8 px-4">
                <img
                  src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
                  alt="ATL Global"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`py-4 px-4 text-sm font-bold tracking-widest uppercase rounded-md transition-colors duration-200 ${isActive(link.to) ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted hover:text-primary"}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-4 px-4 text-sm font-bold tracking-widest uppercase rounded-md text-foreground/80 hover:bg-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="mt-8 px-4">
                <a href="#">
                  <Button className="w-full bg-[#cd9a35] hover:bg-[#b8892f] text-white py-6 text-xs font-bold tracking-widest uppercase rounded-sm shadow-md">
                    Find Out More
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}