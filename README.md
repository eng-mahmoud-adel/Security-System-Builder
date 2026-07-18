# Security System Builder

A Wyze-style "build your security system" flow: pick cameras, a plan, sensors
and extra protection, with a live order review that persists to
`localStorage`.

The project is split into two independent apps:

```
frontend/   Vite + React + TypeScript + Tailwind CSS
backend/    Express + TypeScript API
```

## Ports

| App              | URL                     |
| ----------------- | ----------------------- |
| Frontend (dev)     | http://localhost:5173   |
| Backend (dev/prod) | http://localhost:5000   |

The frontend works fine even if the backend isn't running — it falls back to
local dummy data for anything it can't fetch. To point the frontend at a
different backend URL, set `VITE_API_URL` (e.g. in a `.env` file inside
`frontend/`).

## Prerequisites

- Node.js 18+
- npm

## Frontend

Tools: Vite, React 19, TypeScript, Tailwind CSS 4.

```
cd frontend
npm install
npm run dev       # start the dev server on http://localhost:5173
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Backend

Tools: Express, TypeScript, nodemon, ts-node.

```
cd backend
npm install
npm run dev       # start with nodemon + ts-node, auto-restarts on changes
npm run build     # compile TypeScript to dist/
npm start         # run the compiled build (node dist/index.js)
```

Endpoints:

- `GET /api/cameras`
- `GET /api/sensors`
- `GET /api/protection`
- `GET /api/plans`

## Formatting

A single Prettier config at the project root covers both apps. From the
**project root** (not from `frontend/` or `backend/`):

```
npm install
npm run format
```
