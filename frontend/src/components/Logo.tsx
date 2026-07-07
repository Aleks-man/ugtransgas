import logoSrc from "../assets/site/logo-spaced.png";
import logoMarkSrc from "../assets/site/logo-mark.png";

type LogoProps = {
  mobileMark?: boolean;
};

export function Logo({ mobileMark = false }: LogoProps) {
  return (
    <span className="logo" aria-hidden="true">
      <span className="logo__mark">
        <img className="logo__image logo__image--full" src={logoSrc} alt="" />
        {mobileMark && <img className="logo__image logo__image--mark" src={logoMarkSrc} alt="" />}
      </span>
      <span className="logo__text logo__text--fallback">
        <strong>СТО ТрансГаз</strong>
        <span>установка и сервис ГБО</span>
      </span>
    </span>
  );
}
