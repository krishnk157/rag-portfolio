# Krishn Kumar — Portfolio

Personal portfolio site with an embedded RAG chatbot. Built with Next.js, Tailwind CSS, and the Vercel AI SDK.

**Live:** [krishn-kumar.vercel.app](https://krishn-kumar.vercel.app/)

## Features

- **Portfolio** — Experience, projects, skills, and education rendered from a single data source
- **RAG Chatbot** — Floating chat widget backed by Gemini 3.1 Flash Lite, semantic search over resume chunks using pgvector with 768-dimension Gemini embeddings
- **Dark mode** — System-aware with manual toggle
- **Animations** — Scroll-triggered entrances, staggered hero reveal, card hover interactions, respects `prefers-reduced-motion`
- **Protected upload** — Auth-gated route for updating the resume knowledge base

## Tech Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS v4 + shadcn/ui
- Vercel AI SDK v7 with Gemini 3.1 Flash Lite
- Gemini Embedding 2 (768-dim) + pgvector + Neon Postgres
- Clerk authentication
- Motion (Framer Motion v12)
- next-themes

## Getting Started

```bash
npm install
npm run dev
```

Set up environment variables for Clerk, Neon Postgres, and Google AI in `.env.local`.
