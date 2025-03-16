# Kim & Nicola Wedding RSVP Site

A stunning, responsive wedding RSVP website built with Next.js, TailwindCSS, and Supabase. This site features beautiful animations, micro-interactions, and an immersive user experience.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **RSVP Form**: Interactive form with real-time validation
- **Admin Dashboard**: Secure admin area to view and manage RSVPs
- **Supabase Integration**: Real-time database for storing and retrieving guest information
- **Modern UI Components**: Built with shadcn/ui for a consistent and beautiful design

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, Framer Motion
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Deployment**: Vercel
- **Runtime**: Bun

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kim-and-nicola.git
   cd kim-and-nicola
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Set up Supabase:
   - Create a new Supabase project
   - Create a `guests` table with the following schema:
     ```sql
     create table guests (
       id uuid default uuid_generate_v4() primary key,
       name text not null,
       email text not null,
       attending boolean default true,
       plus_ones integer default 0,
       dietary_restrictions text,
       notes text,
       created_at timestamp with time zone default now(),
       updated_at timestamp with time zone default now()
     );
     ```

5. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
  - `layout`: Layout components (Header, Footer, etc.)
  - `rsvp`: RSVP form components
  - `admin`: Admin dashboard components
  - `ui`: UI components from shadcn/ui
- `src/lib`: Utility functions and shared code
  - `animations`: Animation utilities
  - `supabase`: Supabase client configuration
  - `utils`: General utility functions
- `src/hooks`: Custom React hooks
- `public`: Static assets

## Customization

### Images

Replace the images in the `public/images` directory with your own images. Make sure to keep the same filenames or update the references in the code.

### Content

Update the content in `src/app/page.tsx` to customize the stories, event details, and other information.

### Styling

The site uses TailwindCSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)
- [Vercel](https://vercel.com/)

## ESLint Configuration

This project uses ESLint to enforce code quality and consistency. The configuration includes:

- Next.js core web vitals rules
- TypeScript-specific rules
- Custom spacing rules:
  - `object-curly-spacing`: Enforces spaces inside curly brackets (e.g., `import { Component } from 'package'` instead of `import {Component} from 'package'`)

To run the linter:

```bash
# Check for linting issues
npm run lint

# Automatically fix linting issues
npm run lint:fix
```
