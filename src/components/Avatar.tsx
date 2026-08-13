import { cn } from "@/lib/utils";

/**
 * Initials avatar.
 *
 * Deliberately not a photograph: these sit next to named, real reviewers, and
 * dropping a stock face beside someone's name would be inventing their likeness.
 * The hue is derived from the name so each person keeps a stable colour.
 */
export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const hue = [...name].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) % 360, 7);

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white ring-1 ring-white/15",
        className,
      )}
      style={{
        background: `linear-gradient(140deg, oklch(0.62 0.15 ${hue}), oklch(0.45 0.12 ${(hue + 50) % 360}))`,
      }}
    >
      {initials}
    </span>
  );
}
