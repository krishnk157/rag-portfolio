import type { SkillCategory } from "@/data/resume";
import { AnimatedSection } from "./animated-section";

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Skills
      </h2>
      <div className="mt-10 space-y-4">
        {categories.map((category, i) => (
          <AnimatedSection key={category.category} delay={i * 0.04}>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
              <span className="shrink-0 text-base font-semibold text-foreground sm:w-44">
                {category.category}
              </span>
              <span className="text-base text-foreground/70">
                {category.skills.join(", ")}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
