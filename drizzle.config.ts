import { defineConfig } from "drizzle-kit";
import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to .env.local before running Drizzle Kit.");
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});