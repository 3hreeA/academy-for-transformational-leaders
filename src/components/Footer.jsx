import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-5">
            <img
              src="https://media.base44.com/images/public/69d676e0211478cf568f8bc7/dcb6c81e0_atlglobal_org_ATL-Global-Logo-2-256x61_65470698.png"
              alt="ATL Global"
              className="h-10 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "inline";
              }}
            />
            <span className="font-bold text-xl text-secondary-foreground" style={{ display: "none" }}>ATL Global</span>
          </Link>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-xs">
            An international leadership network empowering high-flying professionals to drive collective good and global impact.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-secondary-foreground font-bold text-sm tracking-wider uppercase mb-5">Navigation</h4>
          <nav>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/About" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">About Us</Link></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Projects</a></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Programmes</a></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Sectors</a></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Members</a></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors duration-200">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-secondary-foreground font-bold text-sm tracking-wider uppercase mb-5">Get In Touch</h4>
          <div className="flex items-start gap-3 mb-5">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Unit 82a James Carter Road, Mildenhall,<br />
              Bury St. Edmunds, Suffolk,<br />
              England, IP28 7DE
            </p>
          </div>
          <a href="#" className="inline-block bg-primary text-primary-foreground px-5 py-2 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5">
            Find Out More
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-secondary-foreground/40 text-xs">
            Copyright &copy; 2026 Built by{" "}
            <a href="http://okayvc.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Okay</a>
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-secondary-foreground/40 text-xs hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-secondary-foreground/40 text-xs hover:text-primary transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}