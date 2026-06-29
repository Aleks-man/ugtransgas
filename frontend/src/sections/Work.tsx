import { gallery } from "../data/site";
import { SectionHeader } from "../components/SectionHeader";
import work1 from "../assets/site/work-1.jpg";
import work2 from "../assets/site/work-2.jpg";
import work3 from "../assets/site/work-3.jpg";
import work4 from "../assets/site/work-4.jpg";

const workImages = [work1, work2, work3, work4];

export function Work() {
  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Качество работ"
          title="Реальные установки и обслуживание ГБО"
          text="Показываем работу с автомобилями, аккуратность монтажа и внимание к узлам, которые отвечают за безопасность системы."
        />
        <div className="work-grid">
          {gallery.map((item, index) => (
            <article className="work-card" key={item}>
              <img src={workImages[index]} alt={item} loading="lazy" />
              <div className="work-card__body">
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <p>
                  Монтаж выполняется с проверкой герметичности, доступом к
                  обслуживаемым узлам и последующей настройкой оборудования.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
