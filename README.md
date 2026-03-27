# LTVChannel

Stripe-native LTV-by-acquisition-channel analytics for indie SaaS founders.

**Core value**: Answer "which channel produces my highest-LTV customers?" in under 60 seconds — no SQL, no spreadsheets, no data warehouse.

## Stack

- Node.js + Express (backend)
- React 18 via CDN (no build step)
- Chart.js 4 via CDN
- No database required for the demo

## Running locally

```bash
npm install
npm start
# → http://localhost:3000
```

The server binds to `0.0.0.0` and reads `process.env.PORT` (falls back to 3000).

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | / | Landing page with pricing |
| GET | /demo | Demo dashboard (React + Chart.js) |
| GET | /dashboard | Alias for /demo |
| GET | /docs | JS snippet docs |
| GET | /api/health | Health check |
| GET | /api/demo-data | Mock channel LTV JSON |
| POST | /api/connect | Stub Stripe OAuth |

## Deploying on Replit

1. Import this repo at [replit.com/new](https://replit.com/new)
2. Click **Run** — no configuration needed
3. Replit automatically sets `PORT` and runs `npm start`

## Slug

`ltv-by-channel-tracker`
