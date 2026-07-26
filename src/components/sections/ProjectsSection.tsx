"use client";
import { projects } from "@/data";
import { Reveal } from "../motion/Reveal"
import { ProjectCard } from "../cards/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 border-t border-dusty-violet/10">
      <div className="max-w-7xl mx-auto px-8">

        <Reveal>
          <header className="mb-20 flex items-end justify-between border-b border-parchment/10 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-dusty-violet mb-2">
                02. Case Studies
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-parchment tracking-tight">
                Selected <span className="italic font-light text-gold-accent">Architecture</span>
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-parchment/40 max-w-xs text-right">
              Architectural case studies spanning cryptography, real-time risk, and algorithmic settlement.
            </p>
          </header>
        </Reveal>

        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>
    </section>
  );
}