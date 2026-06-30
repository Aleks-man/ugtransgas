import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./sections/Footer";
import { ContactsPage } from "./pages/ContactsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { getCurrentPath, navigateTo, routes } from "./lib/navigation";
import "./styles/index.css";

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

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
      navigateTo(url.pathname);
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const page =
    currentPath === routes.services ? (
      <ServicesPage />
    ) : currentPath === routes.works ? (
      <GalleryPage />
    ) : currentPath === routes.contacts ? (
      <ContactsPage />
    ) : (
      <HomePage />
    );

  return (
    <>
      <Header currentPath={currentPath} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

export default App;
