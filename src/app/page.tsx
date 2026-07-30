import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Separator } from "@/components/ui/separator";
import { RESUME } from "@/data/resume";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedSection>
        <Hero data={RESUME} />
      </AnimatedSection>
      <Separator />
      <AnimatedSection id="experience" delay={0.1}>
        <Experience entries={RESUME.experience} />
      </AnimatedSection>
      <Separator />
      <AnimatedSection id="projects" delay={0.1}>
        <Projects entries={RESUME.projects} />
      </AnimatedSection>
      <Separator />
      <AnimatedSection id="skills" delay={0.1}>
        <Skills categories={RESUME.skills} />
      </AnimatedSection>
      <Separator />
      <AnimatedSection id="education" delay={0.1}>
        <Education entries={RESUME.education} />
      </AnimatedSection>
    </main>
  );
}
