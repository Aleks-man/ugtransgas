import { Mail, MapPin, Phone, Timer } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { contactInfo } from "../data/site";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.7 3.6 18.4 20c-.2 1-.8 1.2-1.6.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.3L6.1 13.6 1.3 12c-1-.3-1-1 .2-1.5L20.3 3.2c.9-.3 1.7.2 1.4.4Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.1 2a9.8 9.8 0 0 0-8.4 14.9L2.5 22l5.2-1.3A9.9 9.9 0 1 0 12.1 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3a7.9 7.9 0 1 1 6.9 3.8Zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.2-.2-.3-.5-.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5-2.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

export function Contacts() {
  return (
    <section className="section contacts-section section--soft-divider" id="contacts">
      <div className="container contacts-grid">
        <div className="contact-copy">
          <span className="eyebrow">Заявка</span>
          <h2>Запишитесь на бесплатный технический осмотр</h2>
          <p>
            Специалист проверит автомобиль, подскажет подходящий комплект и рассчитает стоимость установки метанового
            или пропанового оборудования.
          </p>
          <div className="contact-list">
            <a href={contactInfo.phoneHref}>
              <Phone size={20} />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={20} />
              {contactInfo.email}
            </a>
            <a href={contactInfo.route} target="_blank" rel="noreferrer">
              <MapPin size={20} />
              {contactInfo.address}
            </a>
            <span>
              <Timer size={20} />
              {contactInfo.schedule}
            </span>
          </div>

          <div className="messenger-block">
            <span>Мессенджеры и соцсети</span>
            <div className="social-actions">
              <a className="social-link" href={contactInfo.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a className="social-link" href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
              <span className="social-link social-link--inactive" aria-label="Instagram" title="Instagram">
                <InstagramIcon />
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
