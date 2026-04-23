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
      className="h-8 w-8 rounded-xl bg-secondary/35 md:h-7 md:w-7 light:border-slate-400/75 light:bg-slate-200/95 light:text-slate-800 light:hover:bg-slate-300/95"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
