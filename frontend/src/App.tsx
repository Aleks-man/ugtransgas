import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./sections/Footer";
import { ContactsPage } from "./pages/ContactsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { ServicesPage } from "./pages/ServicesPage";
import { agreementDocument, privacyDocument } from "./data/legal";
import { getCurrentPath, navigateTo, routes } from "./lib/navigation";
import "./styles/index.css";

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPath(getCurrentPath());
    }

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest("a");

      if (
        !link ||
        link.target ||
        link.hasAttribute("download") ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const url = new URL(link.href);

      if (url.origin !== window.location.origin || !Object.values(routes).includes(url.pathname as typeof routes.home)) {
        return;
      }

      event.preventDefault();
      navigateTo(`${url.pathname}${url.search}${url.hash}`);
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 360);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const page =
    currentPath === routes.services ? (
      <ServicesPage />
    ) : currentPath === routes.works ? (
      <GalleryPage />
    ) : currentPath === routes.contacts ? (
      <ContactsPage />
    ) : currentPath === routes.privacy ? (
      <LegalPage document={privacyDocument} />
    ) : currentPath === routes.agreement ? (
      <LegalPage document={agreementDocument} />
    ) : (
      <HomePage />
    );

  return (
    <>
      <Header currentPath={currentPath} />
      <main>{page}</main>
      <Footer />
      {showScrollTop ? (
        <button
          className="scroll-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          aria-label="Наверх"
        >
          <ChevronUp size={18} />
        </button>
      ) : null}
    </>
  );
}

export default App;
