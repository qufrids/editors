import { boolean, jsonb, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const services = pgTable("services", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  features: jsonb("features")
    .$type<Array<{ id: string; title: string; description: string }>>()
    .notNull(),
  ideal_for: jsonb("ideal_for").$type<string[]>().notNull(),
  image_url: text("image_url").notNull(),
  meta_title: text("meta_title").notNull(),
  meta_description: text("meta_description").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const courses = pgTable("courses", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  rating: numeric("rating", { precision: 3, scale: 2 }).notNull(),
  image_url: text("image_url").notNull(),
  category: text("category").notNull(),
  features: jsonb("features").$type<string[]>().notNull(),
  meta_title: text("meta_title").notNull(),
  meta_description: text("meta_description").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  author_image: text("author_image").notNull(),
  featured_image: text("featured_image").notNull(),
  category: text("category").notNull(),
  tags: jsonb("tags").$type<string[]>().notNull(),
  published: boolean("published").default(false).notNull(),
  published_at: timestamp("published_at", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  image_url: text("image_url").notNull(),
  rating: numeric("rating", { precision: 3, scale: 2 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  status: text("status").default("active").notNull(),
  subscribed_at: timestamp("subscribed_at", { withTimezone: true }).defaultNow().notNull(),
});