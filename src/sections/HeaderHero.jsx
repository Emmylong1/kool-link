import { useState } from "react";
import React from "react";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10 px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* LOGO PLACEHOLDER */}
            <div className="  overflow-hidden w-50 h-10 flex items-center justify-center">
              
                  <img src="/logooo.png" alt="Kool Link logo" className="w-full h-full object-cover" />
             
           
            </div>
            {/* <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-primary">KOOL LINK</h1> */}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/#">
              Home
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#about">
              About Us
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#products">
              Our Products
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#delivery">
              Delivery Areas
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#contact">
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg  border border-primary/10 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-center"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex flex-col" onClick={() => setMenuOpen(false)}>
            <div className="bg-white/90 w-11/12 max-w-xs h-full shadow-2xl p-6 flex flex-col gap-6 animate-slideInLeft" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-3 mb-4">
                <div className=" border border-primary/15 rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-black">KL</span>
                </div>
                <h1 className="text-lg font-extrabold tracking-tight text-primary">KOOL LINK</h1>
              </div  >
              <div className="bg-white/90 rounded-lg p-4 border border-primary/10 shadow-lg">
              <nav className=" flex flex-col gap-4">
                <a className="text-base font-semibold hover:text-primary transition-colors" href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
                <a className="text-base font-semibold hover:text-primary transition-colors" href="#about" onClick={() => setMenuOpen(false)}>
                  About Us
                </a>
                <a className="text-base font-semibold hover:text-primary transition-colors" href="#products" onClick={() => setMenuOpen(false)}>
                  Our Products
                </a>
                <a className="text-base font-semibold hover:text-primary transition-colors" href="#delivery" onClick={() => setMenuOpen(false)}>
                  Delivery Areas
                </a>
                <a className="text-base font-semibold hover:text-primary transition-colors" href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </nav>
              <a
                href="#contact"
                className="mt-8 bg-primary text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Order Now
              </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Fast Local Delivery
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-[#111218] leading-[1.1] tracking-tight">
              Pure Ice. <br />
              <span className="text-primary">Reliable Delivery.</span>
              <br />
              Anytime.
            </h1>

            <p className="text-lg text-[#616889] max-w-lg leading-relaxed">
              Premium ice blocks for homes, events, businesses, and bulk buyers — delivered fast with crystal clear quality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 flex items-center justify-center"
                href="#contact"
              >
                Order Now
              </a>
              <a
                className="bg-white border-2 border-primary/10 text-[#111218] px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors"
                href="#products"
              >
                View Products
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative rounded-3xl overflow-hidden neon-glow aspect-square max-w-md mx-auto">
              <img
                fetchpriority="high"
                decoding="async"
                alt="Crystal clear ice block with neon blue lighting"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg0LVC3fXE755tlUQBVqT8iVKFErX639YiLh3W_h_Y_YnyFfo9YwKyxev0ul579kGxaLqKTzOaQbU_MdkGJ9VyuKJkqwzP8GBWPAvCRJIIuYv67LjL09D5leDnRDcF2EcauIRX06bpo0jd1q1VEElivfJTHD3ns990VP8un9PqZMNhM1yXuqkl_WYQVB765ZHgmW_TKStTGN6ZAutfdaMjI0BPOxyM3M5RmI7Cjjzw9cFz2yu68R-Oj83443RTcj69JRMrDhnxeqVn"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-primary/10 flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs text-[#616889] font-medium uppercase tracking-tighter">Certified Quality</p>
                <p className="font-bold text-sm">100% Purified Water</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
