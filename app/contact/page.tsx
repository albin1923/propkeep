"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4 md:px-8 text-stone-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-amber-600"
      >
        Your Property, Our Priority
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-12"
      >
        Ready to take the guesswork out of maintaining your Kerala home? Let our experts secure and maintain your property with absolute transparency.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-amber-50 p-8 rounded-3xl border border-amber-100"
        >
          <div className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">Free Download</div>
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Download our Free 10-Minute Property Health Audit Guide</h2>
          <p className="text-stone-700 mb-8 leading-relaxed">Is your property truly protected against the elements? Get our comprehensive checklist to evaluate your home's roof, plumbing, dampness, and security risks in minutes.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Your Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">WhatsApp Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow" placeholder="+91 98765 43210" />
            </div>
            <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 px-8 rounded-lg transition-colors mt-2 shadow-lg">
              Get My Free Property Audit
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-3">Looking for immediate action?</h3>
            <p className="text-stone-600 mb-6">Skip the forms and get in touch with our Property Manager directly on WhatsApp for a personalized, local touch.</p>
            
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors w-full sm:w-auto shadow-md">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.453.748.971 1.211.666.593 1.232.782 1.405.869.173.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
              WhatsApp Our Property Manager
            </a>
          </div>

          <hr className="border-stone-200" />

          <div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Other Services</h3>
            <p className="text-stone-600 mb-4">Want us to inspect specific issues? We handle end-to-end maintenance.</p>
            <button className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 px-6 rounded-full transition-colors border border-stone-300">
              Book a Cleaning Inspection
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
