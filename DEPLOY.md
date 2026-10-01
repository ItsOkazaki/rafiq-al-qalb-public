# Deployment

Rafiq Al-Qulub is a Next.js App Router application and can be deployed to any Node-compatible host. Vercel is a convenient option.

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## AI configuration

The core source retrieval works without any local secret. To enable the grounded AI response layer, create a local `.env` file from `.env.example` and provide your own `OPENAI_API_KEY`.

Never commit `.env` or any real API key to GitHub.

## Vercel

1. Import the repository into Vercel.
2. Set the build command to the default Next.js build.
3. Add `OPENAI_API_KEY` only in Vercel Environment Variables when AI responses are enabled.
4. Deploy.
