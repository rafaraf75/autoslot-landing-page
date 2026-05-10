"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon-sm"
      className="h-8 w-8 rounded-xl bg-secondary/35 md:h-7 md:w-7 light:border-[#d4deec]/85 light:bg-[#eff4fb]/95 light:text-slate-700 light:hover:bg-[#e3ebf8] light:hover:text-[#3248e2]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
