import { Phone } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { contactInfo, navItems } from "../data/site";
import { AppLink } from "./AppLink";
import { Logo } from "./Logo";

type HeaderProps = {
  currentPath: string;
};

export function Header({ currentPath }: HeaderProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    function updateIndicator() {
      const activeLink = navRef.current?.querySelector<HTMLElement>('[aria-current="page"]');

      if (!activeLink) {
        setIndicatorStyle({ width: 0, x: 0 });
        return;
      }

      setIndicatorStyle({
        width: activeLink.offsetWidth,
        x: activeLink.offsetLeft,
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [currentPath]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 48);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="container header__inner">
          <div className="header__brand">
            <AppLink className="header__logo-link" to="/" aria-label="СТО ТрансГаз">
              <Logo />
            </AppLink>
            <span className="header__descriptor">Лицензированный сервисный центр по установке ГБО</span>
          </div>

          <nav className="header__nav" ref={navRef} aria-label="Основная навигация">
            <span
              className="header__nav-indicator"
              style={{
                opacity: indicatorStyle.width ? 1 : 0,
                transform: `translateX(${indicatorStyle.x}px)`,
                width: `${indicatorStyle.width}px`,
              }}
            />
            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <AppLink
                  aria-current={isActive ? "page" : undefined}
                  className="header__nav-link"
                  key={item.href}
                  to={item.href}
                >
                  <span className="header__nav-label">{item.label}</span>
                </AppLink>
              );
            })}
          </nav>

          <a className="header__phone" href={contactInfo.phoneHref} aria-label="Позвонить">
            <Phone size={18} />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Мобильная навигация">
        {navItems.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <AppLink
              aria-current={isActive ? "page" : undefined}
              className="mobile-bottom-nav__link"
              key={item.href}
              to={item.href}
            >
              {item.label}
            </AppLink>
          );
        })}
      </nav>
    </>
  );
}
