import { useEffect, useRef, useState } from "react";

/**
 * Mount-once when the element enters viewport.
 * rootMargin preloads before user reaches it (perf + avoids pop-in).
 */
export function useInViewOnce({ rootMargin = "250px", threshold = 0.01 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [inView, rootMargin, threshold]);

  return { ref, inView };
}
