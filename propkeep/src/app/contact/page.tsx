"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-24 bg-stone-50 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-500 font-light">We are ready to take care of your property. Reach out to schedule an audit.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
          <motion.div 
            className="p-10 md:p-14 bg-stone-900 text-stone-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-8 text-lg font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <p>Prop Keep Headquarters<br/>Dreamkey Builders Complex,<br/>Kerala, India</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <a href="tel:+910000000000" className="hover:text-amber-400 transition">+91 000 000 0000</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@propkeep.com" className="hover:text-amber-400 transition">info@propkeep.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="p-10 md:p-14"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input type="text" className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">WhatsApp Number</label>
                <input type="tel" className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" placeholder="+91 ..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" placeholder="Tell us about your property needs..."></textarea>
              </div>
              <button type="button" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md text-lg mt-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
