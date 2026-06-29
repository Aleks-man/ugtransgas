import { Phone } from "lucide-react";
import { contactInfo, navItems } from "../data/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Logo />
        <nav className="header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
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
