import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const defaultMessage = "Hello Oxford Editors, I would like help with academic services.";

export function WhatsAppButton() {
  if (!whatsappNumber) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="group fixed bottom-6 right-6 z-[70]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200",
          "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#25D366]",
        )}
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
    </div>
  );
}