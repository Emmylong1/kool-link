import { WHATSAPP_LINK } from "../config/contact";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // CRA env vars (must start with REACT_APP_)
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    location: "",
    ice_type: "Small Block",
    quantity: 1,
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", text: "" }); // idle | sending | success | error

  const update = (key) => (e) => {
    const value =
      key === "quantity" ? Math.max(1, Number(e.target.value || 1)) : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (kept simple)
    if (!form.full_name.trim()) return setStatus({ type: "error", text: "Please enter your full name." });
    if (!form.phone.trim()) return setStatus({ type: "error", text: "Please enter your phone number." });
    if (!form.location.trim()) return setStatus({ type: "error", text: "Please enter your delivery location." });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      return setStatus({
        type: "error",
        text: "EmailJS keys are missing. Check your .env (REACT_APP_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY).",
      });
    }

    setStatus({ type: "sending", text: "Sending order..." });

    try {
      // Must match your EmailJS template variables exactly:
      // {{full_name}} {{phone}} {{location}} {{ice_type}} {{quantity}} {{message}}
      const params = {
        full_name: form.full_name,
        phone: form.phone,
        location: form.location,
        ice_type: form.ice_type,
        quantity: String(form.quantity),
        message: form.message || "(none)",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

      setStatus({ type: "success", text: "Order sent successfully! We’ll contact you shortly." });

      // Reset form after success (keeps your UI clean)
      setForm({
        full_name: "",
        phone: "",
        location: "",
        ice_type: "Small Block",
        quantity: 1,
        message: "",
      });
    } catch (err) {
      setStatus({ type: "error", text: "Failed to send. Please try again or use WhatsApp ordering." });
    }
  };

  return (
    <section className="py-24 bg-white px-6" id="contact">
      <div className="max-w-4xl mx-auto bg-background-light rounded-[2rem] overflow-hidden shadow-2xl border border-primary/10">
        <div className="grid lg:grid-cols-5 h-full">
          <div className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Fill out the form and our logistics team will confirm your
                delivery immediately.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-white/60">
                    call
                  </span>
                  <span>+234 8100032611</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-white/60">
                    mail
                  </span>
                  <span>orders@coolflow.com</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-4">
                Fastest way to order:
              </p>
              <a
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform uppercase shadow-xl"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Order
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 p-10">
            <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="full_name" className="text-xs font-bold uppercase text-[#616889]">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                    placeholder="John Doe"
                    type="text"
                    value={form.full_name}
                    onChange={update("full_name")}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase text-[#616889]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                    placeholder="+234..."
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-xs font-bold uppercase text-[#616889]">
                  Delivery Location
                </label>
                <input
                  id="location"
                  name="location"
                  className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                  placeholder="House/Bldg Address"
                  type="text"
                  value={form.location}
                  onChange={update("location")}
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="ice_type" className="text-xs font-bold uppercase text-[#616889]">
                    Ice Type
                  </label>
                  <select
                    id="ice_type"
                    name="ice_type"
                    className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                    value={form.ice_type}
                    onChange={update("ice_type")}
                    aria-required="true"
                  >
                    <option>Small Block</option>
                    <option>Medium Block</option>
                    <option>Large Block</option>
                    <option>Custom Bulk</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="quantity" className="text-xs font-bold uppercase text-[#616889]">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                    min={1}
                    placeholder="10"
                    type="number"
                    value={form.quantity}
                    onChange={update("quantity")}
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase text-[#616889]">
                  Special Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="rounded-xl border border-primary/10 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 bg-white"
                  placeholder="Any specific delivery instructions..."
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  aria-describedby="message-hint"
                />
                <p id="message-hint" className="text-xs text-[#616889]">Optional - any special delivery instructions</p>
              </div>

              {/* Status message with aria-live for screen readers */}
              {status.type !== "idle" && (
                <div
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                  className={[
                    "rounded-xl px-4 py-3 text-sm font-semibold",
                    status.type === "success" ? "bg-green-100 text-green-700 border border-green-300" : "",
                    status.type === "error" ? "bg-red-100 text-red-700 border border-red-300" : "",
                    status.type === "sending" ? "bg-blue-100 text-blue-700 border border-blue-300" : "",
                  ].join(" ")}
                >
                  {status.text}
                </div>
              )}

              <button
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-xl shadow-primary/20 transition-all mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={status.type === "sending"}
                aria-busy={status.type === "sending"}
              >
                {status.type === "sending" ? "Sending..." : "Submit Order"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

