export function TechTag({ tech }: { tech: string }) {
  return (
    <span className="font-mono text-xs px-3 py-1 border border-dusty-violet/20 text-parchment/60 rounded-full">
      {tech}
    </span>
  );
}