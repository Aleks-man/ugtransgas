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
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 });
  const [mobileIndicatorStyle, setMobileIndicatorStyle] = useState({ width: 0, x: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    function getIndicatorStyle(navElement: HTMLElement | null) {
      const activeLink = navElement?.querySelector<HTMLElement>('[aria-current="page"]');

      if (!navElement || !activeLink) {
        return { width: 0, x: 0 };
      }

      const navRect = navElement.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();

      return {
        width: activeRect.width,
        x: activeRect.left - navRect.left,
      };
    }

    function updateIndicators() {
      setIndicatorStyle(getIndicatorStyle(navRef.current));
      setMobileIndicatorStyle(getIndicatorStyle(mobileNavRef.current));
    }

    updateIndicators();
    window.addEventListener("resize", updateIndicators);
    return () => window.removeEventListener("resize", updateIndicators);
  }, [currentPath]);

  useLayoutEffect(() => {
    if (!("ResizeObserver" in window)) {
      return;
    }

    const mobileNavElement = mobileNavRef.current;

    if (!mobileNavElement) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const activeLink = mobileNavElement.querySelector<HTMLElement>('[aria-current="page"]');

      if (!activeLink) {
        setMobileIndicatorStyle({ width: 0, x: 0 });
        return;
      }

      const navRect = mobileNavElement.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();

      setMobileIndicatorStyle({
        width: activeRect.width,
        x: activeRect.left - navRect.left,
      });
    });

    resizeObserver.observe(mobileNavElement);
    return () => resizeObserver.disconnect();
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
              <Logo mobileMark />
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

      <nav className="mobile-bottom-nav" ref={mobileNavRef} aria-label="Мобильная навигация">
        <span
          className="mobile-bottom-nav__indicator"
          style={{
            opacity: mobileIndicatorStyle.width ? 1 : 0,
            transform: `translateX(${mobileIndicatorStyle.x}px)`,
            width: `${mobileIndicatorStyle.width}px`,
          }}
        />
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
