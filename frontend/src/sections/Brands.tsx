import { ArrowRight, MessageCircle } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { routes } from "../lib/navigation";

const featuredBrands = ["Toyota", "Kia", "Hyundai", "Volkswagen", "Mercedes", "Lada", "Ford", "Chevrolet", "Nissan"];

export function Brands() {
  return (
    <section className="brands-section" aria-label="Марки автомобилей">
      <div className="container brands-panel">
        <div className="brands-copy">
          <span className="eyebrow">Марки авто</span>
          <h2>ГБО для популярных марок автомобилей</h2>
          <p>
            Подбираем оборудование с учетом особенностей каждой модели и
            выполняем аккуратный монтаж без лишнего вмешательства в конструкцию
            автомобиля.
            <strong> Работаем с автомобилями:</strong>{" "}
            {featuredBrands.join(", ")} и другими марками.
          </p>
        </div>

        <div className="brands-actions">
          <AppLink className="button button--primary" to={routes.works}>
            Посмотреть работы
            <ArrowRight size={18} />
          </AppLink>
          <AppLink className="button button--ghost" to={routes.contacts}>
            Уточнить по своему авто
            <MessageCircle size={18} />
          </AppLink>
        </div>
      </div>
    </section>
  );
}
