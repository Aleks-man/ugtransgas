import { benefits, services } from "../data/site";
import { SectionHeader } from "../components/SectionHeader";
import equipmentBackground from "../assets/gas-equipment-bg.jpg";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Что делаем"
          title="Полный цикл работ с газобаллонным оборудованием"
          text="Подбираем комплект под автомобиль, устанавливаем метановые и пропановые системы, обслуживаем ГБО и помогаем с оформлением."
        />
        <div className="equipment-band">
          <img src={equipmentBackground} alt="Газобаллонное оборудование в сервисной зоне" />
          <div className="equipment-band__content">
            <span>Оборудование и монтаж</span>
            <h3>Комплектующие, настройка и безопасность в одном сервисе</h3>
            <p>
              Работаем с баллонами, редукторами, форсунками, магистралями и
              электроникой ГБО. После установки проверяем герметичность и
              корректную работу системы.
            </p>
          </div>
        </div>
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
