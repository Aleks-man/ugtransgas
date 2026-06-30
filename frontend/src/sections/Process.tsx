import { SectionHeader } from "../components/SectionHeader";
import { workSteps } from "../data/site";

export function Process() {
  return (
    <section className="section process-section">
      <div className="container process-grid">
        <SectionHeader
          eyebrow="Процесс"
          title="Порядок установки и обслуживания ГБО"
          text="Перед началом работ осматриваем автомобиль, согласуем комплект оборудования, выполняем монтаж, настройку и финальную проверку системы."
        />
        <div className="timeline">
          {workSteps.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
