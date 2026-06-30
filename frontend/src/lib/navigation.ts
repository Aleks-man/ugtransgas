export const routes = {
  home: "/",
  services: "/services",
  works: "/works",
  contacts: "/contacts",
} as const;

export function navigateTo(path: string) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function getCurrentPath() {
  return window.location.pathname || routes.home;
}
