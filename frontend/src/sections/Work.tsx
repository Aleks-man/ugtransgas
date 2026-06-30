import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const featuredBrands = ["toyota", "lexus", "mercedes", "cadillac", "kia", "uaz"];

export function Work() {
  const [images, setImages] = useState<WorkImage[]>([]);

  useEffect(() => {
    fetch("/works-gallery/manifest.json")
      .then((response) => response.json())
      .then((items: WorkImage[]) => setImages(items))
      .catch(() => setImages([]));
  }, []);

  const brands = useMemo(
    () =>
      Array.from(new Map(images.map((image) => [image.slug, image.brand])).entries()).map(
        ([slug, brand]) => ({ slug, brand }),
      ),
    [images],
  );

  const featuredImages = useMemo(() => {
    if (!images.length) {
      return [];
    }

    const selected = featuredBrands
      .map((slug) => images.find((image) => image.slug === slug))
      .filter((image): image is WorkImage => Boolean(image));

    return selected.length >= 4 ? selected : images.slice(0, 6);
  }, [images]);

  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Работы"
          title="Избранные установки: аккуратный монтаж, чистая компоновка, понятный результат"
          text="Показываем не весь архив подряд, а сильные примеры работ. Полная галерея может жить отдельной страницей или подгружаться по маркам."
        />
        <div className="work-meta">
          <span>{images.length || 617} фото в архиве</span>
          <span>{brands.length || 27} марок автомобилей</span>
          <span>на лендинге только отобранные работы</span>
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
          <p>Полный фотоархив лучше вынести отдельно: так лендинг останется быстрым, а клиент увидит лучшие работы сразу.</p>
          <a className="button button--ghost button--dark" href="#contacts">
            Запросить примеры по моей марке
          </a>
        </div>
      </div>
    </section>
  );
}
