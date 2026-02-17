# Oxford Editors

Academic services and higher education support platform for UK students. Built with Next.js 16, React 19, Tailwind CSS 4, Drizzle ORM, and Neon PostgreSQL.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS 4, Lucide icons, Framer Motion
- **Database:** Neon PostgreSQL with Drizzle ORM
- **Email:** Resend
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Inter, Plus Jakarta Sans (via next/font)
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | Neon PostgreSQL connection string |
| `RESEND_API_KEY` | No | Resend API key for contact form emails |
| `CONTACT_EMAIL` | No | Email to receive contact form submissions (default: info@oxfordeditors.co.uk) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | WhatsApp number for CTA buttons (with country code, no +) |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL for sitemap/SEO (default: http://localhost:3000) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID (only loads in production) |

### 3. Set up the database

```bash
npx drizzle-kit push
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx drizzle-kit push` | Push schema changes to database |
| `npx drizzle-kit studio` | Open Drizzle Studio (database GUI) |

## Project Structure

```
oxford-editors/
├── app/
│   ├── (marketing)/          # Public pages with shared header/footer
│   │   ├── about-us/
│   │   ├── blog/[slug]/
│   │   ├── contact-us/
│   │   ├── courses/[slug]/
│   │   ├── faqs/
│   │   ├── privacy-policy/
│   │   ├── services/[slug]/
│   │   └── terms-condition/
│   ├── api/
│   │   ├── contact/           # Contact form POST endpoint
│   │   └── newsletter/        # Newsletter subscription endpoint
│   ├── layout.tsx             # Root layout (fonts, metadata, analytics)
│   ├── sitemap.ts             # Dynamic sitemap generation
│   └── robots.ts              # Robots.txt generation
├── components/
│   ├── blog/                  # BlogCard, BlogPost, BlogGrid, BlogSidebar
│   ├── courses/               # CourseHero, CourseDetails, CourseCTA, CourseGrid
│   ├── faqs/                  # FaqAccordion
│   ├── home/                  # HeroSection, AboutSection, StatsSection, etc.
│   ├── layout/                # Header, Footer, MobileMenu
│   ├── services/              # ServiceHero, ServiceFeatures, ServiceCTA
│   ├── shared/                # Button, ContactForm, NewsletterForm, Accordion, StarRating
│   └── Analytics.tsx          # Google Analytics (production only)
├── lib/
│   ├── data/                  # Static data (services, courses, blog, testimonials)
│   ├── db/                    # Drizzle ORM setup and schema
│   ├── validations/           # Zod schemas (contact, newsletter)
│   ├── analytics.ts           # GA event/pageview helpers
│   ├── structured-data.ts     # JSON-LD schema generators
│   └── utils.ts               # cn(), formatDate()
└── public/
    └── images/                # Logo SVGs, OG image
```

## Deployment (Vercel)

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel project settings:
   - `DATABASE_URL` — your Neon connection string
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_EMAIL` — recipient email for contact form
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number
   - `NEXT_PUBLIC_SITE_URL` — your production domain (e.g. https://oxfordeditors.co.uk)
   - `NEXT_PUBLIC_GA_ID` — Google Analytics ID (optional)
4. Deploy

Vercel will automatically detect Next.js and configure the build.

## Database Setup (Neon)

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the connection string to `DATABASE_URL`
3. Run `npx drizzle-kit push` to create tables
4. Tables created: `contact_submissions`, `newsletter_subscriptions`
