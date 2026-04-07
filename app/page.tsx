"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Home as HomeIcon, Sparkles, CheckCircle2, Search, MapPin, Key, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Comprehensive Security Checks",
      description: "Routine physical inspections of all entry points, perimeter, and interiors to ensure your property remains untampered.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pest & Termite Control",
      description: "Regular pest treatments to prevent infestations that can ruin woodwork and interiors of closed houses.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Deep Cleaning & Maintenance",
      description: "Scheduled professional cleaning routines so your house is in pristine condition whenever you arrive.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "50-Point Property Audit",
      description: "Detailed monthly reports covering plumbing, electricals, moisture levels, structural integrity, and more.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const checklist = [
    "Interior & Exterior Inspection",
    "Leak & Moisture Check",
    "Security & Lock Assessment",
    "Pest & Termite Screening",
    "Landscape Maintenance",
    "Appliance Functionality",
    "Electrical System Check"
  ];

  return (
    <div className="flex flex-col min-h-screen z-10 relative">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Kerala House & Decorative Components */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=75"
              alt="Beautiful Kerala architecture home"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
          
          {/* Gradients to blend image smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80 z-10"></div>

          {/* Floating animated components */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[5%] xl:left-[10%] z-20 hidden md:flex items-center gap-3 px-5 py-3 glass-panel border border-amber-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-400 font-medium">Property Status</p>
              <p className="text-sm text-stone-200 font-semibold">100% Secured</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] right-[5%] xl:right-[10%] z-20 hidden md:flex items-center gap-3 px-5 py-3 glass-panel border border-emerald-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-400 font-medium">Monthly Audit</p>
              <p className="text-sm text-stone-200 font-semibold">Completed</p>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm mb-6 text-sm text-stone-300 font-sans">
              <Key className="w-4 h-4 text-amber-500" />
              <span>Dedicated Property Management for NRIs</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-6 tracking-tight leading-tight">
              Your Kerala Home, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Safe & Pristine
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
              Total peace of mind while you are abroad. From comprehensive health audits and pest control to scheduled maintenance, we take absolute care of your vacant property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(217,119,6,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule A Callback
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border border-stone-500 hover:bg-stone-800 text-white font-medium rounded-full transition-all"
              >
                View Management Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-stone-950/50 backdrop-blur-md py-16 text-stone-300 border-y border-stone-800/50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-800/50">
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">50+</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Point Audit</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">100%</p>
              <p className="text-sm uppercase tracking-wider font-semibold">NRI Focus</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">24/7</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Surveillance Setup</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">AAA</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Quality Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-500/10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3 border-b border-amber-500/30 inline-block pb-1">Our Core Services</h2>
            <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400 mb-6">Uncompromising Property Care</h3>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Homes left unattended fall prey to pests, dampness, and degradation. Our systematic approach ensures your property retains its value and beauty.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-stone-800 hover:border-amber-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-stone-950/80 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-95' : 'opacity-60'}`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-80'}`}></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-500 ${hoveredCard === index ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_15px_rgba(217,119,6,0.3)]' : 'bg-stone-900/50 border-stone-700/50 backdrop-blur-md'}`}>
                    <service.icon className={`w-6 h-6 transition-colors duration-500 ${hoveredCard === index ? 'text-amber-400' : 'text-stone-300'}`} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-wide">{service.title}</h4>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredCard === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-stone-400 text-sm leading-relaxed font-light border-l-2 border-amber-500/50 pl-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 50-Point Audit Section */}
      <section className="py-24 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-stone-900/50 skew-y-3 -z-10 border-y border-stone-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-1/2 perspective-1000"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.1)] border border-stone-800 group">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Property Audit Kerala"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-500/10 blur-[40px] rounded-full hidden md:block"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="absolute bottom-8 right-8 glass-panel p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-emerald-500/30 hidden md:block backdrop-blur-xl"
                >
                  <p className="text-5xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">50+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-300">Parameters<br/>Checked</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-amber-500 inline-block"></span>
                <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Signature Service</h2>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400 leading-tight">The Prop Keep <br/>Health Audit</h3>
              <p className="text-stone-300 mb-10 leading-relaxed text-xl font-light">
                We don't just <span className="italic">"look after"</span> your home. We systematically evaluate its health every month, compiling transparent reports with photographic evidence. From hidden leaks to pest breeding grounds, we spot issues before they become expensive problems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {checklist.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 text-stone-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="font-light tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 glass-panel hover:bg-stone-900 border border-amber-500/30 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-widest text-xs transition-all px-8 py-4 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.15)] hover:shadow-[0_0_30px_rgba(217,119,6,0.25)] group"
              >
                Explore Full Audit Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Target Audience / Call to Action */}
      <section className="py-32 relative z-20 overflow-hidden perspective-1000">
         <div className="absolute inset-0 bg-stone-950 z-0"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 via-transparent to-transparent z-10"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 blur-[120px] rounded-full z-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="container mx-auto px-4 text-center relative z-20 max-w-4xl"
        >
          <div className="glass-panel p-12 md:p-20 rounded-[4rem] border border-amber-500/20 shadow-[0_0_50px_rgba(217,119,6,0.1)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-1000"></div>
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-24 h-24 rounded-full glass-card mx-auto flex items-center justify-center mb-10 border border-amber-500/30 shadow-[0_0_20px_rgba(217,119,6,0.3)] backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-all duration-1000"
            >
               <MapPin className="w-10 h-10 text-amber-500" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-stone-400 mb-8 leading-tight">Are you an NRI<br/>from Kerala?</h2>
            <p className="text-xl text-stone-300 mx-auto mb-12 leading-relaxed font-light tracking-wide max-w-2xl text-center">
              Distance shouldn't mean compromise. Entrust your valuable real estate to professionals who treat your property with the same care and respect as you would. <span className="font-medium text-amber-500">Give your home the Prop Keep standard.</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-black tracking-widest uppercase text-xs rounded-full overflow-hidden transition-all shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_50px_rgba(217,119,6,0.5)] hover:-translate-y-1 relative"
            >
              Connect With Our Team
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
