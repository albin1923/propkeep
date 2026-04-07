"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-4 md:px-8 z-10 relative">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600"
      >
        Your Property, Our Priority
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-stone-300 max-w-3xl leading-relaxed mb-16 font-light"
      >
        Ready to take the guesswork out of maintaining your Kerala home? Let our experts secure and maintain your property with absolute transparency.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="glass-card p-10 rounded-[2rem] border border-amber-500/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[60px] rounded-full group-hover:bg-amber-600/20 transition-all duration-700"></div>
          <div className="relative z-10">
            <div className="bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(217,119,6,0.2)]">Free Download</div>
            <h2 className="text-3xl font-bold text-white mb-4">Download our Free 10-Minute Property Health Audit Guide</h2>
            <p className="text-stone-400 mb-8 leading-relaxed font-light">Is your property truly protected against the elements? Get our comprehensive checklist to evaluate your home's roof, plumbing, dampness, and security risks in minutes.</p>
            
            <form className="space-y-5 relative">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">Your Full Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-stone-950/50 border border-stone-800 text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder:text-stone-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">WhatsApp Number</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl bg-stone-950/50 border border-stone-800 text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder:text-stone-600" placeholder="+91 98765 43210" />
              </div>
              <button type="submit" className="w-full relative group/btn overflow-hidden rounded-xl mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transition-transform group-hover/btn:scale-105 duration-500"></div>
                <div className="relative text-stone-950 font-black py-4 px-8 text-center tracking-wide uppercase text-sm">
                  Get My Free Property Audit
                </div>
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="flex flex-col justify-center gap-10"
        >
          <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-emerald-500 relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Looking for immediate action?</h3>
            <p className="text-stone-400 mb-8 font-light relative z-10">Skip the forms and get in touch with our Property Manager directly on WhatsApp for a personalized, local touch.</p>
            
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 px-8 rounded-full transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-1">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.453.748.971 1.211.666.593 1.232.782 1.405.869.173.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
              WhatsApp Our Property Manager
            </a>
          </div>

          <hr className="border-stone-800/50" />

          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-32 h-32 bg-stone-500/5 blur-[50px] group-hover:bg-stone-500/10 transition-colors duration-500"></div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Other Services</h3>
            <p className="text-stone-400 mb-6 font-light relative z-10">Want us to inspect specific issues? We handle end-to-end maintenance.</p>
            <button className="relative z-10 bg-stone-900 hover:bg-stone-800 text-stone-200 font-bold py-3 px-6 rounded-full transition-all border border-stone-700/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
               General Inquiry Call
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
