import { benefits, services } from "../data/site";
import { SectionHeader } from "../components/SectionHeader";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Что делаем"
          title="Сайт сразу объясняет, почему сюда стоит приехать"
          text="Вместо разрозненных блоков клиент видит полный цикл работ, понятные преимущества и спокойный профессиональный тон."
        />
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
        <div className="benefits-strip">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div className="benefit" key={benefit.title}>
                <Icon size={20} />
                <span>{benefit.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

