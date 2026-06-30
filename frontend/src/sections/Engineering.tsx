import { BadgeCheck, FileCheck2, Gauge, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Gauge,
    title: "Настройка под конкретный мотор",
    text: "Подбираем комплект, форсунки, редуктор и карту работы не по шаблону, а под двигатель, пробег и режим езды.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность до выдачи",
    text: "Проверяем герметичность, магистрали, крепления, электрику и корректность переключения до передачи автомобиля.",
  },
  {
    icon: FileCheck2,
    title: "Документы и сопровождение",
    text: "Помогаем с оформлением ГБО, аттестацией баллонов и плановым обслуживанием после установки.",
  },
  {
    icon: BadgeCheck,
    title: "Аккуратная интеграция",
    text: "Сохраняем штатную эстетику салона и багажника: без грубых врезок, лишних проводов и случайных решений.",
  },
];

export function Engineering() {
  return (
    <section className="section engineering-section">
      <div className="container engineering-grid">
        <div className="engineering-copy">
          <span className="eyebrow">Инженерный подход</span>
          <h2>ГБО должно выглядеть и работать так, будто автомобиль был рассчитан под него изначально</h2>
          <p>
            Оборудование размещается аккуратно, система настраивается под двигатель, а все узлы остаются доступными
            для обслуживания. После выдачи автомобиль должен быть понятным, безопасным и предсказуемым в эксплуатации.
          </p>
        </div>
        <div className="engineering-panel">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <article className="engineering-item" key={item.title}>
                <Icon size={24} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
