"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 text-stone-900 z-10 relative">
      <div className="container mx-auto px-4 md:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-serif font-black mb-6 text-stone-900"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-stone-600 leading-relaxed font-light"
          >
            Ready to secure total peace of mind? Let's discuss your requirements for Property Management and Senior Care in Kerala.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="lg:w-1/2 relative z-10"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Request a Callback</h2>
            <p className="text-stone-600 mb-8 leading-relaxed font-light">
              Fill out the form below and one of our experts will contact you within 24 hours to discuss a tailored plan for you.
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Your Full Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder:text-stone-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">WhatsApp / Phone Number</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder:text-stone-400" placeholder="+91 9495959569" />
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg text-lg">
                Submit Request
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="lg:w-1/2 flex flex-col justify-center gap-8 relative z-10 lg:pl-10"
          >
            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Looking for immediate action?</h3>
              <p className="text-emerald-700 mb-8 font-light">Skip the forms and get in touch with us directly on WhatsApp.</p>
              
              <a href="https://wa.me/919495959569" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 px-8 rounded-full transition-all w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us Now
              </a>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Email Us</h4>
                  <a href="mailto:propkeepkerala@gmail.com" className="text-stone-600 hover:text-amber-600 transition-colors">propkeepkerala@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Call Us</h4>
                  <a href="tel:+919495959569" className="text-stone-600 hover:text-amber-600 transition-colors">+91 94959 59569</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Location</h4>
                  <span className="text-stone-600">Kerala, India</span>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}
