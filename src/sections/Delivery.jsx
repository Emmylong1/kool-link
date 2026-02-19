export default function Delivery() {
  const areas = [
    ["Awi", "Full coverage, 30-min delivery window."],
    ["Calabar", "City-wide express delivery available."],
    ["Akamkpa", "Industrial and residential supply routes."],
    ["Ugep", "Regional distribution hub, scheduled bi-weekly routes."],
  ];

  return (
    <section className="py-24 bg-background-light px-6" id="delivery">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold">Delivery Areas</h2>
          <p className="text-[#616889]">
            We deliver across the region with specialized focus on the following key areas. If you don't see your area,
            contact us for a special arrangement.
          </p>

          <div className="space-y-4 mt-4">
            {areas.map(([title, desc]) => (
              <div key={title} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-primary/5">
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm text-[#616889]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl h-[450px]">
          <img
            loading="lazy"
            decoding="async"
            alt="Map showing Calabar and surrounding regions"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-EZipJIm7L9CJrZUOJc81orL42oXGer4tr-K4nmM38NIUrjapp7jUSdV83aXikMCpwAUIT-DeVAg2Fiz4eWVn0wR6zmAeXWCaNJeNKH1ZyVtLk6FQf9usx5BFw1Om5n7vg35Eb4jT3b3OEdZS46OwkhulkFLQ_HaLRHkr5FcwDbEjDt8CXPjESCjQ7FMDsk5raImhRIszWFVojCn2VV92rtarcT8K-xoOn49NkX4KFTJDtlhQh1rvFIbTVt9FgnMhTOyTddENgRh"
          />
        </div>
      </div>
    </section>
  );
}
