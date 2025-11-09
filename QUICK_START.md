# Quick Start Guide

A condensed guide to get you up and running quickly.

## Prerequisites

- Node.js 18+ or Bun
- Supabase account

## 5-Minute Setup

### 1. Install Dependencies

```bash
bun install
# or
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Database Setup

Run this SQL in Supabase SQL Editor:

```sql
CREATE TABLE guests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  attending BOOLEAN DEFAULT TRUE,
  plus_ones INTEGER DEFAULT 0,
  plus_one_names TEXT[],
  dietary_restrictions TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Start Development Server

```bash
bun dev
# or
npm run dev
```

Visit `http://localhost:3000` → automatically redirects to `/en`

## Admin Setup

1. Create admin user in Supabase Dashboard:
   - Authentication → Users → Add user
   - Enter email and password
   - Confirm email

2. Visit `/admin` → redirected to `/admin/login`
3. Login with admin credentials

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint
npm run lint:fix

# Format
npm run format
```

## Project Structure Quick Reference

```
src/
├── app/[lang]/page.tsx    # Main wedding site
├── app/admin/             # Admin dashboard
├── components/            # React components
├── dictionaries/         # i18n translations
├── lib/                  # Utilities & config
└── hooks/                # Custom hooks
```

## Key Files

- `middleware.ts` - Auth & i18n routing
- `src/i18n-config.ts` - Language configuration
- `src/lib/types.ts` - TypeScript types
- `src/lib/supabase/` - Supabase clients

## Need More Help?

See [DOCUMENTATION.md](./DOCUMENTATION.md) for complete documentation.

