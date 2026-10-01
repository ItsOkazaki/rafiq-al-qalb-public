# Architecture

## Request flow

```text
User query
   ↓
Arabic normalization
   ↓
Safety / policy gates
   ↓
Topic identification + keywords
   ↓
Approved-source retrieval
   ↓
Evidence check
   ↓
Grounded AI organization (when configured)
   ↓
Research result
```

## Core rule

The LLM is not the source of truth. The indexed passages are the source of truth.

The AI provider receives the user query together with the passages selected by the retrieval layer and is instructed to stay inside that material.

## Why both deterministic and AI layers exist

The deterministic layer controls what material is eligible for retrieval. The AI layer organizes that material into a more readable response when configured.

When AI is not configured, the application can still provide a source-grounded deterministic research brief. This makes local development and source browsing possible without exposing credentials.

## Key modules

| Module | Responsibility |
|---|---|
| `src/lib/text/arabic.ts` | Arabic normalization and dialect handling |
| `src/lib/rag/topics.ts` | Research topic definitions |
| `src/lib/rag/keywords.ts` | Keyword extraction |
| `src/lib/rag/retrieve.ts` | Retrieval and source filtering |
| `src/lib/sources/registry.ts` | Approved source registry |
| `src/lib/policy/*` | Scope and referral policies |
| `src/lib/safety.ts` | Safety gate |
| `src/lib/ai/provider.ts` | Grounded AI response layer |
| `src/lib/ai/fallback.ts` | Deterministic response organizer |
| `src/lib/research/pipeline.ts` | End-to-end orchestration |
