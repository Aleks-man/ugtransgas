import { Mail, MapPin, Phone, Timer } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { contactInfo } from "../data/site";

export function Contacts() {
  return (
    <section className="section contacts-section" id="contacts">
      <div className="container contacts-grid">
        <div className="contact-copy">
          <span className="eyebrow">Заявка</span>
          <h2>Запишитесь на бесплатный технический осмотр</h2>
          <p>
            Специалист проверит автомобиль, подскажет подходящий комплект и
            рассчитает стоимость установки метанового или пропанового оборудования.
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
        <ContactForm />
      </div>
    </section>
  );
}
