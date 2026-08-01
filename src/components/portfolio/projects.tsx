import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/resume";
import { AnimatedSection } from "./animated-section";
import { BuildingTag } from "./building-tag";

export function Projects({ entries }: { entries: Project[] }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h2>
      <div className="mt-10 flex flex-col gap-8">
        {entries.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.05}>
            <Card
              className={
                project.status === "building"
                  ? "card-hover border-dashed border-border/60"
                  : "card-hover"
              }
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  {project.status === "building" && (
                    <Badge
                      variant="outline"
                      className="animate-pulse border-foreground/20 text-foreground/50"
                    >
                      In Progress
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={
                        project.status === "building"
                          ? "text-sm opacity-60"
                          : "text-sm"
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              {project.highlights.length > 0 ? (
                <CardContent>
                  <ul className="space-y-2 text-base">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 40)}
                        className="relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              ) : project.status === "building" ? (
                <CardContent>
                  <BuildingTag />
                </CardContent>
              ) : null}
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
