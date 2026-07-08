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
            <h1>
              Запишитесь на осмотр удобным способом или приезжайте в наш сервис.
            </h1>
            <p>
              Сервис расположен на территории АГНКС «Черноморнефтегаз». Перед
              визитом отправьте модель автомобиля — мы подскажем, какое
              оборудование подойдет именно вам.
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
            <a href={contactInfo.route} target="_blank" rel="noreferrer">
              <MapPin size={20} />
              {contactInfo.address}
            </a>
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
