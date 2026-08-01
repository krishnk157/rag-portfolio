"use client";

import { useChat } from "@ai-sdk/react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { useIsMobile } from "@/hooks/use-mobile";

// Loaded only once the chat is first opened. Keeps the markdown renderer
// (and its mermaid/shiki/katex dependencies) out of the initial page load.
const ChatPanel = dynamic(
  () => import("@/components/chat-panel").then((m) => m.ChatPanel),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    ),
  },
);

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (message: { text?: string }) => {
    if (!message.text) return;
    sendMessage({ text: message.text });
    setInput("");
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform duration-150 active:scale-[0.97] sm:size-14"
        style={{ display: open ? "none" : "flex" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.05 }}
      >
        <MessageCircle className="size-5 sm:size-6" />
        <span className="sr-only">Open chat</span>
      </motion.button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={isMobile ? "bottom" : "right"}
          className={isMobile ? "h-[85vh] sm:max-w-md" : "sm:max-w-md"}
          showCloseButton={false}
        >
          <SheetHeader className="flex-row items-center justify-between border-b pb-3">
            <div>
              <SheetTitle>Chat with AI</SheetTitle>
              <SheetDescription>
                Ask me anything about my experience
              </SheetDescription>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </button>
          </SheetHeader>

          <ChatPanel
            messages={messages}
            status={status}
            input={input}
            setInput={setInput}
            onSubmit={handleSubmit}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
