"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4 md:px-8 text-stone-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-amber-600"
      >
        The PropKeep Standard
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-12"
      >
        At PropKeep, we are committed to providing world-class property management specifically designed for NRIs. 
        Your home in Kerala is more than just property—it's a piece of your heart, and we report its health with absolute transparency.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-3 block">1. Executive Summaries</h3>
            <p className="text-stone-600 mb-4">Every inspection ends with an immediate "Green Signal" or targeted action points right to your phone.</p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="flex items-center gap-2 mb-2 font-bold text-stone-800 text-sm">Property Status: <span className="text-green-600">🟢 Healthy</span></div>
              <p className="text-sm text-stone-600 italic">"The house was aired out for 30 minutes. All 50 inspection points passed, and the perimeter is clear."</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mt-3">
              <div className="flex items-center gap-2 mb-2 font-bold text-stone-800 text-sm">Property Status: <span className="text-amber-500">🟡 Attention Needed</span></div>
              <p className="text-sm text-stone-600 italic">"Noticed slight dampness on the master bedroom's north wall. We recommend applying a sealant coat before the monsoons start. Estimated cost: ₹1,500. Awaiting your approval."</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-3">2. Next Scheduled Visit & Recommendations</h3>
            <p className="text-stone-600 mb-4">We don't just react; we plan. We provide detailed estimates for medium/low urgency tasks like exterior wall pressure washing (₹ 2,500) or tap washer replacements (₹ 150), so you're never caught off-guard.</p>
            <div className="inline-block bg-amber-50 text-amber-800 font-bold px-4 py-2 rounded-lg text-sm border border-amber-200">
              Focus Area: Pre-monsoon roof cleaning & gutter check
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-stone-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Pro-Tips for Delivery</h2>
              <p className="text-stone-300 mb-6">We understand how NRIs want their updates. We respect your time and peace of mind.</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">📄</div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp PDF Reports</h4>
                    <p className="text-sm text-stone-400">Receive comprehensive PDF audits via WhatsApp for the convenience of seeing the "Green Signal" instantly.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">🎙️</div>
                  <div>
                    <h4 className="font-bold text-lg">Quick Voice Notes</h4>
                    <p className="text-sm text-stone-400">A personal 30-second follow-up voice note breaking down the essentials so you don't even have to open the report unless you want to.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">🎥</div>
                  <div>
                    <h4 className="font-bold text-lg">Video Walkthroughs</h4>
                    <p className="text-sm text-stone-400">For Premium clients, a 1-minute narrated walkthrough video gives you a first-hand look at your home, making it feel much more personal.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
