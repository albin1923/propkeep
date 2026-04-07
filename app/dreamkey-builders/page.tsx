"use client";

import { motion } from "framer-motion";

export default function DreamkeyBuilders() {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4 md:px-8 text-stone-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-amber-600"
      >
        Built on a Legacy of Trust
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-12"
      >
        PropKeep was born from the expertise of Dreamkey Builders. After constructing premium homes across Kerala, we realized our clients needed a dependable partner to protect and maintain their investments while they were away.
      </motion.p>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 border-b-4 border-amber-600 inline-block pb-2">Why Construction Experience Matters</h2>
          <p className="text-stone-700 leading-relaxed text-lg">
            Unlike standard cleaning agencies, our property audit standards are built on deep structural knowledge.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
               <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold mt-1">1</span>
               <p className="text-stone-600"><strong>Structural Insights:</strong> We know exactly where dampness starts and how monsoons affect Kerala homes.</p>
            </li>
            <li className="flex items-start gap-3">
               <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold mt-1">2</span>
               <p className="text-stone-600"><strong>Plumbing Precision:</strong> We distinguish between a minor leak and a major internal pipe burst risk.</p>
            </li>
            <li className="flex items-start gap-3">
               <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold mt-1">3</span>
               <p className="text-stone-600"><strong>Contractor Network:</strong> When repairs are needed, we deploy vetted, high-quality professionals from our existing construction network.</p>
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full bg-stone-900 rounded-2xl p-8 text-center text-white relative overflow-hidden h-[400px] flex flex-col justify-center">
          <div className="z-10 relative space-y-4">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold">Dreamkey Builders</h3>
            <p className="text-stone-300">Building Kerala's finest homes since 2010.</p>
            <a href="https://dreamkeybuilders.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Visit Parent Company
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-700/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
