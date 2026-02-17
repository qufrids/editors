import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { newsletterSubscriptions } from "@/lib/db/schema";
import { newsletterSchema } from "@/lib/validations/newsletter";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Invalid email address.";
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const { email } = result.data;

    // Check for existing subscription
    const existing = await db
      .select({ id: newsletterSubscriptions.id })
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 400 },
      );
    }

    // Insert new subscription
    await db.insert(newsletterSubscriptions).values({
      email,
      status: "active",
    });

    return NextResponse.json({
      message: "Thanks for subscribing. We'll keep you updated.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Unable to subscribe right now. Please try again later." },
      { status: 500 },
    );
  }
}
