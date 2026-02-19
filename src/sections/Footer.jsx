import { WHATSAPP_LINK } from "../config/contact";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#111218] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
                       <div className="  overflow-hidden w-50 h-50 flex items-center justify-center">
              
                  <img src="/logooo.png" alt="Kool Link logo" className="w-full h-full object-cover" />
             
           
            </div>
            </div>

            <p className="text-white/60 leading-relaxed">
              Premium ice solutions since 1995. Cooling your events, businesses, and homes with unmatched reliability.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-white/60">
              <a className="hover:text-primary transition-colors" href="#home">Home</a>
              <a className="hover:text-primary transition-colors" href="#about">About Us</a>
              <a className="hover:text-primary transition-colors" href="#products">Our Products</a>
              <a className="hover:text-primary transition-colors" href="#delivery">Delivery Areas</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="flex flex-col gap-4 text-white/60">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Calabar, Nigeria</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+234 8100032611</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Operating Hours</h4>
            <div className="space-y-2 text-white/60">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri:</span><span>24 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday:</span><span>24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span><span>6am - 10pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2024 Kool Link. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#privacy-policy">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
    <a
  className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white size-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
>
  <span className="material-symbols-outlined text-3xl">chat</span>
  <span className="absolute right-full mr-4 bg-white text-[#111218] px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
    Chat with us
  </span>
</a>

    </>
  );
}
