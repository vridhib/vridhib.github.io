import { Project } from "@/types";
import { Reveal } from "../motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { TechTag } from "../ui/TechTag";
import { CodeWindow } from "../ui/CodeWindow";

export function ProjectCard({ project }: { project: Project }) {
  if (project.variant === 'left-aligned') {
    return (
      <article className="grid grid-cols-12 gap-8 mb-32 group">
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            <ProjectHeader project={project} />
            <ProjectBody project={project} />
            <ProjectFooter project={project} />
          </Reveal>
        </div>
        <div className="hidden md:block col-span-4 md:translate-y-12">
          {project.visualLabel && (
            <Reveal delay={0.2}>
              <VisualPlaceholder project={project} />
            </Reveal>)
          }
        </div>
      </article>
    );
  }

  if (project.variant === 'right-indented') {
    return (
      <article className="grid grid-cols-12 gap-8 mb-32">
        <div className="hidden md:block col-span-2"></div>
        <div className="col-span-12 md:col-span-7">
          <Reveal>
            <ProjectHeader project={project} />
            <ProjectBody project={project} />
            <ProjectFooter project={project} />
          </Reveal>
        </div>
        <div className="hidden md:block col-span-3"></div>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-12 gap-8 border-t border-parchment/10 pt-12 mb-32">
      <div className="col-span-12 md:col-span-6">
        <Reveal>
          <ProjectHeader project={project} />
          <ProjectBody project={project} />
          <ProjectFooter project={project} />
        </Reveal>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Reveal delay={0.2}>
          <StatBlock stats={project.stats} details={project.details} />
        </Reveal>
      </div>
    </article>
  );
}




// Sub-components
const ProjectHeader = ({ project }: { project: Project }) => (
  <div>
    <p className="font-mono text-xs text-gold-accent mb-3">{project.category}</p>
    <h3 className="font-serif text-4xl md:text-5xl mb-6 text-parchment">{project.title}</h3>
  </div>
);

const ProjectBody = ({ project }: { project: Project }) => {
  const { problem, solution, limitations } = project.description;
  return (
    <div>
      <div className="space-y-4 mb-6">
        <p className="font-sans text-lg text-parchment/70 leading-relaxed">
          <span className="font-mono text-xs uppercase tracking-wider text-gold-accent mr-2">Problem:</span>
          {problem}
        </p>
        <p className="font-sans text-lg text-parchment/70 leading-relaxed">
          <span className="font-mono text-xs uppercase tracking-wider text-gold-accent mr-2">Solution:</span>
          {solution}
        </p>
        <p className="font-sans text-lg text-parchment/70 leading-relaxed">
          <span className="font-mono text-xs uppercase tracking-wider text-gold-accent mr-2">Limitations:</span>
          {limitations}
        </p>
      </div>
      
      {/* Margin Notes & Metrics Block */}
      {project.marginNote && (
        <p className="font-mono text-xs text-parchment/50 italic mb-3">
          {project.marginNote}
        </p>
      )}
      {project.metrics?.map(metric => (
        <p key={metric} className="font-mono text-sm text-gold-accent font-medium">
          {metric}
        </p>
      ))}

      {/* Code Snippet and Technologies */}
      {project.snippet && <CodeWindow snippet={project.snippet} />}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map(tech => <TechTag key={tech} tech={tech} />)}
      </div>
    </div>
  );
};

const ProjectFooter = ({ project }: { project: Project }) => (
  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-parchment group-hover:text-gold-accent transition-colors">
    View Architecture <ArrowUpRight size={16} />
  </a>
);

const VisualPlaceholder = ({ project }: { project: Project }) => (
  <div className="aspect-square w-full bg-dusty-violet/5 border border-dusty-violet/10 flex items-center justify-center p-8 relative">
    <span className="absolute top-2 left-2 font-mono text-[10px] text-parchment/30">{project.visualLabel}</span>
    <div className="font-mono text-xs text-gold-accent text-center">[ Insert Visual Here ]</div>
  </div>
);

const StatBlock = ({ details }: { stats?: any[], details?: any[] }) => (
  <div className="font-mono text-sm space-y-3 border-l-2 border-dusty-violet/20 pl-6 h-full flex flex-col justify-center">
    {details?.map(d => (
      <div key={d.label} className="flex justify-between">
        <span className="text-parchment/50">{d.label}:</span>
        <span className="text-parchment text-right">{d.value}</span>
      </div>
    ))}
  </div>
);