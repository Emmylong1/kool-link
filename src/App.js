import { Suspense, lazy } from "react";
import Snowfall from "react-snowfall";
import LazyMount from "./components/LazyMount";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

import HeaderHero from "./sections/HeaderHero";
import About from "./sections/About";
import Contact from "./sections/Contact";

// Lazy-loaded sections (code-splitting)
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const Products = lazy(() => import("./sections/Products"));
const Delivery = lazy(() => import("./sections/Delivery"));
const Footer = lazy(() => import("./sections/Footer"));

function SectionFallback({ label = "Loading..." }) {
  return (
    <div className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse bg-white rounded-2xl border border-primary/10 p-8">
          <div className="h-5 w-48 bg-primary/10 rounded mb-4" />
          <div className="h-3 w-full bg-primary/10 rounded mb-2" />
          <div className="h-3 w-2/3 bg-primary/10 rounded" />
          <div className="h-10 w-40 bg-primary/10 rounded mt-6" />
          <div className="text-xs text-[#616889] mt-6">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111218] font-display relative">
      {/* Snow overlay - doesn’t block interaction */}
      <Snowfall
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
        }}
        snowflakeCount={120}
        speed={[0.5, 2.0]}
        radius={[1, 3.5]}
      />

      {/* Above-the-fold: render immediately */}
      <HeaderHero />
      <About />

      {/* Below-the-fold: mount when near viewport + code-split */}
      <LazyMount minHeight={750} rootMargin="350px">
        <Suspense fallback={<SectionFallback label="Loading Why Choose Us..." />}>
          <WhyChooseUs />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={900} rootMargin="350px">
        <Suspense fallback={<SectionFallback label="Loading Products..." />}>
          <Products />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight={700} rootMargin="350px">
        <Suspense fallback={<SectionFallback label="Loading Delivery Areas..." />}>
          <Delivery />
        </Suspense>
      </LazyMount>

      {/* Contact: loaded eagerly for smooth scrolling to work */}
      <Contact />

      <LazyMount minHeight={600} rootMargin="350px">
        <Suspense fallback={<SectionFallback label="Loading Footer..." />}>
          <Footer />
        </Suspense>
      </LazyMount>
    </div>
  );
}