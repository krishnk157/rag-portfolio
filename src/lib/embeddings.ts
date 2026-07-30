import { embed, embedMany } from "ai";
import { google } from "@ai-sdk/google";

// gemini-embedding-2 defaults to 3072 dims, which exceeds pgvector's 2000-dim
// HNSW index limit, so we ask for a smaller output size.
const providerOptions = { google: { outputDimensionality: 768 } };

export async function generateEmbedding(text: string): Promise<number[]> {
  const input = text.replaceAll("\n", " ");

  const { embedding } = await embed({
    model: google.embeddingModel("gemini-embedding-2"),
    value: input,
    providerOptions,
  });

  return embedding;
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const inputs = texts.map((text) => text.replaceAll("\n", " "));

  const { embeddings } = await embedMany({
    model: google.embeddingModel("gemini-embedding-2"),
    values: inputs,
    providerOptions,
  });

  return embeddings;
}
