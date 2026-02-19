export default function WhyChooseUs() {
  const cards = [
    ["check_circle", "Premium Quality Ice", "Crystal clear, slow-melting, and made from 100% purified water."],
    ["local_shipping", "Reliable Delivery", "Your ice arrives frozen and on schedule, every single time."],
    ["location_on", "Multiple Locations", "With hubs across the city, we are never too far away to fulfill your order."],
    ["inventory_2", "Bulk Orders Supported", "Large scale supply for major events, industrial use, and construction sites."],
    ["chat", "Easy Ordering", "Send us a message on WhatsApp for instant ordering and real-time support."],
    ["support_agent", "24/7 Support", "We understand emergencies happen. Our team is available around the clock."],
  ];

  return (
    <section className="py-24 bg-background-light px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-4xl font-extrabold">Why Choose Kool Link</h2>
        <p className="text-[#616889] max-w-2xl">
          Experience the standard of professional ice supply with features designed around your convenience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(([icon, title, desc]) => (
          <div
            key={title}
            className="bg-white p-8 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all group"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform block">
              {icon}
            </span>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-[#616889]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
