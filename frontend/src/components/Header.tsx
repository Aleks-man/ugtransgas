import { Phone } from "lucide-react";
import { navItems } from "../data/site";
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
        <a className="icon-link" href="tel:+78000000000" aria-label="Позвонить">
          <Phone size={18} />
          <span>Позвонить</span>
        </a>
      </div>
    </header>
  );
}

