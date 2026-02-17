export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  ideal_for: string[];
  image_url: string;
  meta_title: string;
  meta_description: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  rating: number;
  image_url: string;
  category: string;
  features: string[];
  meta_title: string;
  meta_description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  author_image: string;
  featured_image: string;
  category: string;
  tags: string[];
  published: boolean;
  published_at: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image_url: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}