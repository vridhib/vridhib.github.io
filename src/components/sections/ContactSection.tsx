import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "../ui/CopyEmailButton";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 border-t border-dusty-violet/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-dusty-violet mb-8">
                04. Contact
              </span>

              {/* Editorial Headline */}
              <h2 className="font-serif text-4xl md:text-6xl text-parchment tracking-tight leading-[1.1] mb-12">
                Let's architect something <br />
                <span className="italic font-light text-gold-accent">complex</span> together.
              </h2>

              <p className="font-sans text-lg text-parchment/60 max-w-xl leading-relaxed mb-12">
                I am seeking full-stack engineering roles, particularly in FinTech, tokenization, and infrastructure. If you are building systems where correctness is non-negotiable, let's connect.
              </p>

              {/* The Links */}
              <div className="flex flex-col gap-8 font-mono">
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:vridhi.brahmbhatt@protonmail.com"
                    className="group inline-flex items-center gap-3 text-2xl md:text-3xl text-parchment hover:text-gold-accent transition-colors w-fit"
                  >
                    vridhi.brahmbhatt@protonmail.com
                    <ArrowUpRight size={24} className="text-dusty-violet group-hover:text-gold-accent transition-colors" />
                  </a>
                  <CopyEmailButton email="vridhi.brahmbhatt@protonmail.com" />
                </div>


                <div className="mt-4 flex items-center gap-6 text-parchment/50 text-sm">
                  <a
                    href="https://github.com/vridhib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative hover:text-parchment transition-colors"
                  >
                    GitHub
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>

                  <span className="text-dusty-violet">·</span>

                  <a
                    href="/resume.pdf"
                    download
                    className="group relative hover:text-parchment transition-colors"
                  >
                    Resume (PDF)
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}