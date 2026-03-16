import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { GenAI } from "@/components/sections/GenAI";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <GenAI />
      <Projects />
      <Services />
      <Achievements />
      <Contact />
    </main>
  );
}
