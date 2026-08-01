"use client";

import type { UIMessage } from "ai";
import { MessageCircle } from "lucide-react";
import { Fragment } from "react";
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
import { Spinner } from "@/components/ui/spinner";

export function ChatPanel({
  messages,
  status,
  input,
  setInput,
  onSubmit,
}: {
  messages: UIMessage[];
  status: string;
  input: string;
  setInput: (value: string) => void;
  onSubmit: (message: PromptInputMessage) => void;
}) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden px-4 pb-4">
      <Conversation className="h-full">
        <ConversationContent>
          {messages.length === 0 && (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 py-12 text-center">
              <MessageCircle className="size-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                Ask about my skills, experience, projects, or anything on my
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
          {(status === "submitted" || status === "streaming") && <Spinner />}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput className="mt-3" onSubmit={onSubmit}>
        <PromptInputBody>
          <PromptInputTextarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my experience..."
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
