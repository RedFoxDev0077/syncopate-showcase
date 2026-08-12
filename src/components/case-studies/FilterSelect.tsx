import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function FilterSelect({ label, options, selected, onToggle }: Props) {
  return (
    <Popover>
      <PopoverTrigger
        aria-label={
          selected.length ? `${label}: ${selected.join(", ")}` : `${label}: no filter selected`
        }
        className={cn(
          "flex w-full items-center justify-between rounded-md border border-border bg-muted px-4 py-3 text-left text-sm transition-colors hover:border-primary/60",
          selected.length ? "text-foreground" : "text-muted-foreground",
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
        className="max-h-72 w-(--radix-popover-trigger-width) overflow-auto p-1"
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
                  "flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                  active && "font-medium text-primary",
                )}
              >
                {option}
                {active && <Check className="size-4" />}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
