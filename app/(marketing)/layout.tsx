import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main id="main-content" className="min-h-screen pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}