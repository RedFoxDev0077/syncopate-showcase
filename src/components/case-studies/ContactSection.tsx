import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contactus" className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Contact us</h2>
          <p className="mt-3 max-w-xl text-sm text-ink-foreground/70">
            Before we proceed, please help us understand your needs better. We will review your
            application and schedule a free estimate call.
          </p>

          <form
            className="mt-8 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks! We'll be in touch shortly.");
              (e.target as HTMLFormElement).reset();
              setAgreed(false);
            }}
          >
            <Input required placeholder="Name" aria-label="Name" className="bg-white/5 border-white/15 text-ink-foreground placeholder:text-ink-foreground/50" />
            <Input placeholder="Company name (optional)" aria-label="Company name" className="bg-white/5 border-white/15 text-ink-foreground placeholder:text-ink-foreground/50" />
            <Input required type="email" placeholder="Email" aria-label="Email" className="sm:col-span-2 bg-white/5 border-white/15 text-ink-foreground placeholder:text-ink-foreground/50" />
            <Textarea
              required
              rows={4}
              placeholder="Tell us more about your project"
              aria-label="Project details"
              className="sm:col-span-2 bg-white/5 border-white/15 text-ink-foreground placeholder:text-ink-foreground/50"
            />
            <label className="sm:col-span-2 flex items-start gap-3 text-sm text-ink-foreground/70">
              <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} className="mt-0.5 border-white/30" />
              I agree to receive marketing materials from Bits Orchestra
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="rounded-full px-8">
                Send request
              </Button>
            </div>
          </form>

          <p className="mt-6 text-sm text-ink-foreground/70">
            You can also send us your request to{" "}
            <a className="text-primary hover:underline" href="mailto:sales@bitsorchestra.com">
              sales@bitsorchestra.com
            </a>
          </p>
        </div>

        <aside className="self-start rounded-2xl border border-white/10 bg-white/5 p-8">
          <img
            src="https://bitsorchestra.com/getmedia/8fd24bd7-d05d-4dec-8584-150c90db2894/Ceo_form_section.webp?ext=.webp"
            alt="Roman Hutnyk, CEO and Co-founder"
            loading="lazy"
            className="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <p className="mt-6 text-center text-lg font-semibold">Roman Hutnyk</p>
          <p className="text-center text-sm text-ink-foreground/60">CEO &amp; Co-founder</p>
          <p className="mt-4 text-center text-sm text-ink-foreground/70">
            Our CEO, Roman, will personally review your message and help you get started.
          </p>
        </aside>
      </div>
    </section>
  );
}
