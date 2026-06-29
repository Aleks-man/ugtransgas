import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <p>СТО ТрансГаз: установка, обслуживание и оформление газобаллонного оборудования в Республике Крым.</p>
      </div>
    </footer>
  );
}
