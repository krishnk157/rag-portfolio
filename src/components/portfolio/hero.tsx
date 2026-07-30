import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { ResumeData } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Hero({ data }: { data: ResumeData }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
        {data.name}
      </h1>
      <p className="mt-5 max-w-xl text-xl font-medium text-foreground/70 sm:text-2xl">
        {data.title}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60">
        {data.summary}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${data.contact.email}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Mail className="mr-2 size-4" />
          {data.contact.email}
        </a>
        <a
          href={data.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ExternalLink className="mr-2 size-4" />
          {data.contact.linkedinDisplay}
        </a>
        <a
          href={`tel:${data.contact.phone}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Phone className="mr-2 size-4" />
          {data.contact.phone}
        </a>
        <span
          className={cn(
            buttonVariants({ variant: "outline" }),
            "pointer-events-none opacity-80",
          )}
        >
          <MapPin className="mr-2 size-4" />
          {data.location}
        </span>
      </div>
    </div>
  );
}
