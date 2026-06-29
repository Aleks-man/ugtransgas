import { useEffect, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const initialVisibleCount = 12;
const visibleStep = 24;

export function Work() {
  const [images, setImages] = useState<WorkImage[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  useEffect(() => {
    fetch("/works-gallery/manifest.json")
      .then((response) => response.json())
      .then((items: WorkImage[]) => setImages(items))
      .catch(() => setImages([]));
  }, []);

  const brands = Array.from(
    new Map(images.map((image) => [image.slug, image.brand])).entries(),
  ).map(([slug, brand]) => ({ slug, brand }));
  const filteredImages =
    selectedBrand === "all"
      ? images
      : images.filter((image) => image.slug === selectedBrand);
  const visibleImages = filteredImages.slice(0, visibleCount);

  function selectBrand(slug: string) {
    setSelectedBrand(slug);
    setVisibleCount(initialVisibleCount);
  }

  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Качество работ"
          title="Галерея реальных установок и обслуживания ГБО"
          text="Собрали фотографии работ из действующей галереи СТО ТрансГаз: монтаж, диагностика, прокладка магистралей и проверка оборудования."
        />
        <div className="work-meta">
          <span>{images.length || 616} фотографий работ</span>
          <span>{brands.length || 26} марок автомобилей</span>
          <span>Открываются в полном размере</span>
        </div>
        <div className="brand-filter" aria-label="Фильтр работ по марке автомобиля">
          <button
            className={selectedBrand === "all" ? "brand-filter__item is-active" : "brand-filter__item"}
            type="button"
            onClick={() => selectBrand("all")}
          >
            Все
          </button>
          {brands.map((brand) => (
            <button
              className={
                selectedBrand === brand.slug ? "brand-filter__item is-active" : "brand-filter__item"
              }
              type="button"
              onClick={() => selectBrand(brand.slug)}
              key={brand.slug}
            >
              {brand.brand}
            </button>
          ))}
        </div>
        <div className="work-grid work-grid--gallery">
          {visibleImages.map((image, index) => (
            <a className="work-card" href={image.src} target="_blank" rel="noreferrer" key={image.src}>
              <img src={image.src} alt={`Работа СТО ТрансГаз ${index + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
        {visibleCount < filteredImages.length ? (
          <button
            className="button button--gallery"
            type="button"
            onClick={() => setVisibleCount((count) => count + visibleStep)}
          >
            Показать еще работы
          </button>
        ) : null}
      </div>
    </section>
  );
}
