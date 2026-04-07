"use client";

import { motion } from "framer-motion";

export default function DreamkeyBuilders() {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-4 md:px-8 z-10 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="glass-card mb-16 p-10 md:p-16 rounded-[3rem] border border-amber-500/20 relative overflow-hidden group"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full group-hover:bg-amber-600/20 transition-all duration-1000"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-stone-500/10 blur-[100px] rounded-full transition-all duration-1000"></div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
             <span className="h-px w-12 bg-amber-500 inline-block"></span>
             <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Parent Company</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 leading-tight"
          >
            Built on a Legacy of Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-stone-300 leading-relaxed font-light"
          >
            PropKeep was born from the expertise of <span className="font-bold text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-amber-500/50">Dreamkey Builders</span>. After constructing premium homes across Kerala, we realized our clients needed a dependable partner to protect and maintain their investments while they were away.
          </motion.p>
        </div>
      </motion.div>

      <div className="glass-panel p-8 md:p-12 rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-stone-800 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 blur-[80px] rounded-full group-hover:bg-amber-600/10 transition-all duration-1000"></div>
        <div className="flex-1 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Why Construction Experience Matters
            <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-amber-500 rounded-full"></span>
          </h2>
          <p className="text-stone-400 leading-relaxed text-lg font-light">
            Unlike standard cleaning agencies, our property audit standards are built on deep structural knowledge.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
               <span className="bg-amber-500/20 text-amber-500 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 font-bold mt-1 border border-amber-500/30">1</span>
               <p className="text-stone-300 leading-relaxed"><strong className="text-white">Structural Insights:</strong> We know exactly where dampness starts and how monsoons affect Kerala homes.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="bg-amber-500/20 text-amber-500 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 font-bold mt-1 border border-amber-500/30">2</span>
               <p className="text-stone-300 leading-relaxed"><strong className="text-white">Plumbing Precision:</strong> We distinguish between a minor leak and a major internal pipe burst risk.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="bg-amber-500/20 text-amber-500 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 font-bold mt-1 border border-amber-500/30">3</span>
               <p className="text-stone-300 leading-relaxed"><strong className="text-white">Contractor Network:</strong> When repairs are needed, we deploy vetted, high-quality professionals from our existing construction network.</p>
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full bg-stone-950/80 border border-stone-800 rounded-3xl p-10 text-center text-white relative overflow-hidden h-[450px] flex flex-col justify-center perspective-1000">
          <motion.div 
             initial={{ rotateY: -10 }}
             whileHover={{ rotateY: 0, scale: 1.05 }}
             transition={{ duration: 0.5 }}
             className="z-10 relative space-y-6"
          >
            <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🏗️</div>
            <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Dreamkey Builders</h3>
            <p className="text-stone-400 font-light text-lg">Building Kerala's finest homes since 2010.</p>
            <a href="https://dreamkeybuilders.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-transparent border border-amber-500/50 hover:bg-amber-500 hover:text-stone-950 text-amber-500 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.1)] hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] uppercase tracking-wide text-sm">
              Visit Parent Company
            </a>
          </motion.div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[60px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </div>
  );
}
