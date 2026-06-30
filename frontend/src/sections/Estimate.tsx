import { ArrowRight, CheckCircle2 } from "lucide-react";

const estimateItems = [
  "тип топлива: метан или пропан",
  "комплект оборудования под двигатель",
  "вариант размещения баллона",
  "стоимость установки и обслуживания",
];

export function Estimate() {
  return (
    <section className="estimate-section">
      <div className="container estimate-panel">
        <div>
          <span className="eyebrow">Персональный расчёт</span>
          <h2>Подберём комплект ГБО под ваш автомобиль до визита в сервис</h2>
          <p>
            Напишите модель, год, объём двигателя и средний пробег. Специалист подготовит понятный вариант установки:
            без навязывания лишних компонентов и с объяснением, почему выбран именно этот комплект.
          </p>
        </div>
        <div className="estimate-list">
          {estimateItems.map((item) => (
            <span key={item}>
              <CheckCircle2 size={18} />
              {item}
            </span>
          ))}
        </div>
        <a className="button button--primary" href="/contacts">
          Получить расчёт
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
