import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={siteInfo.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-forest text-cream shadow-premium transition hover:-translate-y-0.5 hover:bg-action hover:text-action-text"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
