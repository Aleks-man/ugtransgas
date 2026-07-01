import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const pageSize = 18;

export function GalleryPage() {
  const [images, setImages] = useState<WorkImage[]>([]);
  const [activeSlug, setActiveSlug] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/works-gallery/manifest.json")
      .then((response) => response.json())
      .then((items: WorkImage[]) => {
        setImages(items);
        setActiveSlug(items[0]?.slug ?? "");
      })
      .catch(() => setImages([]))
      .finally(() => setIsLoading(false));
  }, []);

  const brands = useMemo(
    () =>
      Array.from(new Map(images.map((image) => [image.slug, image.brand])).entries()).map(
        ([slug, brand]) => ({ slug, brand }),
      ),
    [images],
  );

  const activeImages = useMemo(
    () => images.filter((image) => image.slug === activeSlug),
    [activeSlug, images],
  );

  const visibleImages = activeImages.slice(0, visibleCount);

  function selectBrand(slug: string) {
    setActiveSlug(slug);
    setVisibleCount(pageSize);
  }

  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Работы</span>
            <h1>Галерея установок по маркам автомобилей</h1>
            <p>
              Выберите марку и посмотрите реальные примеры монтажа: подкапотное пространство,
              баллоны, заправочные узлы и готовую компоновку оборудования.
            </p>
          </div>
          <div className="page-hero__panel">
            <span>более 600 фотографий работ</span>
            <span>более 20 марок автомобилей</span>
            <span>монтаж, настройка и обслуживание</span>
          </div>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Марки"
            title="Выберите автомобиль"
            text="В галерее собраны реальные установки на легковых и коммерческих автомобилях: от размещения баллона до аккуратной компоновки под капотом."
          />

          {isLoading ? (
            <div className="gallery-layout gallery-loading" aria-label="Загрузка галереи">
              <aside className="gallery-brand-list" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span className="gallery-loading__brand" key={index} />
                ))}
              </aside>
              <div className="gallery-results">
                <span className="gallery-loading__head" />
                <div className="gallery-grid">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span className="gallery-loading__thumb" key={index} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
          <div className="gallery-layout">
            <aside className="gallery-brand-list" aria-label="Марки автомобилей">
              {brands.map((brand) => (
                <button
                  className={activeSlug === brand.slug ? "gallery-brand is-active" : "gallery-brand"}
                  key={brand.slug}
                  onClick={() => selectBrand(brand.slug)}
                  type="button"
                >
                  {brand.brand}
                </button>
              ))}
            </aside>

            <div className="gallery-results">
              <div className="gallery-results__head">
                <h2>{brands.find((brand) => brand.slug === activeSlug)?.brand ?? "Работы"}</h2>
                <span>{activeImages.length} фото</span>
              </div>

              <div className="gallery-grid">
                {visibleImages.map((image) => (
                  <a href={image.src} key={image.src} target="_blank" rel="noreferrer">
                    <img src={image.src} alt={`Работа СТО ТрансГаз: ${image.brand}`} loading="lazy" />
                  </a>
                ))}
              </div>

              {visibleCount < activeImages.length ? (
                <button
                  className="button button--primary gallery-more"
                  onClick={() => setVisibleCount((count) => count + pageSize)}
                  type="button"
                >
                  Показать еще
                </button>
              ) : null}
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
