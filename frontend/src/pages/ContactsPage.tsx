import { Mail, MapPin, Phone, Timer } from "lucide-react";
import { contactInfo } from "../data/site";
import { Contacts } from "../sections/Contacts";

export function ContactsPage() {
  return (
    <>
      <section className="page-hero page-hero--contacts">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Контакты</span>
            <h1>Запишитесь на осмотр или постройте маршрут до сервиса</h1>
            <p>
              Сервис находится на территории метановой заправки АГНКС «Черноморнефтегаз».
              Перед визитом можно отправить модель автомобиля и получить предварительный расчет.
            </p>
          </div>
          <div className="page-hero__panel contact-quick-list">
            <a href={contactInfo.phoneHref}>
              <Phone size={20} />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={20} />
              {contactInfo.email}
            </a>
            <span>
              <MapPin size={20} />
              {contactInfo.address}
            </span>
            <span>
              <Timer size={20} />
              {contactInfo.schedule}
            </span>
          </div>
        </div>
      </section>
      <Contacts />
    </>
  );
}
