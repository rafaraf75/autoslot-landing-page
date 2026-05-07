"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { trackUmamiEvent, type UmamiEventData } from "@/lib/umami";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  eventName?: string;
  eventData?: UmamiEventData;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedLink({
  href,
  className,
  children,
  eventName,
  eventData,
  onClick,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        if (eventName) {
          trackUmamiEvent(eventName, eventData);
        }

        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
