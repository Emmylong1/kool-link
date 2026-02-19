import { useInViewOnce } from "../hooks/useInViewOnce.js";

export default function LazyMount({ children, minHeight = 300, rootMargin = "250px" }) {
  const { ref, inView } = useInViewOnce({ rootMargin });

  return (
    <div ref={ref} style={{ minHeight }}>
      {inView ? children : null}
    </div>
  );
}