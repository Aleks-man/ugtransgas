import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <p>Концепт современного сайта-визитки для ЮгТрансГаз.</p>
      </div>
    </footer>
  );
}

