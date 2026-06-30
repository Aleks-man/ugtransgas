import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { navigateTo } from "../lib/navigation";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  to: string;
};

export function AppLink({ children, to, onClick, ...props }: AppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      to.startsWith("#") ||
      to.startsWith("http")
    ) {
      return;
    }

    event.preventDefault();
    navigateTo(to);
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
