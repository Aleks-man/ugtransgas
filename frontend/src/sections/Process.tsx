import { SectionHeader } from "../components/SectionHeader";
import { workSteps } from "../data/site";

export function Process() {
  return (
    <section className="section">
      <div className="container process-grid">
        <SectionHeader
          eyebrow="Процесс"
          title="Понятный маршрут клиента от звонка до выдачи"
          text="Такой блок снимает тревогу: человек заранее понимает, что будет происходить с автомобилем."
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

