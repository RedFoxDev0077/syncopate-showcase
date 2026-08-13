import { TechIcon } from "@/components/TechIcon";

/** Position on a circle, as percentages of the container box. */
function polar(index: number, total: number, radius: number, offset = 0) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2 + offset;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
  };
}

const OUTER = ["React", "TypeScript", "Node.js", "Python", "OpenAI", "PostgreSQL"];
const INNER = ["Next.js", "Supabase", "Flutter", "Claude"];

/**
 * The hero's centrepiece: a circular core holding real project artwork, with
 * two counter-rotating rings of technology chips around it.
 *
 * Built as an orbit rather than the usual stack of screenshots — the shape says
 * "systems that connect" instead of "here are three rectangles", and the
 * constant slow rotation keeps the page alive without demanding attention.
 * Chips counter-rotate so their icons stay upright as the ring turns.
 */
export function OrbitCore({ image, title }: { image: string; title: string }) {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* Breathing glow behind everything. */}
      <div
        className="animate-breathe absolute inset-[14%] rounded-full blur-3xl"
        style={{ backgroundImage: "var(--gradient-primary)", opacity: 0.32 }}
      />

      {/* Orbit paths. */}
      <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[19%] rounded-full border border-white/[0.07]" />

      {/* Outer ring. */}
      <div className="animate-orbit absolute inset-0">
        {OUTER.map((label, i) => (
          <span
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={polar(i, OUTER.length, 50)}
          >
            <span className="orbit-upright glass grid size-12 place-items-center rounded-2xl text-foreground/80">
              <TechIcon label={label} className="size-5" />
            </span>
          </span>
        ))}
      </div>

      {/* Inner ring, turning the other way. */}
      <div className="animate-orbit-reverse absolute inset-[19%]">
        {INNER.map((label, i) => (
          <span
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={polar(i, INNER.length, 50, 0.4)}
          >
            <span className="glass grid size-9 place-items-center rounded-xl text-primary">
              <TechIcon label={label} className="size-4" />
            </span>
          </span>
        ))}
      </div>

      {/* Core: real work, framed as a lens. */}
      <div className="ring-spin scanline absolute inset-[30%] overflow-hidden rounded-full shadow-[var(--shadow-float)]">
        <img src={image} alt="" loading="eager" className="size-full object-cover" />
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, transparent 40%, oklch(0.12 0.014 155 / 0.75))",
          }}
        />
      </div>

      <span className="sr-only">{title}</span>
    </div>
  );
}
