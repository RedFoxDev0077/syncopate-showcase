import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { Locale } from "@/i18n/config";
import { tag } from "@/i18n/content";
import { t } from "@/i18n/ui";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function FilterSelect({ locale, label, options, selected, onToggle }: Props) {
  const s = t(locale);

  return (
    <Popover>
      <PopoverTrigger
        aria-label={
          selected.length
            ? `${label}: ${selected.map((v) => tag(locale, v)).join(", ")}`
            : s.noFilterSelected(label)
        }
        className={cn(
          "glass flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:border-primary/40",
          selected.length ? "text-foreground" : "text-foreground/50",
        )}
      >
        <span className="truncate">
          {label}
          {selected.length ? ` (${selected.length})` : ""}
        </span>
        <ChevronDown className="ml-2 size-4 shrink-0 opacity-60" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="glass max-h-80 w-(--radix-popover-trigger-width) overflow-auto rounded-2xl border-0 p-2"
      >
        {/* Multi-select: selection state has to be exposed, not just coloured. */}
        <div role="listbox" aria-multiselectable aria-label={label}>
          {options.map((option) => {
            const active = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => onToggle(option)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-white/10",
                  active && "font-medium text-primary",
                )}
              >
                {tag(locale, option)}
                {active && <Check className="size-4" />}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
