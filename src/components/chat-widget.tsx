"use client";

import { useChat } from "@ai-sdk/react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";
import { Fragment, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { useIsMobile } from "@/hooks/use-mobile";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
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
                Ask me anything about Krishn&apos;s experience
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

          <div className="flex flex-1 flex-col overflow-hidden px-4 pb-4">
            <Conversation className="h-full">
              <ConversationContent>
                {messages.length === 0 && (
                  <div className="flex flex-1 flex-col items-center justify-center gap-2 py-12 text-center">
                    <MessageCircle className="size-8 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">
                      Ask about skills, experience, projects, or anything on the
                      resume.
                    </p>
                  </div>
                )}
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.parts.map((part, i) => {
                      if (part.type === "text") {
                        return (
                          <Fragment key={`${message.id}-${i}`}>
                            <Message from={message.role}>
                              <MessageContent>
                                <MessageResponse>{part.text}</MessageResponse>
                              </MessageContent>
                            </Message>
                          </Fragment>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
                {(status === "submitted" || status === "streaming") && (
                  <Spinner />
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>

            <PromptInput className="mt-3" onSubmit={handleSubmit}>
              <PromptInputBody>
                <PromptInputTextarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Krishn's experience..."
                />
              </PromptInputBody>
              <PromptInputFooter>
                <PromptInputTools />
                <PromptInputSubmit />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
