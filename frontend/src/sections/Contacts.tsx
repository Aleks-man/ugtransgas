import { MapPin, Phone, Timer } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

export function Contacts() {
  return (
    <section className="section contacts-section" id="contacts">
      <div className="container contacts-grid">
        <div className="contact-copy">
          <span className="eyebrow">Заявка</span>
          <h2>Форма, которая выглядит как часть сервиса, а не как придаток сайта</h2>
          <p>
            Ее можно подключить к Express API, Prisma и PostgreSQL, когда появится
            задача хранить заявки. Для первого релиза достаточно отправки в
            Telegram, почту или CRM.
          </p>
          <div className="contact-list">
            <a href="tel:+78000000000">
              <Phone size={20} />
              +7 800 000-00-00
            </a>
            <span>
              <MapPin size={20} />
              Краснодарский край
            </span>
            <span>
              <Timer size={20} />
              Ежедневно, по предварительной записи
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

