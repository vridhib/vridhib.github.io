import { Reveal } from "../motion/Reveal";
import { openSourceContributions } from "@/data";
import { ArrowUpRight } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section id="opensource" className="relative py-32 border-t border-dusty-violet/10">
      <div className="max-w-7xl max-auto px-8">
        {/* Section Header */}
        <Reveal>
          <header className="mb-20 flex items-end justify-between border-b border-parchment/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-dusty-violet mb-2">
              03. Open Source & Community
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-parchment tracking-tight">
              Public <span className="italic font-light text-gold-accent">Contributions</span>
            </h2>
          </header>
        </Reveal>

        {/* Contributions List */}
        <div className="grid grid-cols-12 gap-8">
          <ul className="col-span-12 md:col-span-10 md:col-start-2 space-y-12">
            {openSourceContributions.map((contrib, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <li>
                  <article className="grid grid-cols-12 gap-4 group">
                    {/* Left Column: Project & Type */}
                    <div className="col-span-12 md:col-span-3">
                      <p className="font-mono text-sm text-parchment">{contrib.project}</p>
                      <p className="font-mono text-xs text-parchment/40 mt-1">{contrib.type}</p>
                    </div>

                    {/* Right Column: Title, Description, Link */}
                    <div className="col-span-12 md:col-span-9 border-l border-dusty-violet/10 pl-6">
                      <header className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-sans text-lg text-parchment/90 leading-snug">
                          {contrib.title}
                        </h3>
                        <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded ${contrib.status === 'Resolved' || contrib.status === 'Merged'
                          ? 'bg-gold-accent/10 text-gold-accent'
                          : 'bg-dusty-violet/10 text-dusty-violet'
                          }`}>
                          {contrib.status}
                        </span>
                      </header>
                      <p className="font-sans text-sm text-parchment/60 leading-relaxed mb-4">
                        {contrib.description}
                      </p>
                      <a
                        href={contrib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-parchment/50 hover:text-gold-accent transition-colors"
                      >
                        View Ticket <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </article>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}