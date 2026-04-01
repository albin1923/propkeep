"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, Wrench, Sprout, ShieldCheck, ArrowRight, HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[90vh] flex flex-col justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Background Image with Premium Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
          style={{ 
            // A beautiful, realistic, standard premium home (not too urban/not overly traditional)
            backgroundImage: 'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 mt-[-2rem]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex justify-center mb-6"
          >
            <span className="bg-amber-600/20 border border-amber-500/50 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase backdrop-blur-md">
              Premium Property Care
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            The Kerala Homeowner’s <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Essential Health Check</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light text-stone-200 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Is your property fully protected against the elements? Discover absolute peace of mind with our 10-minute expert audit.
          </motion.p>
          <motion.a 
            href="#audit-form" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_rgba(217,119,6,0.4)] transition-all transform hover:-translate-y-1"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Get My Free Property Audit <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
        
        {/* Subtle scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* Premium 7-Point Checklist with High-End Cards */}
      <motion.section 
        className="py-32 container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">7-Point Essential Checklist</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-stone-500 max-w-3xl mx-auto font-light">
            We meticulously inspect the key vulnerabilities that threaten properties left vacant in Kerala's intense tropical climate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {[
            { title: "Roof & Gutter Integrity", desc: "Check for cracked tiles or blockages to prevent severe wall dampness.", img: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <Wrench /> },
            { title: "Cobweb & Dust Assessment", desc: "Vacant homes accumulate dust. We prevent permanent staining on paints.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <Sprout /> },
            { title: "Floor & Tile Vitality", desc: "Check for stickiness on tiles. Restores original shine with a machine scrub.", img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <CheckCircle2 /> },
            { title: "External Wall Algae", desc: "Stop green/black patches from eating into your exterior plaster.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <ShieldAlert /> },
            { title: "Electrical Health", desc: "Test ACs and Refrigerators. High humidity safely managed.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <ShieldCheck /> },
            { title: "Plumbing & Leaks", desc: "Identify damp patches early to stop wood rot in vacant kitchens.", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <Wrench /> },
            { title: "Pest Entry Points", desc: "Termites are highly active; early detection saves lakhs in damages.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: <ShieldCheck /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={`relative bg-stone-900 rounded-3xl overflow-hidden shadow-xl group ${i === 6 ? 'lg:col-span-2 xl:col-span-2' : ''}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out group-hover:opacity-60"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
                <div className="bg-amber-600/20 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md border border-amber-500/20 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-stone-50">{item.title}</h3>
                <p className="text-stone-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 relative -bottom-4 group-hover:bottom-0 h-0 group-hover:h-auto">
                  {item.desc}
                </p>
                {/* Fallback description for non-hover state */}
                <p className="text-stone-400 font-light leading-relaxed group-hover:hidden transition-opacity">
                  {item.desc.substring(0, 50)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Refined 50-Point Audit Summary Highlight */}
      <motion.section 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-stone-950"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="container relative mx-auto px-4 text-center z-10">
          <HomeIcon className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">Complete 50-Point Audit Service</h2>
          <p className="text-xl md:text-2xl mb-14 text-stone-400 max-w-4xl mx-auto font-light leading-relaxed">
            Our detailed checks cover Exterior, Structural & Dampness, Plumbing, Electrical, and Pest elements. 
            We provide visual evidence logs and track utility expenses.
          </p>
          <div className="flex gap-6 flex-wrap justify-center text-lg">
            <span className="bg-stone-900/80 backdrop-blur border border-green-500/30 text-green-400 font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div> Healthy
            </span>
            <span className="bg-stone-900/80 backdrop-blur border border-yellow-500/30 text-yellow-400 font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div> Attention Needed
            </span>
            <span className="bg-stone-900/80 backdrop-blur border border-red-500/30 text-red-400 font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-3 h-3 rounded-full bg-red-500"></div> Action Required
            </span>
          </div>
        </div>
      </motion.section>

      {/* Upgraded CTA Form */}
      <motion.section 
        id="audit-form" 
        className="py-32 container mx-auto px-4 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-100 relative overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-stone-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 to-transparent"></div>
            <h3 className="text-3xl font-extrabold mb-4 relative z-10">Free 10-Minute Audit Guide</h3>
            <p className="text-stone-400 font-light text-lg relative z-10">Enter your details and our property manager will reach out via WhatsApp instantly.</p>
          </div>
          
          <div className="md:w-7/12 p-10 md:p-14">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-stone-500 mb-2 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-stone-50 rounded-2xl border-2 border-stone-100 focus:bg-white focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-stone-800 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 mb-2 uppercase tracking-widest">WhatsApp Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-5 py-4 bg-stone-50 rounded-2xl border-2 border-stone-100 focus:bg-white focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-stone-800 font-medium" />
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-stone-900 to-stone-800 hover:from-stone-800 hover:to-stone-700 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-xl hover:shadow-2xl text-lg mt-4 flex justify-center items-center gap-2 group">
                Request Inspection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </motion.section>
    </div>
  );
}
