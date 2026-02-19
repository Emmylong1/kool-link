export default function About() {
  return (
    <section className="py-24 bg-white px-6" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            loading="lazy"
            decoding="async"
            alt="Professional delivery truck and smiling service team"
            className="w-full h-full object-cover aspect-[4/3]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_vAocp3tcDWNyy5lVNOG4GBtfOzpSGD09Nih_qV0DvzxnChiEVnDPXIAKN_MEdqu6VbsokJPh74-o5enE-dV_wD8bP1b0Ayw6Y0P7S8gqBWRJDyyLF-Gv0BJ2LvRoYo6Di5pWXETWFEj4FNfUxtPiuZbbLZw_kTkVmF7rOAh60RTsPwSTdvGfpepWtvobBQ5Xaaht4lFK3iAZbHZ7Xur7UCmVb2kcUxQnSvGkBjSehEdLLo8a3EMeuTXuE1MoS5At7JvsbRU0Evv_"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold text-[#111218]">Cooling the Community Since 1995</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full" />
          <p className="text-lg text-[#616889] leading-relaxed">
            Family-owned and operated for nearly three decades, we've built our reputation on a simple promise: providing
            the coldest, clearest ice with the most reliable delivery service in the region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">home_work</span>
              <h4 className="font-bold">Locally Owned</h4>
              <p className="text-sm text-[#616889]">Serving our community for decades.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">speed</span>
              <h4 className="font-bold">Fast Delivery</h4>
              <p className="text-sm text-[#616889]">Rapid response for all cooling needs.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              <h4 className="font-bold">Trusted Quality</h4>
              <p className="text-sm text-[#616889]">Purity and reliability in every block.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
