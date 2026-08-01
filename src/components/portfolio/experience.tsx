import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Experience as ExperienceType } from "@/data/resume";
import { AnimatedSection } from "./animated-section";

export function Experience({ entries }: { entries: ExperienceType[] }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Experience
      </h2>
      <div className="relative mt-10">
        <div className="absolute top-0 bottom-0 left-3 hidden w-px bg-border md:block" />
        <div className="flex flex-col gap-8">
          {entries.map((entry, i) => (
            <AnimatedSection key={entry.period} delay={i * 0.05}>
              <div className="relative md:pl-10">
                <div className="absolute top-5 left-[9px] hidden size-2.5 rounded-full bg-foreground md:block" />
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle className="text-lg font-semibold">
                        {entry.role}
                      </CardTitle>
                      <Badge variant="outline">{entry.level}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      <span className="font-medium text-foreground">
                        {entry.company}
                      </span>
                      {" · "}
                      {entry.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {entry.description && entry.achievements ? (
                      <div>
                        <h4 className="mb-3 text-base font-medium italic text-foreground/70">
                          {entry.description}
                        </h4>
                        <ul className="space-y-2 text-base">
                          {entry.achievements.map((achievement) => (
                            <li
                              key={achievement.slice(0, 40)}
                              className="relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : entry.projects ? (
                      <div className="flex flex-col gap-6">
                        {entry.projects.map((project) => (
                          <div key={project.name}>
                            <h4 className="mb-3 text-base font-medium italic text-foreground/70">
                              {project.name}
                            </h4>
                            <ul className="space-y-2 text-base">
                              {project.achievements.map((achievement) => (
                                <li
                                  key={achievement.slice(0, 40)}
                                  className="relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground"
                                >
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
