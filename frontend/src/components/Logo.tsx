import logoSrc from "../assets/site/logo.png";

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="ЮгТрансГаз">
      <span className="logo__mark logo__mark--image">
        <img src={logoSrc} alt="" />
      </span>
      <span className="logo__text">
        <strong>ЮгТрансГаз</strong>
        <span>газовое оборудование</span>
      </span>
    </a>
  );
}
