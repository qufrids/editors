/**
 * Database Seed Script
 *
 * Populates the Neon PostgreSQL database with sample data from the static data files.
 *
 * Usage:
 *   npm run db:seed
 *
 * Prerequisites:
 *   1. DATABASE_URL must be set in .env.local
 *   2. Run `npm run db:migrate` first to create tables
 *
 * This script is idempotent — it clears existing data before inserting.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not set. Add it to .env.local");
  process.exit(1);
}

const sql = neon(databaseUrl);
const db = drizzle(sql, { schema });

// ---------------------------------------------------------------------------
// Sample Data
// ---------------------------------------------------------------------------

const servicesData: (typeof schema.services.$inferInsert)[] = [
  {
    slug: "essay-writing",
    title: "Essay Writing Service",
    subtitle: "Structured, evidence-led essays aligned to UK marking criteria",
    description:
      "Our Essay Writing service supports students who need clear academic structure, strong argumentation, and accurate referencing. We work with undergraduate and postgraduate briefs across a wide range of disciplines.",
    features: [
      { id: "ew-1", title: "Brief-Led Planning", description: "Essay outlines mapped to your university brief and assessment criteria." },
      { id: "ew-2", title: "Critical Argument Development", description: "Arguments built using analysis with clear claims and evidence." },
      { id: "ew-3", title: "Evidence Integration", description: "Sources integrated with accurate in-text referencing." },
      { id: "ew-4", title: "Academic Style Editing", description: "Language refined for formal tone and discipline-specific terminology." },
      { id: "ew-5", title: "Referencing Compliance", description: "Reference lists formatted to required UK university standards." },
    ],
    ideal_for: [
      "Undergraduate module essays",
      "Postgraduate critical response papers",
      "Students needing support with argument structure",
      "International students adapting to UK academic conventions",
    ],
    image_url: "/images/services/essay-writing.jpg",
    meta_title: "Essay Writing Service UK | Oxford Editors",
    meta_description: "Professional UK essay writing support for undergraduate and postgraduate students.",
  },
  {
    slug: "dissertation-thesis-support",
    title: "Dissertation & Thesis Support",
    subtitle: "End-to-end guidance from proposal to final chapter",
    description:
      "Our Dissertation and Thesis Support service is designed for students handling large, multi-stage research projects. We provide practical guidance across topic scoping, chapter architecture, and discussion synthesis.",
    features: [
      { id: "dt-1", title: "Research Design Support", description: "Help scoping your topic and structuring your research approach." },
      { id: "dt-2", title: "Literature Review Framing", description: "Guidance on synthesising sources into a coherent literature review." },
      { id: "dt-3", title: "Chapter-Level Feedback", description: "Detailed feedback on individual chapters or sections." },
      { id: "dt-4", title: "Methodology Guidance", description: "Support with selecting and justifying your research methodology." },
      { id: "dt-5", title: "Submission Readiness Review", description: "Final review for coherence, formatting, and academic standards." },
    ],
    ideal_for: [
      "Final-year dissertation students",
      "Postgraduate thesis writers",
      "Students needing structural guidance",
      "Researchers preparing for viva voce",
    ],
    image_url: "/images/services/dissertation-thesis-support.jpg",
    meta_title: "Dissertation & Thesis Support UK | Oxford Editors",
    meta_description: "End-to-end dissertation and thesis support for UK university students.",
  },
  {
    slug: "editing-proofreading-services",
    title: "Editing & Proofreading",
    subtitle: "Polished academic writing with attention to detail",
    description:
      "Our Editing and Proofreading service ensures your work meets the highest standards of clarity, grammar, and academic presentation before submission.",
    features: [
      { id: "ep-1", title: "Grammar & Syntax Review", description: "Thorough correction of grammatical errors and awkward phrasing." },
      { id: "ep-2", title: "Structural Feedback", description: "Suggestions for improving paragraph flow and argument coherence." },
      { id: "ep-3", title: "Formatting Compliance", description: "Alignment with your university's formatting and style guidelines." },
      { id: "ep-4", title: "Citation Check", description: "Verification of in-text citations against your reference list." },
    ],
    ideal_for: [
      "Students submitting final drafts",
      "Non-native English speakers",
      "Researchers preparing journal submissions",
      "Anyone wanting a professional quality check",
    ],
    image_url: "/images/services/editing-proofreading.jpg",
    meta_title: "Editing & Proofreading Services UK | Oxford Editors",
    meta_description: "Professional academic editing and proofreading for UK students and researchers.",
  },
  {
    slug: "research-proposal-assistance",
    title: "Research Proposal Assistance",
    subtitle: "Compelling proposals that set your research on the right track",
    description:
      "Our Research Proposal service helps you develop a well-structured, persuasive proposal that demonstrates academic rigour and aligns with your programme's requirements.",
    features: [
      { id: "rp-1", title: "Topic Refinement", description: "Help narrowing your research focus to a viable and original question." },
      { id: "rp-2", title: "Literature Positioning", description: "Guidance on situating your research within existing scholarship." },
      { id: "rp-3", title: "Methodology Framework", description: "Support selecting appropriate methods and justifying your approach." },
      { id: "rp-4", title: "Timeline Planning", description: "Realistic project planning with milestones and deliverables." },
    ],
    ideal_for: [
      "Masters and PhD applicants",
      "Students beginning their dissertation journey",
      "Researchers seeking funding",
    ],
    image_url: "/images/services/research-proposal.jpg",
    meta_title: "Research Proposal Assistance UK | Oxford Editors",
    meta_description: "Expert help with research proposal writing for UK postgraduate students and researchers.",
  },
];

const coursesData: (typeof schema.courses.$inferInsert)[] = [
  {
    slug: "nursing-health-sciences",
    title: "Nursing & Health Sciences",
    subtitle: "Clinical writing, evidence appraisal, and reflective healthcare practice",
    description: "This course supports nursing and allied health students with academic writing, evidence-based reasoning, and assignment planning across clinical modules.",
    price: "145.00",
    rating: "4.70",
    image_url: "/images/courses/nursing-health-sciences.jpg",
    category: "Health Sciences",
    features: ["Evidence-based practice writing frameworks", "Care-plan and case-study structuring", "Reflective models for clinical assignments", "Critical appraisal of journal articles"],
    meta_title: "Nursing & Health Sciences Academic Support | Oxford Editors",
    meta_description: "Professional academic support for nursing and health sciences students in the UK.",
  },
  {
    slug: "psychology",
    title: "Psychology",
    subtitle: "Research-informed psychology writing and analysis support",
    description: "The Psychology course helps learners interpret theories accurately, evaluate studies critically, and present arguments with clear academic structure.",
    price: "87.00",
    rating: "4.50",
    image_url: "/images/courses/psychology.jpg",
    category: "Social Sciences",
    features: ["Theory-to-application argument building", "Empirical evidence integration", "Research methods and ethics support", "Structured report and essay templates"],
    meta_title: "Psychology Assignment Support UK | Oxford Editors",
    meta_description: "Academic psychology support for UK students covering essays, research reports, and critical analysis.",
  },
  {
    slug: "law",
    title: "Law",
    subtitle: "Legal reasoning, case analysis, and statutory interpretation",
    description: "This course helps law students develop stronger legal writing, case analysis skills, and structured argumentation for essays and problem questions.",
    price: "120.00",
    rating: "4.60",
    image_url: "/images/courses/law.jpg",
    category: "Law & Politics",
    features: ["Case law analysis techniques", "Problem question structuring", "OSCOLA referencing guidance", "Legal essay argumentation"],
    meta_title: "Law Academic Support UK | Oxford Editors",
    meta_description: "Expert academic support for UK law students including case analysis, legal writing, and OSCOLA referencing.",
  },
];

const blogPostsData: (typeof schema.blogPosts.$inferInsert)[] = [
  {
    slug: "how-to-write-a-first-class-essay",
    title: "How to Write a First-Class Essay: A Step-by-Step Guide",
    excerpt: "Learn the essential techniques behind first-class essay writing, from thesis development to referencing.",
    content: `Writing a first-class essay requires more than subject knowledge — it demands clear structure, critical thinking, and polished academic communication.

## 1. Understand the Brief

Before you write a single word, deconstruct your assignment brief. Identify the command verb (analyse, evaluate, discuss), the topic scope, and the marking criteria.

## 2. Develop a Strong Thesis

Your thesis statement is the backbone of your essay. It should be specific, arguable, and clearly stated in your introduction.

## 3. Plan Your Structure

A well-structured essay typically follows: Introduction, Body paragraphs (each with one main point), and Conclusion.

## 4. Use Evidence Critically

First-class work goes beyond description. Engage critically with your sources — compare perspectives and identify limitations.

## 5. Edit and Proofread

Leave time for at least two rounds of editing. The first for structure and argument coherence; the second for grammar and formatting.`,
    author: "Dr. Sarah Mitchell",
    author_image: "/images/blog/authors/sarah-mitchell.jpg",
    featured_image: "/images/blog/first-class-essay.jpg",
    category: "Study Tips",
    tags: ["essay writing", "academic skills", "study tips", "first class"],
    published: true,
    published_at: new Date("2026-01-15T09:00:00Z"),
  },
  {
    slug: "dissertation-planning-guide-uk-students",
    title: "Dissertation Planning: A Practical Guide for UK Students",
    excerpt: "A step-by-step approach to planning your dissertation, from choosing a topic to managing your time effectively.",
    content: `Your dissertation is likely the largest independent project you will complete at university. Effective planning is the difference between a stressful last-minute rush and a confident submission.

## 1. Choose a Viable Topic

Pick a topic that genuinely interests you, has sufficient literature, and is achievable within your timeframe.

## 2. Write a Strong Proposal

Your proposal should clearly outline your research question, methodology, and expected contribution to the field.

## 3. Create a Timeline

Break your dissertation into phases: research, writing, review. Set realistic deadlines for each chapter.

## 4. Stay in Touch with Your Supervisor

Regular meetings keep you on track and help address issues before they become problems.`,
    author: "Prof. James Chen",
    author_image: "/images/blog/authors/james-chen.jpg",
    featured_image: "/images/blog/dissertation-planning.jpg",
    category: "Research",
    tags: ["dissertation", "planning", "research", "time management"],
    published: true,
    published_at: new Date("2026-01-22T10:00:00Z"),
  },
  {
    slug: "harvard-referencing-complete-guide",
    title: "Harvard Referencing: The Complete Guide for Students",
    excerpt: "Master Harvard referencing with this comprehensive guide covering in-text citations, reference lists, and common formatting mistakes.",
    content: `Harvard referencing is one of the most widely used citation styles in UK universities. Getting it right shows academic rigour and protects you from plagiarism issues.

## In-Text Citations

Use the author-date format: (Smith, 2024). For direct quotes, include the page number: (Smith, 2024, p. 45).

## Reference List

Every in-text citation must appear in your reference list, and vice versa. Entries should be alphabetical by author surname.

## Common Mistakes

Watch out for inconsistent formatting, missing dates, and incorrect capitalisation in titles.`,
    author: "Dr. Sarah Mitchell",
    author_image: "/images/blog/authors/sarah-mitchell.jpg",
    featured_image: "/images/blog/harvard-referencing.jpg",
    category: "Academic Writing",
    tags: ["referencing", "harvard", "citations", "academic writing"],
    published: true,
    published_at: new Date("2026-02-01T09:00:00Z"),
  },
];

const testimonialsData: (typeof schema.testimonials.$inferInsert)[] = [
  {
    name: "Amelia Rose Whitmore",
    role: "Nursing Student",
    content: "Their guidance helped me rebuild the structure, tighten my argument, and improve my referencing throughout. I submitted with confidence and graduated with distinction.",
    image_url: "/images/testimonials/amelia-rose-whitmore.jpg",
    rating: "5.00",
  },
  {
    name: "Harvey James Beckett",
    role: "Psychology Student",
    content: "The support I received for exam preparation gave me a realistic plan, focused practice questions, and better techniques for structuring timed answers. My results improved across two core modules.",
    image_url: "/images/testimonials/harvey-james-beckett.jpg",
    rating: "5.00",
  },
  {
    name: "Isla Grace Thornton",
    role: "Business Student",
    content: "They corrected language issues, improved flow between sections, and fixed several referencing inconsistencies. The final document looked significantly more professional.",
    image_url: "/images/testimonials/isla-grace-thornton.jpg",
    rating: "4.80",
  },
  {
    name: "Finlay Oliver Prescott",
    role: "Computer Science Student",
    content: "Oxford Editors helped me organise the project report, clarify my methodology, and present my results more convincingly. I finished on schedule and submitted work I was genuinely proud of.",
    image_url: "/images/testimonials/finlay-oliver-prescott.jpg",
    rating: "5.00",
  },
  {
    name: "Charlotte Emily Langford",
    role: "Law Student",
    content: "The feedback I received on my case analysis was extremely detailed and helped me develop a much stronger argument. My tutor noticed the improvement immediately.",
    image_url: "/images/testimonials/charlotte-emily-langford.jpg",
    rating: "4.90",
  },
];

// ---------------------------------------------------------------------------
// Seed Function
// ---------------------------------------------------------------------------

async function seed() {
  console.log("Seeding database...\n");

  // Clear existing data (order matters due to potential future FK constraints)
  console.log("Clearing existing data...");
  await db.delete(schema.testimonials);
  await db.delete(schema.blogPosts);
  await db.delete(schema.courses);
  await db.delete(schema.services);
  await db.delete(schema.contactSubmissions);
  await db.delete(schema.newsletterSubscriptions);
  console.log("  Cleared all tables.\n");

  // Insert services
  console.log("Inserting services...");
  await db.insert(schema.services).values(servicesData);
  console.log(`  Inserted ${servicesData.length} services.`);

  // Insert courses
  console.log("Inserting courses...");
  await db.insert(schema.courses).values(coursesData);
  console.log(`  Inserted ${coursesData.length} courses.`);

  // Insert blog posts
  console.log("Inserting blog posts...");
  await db.insert(schema.blogPosts).values(blogPostsData);
  console.log(`  Inserted ${blogPostsData.length} blog posts.`);

  // Insert testimonials
  console.log("Inserting testimonials...");
  await db.insert(schema.testimonials).values(testimonialsData);
  console.log(`  Inserted ${testimonialsData.length} testimonials.`);

  console.log("\nSeed completed successfully!");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });
