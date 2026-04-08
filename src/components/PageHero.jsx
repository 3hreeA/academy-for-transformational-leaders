import { motion } from "framer-motion";

export default function PageHero({ label, title, titleHighlight, subtitle, image }) {
  return (
    <section className="relative min-h-[55vh] bg-navy flex items-end overflow-hidden">
      {/* BG image */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        </div>
      )}

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(hsl(38,72%,47%) 1px, transparent 1px), linear-gradient(90deg, hsl(38,72%,47%) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pb-16 pt-36 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <span className="section-label mb-4 inline-block">{label}</span>
          <span className="block w-12 h-0.5 bg-gold mb-8" />
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            {title}
            {titleHighlight && (
              <><br /><span className="text-gold">{titleHighlight}</span></>
            )}
          </h1>
          {subtitle && (
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}