"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LocaleOption = {
  value: string;
  label: string;
};

type LocaleSwitcherProps = {
  currentLocale: string;
  triggerLabel: string;
  options: LocaleOption[];
};

export function LocaleSwitcher({
  currentLocale,
  triggerLabel,
  options,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentOption =
    options.find((option) => option.value === currentLocale) ?? options[0];

  const replaceLocaleInPath = (nextLocale: string) => {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = nextLocale;
    }

    return segments.join("/") || `/${nextLocale}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="h-8 w-10 rounded-xl border-border/70 bg-secondary/35 px-0 text-[11px] font-medium tracking-[0.08em] text-foreground/85 uppercase hover:bg-secondary/55 md:h-7 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
            aria-label={triggerLabel}
          />
        }
      >
        {currentOption.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={6}
        className="min-w-0 w-12 rounded-xl p-0.5"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => router.push(replaceLocaleInPath(option.value))}
            className="h-8 justify-center rounded-md px-1 py-0 text-[11px] tracking-[0.08em] uppercase md:h-7"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
