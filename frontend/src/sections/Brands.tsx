import { carBrands } from "../data/site";
import cadillacLogo from "../assets/brand-logos/cadillac.png";
import cheryLogo from "../assets/brand-logos/chery.png";
import chevroletLogo from "../assets/brand-logos/chevrolet.png";
import chryslerLogo from "../assets/brand-logos/chrysler.png";
import daewooLogo from "../assets/brand-logos/daewoo.png";
import dodgeLogo from "../assets/brand-logos/dodge.png";
import fordLogo from "../assets/brand-logos/ford.png";
import geelyLogo from "../assets/brand-logos/geely.png";
import hyundaiLogo from "../assets/brand-logos/hyundai.png";
import infinitiLogo from "../assets/brand-logos/infiniti.png";
import jacLogo from "../assets/brand-logos/jac.png";
import kiaLogo from "../assets/brand-logos/kia.png";
import ladaLogo from "../assets/brand-logos/lada.png";
import lexusLogo from "../assets/brand-logos/lexus.png";
import lifanLogo from "../assets/brand-logos/lifan.png";
import mazdaLogo from "../assets/brand-logos/mazda.png";
import mercedesLogo from "../assets/brand-logos/mercedes.png";
import mitsubishiLogo from "../assets/brand-logos/mitsubishi.png";
import nissanLogo from "../assets/brand-logos/nissan.png";
import peugeotLogo from "../assets/brand-logos/peugeot.png";
import renaultLogo from "../assets/brand-logos/renault.png";
import skodaLogo from "../assets/brand-logos/skoda.png";
import ssangyongLogo from "../assets/brand-logos/ssangyong.png";
import subaruLogo from "../assets/brand-logos/subaru.png";
import toyotaLogo from "../assets/brand-logos/toyota.png";
import uazLogo from "../assets/brand-logos/uaz.png";
import volkswagenLogo from "../assets/brand-logos/volkswagen.png";

const brandLogoImages: Record<string, string> = {
  CADILLAC: cadillacLogo,
  CHERY: cheryLogo,
  CHEVROLET: chevroletLogo,
  CHRYSLER: chryslerLogo,
  DAEWOO: daewooLogo,
  DODGE: dodgeLogo,
  FORD: fordLogo,
  GEELY: geelyLogo,
  HYUNDAI: hyundaiLogo,
  INFINITI: infinitiLogo,
  JAC: jacLogo,
  KIA: kiaLogo,
  LADA: ladaLogo,
  LEXUS: lexusLogo,
  LIFAN: lifanLogo,
  MAZDA: mazdaLogo,
  MERCEDES: mercedesLogo,
  MITSUBISHI: mitsubishiLogo,
  NISSAN: nissanLogo,
  PEUGEOT: peugeotLogo,
  RENAULT: renaultLogo,
  SKODA: skodaLogo,
  SSANGYONG: ssangyongLogo,
  SUBARU: subaruLogo,
  TOYOTA: toyotaLogo,
  UAZ: uazLogo,
  VOLKSWAGEN: volkswagenLogo,
};

function BrandLogo({ brand }: { brand: string }) {
  const logoImage = brandLogoImages[brand];
  const brandClass = `brand-logo brand-logo--${brand.toLowerCase()}`;

  if (logoImage) {
    return (
      <div className={brandClass} aria-label={brand} title={brand}>
        <img className="brand-logo__image" src={logoImage} alt="" aria-hidden="true" />
        <span className="brand-logo__label">{brand}</span>
      </div>
    );
  }

  return (
    <div className={`${brandClass} brand-logo--fallback`} aria-label={brand} title={brand}>
      <span className="brand-logo__label">{brand}</span>
    </div>
  );
}

export function Brands() {
  return (
    <section className="brands-section" aria-label="Марки автомобилей">
      <div className="container brands-grid">
        <div>
          <span className="eyebrow">Марки авто</span>
          <h2>Устанавливаем ГБО на легковые и коммерческие автомобили</h2>
        </div>
        <div className="brand-cloud">
          {carBrands.map((brand) => (
            <BrandLogo brand={brand} key={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
