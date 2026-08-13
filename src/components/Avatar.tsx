import { cn } from "@/lib/utils";

/**
 * Illustrated portrait for a reviewer.
 *
 * These are hand-drawn character illustrations (Notionists, CC0), not
 * photographs — the reviewers are named, real people, and putting a stock
 * stranger's face under someone's name would be inventing their likeness.
 * Swap in a real photo the moment a reviewer supplies one.
 */
const PORTRAITS: Record<string, string> = {
  "gustavo auler": "/avatars/gustavo.svg",
  "Denis Jesus": "/avatars/denis.svg",
  "Matias Price": "/avatars/matias.svg",
  "Carlos Hermida Alvarez": "/avatars/carlos.svg",
};

export function Avatar({
  name,
  className,
  size = 56,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const src = PORTRAITS[name];

  if (!src) {
    const initials = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-grid shrink-0 place-items-center rounded-full bg-surface-2 font-display font-semibold ring-1 ring-white/15",
          className,
        )}
        style={{ width: size, height: size }}
      >
        {initials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-full ring-1 ring-white/15", className)}
      style={{ width: size, height: size }}
    />
  );
}
