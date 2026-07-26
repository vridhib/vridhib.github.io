export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink-violet/60">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-parchment/60">
        <a href="#top" className="hover:text-gold-accent">Vridhi Brahmbhatt</a>

        <div className="hidden md:flex gap-8">
          <a href="#projects" className="hover:text-gold-accent">01. Case Studies</a>
          <a href="#opensource" className="hover:text-gold-accent">02. Open Source & Community</a>
          <a href="#skills" className="hover:text-gold-accent">03. Toolbox</a>
          <a href="#contact" className="hover:text-gold-accent">04. Contact</a>
        </div>

        <span className="text-gold-accent flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gold-accent animate-pulse"></span>
          Available Q3 2026
        </span>
      </div>
    </nav>
  );
}