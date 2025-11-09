# Kim & Nicola Wedding RSVP Site - Complete Documentation

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Configuration](#configuration)
8. [Development Guide](#development-guide)
9. [Internationalization (i18n)](#internationalization-i18n)
10. [Database Schema](#database-schema)
11. [API Documentation](#api-documentation)
12. [Admin Dashboard](#admin-dashboard)
13. [Component Documentation](#component-documentation)
14. [Customization Guide](#customization-guide)
15. [Deployment](#deployment)
16. [Troubleshooting](#troubleshooting)

---

## Overview

Kim & Nicola Wedding RSVP Site is a modern, responsive wedding invitation and RSVP management platform built with Next.js 15. The application features beautiful animations, smooth scrolling, multi-language support, and a comprehensive admin dashboard for managing guest responses.

### Key Highlights

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Multi-language Support**: Available in 6 languages (English, French, Japanese, Welsh, Spanish, Portuguese-BR)
- **Real-time Data**: Supabase integration for real-time guest management
- **Beautiful Animations**: Smooth animations using Framer Motion, GSAP, and Lenis
- **Admin Dashboard**: Secure admin area for viewing and managing RSVPs

---

## Features

### Public Features

- **Hero Section**: Animated hero section with countdown timer
- **Story Section**: Timeline of the couple's relationship milestones
- **Event Details**: Comprehensive event information including:
  - Welcome message
  - Venue details
  - Schedule/timeline
  - Dress code/attire
  - Accommodation options
  - Travel information
  - Local attractions
  - Gift registry information
- **Gallery**: Parallax-enabled image gallery with smooth scrolling
- **Sticker Gallery**: Interactive sticker gallery with cursor trail effects
- **RSVP Form**: Dynamic RSVP form with:
  - Guest information collection
  - Plus-one management with individual name fields
  - Dietary restrictions
  - Additional notes
  - Real-time validation
  - Form submission handling

### Admin Features

- **Secure Authentication**: Supabase-based authentication system
- **Guest Management**: View all RSVP submissions
- **Guest Details**: See complete guest information including:
  - Name and email
  - Attendance status
  - Number of plus-ones
  - Plus-one names
  - Dietary restrictions
  - Additional notes
  - Submission timestamps
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Automatic session handling and refresh

### Technical Features

- **Internationalization**: Full i18n support with locale-based routing
- **Smooth Scrolling**: Lenis-powered smooth scroll implementation
- **Animation System**: Multiple animation libraries for different effects
- **Theme System**: Customizable color palette and theme management
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Zod-based form validation with React Hook Form

---

## Architecture

### Application Architecture

The application follows Next.js 15 App Router architecture with the following key patterns:

1. **Server Components**: Default rendering strategy for better performance
2. **Client Components**: Used for interactive features (forms, animations)
3. **API Routes**: Server-side API endpoints for data operations
4. **Middleware**: Handles authentication and internationalization routing
5. **Layout System**: Nested layouts for consistent UI structure

### Routing Structure

```
/                           → Redirects to /{defaultLocale}
/{locale}                   → Main wedding site (en, fr, ja, cy, es, pt-BR)
/{locale}/gallery-parallax   → Parallax gallery demo
/{locale}/parallax          → Parallax effects demo
/{locale}/text-animation    → Text animation demos
/admin                      → Protected admin dashboard
/admin/login               → Admin login page
/api/rsvp                  → RSVP submission endpoint
```

### Data Flow

1. **Public Site**: Client-side components → API routes → Supabase
2. **Admin Dashboard**: Protected routes → Server components → Supabase (with auth)
3. **Internationalization**: Middleware → Locale detection → Dictionary loading

---

## Tech Stack

### Core Framework

- **Next.js 15.2.2**: React framework with App Router
- **React 19.0.0**: UI library
- **TypeScript 5**: Type-safe development

### Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Sass**: CSS preprocessor for complex styles
- **CSS Modules**: Component-scoped styles

### Animation Libraries

- **Framer Motion 12.6.0**: React animation library
- **GSAP 3.13.0**: High-performance animation library
- **@studio-freight/lenis 1.0.42**: Smooth scroll library
- **@react-spring/web 9.7.4**: Spring-based animations

### Database & Backend

- **Supabase**: Backend-as-a-Service
  - PostgreSQL database
  - Authentication
  - Real-time subscriptions

### Form Management

- **React Hook Form 7.54.2**: Form state management
- **Zod 3.24.2**: Schema validation
- **@hookform/resolvers 4.1.3**: Form validation integration

### Internationalization

- **@formatjs/intl-localematcher 0.6.0**: Locale matching
- **negotiator 1.0.0**: HTTP content negotiation

### Utilities

- **date-fns 4.1.0**: Date manipulation
- **clsx 2.1.1**: Conditional class names
- **tailwind-merge 3.0.2**: Tailwind class merging
- **lucide-react 0.482.0**: Icon library
- **sonner 2.0.1**: Toast notifications

### Development Tools

- **ESLint 9**: Code linting
- **Prettier 3.5.3**: Code formatting
- **Turbopack**: Fast bundler (via Next.js)

---

## Project Structure

```
kim-and-nicola/
├── public/                    # Static assets
│   ├── images/               # Image assets (1-26.jpg, stickers, lanyard)
│   ├── models/               # 3D models (if any)
│   └── textures/             # Texture files
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── [lang]/          # Localized routes
│   │   │   ├── page.tsx     # Main wedding site page
│   │   │   ├── layout.tsx   # Locale-specific layout
│   │   │   ├── gallery-parallax/
│   │   │   ├── parallax/
│   │   │   └── text-animation/
│   │   ├── admin/           # Admin routes
│   │   │   ├── page.tsx     # Admin dashboard
│   │   │   └── login/       # Admin login
│   │   ├── api/             # API routes
│   │   │   └── rsvp/        # RSVP submission endpoint
│   │   ├── demo/            # Demo pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Root redirect
│   │   └── globals.css      # Global styles
│   │
│   ├── components/          # React components
│   │   ├── admin/           # Admin components
│   │   ├── animation/       # Animation components
│   │   ├── auth/            # Authentication components
│   │   ├── effects/         # Visual effects
│   │   ├── layout/          # Layout components
│   │   │   ├── details/    # Detail section components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DetailsSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── RSVPSection.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── rsvp/            # RSVP form components
│   │   ├── theme/           # Theme components
│   │   └── ui/              # shadcn/ui components
│   │
│   ├── blocks/              # Reusable block components
│   │   ├── Animations/
│   │   ├── Components/
│   │   └── TextAnimations/
│   │
│   ├── dictionaries/        # i18n translation files
│   │   ├── en.json
│   │   ├── fr.json
│   │   ├── ja.json
│   │   ├── cy.json
│   │   ├── es.json
│   │   ├── pt-BR.json
│   │   └── index.ts
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAnimationOnScroll.ts
│   │   ├── useLenis.ts
│   │   └── useScrollDirection.ts
│   │
│   ├── lib/                 # Utility libraries
│   │   ├── animations/     # Animation utilities
│   │   ├── constants/      # Constants (images, etc.)
│   │   ├── supabase/       # Supabase clients
│   │   │   ├── client.ts  # Client-side Supabase
│   │   │   └── server.ts  # Server-side Supabase
│   │   ├── theme/          # Theme configuration
│   │   ├── utils/          # General utilities
│   │   ├── utils.ts        # Utility functions
│   │   └── types.ts        # TypeScript types
│   │
│   ├── assets/             # Source assets
│   ├── globals/            # Global utilities
│   └── i18n-config.ts      # i18n configuration
│
├── supabase/
│   └── migrations/         # Database migrations
│       └── 20250621232320_add_plus_one_names_to_guests.sql
│
├── middleware.ts          # Next.js middleware (auth + i18n)
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── components.json        # shadcn/ui configuration
├── package.json           # Dependencies
└── README.md              # Basic readme
```

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **Bun**: (Optional) For faster package management
- **Supabase Account**: For database and authentication
- **Git**: For version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kim-and-nicola
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Set up Supabase database**
   
   Create a new Supabase project and run the following SQL to create the `guests` table:
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

5. **Run database migrations** (if needed)
   
   If you have an existing `guests` table, run the migration:
   ```sql
   ALTER TABLE guests ADD COLUMN plus_one_names TEXT[];
   ```

6. **Start the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to `http://localhost:3000` - you'll be automatically redirected to `/en` (or your default locale).

### Setting Up Admin Access

See [ADMIN_AUTH_SETUP.md](./ADMIN_AUTH_SETUP.md) for detailed instructions on setting up admin authentication.

---

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

### Next.js Configuration

The `next.config.ts` file includes:

- **Image domains**: Configured for Unsplash and other CDNs
- **Experimental features**: App Router optimizations

### TypeScript Configuration

The `tsconfig.json` includes:

- **Path aliases**: `@/*` maps to `./src/*`
- **Strict mode**: Enabled for type safety
- **JSX**: Preserved for Next.js processing

### Tailwind Configuration

Tailwind CSS 4 is configured with:

- Custom font variables
- Custom color palette
- Animation utilities
- Responsive breakpoints

### Internationalization Configuration

The `src/i18n-config.ts` file defines:

```typescript
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "ja", "cy", "es", "pt-BR"],
} as const;
```

---

## Development Guide

### Available Scripts

```bash
# Development server with Turbopack
npm run dev
# or
bun dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow TypeScript strict mode
   - Use ESLint and Prettier
   - Write component tests if applicable

3. **Test locally**
   ```bash
   npm run dev
   ```

4. **Lint and format**
   ```bash
   npm run lint:fix
   npm run format
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Use functional components with TypeScript
- **Naming**: Use PascalCase for components, camelCase for functions
- **Imports**: Use path aliases (`@/components` instead of relative paths)
- **Spacing**: Follow ESLint rules (spaces inside curly brackets)

### Component Development

When creating new components:

1. **Place in appropriate directory**
   - Layout components → `src/components/layout/`
   - UI components → `src/components/ui/`
   - Feature components → `src/components/[feature]/`

2. **Use TypeScript interfaces**
   ```typescript
   interface ComponentProps {
     title: string;
     optional?: boolean;
   }
   ```

3. **Follow naming conventions**
   - Component files: `PascalCase.tsx`
   - Hook files: `useCamelCase.ts`

4. **Export properly**
   ```typescript
   export const ComponentName = ({ props }: ComponentProps) => {
     // Component logic
   };
   ```

---

## Internationalization (i18n)

### Supported Languages

- **English (en)**: Default locale
- **French (fr)**
- **Japanese (ja)**
- **Welsh (cy)**
- **Spanish (es)**
- **Portuguese-BR (pt-BR)**

### How It Works

1. **Middleware Detection**: The middleware detects the user's preferred language from browser headers
2. **Locale Routing**: URLs are prefixed with locale (`/en/`, `/fr/`, etc.)
3. **Dictionary Loading**: Each page loads the appropriate dictionary file
4. **Language Switcher**: Users can manually switch languages via the language switcher component

### Adding Translations

1. **Update dictionary files** in `src/dictionaries/`
2. **Follow the structure** of existing dictionaries
3. **Use nested objects** for organization:
   ```json
   {
     "section": {
       "title": "Title",
       "description": "Description"
     }
   }
   ```

4. **Access in components**:
   ```typescript
   const dictionary = await getDictionary(locale);
   return <h1>{dictionary.section.title}</h1>;
   ```

### Dictionary Structure

Each dictionary file (`en.json`, `fr.json`, etc.) contains:

- `navigation`: Navigation menu items
- `hero`: Hero section content
- `story`: Story section content
- `details`: Event details sections
- `rsvp`: RSVP form labels and messages
- `gallery`: Gallery section content
- `footer`: Footer content

---

## Database Schema

### Guests Table

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

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key, auto-generated |
| `name` | TEXT | Guest's full name (required) |
| `email` | TEXT | Guest's email address (required) |
| `attending` | BOOLEAN | Whether guest is attending (default: true) |
| `plus_ones` | INTEGER | Number of plus-ones (default: 0) |
| `plus_one_names` | TEXT[] | Array of plus-one names |
| `dietary_restrictions` | TEXT | Dietary restrictions or preferences |
| `notes` | TEXT | Additional notes from guest |
| `created_at` | TIMESTAMP | Record creation timestamp |
| `updated_at` | TIMESTAMP | Record update timestamp |

### Indexes

Consider adding indexes for common queries:

```sql
CREATE INDEX idx_guests_email ON guests(email);
CREATE INDEX idx_guests_attending ON guests(attending);
CREATE INDEX idx_guests_created_at ON guests(created_at DESC);
```

---

## API Documentation

### RSVP Submission Endpoint

**Endpoint**: `POST /api/rsvp`

**Description**: Submits a guest RSVP with all relevant information.

**Request Body**:
```typescript
{
  name: string;              // Required
  email: string;             // Required
  attending: boolean;        // Default: true
  plusOnes: number;          // Default: 0
  plusOneNames?: string[];   // Required if plusOnes > 0 and attending
  dietaryRestrictions?: string;
  notes?: string;
}
```

**Response**:
```typescript
// Success (200)
{
  success: true;
  data: Guest;
}

// Error (400/500)
{
  error: string;
}
```

**Validation Rules**:
- `name` and `email` are required
- If `plusOnes > 0` and `attending === true`, `plusOneNames` must be provided
- `plusOneNames` array length must match `plusOnes`
- All plus-one names must be non-empty strings

**Example Request**:
```javascript
const response = await fetch('/api/rsvp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    attending: true,
    plusOnes: 2,
    plusOneNames: ['Jane Doe', 'Bob Doe'],
    dietaryRestrictions: 'Vegetarian',
    notes: 'Looking forward to it!'
  })
});
```

---

## Admin Dashboard

### Access

- **URL**: `/admin`
- **Login**: `/admin/login`
- **Protection**: Middleware-based authentication

### Features

- **Guest List**: View all RSVP submissions
- **Guest Details**: See complete guest information
- **Filtering**: Filter by attendance status
- **Search**: Search guests by name or email
- **Export**: (Future feature) Export guest list

### Authentication

The admin dashboard uses Supabase Authentication:

1. **Session Check**: Middleware verifies authentication
2. **Redirect**: Unauthenticated users redirected to `/admin/login`
3. **Session Management**: Automatic token refresh
4. **Logout**: Secure session cleanup

### Setting Up Admin Users

See [ADMIN_AUTH_SETUP.md](./ADMIN_AUTH_SETUP.md) for detailed setup instructions.

---

## Component Documentation

### Layout Components

#### `MainLayout`
Main layout wrapper for the wedding site.

**Props**:
- `transparentHeader?: boolean` - Makes header transparent
- `dictionary: Dictionary` - Translation dictionary

#### `Header`
Site navigation header with language switcher.

**Features**:
- Responsive navigation menu
- Language switcher
- Smooth scroll navigation

#### `Footer`
Site footer with additional information.

#### `HeroSection`
Hero section with countdown timer and CTA.

**Props**:
- `dictionary: Dictionary` - Translation dictionary

#### `DetailsSection`
Event details section with expandable cards.

**Props**:
- `details: DetailsWithIcons` - Details with icons
- `backgrounds: Backgrounds` - Background images

#### `GallerySection`
Image gallery with parallax effects.

**Props**:
- `images: Image[]` - Array of image objects
- `dictionary: Dictionary` - Translation dictionary
- `useParallaxEffect?: boolean` - Enable parallax

#### `RSVPSection`
RSVP form section.

**Props**:
- `dictionary: Dictionary` - Translation dictionary

### Form Components

#### `RSVPForm`
Main RSVP form component.

**Features**:
- Dynamic plus-one name fields
- Form validation
- Error handling
- Success feedback

**Props**:
- `dictionary: Dictionary` - Translation dictionary

### Animation Components

#### `LenisProvider`
Smooth scroll provider wrapper.

#### `StickerGallery`
Interactive sticker gallery with cursor trail.

**Props**:
- `dictionary: Dictionary` - Translation dictionary

#### `ZoomParallax`
Zoom parallax effect component.

### UI Components

All UI components are from shadcn/ui and follow their documentation:

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Dialog`
- `Card`
- `Calendar`
- `Form`
- `Label`

---

## Customization Guide

### Changing Colors

1. **Update Tailwind config** (`tailwind.config.js` or CSS variables)
2. **Update theme files** in `src/lib/theme/`
3. **Update color palette component** if using color picker

### Changing Fonts

1. **Update font imports** in `src/app/layout.tsx`
2. **Update CSS variables** in `globals.css`
3. **Update Tailwind config** with new font families

### Adding Images

1. **Place images** in `public/images/`
2. **Update constants** in `src/lib/constants/images.ts`
3. **Reference in components** using the constants

### Modifying Content

1. **Update dictionaries** in `src/dictionaries/`
2. **Update component props** if needed
3. **Test all languages** to ensure consistency

### Adding New Sections

1. **Create component** in `src/components/layout/`
2. **Add to main page** (`src/app/[lang]/page.tsx`)
3. **Add translations** to all dictionary files
4. **Update navigation** if needed

### Customizing Animations

1. **Animation utilities** in `src/lib/animations/`
2. **Component animations** use Framer Motion or GSAP
3. **Smooth scroll** configured in `LenisProvider`

---

## Deployment

### Vercel Deployment (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. **Deploy**: Vercel will auto-deploy on push

### Environment Setup

**Production Environment Variables**:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
```

### Supabase Configuration

1. **Update Site URL** in Supabase Dashboard:
   - Authentication → Settings → Site URL
   - Set to your production domain

2. **Configure CORS** (if needed):
   - Add your domain to allowed origins

3. **Database Migrations**:
   - Run migrations in Supabase SQL Editor
   - Or use Supabase CLI for version control

### Build Optimization

- **Image Optimization**: Next.js automatically optimizes images
- **Code Splitting**: Automatic via Next.js App Router
- **Static Generation**: Use `generateStaticParams` for static pages
- **Bundle Analysis**: Use `@next/bundle-analyzer` if needed

### Performance Considerations

- **Image Sizes**: Optimize images before adding to `public/images/`
- **Animation Performance**: Use `will-change` CSS property sparingly
- **Font Loading**: Fonts are optimized via Next.js font optimization
- **Code Splitting**: Large components are automatically code-split

---

## Troubleshooting

### Common Issues

#### "Invalid login credentials" Error

**Solution**:
1. Verify user exists in Supabase Authentication → Users
2. Check email is confirmed
3. Verify password is correct
4. Check environment variables are set correctly

#### Redirect Loop on Admin Page

**Solution**:
1. Check Supabase URL and keys in `.env.local`
2. Verify middleware configuration
3. Clear browser cookies and cache
4. Check browser console for errors

#### Images Not Loading

**Solution**:
1. Verify image paths in `src/lib/constants/images.ts`
2. Check images exist in `public/images/`
3. Verify Next.js image configuration
4. Check browser console for 404 errors

#### Internationalization Not Working

**Solution**:
1. Verify middleware is running
2. Check `i18n-config.ts` configuration
3. Verify dictionary files exist for all locales
4. Check browser language settings

#### Form Submission Errors

**Solution**:
1. Check Supabase connection
2. Verify database schema matches expected structure
3. Check API route logs for errors
4. Verify form validation rules

#### Build Errors

**Solution**:
1. Run `npm run lint` to check for errors
2. Verify all TypeScript types are correct
3. Check for missing dependencies
4. Clear `.next` folder and rebuild

### Debugging Tips

1. **Check Browser Console**: Look for JavaScript errors
2. **Check Network Tab**: Verify API calls are successful
3. **Check Supabase Logs**: View database and auth logs
4. **Check Vercel Logs**: View server-side logs in production
5. **Use TypeScript**: Leverage type checking to catch errors early

### Getting Help

1. **Check Documentation**: Review this documentation thoroughly
2. **Check Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
3. **Check Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
4. **Review Error Messages**: Error messages often contain helpful information

---

## Additional Resources

### Documentation Files

- [README.md](./README.md) - Basic project overview
- [ADMIN_AUTH_SETUP.md](./ADMIN_AUTH_SETUP.md) - Admin authentication setup

### External Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Project Links

- Repository: (Add your repository URL)
- Live Site: (Add your live site URL)
- Supabase Dashboard: (Add your Supabase project URL)

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Backend powered by [Supabase](https://supabase.io/)
- Deployed on [Vercel](https://vercel.com/)

---

**Last Updated**: January 2025
**Version**: 0.1.0

