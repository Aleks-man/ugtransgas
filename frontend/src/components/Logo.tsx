import logoSrc from "../assets/site/logo-spaced.png";

export function Logo() {
  return (
    <span className="logo" aria-hidden="true">
      <span className="logo__mark">
        <img src={logoSrc} alt="" />
      </span>
      <span className="logo__text logo__text--fallback">
        <strong>СТО ТрансГаз</strong>
        <span>установка и сервис ГБО</span>
      </span>
    </span>
  );
}
