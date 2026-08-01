export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 text-sm text-muted-foreground">
        <p>Built with Next.js, Tailwind CSS &amp; a RAG chatbot you can try.</p>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Krishn Kumar
        </p>
      </div>
    </footer>
  );
}
