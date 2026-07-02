import { useEffect, useState } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { Logo } from "../components/Logo";
import { routes } from "../lib/navigation";

const licenseImageUrl = "https://ugtransgas.ru/image/license.jpg";

export function Footer() {
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [isLicenseZoomed, setIsLicenseZoomed] = useState(false);

  function closeLicense() {
    setIsLicenseOpen(false);
    setIsLicenseZoomed(false);
  }

  useEffect(() => {
    if (!isLicenseOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLicense();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLicenseOpen]);

  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <div className="footer__content">
            <p>
              СТО ТрансГаз: установка, обслуживание и оформление газобаллонного оборудования в Республике Крым.
            </p>
            <nav className="footer__legal" aria-label="Юридические документы">
              <AppLink to={routes.privacy}>Политика обработки данных</AppLink>
              <AppLink to={routes.agreement}>Пользовательское соглашение</AppLink>
              <button type="button" onClick={() => setIsLicenseOpen(true)}>
                Лицензия
              </button>
            </nav>
          </div>
        </div>
      </footer>

      {isLicenseOpen ? (
        <div className="license-lightbox" onClick={closeLicense} role="dialog" aria-modal="true">
          <div
            className={isLicenseZoomed ? "license-lightbox__stage is-zoomed" : "license-lightbox__stage"}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-lightbox__button license-lightbox__zoom"
              onClick={() => setIsLicenseZoomed((value) => !value)}
              type="button"
              aria-label={isLicenseZoomed ? "Уменьшить лицензию" : "Увеличить лицензию"}
            >
              {isLicenseZoomed ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              className="gallery-lightbox__button license-lightbox__close"
              onClick={closeLicense}
              type="button"
              aria-label="Закрыть лицензию"
            >
              <X size={22} />
            </button>
            <img src={licenseImageUrl} alt="Лицензия сервисного центра ТрансГаз" />
          </div>
        </div>
      ) : null}
    </>
  );
}
