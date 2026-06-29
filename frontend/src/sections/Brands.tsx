import { carBrands } from "../data/site";

export function Brands() {
  return (
    <section className="brands-section" aria-label="Марки автомобилей">
      <div className="container brands-grid">
        <div>
          <span className="eyebrow">Марки авто</span>
          <h2>Работают с популярными легковыми и коммерческими автомобилями</h2>
        </div>
        <div className="brand-cloud">
          {carBrands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

