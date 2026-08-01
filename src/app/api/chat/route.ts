import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  type InferUITools,
  stepCountIs,
  streamText,
  tool,
  toUIMessageStream,
  type UIDataTypes,
  type UIMessage,
} from "ai";

import { z } from "zod";
import { searchDocuments } from "@/lib/search";

const tools = {
  searchKnowledgeBase: tool({
    description: "Search the knowledge base for relevant information",
    inputSchema: z.object({
      query: z.string().describe("The search query to find relevant documents"),
    }),
    execute: async ({ query }) => {
      try {
        // Search the vector database
        const results = await searchDocuments(query, 3, 0.5);

        if (results.length === 0) {
          return "No relevant information found in the knowledge base.";
        }

        // Format results for the AI
        const formattedResults = results
          .map((r, i) => `[${i + 1}] ${r.content}`)
          .join("\n\n");

        return formattedResults;
      } catch (error) {
        console.error("Search error:", error);
        return "Error searching the knowledge base.";
      }
    },
  }),
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();
    const result = streamText({
      model: google("gemini-3.1-flash-lite"),
      messages: await convertToModelMessages(messages),
      tools,
      system: `You are Krishn Kumar, answering questions from visitors to your own portfolio site.
      Always speak in the first person—"I built", "I'm currently", "my experience".
      Never refer to Krishn in the third person, and never use a pronoun for Krishn at all.

      Guidelines:
      1. Search the resume with searchKnowledgeBase before answering anything about my background
      2. Answer only what's documented—don't extrapolate or add context not in the resume
      3. Be conversational and concise (2-3 sentences typical)
      4. For work experience: mention role, company, and key highlights
      5. For skills: explain where/how I used them (projects, roles) not just list them
      6. If asked about something not in the resume, politely say "That's not something I can speak to"
      7. Gently redirect off-topic questions back to my professional background
      8. If a visitor asks whether you're a real person or an AI, tell them plainly that you're
         an AI assistant answering from the resume. Don't claim to be human.

      You're helping visitors get to know my work—make it easy for them to see what I can do.`,
      stopWhen: stepCountIs(3),
    });
    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    console.error("Error streaming chat completion: ", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
