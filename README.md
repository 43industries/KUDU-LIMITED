# KUDU Talent LTD — Kenya–Germany Talent Bridge

Phase 1: client-side talent placement platform deployable on Vercel. Data is stored in the browser (`localStorage` / `sessionStorage`) until the Supabase backend is added in Phase 2.

## Local development

```bash
npm install
cp .env.example .env
# Set VITE_ADMIN_INVITE_CODE in .env
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Import this folder or connect your Git repository in Vercel.
2. Add environment variable: `VITE_ADMIN_INVITE_CODE` (your secret admin invite code).
3. Redeploy after adding env vars so admin setup works at `/?admin-setup=1`.
4. Deploy — Vercel runs `npm ci` and `npm run build`, serving `dist/`.

## First admin account

1. Visit **`/admin`** on your site (e.g. `https://yoursite.com/admin`) — bookmark this URL.
2. Register with your invite code (must match `VITE_ADMIN_INVITE_CODE`).
3. Only one admin account is allowed. After that, `/admin` opens Sign In instead.

Legacy URL `/?admin-setup=1` still works.

## Phase 1 limitations

- Data is per-browser, not shared across users or devices.
- Passwords are stored in plain text in `localStorage`.
- CV uploads save filenames only, not file contents.

## Phase 2 roadmap (Supabase)

- Supabase Auth with hashed passwords
- Postgres tables for profiles, jobs, applications, forwardings, notifications
- Supabase Storage for CV files
- Replace the client `DB` layer with `@supabase/supabase-js`
