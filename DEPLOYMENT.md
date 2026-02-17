# Deployment Guide — Oxford Editors

Step-by-step checklist for deploying to production with Neon PostgreSQL and Vercel.

---

## 1. Neon Database Setup

### Create project
1. Sign up / log in at [neon.tech](https://neon.tech)
2. Click **New Project**
3. Choose a region close to your users (e.g. `eu-west-2` for UK)
4. Copy the **connection string** — it looks like:
   ```
   postgresql://neondb_owner:password@ep-xxxxx.eu-west-2.aws.neon.tech/neondb?sslmode=require
   ```

### Run migrations
```bash
# Set DATABASE_URL locally
echo 'DATABASE_URL=postgresql://...' > .env.local

# Push schema to Neon
npx drizzle-kit push
```

### Verify tables
After pushing, you should have these tables:
- `contact_submissions`
- `newsletter_subscriptions`
- `services`
- `courses`
- `blog_posts`
- `testimonials`

You can verify in the Neon Console SQL Editor or by running:
```bash
npx drizzle-kit studio
```

### Seed sample data (optional)
```bash
npm run db:seed
```
This inserts sample services, courses, blog posts, and testimonials. Safe to re-run — it clears existing data first.

---

## 2. Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Verify your sending domain (e.g. `oxfordeditors.co.uk`)
3. Create an API key with **Sending access**
4. Note the key — it starts with `re_`

---

## 3. Vercel Deployment

### Connect repository
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repository
4. Vercel auto-detects Next.js — no build config changes needed

### Set environment variables
In **Vercel > Project > Settings > Environment Variables**, add:

| Variable | Value | Required |
|---|---|---|
| `DATABASE_URL` | Neon connection string | Yes |
| `RESEND_API_KEY` | Resend API key (`re_...`) | Yes (for contact form) |
| `CONTACT_EMAIL` | Email for form submissions (e.g. `info@oxfordeditors.co.uk`) | No (has default) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code, no `+` (e.g. `447123456789`) | No |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://oxfordeditors.co.uk`) | Yes (for sitemap/SEO) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID (e.g. `G-XXXXXXXXXX`) | No |

### Deploy
Click **Deploy**. Vercel will:
- Install dependencies
- Run `next build`
- Deploy to a `.vercel.app` URL

---

## 4. Post-Deployment Checklist

### Pages
- [ ] Homepage loads with all sections
- [ ] About Us page
- [ ] All service pages (`/services/essay-writing`, etc.)
- [ ] All course pages (`/courses/nursing-health-sciences`, etc.)
- [ ] Blog listing and individual posts
- [ ] FAQs page with accordion
- [ ] Contact Us page
- [ ] Privacy Policy page
- [ ] Terms & Conditions page

### Functionality
- [ ] Contact form submits successfully (check email + database)
- [ ] Newsletter subscription works (check database)
- [ ] WhatsApp button opens correct chat
- [ ] Mobile menu opens/closes
- [ ] Service and Course dropdown menus work on desktop
- [ ] Blog category filters work
- [ ] Blog pagination works
- [ ] FAQ category tabs and accordion work

### SEO & Meta
- [ ] `/sitemap.xml` returns valid XML with all URLs
- [ ] `/robots.txt` returns correct rules
- [ ] Open Graph meta tags present on all pages (check with [opengraph.xyz](https://opengraph.xyz))
- [ ] Page titles and descriptions are unique per page

### Mobile & Accessibility
- [ ] All pages responsive on mobile, tablet, desktop
- [ ] Skip-to-content link works (Tab on page load)
- [ ] Focus-visible outlines appear on keyboard navigation
- [ ] Screen reader announces accordion expand/collapse states

### Performance
- [ ] Lighthouse score > 90 for Performance, Accessibility, Best Practices, SEO
- [ ] Images load with next/image optimization (WebP/AVIF)
- [ ] No layout shifts on page load

---

## 5. Custom Domain Setup

### Add domain in Vercel
1. Go to **Project > Settings > Domains**
2. Add your domain (e.g. `oxfordeditors.co.uk`)
3. Add `www` subdomain too (Vercel handles redirect)

### Configure DNS
Add these records at your domain registrar:

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

### SSL
- Vercel provisions SSL automatically after DNS propagation
- Allow up to 24 hours for DNS, though usually takes minutes
- Verify HTTPS works: `https://oxfordeditors.co.uk`

### Update environment variable
After domain is live, update `NEXT_PUBLIC_SITE_URL` in Vercel to the production domain and redeploy.

---

## 6. Google Analytics Setup (Optional)

1. Create a property at [analytics.google.com](https://analytics.google.com)
2. Get the Measurement ID (starts with `G-`)
3. Add `NEXT_PUBLIC_GA_ID` in Vercel environment variables
4. Redeploy
5. Verify real-time data appears in GA dashboard

Analytics only loads in production (`NODE_ENV === "production"`), so it won't fire in development.

---

## 7. Ongoing Maintenance

### Database
- Monitor usage in the [Neon Console](https://console.neon.tech)
- Check `contact_submissions` table for new form entries
- Check `newsletter_subscriptions` for new signups
- Neon free tier: 0.5 GB storage, auto-suspend after 5 min inactivity

### Email
- Monitor delivery in the [Resend Dashboard](https://resend.com/emails)
- Check for bounces or spam complaints
- Free tier: 100 emails/day, 3,000/month

### Content updates
- Services and courses are in `lib/data/services.ts` and `lib/data/courses.ts`
- Blog posts are in `lib/data/blog.ts`
- Testimonials are in `lib/data/testimonials.ts`
- After updating, push to GitHub — Vercel auto-deploys

### Vercel
- Monitor build logs for errors
- Check function logs for API route failures
- Review Web Analytics if enabled (Vercel dashboard)

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (Turbopack)

# Database
npx drizzle-kit push     # Push schema changes
npx drizzle-kit studio   # Open database GUI
npm run db:seed          # Seed sample data

# Build & Deploy
npm run build            # Production build (local test)
npm run start            # Start production server locally

# Type check
npx tsc --noEmit         # Verify TypeScript
npm run lint             # Run ESLint
```
