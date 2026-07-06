import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";

type WorkImage = {
  brand: string;
  slug: string;
  src: string;
  original: string;
};

const featuredWorkSources = [
  "/works-gallery/hyundai/hyundai-040.jpg",
  "/works-gallery/geely/geely-006.jpg",
  "/works-gallery/infiniti/infiniti-012.jpg",
  "/works-gallery/kia/kia-023.jpg",
  "/works-gallery/ford/ford-013.jpg",
  "/works-gallery/chevrolet/chevrolet-014.jpg",
  "/works-gallery/renault/renault-043.jpg",
  "/works-gallery/kia/kia-026.jpg",
];

export function Work() {
  const [images, setImages] = useState<WorkImage[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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

  const activeLightboxImage = activeImageIndex === null ? null : featuredImages[activeImageIndex];

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
          if (index === null || featuredImages.length === 0) {
            return index;
          }

          return index === 0 ? featuredImages.length - 1 : index - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((index) => {
          if (index === null || featuredImages.length === 0) {
            return index;
          }

          return index === featuredImages.length - 1 ? 0 : index + 1;
        });
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, featuredImages.length]);

  function showPreviousImage() {
    setActiveImageIndex((index) => {
      if (index === null || featuredImages.length === 0) {
        return index;
      }

      return index === 0 ? featuredImages.length - 1 : index - 1;
    });
  }

  function showNextImage() {
    setActiveImageIndex((index) => {
      if (index === null || featuredImages.length === 0) {
        return index;
      }

      return index === featuredImages.length - 1 ? 0 : index + 1;
    });
  }

  return (
    <section className="section section--dark" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Работы"
          title="Реальные установки: подкапотное пространство, баллоны и готовая компоновка"
          text="Показываем монтажные решения на разных автомобилях: аккуратное размещение оборудования, доступ к узлам и чистый результат после выдачи."
        />
        <div className="work-meta">
          <span>1000+ установок ГБО</span>
          <span>более 20 марок автомобилей</span>
        </div>

        <div className="showcase-grid">
          {featuredImages.map((image, index) => (
            <button
              className={
                index === 0
                  ? "showcase-card showcase-card--lead"
                  : "showcase-card"
              }
              key={image.src}
              onClick={() => setActiveImageIndex(index)}
              type="button"
            >
              <img
                src={image.src}
                alt={`Работа СТО ТрансГаз: ${image.brand}`}
                loading="lazy"
              />
              <span>{image.brand}</span>
            </button>
          ))}
        </div>

        <div className="work-archive-note">
          <p>
            В галерее можно выбрать марку автомобиля и посмотреть больше
            примеров монтажа на похожих машинах.
          </p>
          <div className="work-archive-actions">
            <a className="button button--primary" href="/works">
              Смотреть галерею
            </a>
            <a className="button button--ghost button--dark" href="/contacts">
              Запросить примеры
            </a>
          </div>
        </div>
      </div>

      {activeLightboxImage ? (
        <div
          className="gallery-lightbox"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="gallery-lightbox__button gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            type="button"
            aria-label="Previous image"
          >
            <ChevronLeft size={38} />
          </button>

          <div
            className="gallery-lightbox__stage"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-lightbox__button gallery-lightbox__close"
              onClick={() => setActiveImageIndex(null)}
              type="button"
              aria-label="Close image"
            >
              <X size={28} />
            </button>

            <figure className="gallery-lightbox__figure">
              <img
                src={activeLightboxImage.src}
                alt={activeLightboxImage.brand}
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
            aria-label="Next image"
          >
            <ChevronRight size={38} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
