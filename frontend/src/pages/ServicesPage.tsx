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
            <h1>Установка, диагностика и сопровождение ГБО в одном сервисе</h1>
            <p>
              Подбираем оборудование под автомобиль, монтируем метановые и пропановые системы,
              проверяем безопасность, обслуживаем установленное ГБО и помогаем с документами.
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

      <section className="section service-detail-section">
        <div className="container">
          <SectionHeader
            eyebrow="Направления"
            title="Работы, которые чаще всего нужны владельцу автомобиля с ГБО"
            text="Берем на себя подбор комплекта, монтаж, проверку безопасности, обслуживание системы и сопровождение после установки."
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
