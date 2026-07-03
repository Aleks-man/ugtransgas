import { ExternalLink, Star } from "lucide-react";

const yandexReviewsUrl = "https://yandex.ru/maps/org/transgaz/1060228721/reviews/";
const reviewSnippets = [
  {
    author: "Виктория Ш.",
    text: "Быстро устранили неполадки в оборудовании. Объясняют все понятно, подробно.",
  },
  {
    author: "Артем К.",
    text: "За полчаса нашли проблему и устранили, ценник приемлемый.",
  },
];

export function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container reviews-panel">
        <div className="reviews-summary">
          <span className="eyebrow">Отзывы</span>
          <h2>4.8 в Яндекс Картах</h2>
        </div>

        <div className="reviews-rating" aria-label="Рейтинг на Яндекс Картах">
          <div className="reviews-rating__score">
            <Star size={30} fill="currentColor" />
            <strong>4.8</strong>
          </div>
          <span>98 отзывов</span>
          <small>215 оценок на Яндекс Картах</small>
        </div>

        <div className="reviews-snippets">
          {reviewSnippets.map((review) => (
            <blockquote className="reviews-snippet" key={review.author}>
              <p>{review.text}</p>
              <cite>{review.author}</cite>
            </blockquote>
          ))}
        </div>

        <a className="button button--primary reviews-link" href={yandexReviewsUrl} target="_blank" rel="noreferrer">
          Читать далее
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
