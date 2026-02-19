import { useEffect } from "react";

/**
 * Smooth scroll to hash when URL changes.
 * For lazy-loaded sections, scroll down to trigger loading first,
 * then watch for element and scroll to it.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const tryScroll = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediate scroll
      if (tryScroll()) return;

      // Scroll down to trigger lazy loading of below-fold sections
      window.scrollTo({ top: window.innerHeight * 2, behavior: "auto" });

      // Watch for the target element to appear in DOM
      let attempts = 0;
      const checkForElement = setInterval(() => {
        if (tryScroll()) {
          clearInterval(checkForElement);
        }
        attempts++;
        if (attempts > 50) {
          clearInterval(checkForElement);
        }
      }, 100);
    };

    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      setTimeout(handleHashChange, 300);
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
}
