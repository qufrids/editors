import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date, pattern = "MMMM d, yyyy") {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return format(parsedDate, pattern);
}

export function truncateText(text: string, maxLength: number) {
  if (maxLength <= 0) {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}