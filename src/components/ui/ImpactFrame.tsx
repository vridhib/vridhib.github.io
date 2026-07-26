"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";


const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export function ImpactFrame() {
  const [nodes, setNodes] = useState(4);
  const [density, setDensity] = useState(0.84)
  const [heights, setHeights] = useState<number[]>([8, 14, 6, 11]);

  // Simulate a live graph fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const newNodes = Math.floor(Math.random() * 10) + 3;
      const newDensity = parseFloat((Math.random() * 0.4 + 0.6).toFixed(2));

      setNodes(newNodes);
      setDensity(newDensity);
      setHeights(Array.from({ length: newNodes }, () => Math.random() * 20 + 4))
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative w-full max-w-sm aspect-[4/5] border border-dusty-violet/20 p-6 bg-ink-violet/40 backdrop-blur-sm flex flex-col shadow-2xl shadow-black/30"
    >

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-accent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-accent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-accent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-accent pointer-events-none"></div>

      {/* Header */}
      <header className="font-mono text-xs text-parchment/40 uppercase tracking-widest mb-6 flex justify-between border-b border-dusty-violet/10 pb-3">
        <span>System: ONO_v0.1</span>
        <span className="text-dusty-violet flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dusty-violet opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-dusty-violet"></span>
          </span>
          LIVE
        </span>
      </header>

      {/* Main Telemetry */}
      <dl className="flex-1 flex flex-col justify-center font-mono text-sm space-y-4">
        <div className="flex justify-between items-center transition-opacity duration-300">
          <dt className="text-parchment/60">Ingesting SWIFT stream...</dt>
          <dd className="text-gold-accent font-medium tabular-nums">{nodes} txns</dd>
        </div>

        <div className="flex justify-between items-center">
          <dt className="text-parchment/60">Graph Density:</dt>
          <dd className="text-parchment tabular-nums">{density}</dd>
        </div>

        <div className="flex justify-between items-center">
          <dt className="text-parchment/60">Netting Cycles:</dt>
          <dd className="text-dusty-violet tabular-nums">{Math.floor(nodes * 1.5)}</dd>
        </div>
      </dl>

      {/* Simulated Netting Visualization */}
      <div className="pt-4 space-y-2">
        <div className="text-parchment/40 text-xs uppercase tracking-wider">Executing Multilateral Net...</div>
        <div className="flex gap-1 items-end h-6">
          {heights.map((height, i) => (
            <motion.div
              key={i}
              layout
              className="w-1 bg-dusty-violet/60"
              style={{ height: `${height}px` }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="font-mono text-[10px] text-parchment/30 uppercase tracking-widest mt-4">
        Liquidity optimized: <span className="text-gold-accent/60">42.8%</span>
      </footer>
    </motion.aside>
  );
}