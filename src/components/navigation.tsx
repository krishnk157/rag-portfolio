import { Show, SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <a href="/#" className="text-lg font-semibold">
          Krishn Kumar
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-2 flex items-center gap-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <Button variant="ghost" size="sm">
                <Link href={`/upload/${process.env.UPLOAD_SECRET}`}>
                  Upload
                </Link>
              </Button>
              <SignOutButton>
                <Button variant="outline" size="sm">
                  Sign Out
                </Button>
              </SignOutButton>
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
};
