import { Phone } from "lucide-react";
import { contactInfo, navItems } from "../data/site";
import { AppLink } from "./AppLink";
import { Logo } from "./Logo";

type HeaderProps = {
  currentPath: string;
};

export function Header({ currentPath }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <AppLink to="/" aria-label="СТО ТрансГаз">
          <Logo />
        </AppLink>
        <nav className="header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <AppLink
              aria-current={currentPath === item.href ? "page" : undefined}
              key={item.href}
              to={item.href}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
        <a className="icon-link" href={contactInfo.phoneHref} aria-label="Позвонить">
          <Phone size={18} />
          <span>{contactInfo.phone}</span>
        </a>
      </div>
    </header>
  );
}
