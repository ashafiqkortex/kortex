"use client";

/**
 * Floating WhatsApp enquiry button.
 *
 * Mounted globally in the root layout. Sits below the nav (z-40 vs z-50) so a
 * pinned header always wins, and clears the iOS home indicator via safe-area
 * inset. Keeps WhatsApp's own green rather than the site accent — this is a
 * third-party affordance and recognisability is the whole point of it.
 */

const PHONE = "13018898546"; // (301) 889-8546 — digits only, no +, for wa.me
const MESSAGE =
  "Hi Kortex — I'd like to talk about AI and automation for my business.";

const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

function trackClick() {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
    .gtag;
  gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: "floating_button",
  });
}

export function WhatsAppButton() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      aria-label="Chat with Kortex on WhatsApp"
      className="group fixed z-40 right-5 bottom-5 md:right-8 md:bottom-8 flex items-center gap-0 rounded-full"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Label — desktop only, slides out of the circle on hover/focus */}
      <span
        className="hidden md:block overflow-hidden whitespace-nowrap rounded-full
                   max-w-0 opacity-0 pr-0
                   transition-all duration-300 ease-out
                   group-hover:max-w-[190px] group-hover:opacity-100 group-hover:pr-3
                   group-focus-visible:max-w-[190px] group-focus-visible:opacity-100 group-focus-visible:pr-3
                   motion-reduce:transition-none"
      >
        <span
          className="block rounded-full border border-[var(--border-bright)] bg-[var(--surface-2)]
                     py-2 pl-4 pr-5 text-[14px] font-medium text-[var(--foreground)]
                     shadow-[0_4px_16px_rgba(25,24,21,0.08)]"
        >
          Chat on WhatsApp
        </span>
      </span>

      <span
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]
                   text-white shadow-[0_6px_20px_rgba(37,211,102,0.32)]
                   ring-1 ring-black/5
                   transition-transform duration-200 ease-out
                   group-hover:scale-105 group-active:scale-95
                   motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </span>
    </a>
  );
}
