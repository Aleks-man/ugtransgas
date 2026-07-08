import { Check } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { packages } from "../data/site";

export function Pricing() {
  return (
    <section className="section section--muted" id="pricing">
      <div className="container">
        <SectionHeader
          eyebrow="Пакеты"
          title="Подберем комплект ГБО под ваш автомобиль"
          text="Стоимость рассчитывается индивидуально с учетом модели автомобиля, типа баллона и выбранного комплекта оборудования. Точную стоимость мы определяем после технического осмотра."
        />
        <div className="pricing-grid">
          {packages.map((item) => (
            <article
              className={
                item.featured ? "price-card price-card--featured" : "price-card"
              }
              key={item.name}
            >
              <div>
                <span className="price-card__name">{item.name}</span>
                <strong>{item.price}</strong>
                <p>{item.description}</p>
              </div>
              <ul>
                {item.items.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="button button--full" href="/contacts">
                Запросить расчет
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
