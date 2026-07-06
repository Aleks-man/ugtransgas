export const routes = {
  home: "/",
  services: "/services",
  works: "/works",
  contacts: "/contacts",
  privacy: "/privacy",
  agreement: "/agreement",
} as const;

export function navigateTo(path: string) {
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (currentPath === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function getCurrentPath() {
  return window.location.pathname || routes.home;
}
