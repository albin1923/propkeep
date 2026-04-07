"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-4 md:px-8 z-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Standard</span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600">
          The PropKeep Formula
        </h1>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-stone-300 max-w-3xl leading-relaxed mb-16 font-light"
      >
        At PropKeep, we are committed to providing world-class property management specifically designed for NRIs. 
        Your home in Kerala is more than just property—it's a piece of your heart, and we report its health with absolute transparency.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="space-y-6 perspective-1000"
        >
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all duration-700"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">1. Executive Summaries</h3>
            <p className="text-stone-400 mb-6 relative z-10 font-light">Every inspection ends with an immediate "Green Signal" or targeted action points right to your phone.</p>
            <div className="glass-panel p-5 rounded-2xl relative z-10 mb-4 border-l-4 border-l-emerald-500 shadow-[0_5px_15px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 mb-2 font-bold text-stone-200 text-sm">Property Status: <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">🟢 Healthy</span></div>
              <p className="text-sm text-stone-400 italic">"The house was aired out for 30 minutes. All 50 inspection points passed. No anomalies found."</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl relative z-10 border-l-4 border-l-amber-500 shadow-[0_5px_15px_rgba(245,158,11,0.1)]">
              <div className="flex items-center gap-2 mb-2 font-bold text-stone-200 text-sm">Property Status: <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">🟡 Attention Needed</span></div>
              <p className="text-sm text-stone-400 italic">"Noticed slight dampness on the master bedroom's north wall. Awaiting your approval for sealant."</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">2. Next Scheduled Visit & Recommendations</h3>
            <p className="text-stone-400 mb-6 relative z-10 font-light">We don't just react; we plan. We provide detailed estimates for proactive maintenance.</p>
            <div className="inline-block bg-gradient-to-r from-amber-600/20 to-transparent border border-amber-500/30 text-amber-400 font-bold px-5 py-3 rounded-xl text-sm shadow-[0_0_20px_rgba(217,119,6,0.15)] relative z-10">
              Focus Area: Pre-monsoon roof cleaning & gutter check
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-10 md:p-12 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden group border border-amber-500/20 hover:border-amber-500/50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-[0.03] object-cover mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-5 text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400">Pro-Tips for Delivery</h2>
              <p className="text-stone-400 mb-10 font-light text-lg">We understand how NRIs want their updates. We respect your time and peace of mind.</p>
              
              <ul className="space-y-8">
                <li className="flex gap-5 group/item">
                  <div className="bg-amber-500/20 shadow-[0_0_15px_rgba(217,119,6,0.3)] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-500 border border-amber-500/30 text-2xl">📄</div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-200 mb-1">WhatsApp PDF Reports</h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-light">Receive comprehensive PDF audits via WhatsApp for the convenience of seeing the "Green Signal" instantly.</p>
                  </div>
                </li>
                <li className="flex gap-5 group/item">
                  <div className="bg-amber-500/20 shadow-[0_0_15px_rgba(217,119,6,0.3)] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-500 border border-amber-500/30 text-2xl">🎙️</div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-200 mb-1">Quick Voice Notes</h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-light">A personal 30-second follow-up voice note breaking down the essentials effortlessly.</p>
                  </div>
                </li>
                <li className="flex gap-5 group/item">
                  <div className="bg-amber-500/20 shadow-[0_0_15px_rgba(217,119,6,0.3)] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-500 border border-amber-500/30 text-2xl">🎥</div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-200 mb-1">Video Walkthroughs</h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-light">For Premium clients, a 1-minute narrated walkthrough video gives you a first-hand look at your home.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-600/20 transition-all duration-1000"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
