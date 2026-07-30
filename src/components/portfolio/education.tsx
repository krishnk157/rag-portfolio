import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Education as EducationType } from "@/data/resume";

export function Education({ entries }: { entries: EducationType[] }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Education
      </h2>
      <div className="mt-10 flex flex-col gap-6">
        {entries.map((entry) => (
          <Card key={entry.institution}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {entry.degree}
              </CardTitle>
              <CardDescription className="text-base">
                {entry.institution} · {entry.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-foreground/60">{entry.score}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
