import { skillGroups } from "@/data";
import { Reveal } from "@/components/motion/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 border-t border-dusty-violet/10">
      <div className="max-w-7xl mx-auto px-8">
        <Reveal>
          <header className="mb-20 flex items-end justify-between border-b border-parchment/10 pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-dusty-violet mb-2">
                03. Toolbox
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-parchment tracking-tight">
                Technical <span className="italic font-light text-gold-accent">Specifications</span>
              </h2>
            </div>
          </header>
        </Reveal>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Reveal>
              <dl className="divide-y divide-dusty-violet/10">
                {skillGroups.map((group) => (
                  <div key={group.category} className="grid grid-cols-12 py-6 items-center">
                    <dt className="col-span-12 md:col-span-4 font-mono text-xs uppercase tracking-[0.2em] text-parchment/50">
                      {group.category}
                    </dt>
                    <dd className="col-span-12 md:col-span-8 flex flex-wrap gap-x-4 gap-y-2 font-sans text-base text-parchment/80">
                      {group.items.map((item, i) => (
                        <span key={item}>
                          {item}
                          {i < group.items.length - 1 && (
                            <span className="text-dusty-violet ml-4">·</span>
                          )}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}