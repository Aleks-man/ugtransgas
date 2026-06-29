import logoSrc from "../assets/site/logo.png";

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="СТО ТрансГаз">
      <span className="logo__mark">
        <img src={logoSrc} alt="" />
      </span>
      <span className="logo__text logo__text--fallback">
        <strong>СТО ТрансГаз</strong>
        <span>установка и сервис ГБО</span>
      </span>
    </a>
  );
}
