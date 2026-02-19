import { WHATSAPP_REQUEST } from "../config/contact";
import { WHATSAPP_LINK } from "../config/contact";
export default function Products() {
  return (
    <section className="py-24 bg-white px-6" id="products">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-4xl font-extrabold">Our Ice Products</h2>
        <p className="text-[#616889] max-w-2xl">
          The perfect cooling solution for every occasion, from parties to industrial requirements.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ice-gradient">
        {/* Small */}
        <div className="flex flex-col bg-background-light rounded-2xl overflow-hidden hover:shadow-2xl transition-all border border-transparent hover:border-primary/20 neon-glow">
          <div className="h-88 overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              alt="Small bag of ice cubes"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOWD2LriKFtRetmB1y8z4Cqn_RbEhumAiR2xOnbp8xSsiMFNCZsZI-pJc5edfMThiSkXJRR37T-iZhlYdMESJf3XsEsWaccqZ8r7F5qK2BzP6JeY8zKDijzil0t-JL-NhLdk_I4KvLA4KitPBnP8zJYGr2GFBl7XiIKnL0DOeoJidrcBQhuxVRDKY0rIldfMZX9Y6DrcraHDOSgi_OihLjmJLLSK9bupVMeZ_x790p9iM7kaeUgZJwlu4Z9Gfyb4GNMpqZF0HTvYFK"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <h4 className="text-xl font-bold mb-1">Small Ice Block</h4>
            <p className="text-sm text-[#616889] mb-4">Perfect for coolers and small home gatherings.</p>
            <div className="mt-auto">
            
                   <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-primary/90 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                aria-label="Request a quote via WhatsApp"
              >
                 Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Medium */}
        <div className="flex flex-col bg-background-light rounded-2xl overflow-hidden hover:shadow-2xl transition-all border border-transparent hover:border-primary/20 neon-glow">
          <div className="h-88 overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              alt="Medium ice block container"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSEjVv-Je3dxahoNNOnYUjbvGIGU2wG1kO0yobDA5DWsYUoFKRkHG19XNjpTLlttNUN_FrNm_6renENtffRR7TEAi57HgR0M1C85UiW9kYHh5ipe-HqONULr9vLfHqVeo86crMMo8CZh_VPGd_CCnoP2HdAadfM5f-Gwil9Hv_MZXC4UPkw8PeLvX-izhQ_6gRsjmHiwQJlHPYUtKtfQAoxrLgp6Vf1pk3MKvUZQEJ7PzaZZCx5MqyT2MOSDBG0VMGkEwocvf-nFo"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <h4 className="text-xl font-bold mb-1">Medium Ice Block</h4>
            <p className="text-sm text-[#616889] mb-4">Ideal for wedding receptions and medium events.</p>
            <div className="mt-auto">
              
                <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-primary/90 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                aria-label="Request a quote via WhatsApp"
              >
                 Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Large */}
        <div className="flex flex-col bg-background-light rounded-2xl overflow-hidden hover:shadow-2xl transition-all border border-primary/30 shadow-lg relative neon-glow">
          <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
            Most Popular
          </div>
          <div className="h-88 overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              alt="Large industrial ice block"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy4GrzECLzMAvBTgmzoHIqMtuq9toVANPQADuXJXu4qULlOa3nebg98FjTnMQ-44SXJuEUFeGKxOoidpNN9IVJ0kmaEz8o7jAVcUTjdNOfwI33goZ26mw9Bgo7Df83Bq4la_kkKVANtVtMGEf1mRTil54XQeB5lM-jA8-Zu8mXrKBFXvj7nO-AITJWlpQ_39nNp4yh1o0ibAFn6KSJZECBnKxtNCWZPR7KZz4JmicYx3-_BH1Dz4hSXumoshRthBAkopKKfntR3H2y"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <h4 className="text-xl font-bold mb-1">Large Ice Block</h4>
            <p className="text-sm text-[#616889] mb-4">For restaurant supply and all-day outdoor events.</p>
            <div className="mt-auto">
             
                   <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-primary/90 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                aria-label="Request a quote via WhatsApp"
              >
                 Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Bulk */}
        <div className="flex flex-col bg-primary text-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all neon-glow">
          <div className="h-48 overflow-hidden opacity-80">
            <img
              loading="lazy"
              decoding="async"
              alt="Warehouse full of ice stacks"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALmzg-SzQooMclH0k_tuEmIaxVFmDPxjX6y-QIRCF4HsirFskfZlbAj9jDFPjQx-vQrvGfJ_W-bulHsUwcyQTMorfU8De1SpxQTawiwAqdOdKpEQ2hUzqVh1lmJ7cZkNgdZBdce4BvHuDUl_wJubO0AM1eYx7s7R0mPCPurjyf-ArpbEoSD3084znabzCpijY7ABQS-dd3K0uiTq44IMFZ6XCTkG0wiMq3FcFcCAp8tajbQudUHZ4VFcWZDv_9algiiAmvXThVd2pr"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <h4 className="text-xl font-bold mb-1">Custom Bulk</h4>
            <p className="text-sm text-white/80 mb-4">Tailored solutions for industrial and mega-event needs.</p>
            <div className="mt-auto">
              <p className="text-white font-bold text-2xl mb-4">Custom Pricing</p>
               <a
                href={WHATSAPP_REQUEST}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm hover:bg-white/90 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                aria-label="Request a quote via WhatsApp"
              >
                Request Quote
              </a>
                
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
