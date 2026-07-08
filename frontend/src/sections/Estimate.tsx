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
          <h2>Подберем оптимальный комплект ГБО еще до вашего визита</h2>
          <p>
            Достаточно сообщить модель автомобиля, год выпуска, объем двигателя
            и средний пробег. Мы подберем подходящий комплект, рассчитаем
            ориентировочную стоимость и ответим на все вопросы еще до установки.
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
