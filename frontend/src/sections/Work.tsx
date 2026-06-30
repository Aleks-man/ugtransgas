import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const featuredWorkSources = [
  "/works-gallery/hyundai/hyundai-034.jpg",
  "/works-gallery/geely/geely-006.jpg",
  "/works-gallery/infiniti/infiniti-012.jpg",
  "/works-gallery/kia/kia-023.jpg",
  "/works-gallery/ford/ford-013.jpg",
  "/works-gallery/chevrolet/chevrolet-014.jpg",
  "/works-gallery/hyundai/hyundai-040.jpg",
  "/works-gallery/kia/kia-026.jpg",
];

export function Work() {
  const [images, setImages] = useState<WorkImage[]>([]);

  useEffect(() => {
    fetch("/works-gallery/manifest.json")
      .then((response) => response.json())
      .then((items: WorkImage[]) => setImages(items))
      .catch(() => setImages([]));
  }, []);

  const featuredImages = useMemo(() => {
    if (!images.length) {
      return [];
    }

    const selected = featuredWorkSources
      .map((src) => images.find((image) => image.src === src))
      .filter((image): image is WorkImage => Boolean(image));

    return selected.length >= 4 ? selected : images.slice(0, 6);
  }, [images]);

  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Работы"
          title="Каждая установка - аккуратное исполнение и продуманная компоновка"
          text="В галерее представлены реальные примеры монтажа: подкапотное размещение оборудования, установка баллонов и заправочных узлов на разных автомобилях. Чистый монтаж, соблюдение требований безопасности и удобство дальнейшего обслуживания - основа каждого проекта."
        />
        <div className="work-meta">
          <span>более 600 фотографий выполненных работ</span>
          <span>22 марки автомобилей</span>
          <span>примеры монтажа, настройки и обслуживания</span>
        </div>

        <div className="showcase-grid">
          {featuredImages.map((image, index) => (
            <a
              className={index === 0 ? "showcase-card showcase-card--lead" : "showcase-card"}
              href={image.src}
              target="_blank"
              rel="noreferrer"
              key={image.src}
            >
              <img src={image.src} alt={`Работа СТО ТрансГаз: ${image.brand}`} loading="lazy" />
              <span>{image.brand}</span>
            </a>
          ))}
        </div>

        <div className="work-archive-note">
          <p>Подберем примеры установок на похожий автомобиль и покажем варианты размещения оборудования до записи.</p>
          <a className="button button--ghost button--dark" href="#contacts">
            Запросить примеры по моей марке
          </a>
        </div>
      </div>
    </section>
  );
}
