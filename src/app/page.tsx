"use client";
import { NavBar } from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";

export default function Home() {
  return (
    <main className={`min-h-screen bg-ink-violet text-parchment selection:bg-dusty-violet selection:text-ink-violet`}>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <OpenSourceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}