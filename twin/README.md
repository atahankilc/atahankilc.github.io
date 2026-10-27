# Digital twin backend

The CRT terminal (`index.html`) has two brains that speak the same protocol:

- **offline**: a keyword intent engine in the page. No key, no network, always works, and is the fallback.
- **llm**: `worker.js`, a Cloudflare Worker that keeps the OpenAI key server-side. It locks the model to `profile.json` and streams `{type:"text"}` / `{type:"tool"}` events. Tools are what make the twin *show* things (project gallery, live demo pane, timeline chart, contact card) instead of only talking.

Never put the OpenAI key in the site. GitHub Pages is static, so anything shipped to the browser is public.

## Setup

```sh
node twin/build-profile.mjs           # regenerate profile.json from assets/content.js
cd twin
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
npx wrangler deploy                   # prints https://atahan-twin.<you>.workers.dev
```

Then set `endpoint` in `twin/twin.config.js` to that URL (or test with `/?endpoint=<url>`).

## Guardrails

The page is public and an Origin header can be faked with curl, so nothing here relies on secrecy. What bounds the bill:

1. **Exact Origin match** (`ALLOWED_ORIGINS`). Stops other websites from embedding the twin. Local dev origins live in `.dev.vars` (git-ignored, never deployed).
2. **Burst limit per IP**: 6 requests / 60 s via the Cloudflare rate-limit binding `BURST`.
3. **Request shape**: body ≤ 16 KB, ≤ 12 messages × 600 chars, last message must be the visitor's.
4. **Daily caps** in the `Budget` Durable Object: 1,500 OpenAI calls per day in total, 40 per visitor (hashed IP, wiped daily). Over the cap the page answers with the offline engine.
5. **Cheap, short answers**: `gpt-5-nano` with minimal reasoning, max 400 output tokens.
6. **OpenAI side (do this yourself)**: a separate project for the twin, a key restricted to that project, prepaid credits with auto-recharge off, and a project budget.

Worst case at the caps is roughly 1,500 × ~$0.0004 ≈ $0.60 a day.

- The system prompt allows only questions about Atahan and only facts from `profile.json`. Everything else gets a one-line refusal.
- `open_project` ids are validated against the profile before they reach the page.
