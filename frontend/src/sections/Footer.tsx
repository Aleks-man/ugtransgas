import { useEffect, useState } from "react";
import { Clock3, Mail, MapPin, Maximize2, MessageCircle, Minimize2, Phone, Send, X } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { Logo } from "../components/Logo";
import { contactInfo } from "../data/site";
import { routes } from "../lib/navigation";

const licenseImageUrl = "https://ugtransgas.ru/image/license.jpg";
const currentYear = new Date().getFullYear();

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
          <section className="footer__brand" aria-label="СТО ТрансГаз">
            <Logo />
            <p>
              СТО ТрансГаз: установка, обслуживание и оформление газобаллонного оборудования в Республике Крым.
            </p>
          </section>

          <section className="footer__column" aria-label="Контакты">
            <h2>Контакты</h2>
            <ul className="footer__links footer__links--contacts">
              <li>
                <Phone size={16} />
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <MessageCircle size={16} />
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <Send size={16} />
                <a href={contactInfo.telegram} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
          </section>

          <section className="footer__column" aria-label="Адрес и документы">
            <h2>Адрес</h2>
            <ul className="footer__links footer__links--address">
              <li>
                <MapPin size={16} />
                <a href={contactInfo.route} target="_blank" rel="noreferrer">
                  {contactInfo.address}
                </a>
              </li>
              <li>
                <Clock3 size={16} />
                <span>{contactInfo.schedule}</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="container footer__bottom">
          <span>© {currentYear} СТО ТрансГаз</span>
          <span>ИНН 910228288877</span>
          <span>ОГРН 323911200099945</span>
          <AppLink to={routes.privacy}>Политика</AppLink>
          <AppLink to={routes.agreement}>Пользовательское соглашение</AppLink>
          <button type="button" onClick={() => setIsLicenseOpen(true)}>
            Лицензии
          </button>
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
