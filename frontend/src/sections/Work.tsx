import { gallery } from "../data/site";
import { SectionHeader } from "../components/SectionHeader";

export function Work() {
  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Качество работ"
          title="Визуальный блок под реальные фотографии мастерской"
          text="Когда появятся фото установок, их можно заменить в этом блоке. Сейчас он держит структуру и стиль будущего портфолио."
        />
        <div className="work-grid">
          {gallery.map((item, index) => (
            <article className="work-card" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                Акцент на чистоте монтажа, доступности узлов для обслуживания и
                аккуратном внешнем виде после установки.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

