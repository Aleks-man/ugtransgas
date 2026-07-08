import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const pageSize = 18;

function getRequestedBrandSlug() {
  return new URLSearchParams(window.location.search).get("brand") ?? "";
}

export function GalleryPage() {
  const brandSelectRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<WorkImage[]>([]);
  const [activeSlug, setActiveSlug] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/works-gallery/manifest.json")
      .then((response) => response.json())
      .then((items: WorkImage[]) => {
        const requestedSlug = getRequestedBrandSlug();
        const requestedBrandExists = items.some((image) => image.slug === requestedSlug);

        setImages(items);
        setActiveSlug(requestedBrandExists ? requestedSlug : (items[0]?.slug ?? ""));
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
  const activeLightboxImage = activeImageIndex === null ? null : activeImages[activeImageIndex];

  useEffect(() => {
    if (!isBrandMenuOpen) {
      return;
    }

    function handleDocumentPointerDown(event: PointerEvent) {
      if (!brandSelectRef.current?.contains(event.target as Node)) {
        setIsBrandMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleDocumentPointerDown);
    return () => document.removeEventListener("pointerdown", handleDocumentPointerDown);
  }, [isBrandMenuOpen]);

  useEffect(() => {
    if (activeImageIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((index) => {
          if (index === null || activeImages.length === 0) {
            return index;
          }

          return index === 0 ? activeImages.length - 1 : index - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((index) => {
          if (index === null || activeImages.length === 0) {
            return index;
          }

          return index === activeImages.length - 1 ? 0 : index + 1;
        });
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, activeImages.length]);

  function selectBrand(slug: string) {
    setActiveSlug(slug);
    setVisibleCount(pageSize);
    setActiveImageIndex(null);
    setIsBrandMenuOpen(false);

    const nextUrl = `/works?brand=${encodeURIComponent(slug)}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function showPreviousImage() {
    setActiveImageIndex((index) => {
      if (index === null || activeImages.length === 0) {
        return index;
      }

      return index === 0 ? activeImages.length - 1 : index - 1;
    });
  }

  function showNextImage() {
    setActiveImageIndex((index) => {
      if (index === null || activeImages.length === 0) {
        return index;
      }

      return index === activeImages.length - 1 ? 0 : index + 1;
    });
  }

  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Работы</span>
            <h1>Галерея установок по маркам автомобилей</h1>
            <p>
              Выберите марку автомобиля и посмотрите реальные примеры установки
              ГБО на разных моделях: подкапотное размещение оборудования,
              баллоны, заправочные узлы и готовый результат..
            </p>
          </div>
          <div className="page-hero__panel">
            <span>более 600 фотографий работ</span>
            <span>более 20 марок автомобилей</span>
            <span>монтаж, настройка и обслуживание</span>
          </div>
        </div>
      </section>

      <section className="section gallery-page-section section--soft-divider">
        <div className="container">
          <SectionHeader
            eyebrow="Марки"
            title="Выберите автомобиль"
            text="В галерее представлены реальные работы по установке ГБО на легковые и коммерческие автомобили. Вы увидите примеры аккуратного монтажа, размещения оборудования и готового результата."
          />

          {isLoading ? (
            <div
              className="gallery-layout gallery-loading"
              aria-label="Загрузка галереи"
            >
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
              <div className="gallery-brand-select" ref={brandSelectRef}>
                <span>Выбрать авто</span>
                <button
                  className="gallery-brand-select__trigger"
                  onClick={() => setIsBrandMenuOpen((value) => !value)}
                  type="button"
                  aria-expanded={isBrandMenuOpen}
                >
                  {brands.find((brand) => brand.slug === activeSlug)?.brand ??
                    "Марка авто"}
                  <ChevronDown size={18} />
                </button>

                {isBrandMenuOpen ? (
                  <div className="gallery-brand-select__menu">
                    {brands.map((brand) => (
                      <button
                        className={
                          activeSlug === brand.slug
                            ? "gallery-brand-select__option is-active"
                            : "gallery-brand-select__option"
                        }
                        key={brand.slug}
                        onClick={() => selectBrand(brand.slug)}
                        type="button"
                      >
                        {brand.brand}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <label className="gallery-brand-select-native">
                <span>Выбрать авто</span>
                <select
                  value={activeSlug}
                  onChange={(event) => selectBrand(event.target.value)}
                >
                  {brands.map((brand) => (
                    <option value={brand.slug} key={brand.slug}>
                      {brand.brand}
                    </option>
                  ))}
                </select>
              </label>

              <aside
                className="gallery-brand-list"
                aria-label="Марки автомобилей"
              >
                {brands.map((brand) => (
                  <button
                    className={
                      activeSlug === brand.slug
                        ? "gallery-brand is-active"
                        : "gallery-brand"
                    }
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
                  <h2>
                    {brands.find((brand) => brand.slug === activeSlug)?.brand ??
                      "Работы"}
                  </h2>
                  <span>{activeImages.length} фото</span>
                </div>

                <div className="gallery-grid">
                  {visibleImages.map((image) => (
                    <button
                      className="gallery-image-button"
                      key={image.src}
                      onClick={() =>
                        setActiveImageIndex(
                          activeImages.findIndex(
                            (item) => item.src === image.src,
                          ),
                        )
                      }
                      type="button"
                    >
                      <img
                        src={image.src}
                        alt={`Работа СТО ТрансГаз: ${image.brand}`}
                        loading="lazy"
                      />
                    </button>
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

      {activeLightboxImage ? (
        <div
          className="gallery-lightbox"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="gallery-lightbox__button gallery-lightbox__close"
            onClick={() => setActiveImageIndex(null)}
            type="button"
            aria-label="Закрыть"
          >
            <X size={26} />
          </button>
          <button
            className="gallery-lightbox__button gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            type="button"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft size={34} />
          </button>
          <div
            className="gallery-lightbox__stage"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-lightbox__button gallery-lightbox__close"
              onClick={() => setActiveImageIndex(null)}
              type="button"
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>
            <figure className="gallery-lightbox__figure">
              <img
                src={activeLightboxImage.src}
                alt={`Работа СТО ТрансГаз: ${activeLightboxImage.brand}`}
              />
              <figcaption>{activeLightboxImage.brand}</figcaption>
            </figure>
          </div>
          <button
            className="gallery-lightbox__button gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            type="button"
            aria-label="Следующее фото"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      ) : null}
    </>
  );
}
