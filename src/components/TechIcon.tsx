import { cn } from "@/lib/utils";

/**
 * Maps the stack labels used in the profile to simple-icons slugs in
 * public/tech. Anything without a brand mark falls back to a dot, so the row
 * still lines up.
 */
const SLUGS: Record<string, string> = {
  "Next.js": "nextdotjs",
  React: "react",
  TypeScript: "typescript",
  Laravel: "laravel",
  PHP: "php",
  "Tailwind CSS": "tailwindcss",
  WordPress: "wordpress",
  WooCommerce: "woocommerce",
  "React Native": "react",
  Expo: "expo",
  Flutter: "flutter",
  "Node.js": "nodedotjs",
  Python: "python",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  OpenAI: "openai",
  Claude: "anthropic",
  "Vue.js": "vuedotjs",
  Angular: "angular",
  ".NET": "dotnet",
  ".NET Core": "dotnet",
  Firebase: "firebase",
  AWS: "amazonwebservices",
  Azure: "googlecloud",
};

export function techSlug(label: string) {
  return SLUGS[label];
}

/**
 * Brand mark, tinted to the current text colour via a CSS mask so a single
 * monochrome SVG works on any background without inlining 23 icon components.
 */
export function TechIcon({ label, className }: { label: string; className?: string }) {
  const slug = SLUGS[label];

  if (!slug) {
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block size-2 rounded-full bg-current opacity-50", className)}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-5 bg-current", className)}
      style={{
        maskImage: `url(/tech/${slug}.svg)`,
        WebkitMaskImage: `url(/tech/${slug}.svg)`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
