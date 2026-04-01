"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ruler, HardHat, PaintBucket, Building2 } from "lucide-react";

export default function DreamkeyBuildersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[85vh] flex flex-col justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888086925-920a061d4a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/70 to-stone-900/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex justify-center mb-6"
          >
            <span className="bg-stone-800/50 border border-stone-500/30 text-stone-200 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase backdrop-blur-md flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-500" />
              The Parent Company of Prop Keep
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span className="text-amber-500">Dreamkey</span> Builders
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light text-stone-300 drop-shadow-lg leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Crafting premium homes and timeless architecture across Kerala. We build foundations of trust and structures of immense beauty.
          </motion.p>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-stone-100 hover:bg-white text-stone-900 font-bold py-4 px-10 rounded-full shadow-2xl transition-all transform hover:-translate-y-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Discuss Your Project <ArrowRight className="w-5 h-5 text-amber-600" />
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-32 container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">Our Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-stone-500 max-w-2xl mx-auto font-light">From concept to key handover, we deliver absolute excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Turnkey Construction", desc: "Hassle-free building from the ground up. We handle architecture, permits, and execution.", icon: <HardHat />, img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { title: "Premium Interiors", desc: "Bespoke interior design marrying functionality with world-class aesthetics.", icon: <Ruler />, img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { title: "Renovation & Upgrades", desc: "Modernize your heritage or aging home while preserving its structural integrity.", icon: <PaintBucket />, img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-stone-100 group flex flex-col"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="p-10 relative bg-white flex-grow z-10 -mt-6 rounded-t-3xl border-t border-stone-50">
                <div className="bg-amber-100/50 text-amber-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-amber-200">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">{item.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Philosophy / About */}
      <motion.section 
        className="py-32 relative bg-stone-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Built on a Foundation of <span className="text-amber-500">Uncompromising Quality</span></h2>
              <p className="text-xl text-stone-400 font-light leading-relaxed mb-6">
                Dreamkey Builders is more than just a construction company. We are craftsmen dedicated to elevating the standard of living in Kerala. 
              </p>
              <p className="text-xl text-stone-400 font-light leading-relaxed mb-8">
                Realizing that our clients often live abroad, we launched <span className="font-bold text-amber-400">Prop Keep</span> to ensure the homes we carefully build are meticulously maintained forever.
              </p>
              <ul className="space-y-4">
                {['15+ Years of Experience', '100+ Projects Completed', 'Zero-Compromise Material Quality'].map((pt, idx) =>(
                  <li key={idx} className="flex items-center gap-4 text-lg font-medium text-stone-200">
                    <div className="w-6 h-6 rounded-full bg-amber-600/20 flex items-center justify-center border border-amber-500/50">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Dreamkey Home" className="relative z-10 rounded-3xl shadow-2xl border border-stone-700" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        id="contact" 
        className="py-32 container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="p-12 md:p-20 text-center relative z-10">
            <h3 className="text-4xl font-extrabold mb-6 text-white tracking-tight">Ready to Build Your Dream Home?</h3>
            <p className="text-stone-400 font-light text-xl mb-12">Connect with our senior architects and bring your vision to life.</p>
            
            <form className="max-w-xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-stone-800 rounded-2xl border border-stone-700 focus:bg-stone-900 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-white" />
                <input type="tel" placeholder="Phone" className="w-full px-5 py-4 bg-stone-800 rounded-2xl border border-stone-700 focus:bg-stone-900 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-white" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-stone-800 rounded-2xl border border-stone-700 focus:bg-stone-900 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-white" />
              <textarea placeholder="Project Details" rows={4} className="w-full px-5 py-4 bg-stone-800 rounded-2xl border border-stone-700 focus:bg-stone-900 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-white"></textarea>
              <button type="button" className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-[0_0_30px_rgba(217,119,6,0.3)] text-lg mt-4 flex justify-center items-center gap-2 group">
                Send Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
