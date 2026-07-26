import { motion, Variants } from "framer-motion";
import { ImpactFrame } from "@/components/ui/ImpactFrame";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "../ui/Typewriter";
import { LiveClock } from "../ui/LiveClock";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-dusty-violet/7 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 w-full">

        {/* Left Column: Editorial Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-7 flex flex-col justify-center pb-20"
        >
          <motion.p variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] text-dusty-violet mb-8 h-4">
            <Typewriter text="Full-Stack Engineer && FinTech Architecture" speed={40} />
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tighter mb-10"
          >
            I build <span className="italic font-light text-gold-accent">infrastructure</span>  for complex financial state machines.
          </motion.h1>

          <motion.p variants={itemVariants} className="font-sans text-lg text-parchment/70 max-w-xl leading-relaxed mb-12">
            My focus is on the hard backend problems: taking complex business logic, like cryptographic audit trails, real-time risk models, and algorithmic settlement, and architecting reliable, rigorously tested state machines. Currently building an {" "}
            <a
              href="https://github.com/vridhib/obligation-net-optimizer"
              target="_blank"
              className="text-parchment underline decoration-gold-accent/40 underline-offset-4 decoration-1 hover:decoration-gold-accent hover:text-gold-accent transition-colors"
            >
              Obligation Net Optimizer (ONO)
            </a>{" "}
            for multilateral clearing using live directed multigraphs.
          </motion.p>

          <motion.nav variants={itemVariants} className="flex items-center gap-8 font-mono text-sm"
          >
            <a href="#projects" className="group relative">
              <span className="text-parchment flex items-center gap-2">
                explore_work
                <ArrowDown size={12} />
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="mailto:vridhi.brahmbhatt@protonmail.com" className="text-parchment/50 hover:text-parchment transition-colors">
              vridhi.brahmbhatt@protonmail.com
            </a>
          </motion.nav>
        </motion.div>

        {/* Right Column: Visualizer + Clock */}
        <div className="hidden md:flex col-span-5 items-start justify-center pt-10">
          <div className="flex flex-col items-center w-full gap-6">
            <ImpactFrame />
            <LiveClock />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-parchment/30"
      >
        <span className="aria-hidden font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-parchment/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}