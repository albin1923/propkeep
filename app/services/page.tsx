"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-4 md:px-8 z-10 relative">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600"
      >
        Our Premium Services
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-stone-300 max-w-3xl leading-relaxed mb-16 font-light"
      >
        Explore our comprehensive management plans, including our signature 50-point health audits, deep cleaning, security checks, and utility tracking tailored for absentee homeowners.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30, rotateY: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-3xl rounded-full"></div>
          <h2 className="text-2xl font-bold text-white mb-4 relative z-10">The 50-Point Property Audit</h2>
          <p className="text-stone-400 mb-8 relative z-10">Our flagship service ensures every inch of your property is checked and verified.</p>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-4 text-stone-300">
              <span className="bg-amber-600/20 text-amber-500 rounded-full p-1 mt-0.5"><strong className="text-sm px-1.5">✓</strong></span>
              <div><strong className="text-amber-400">Exterior & Perimeter:</strong> Gate hinges lubricated, yard cleared, boundary walls checked.</div>
            </li>
            <li className="flex items-start gap-4 text-stone-300">
              <span className="bg-amber-600/20 text-amber-500 rounded-full p-1 mt-0.5"><strong className="text-sm px-1.5">✓</strong></span>
              <div><strong className="text-amber-400">Structural & Dampness:</strong> Ceiling leaks checked, humidity monitored, preventive care for monsoons.</div>
            </li>
            <li className="flex items-start gap-4 text-stone-300">
              <span className="bg-amber-600/20 text-amber-500 rounded-full p-1 mt-0.5"><strong className="text-sm px-1.5">✓</strong></span>
              <div><strong className="text-amber-400">Plumbing & Water:</strong> Taps flushed, water meter readings taken, leak detection.</div>
            </li>
            <li className="flex items-start gap-4 text-stone-300">
              <span className="bg-amber-600/20 text-amber-500 rounded-full p-1 mt-0.5"><strong className="text-sm px-1.5">✓</strong></span>
              <div><strong className="text-amber-400">Electrical & Power:</strong> ELCB tested, AC outdoor units checked to prevent motor seizures.</div>
            </li>
            <li className="flex items-start gap-4 text-stone-300">
              <span className="bg-amber-600/20 text-amber-500 rounded-full p-1 mt-0.5"><strong className="text-sm px-1.5">✓</strong></span>
              <div><strong className="text-amber-400">Pest & Security:</strong> Termite trails checked, CCTV active, gaps sealed.</div>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30, rotateY: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-600/10 blur-3xl rounded-full"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-white">Visual Tracking</h2>
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-lg shadow-amber-500/30">6-Photo Rule</span>
          </div>
          <p className="text-stone-400 mb-8 relative z-10">We don't just tell you; we show you. Every visit includes timestamped, high-resolution photos:</p>
          <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Front View & Gate</div>
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Backyard & Perim</div>
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Living Spaces (Wide)</div>
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Master Bedroom</div>
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Kitchen & Plumbing</div>
            <div className="glass-panel p-4 rounded-xl text-sm text-center font-medium text-amber-100/90 border-stone-800 transition-colors hover:border-amber-500/50">Utility Meters</div>
          </div>
          <div className="border-t border-stone-800 pt-8 relative z-10">
            <h3 className="font-bold text-white mb-3 text-lg">Expense Manager</h3>
            <p className="text-sm text-stone-400 leading-relaxed">We handle the hassle of KSEB, Water Authority, and Property Tax payments, ensuring zero defaults and late fees transparently.</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card mb-20 relative p-1 rounded-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-stone-900/50 rounded-3xl p-[1px] -z-10 blur-[1px]"></div>
        <div className="bg-stone-950/80 backdrop-blur-2xl p-8 md:p-14 rounded-[23px] text-center md:text-left h-full relative overflow-hidden">
          <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-amber-600/5 rotate-12 blur-3xl pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-5 text-white tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Essential Property</span> Checklist</h2>
          <p className="text-stone-400 mb-12 max-w-2xl text-lg font-light">Is your Kerala property protected against the elements? Explore what our 10-minute robust audit systematically covers.</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[ 
              { num: 1, title: "Roof & Gutter Integrity", desc: "Cracked tiles or blockages. In Kerala's downpours, this avoids severe wall dampness." },
              { num: 2, title: "Cobweb & Dust Audit", desc: "High corners & fans. Avoid permanent stains on premium paint from settling dust." },
              { num: 3, title: "Floor Vitality Scrub", desc: "Stopping sticky residue & 'clouding' salt build-up/fungus from the tropical climate." },
              { num: 4, title: "External Wall Algae", desc: "Halting post-monsoon green patches before they eat the plaster and demand repainting." },
              { num: 5, title: "Electrical Appliance Run", desc: "Preventing motor seizures in ACs and fridges caused by static high humidity." },
              { num: 6, title: "Plumbing & Termite Scour", desc: "Catching cabinet rot and termite entry points early to save lakhs in furniture damage." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl hover:bg-stone-800/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-black text-sm border border-amber-500/20">{item.num}</span>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed pl-11">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center border-t border-stone-800/50 pt-10">
            <a href="/contact" className="inline-block relative group">
              <div className="absolute inset-0 bg-amber-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full"></div>
              <div className="relative bg-gradient-to-b from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black py-5 px-10 rounded-full transition-all transform hover:scale-105 tracking-wide shadow-2xl">
                Book a Cleaning Inspection
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
