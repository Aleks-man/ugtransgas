import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { benefits, serviceDetails } from "../data/site";
import { Estimate } from "../sections/Estimate";
import { Pricing } from "../sections/Pricing";
import { Process } from "../sections/Process";

export function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Услуги</span>
            <h1>Установка, диагностика и обслуживание ГБО в одном сервисе</h1>
            <p>
              Подбираем оптимальное оборудование для вашего автомобиля,
              выполняем установку, настройку и обслуживание ГБО, проверяем
              безопасность системы и помогаем с оформлением документов.
            </p>
          </div>
          <div className="page-hero__panel">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.title}>
                  <Icon size={20} />
                  {item.title}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-detail-section section--soft-divider">
        <div className="container">
          <SectionHeader
            eyebrow="Направления"
            title="Основные услуги для автомобилей с ГБО"
            text="Подбираем оборудование, выполняем монтаж, проверяем безопасность системы, проводим обслуживание и помогаем с дальнейшей эксплуатацией."
          />
          <div className="service-detail-grid">
            {serviceDetails.map((item) => (
              <article className="service-detail-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Process />
      <Estimate />
    </>
  );
}
