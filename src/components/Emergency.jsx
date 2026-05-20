import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Truck, Wrench, Clock, MapPin } from 'lucide-react';

const Emergency = () => {
  return (
    <section id="emergency" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-700 shadow-2xl relative overflow-hidden">
          
          {/* Animated siren glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-blue/20 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <Clock className="text-red-400" size={18} />
                <span className="text-sm font-bold tracking-wide text-red-100 uppercase">24/7 Emergency Support in Andhra Pradesh</span>
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white"
              >
                Breakdown Assistance & <br />
                <span className="text-accent-blue">Car Towing Service</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg mb-8 max-w-2xl"
              >
                Stuck on the road? Don't panic. Munna Automotives offers rapid response car towing and emergency roadside assistance across a <span className="text-white font-bold">50KM radius</span> around Palnadu. 
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              >
                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <Truck className="text-accent-neon shrink-0" size={24} />
                  <span className="text-white font-medium">Flatbed Towing Service</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <Wrench className="text-accent-neon shrink-0" size={24} />
                  <span className="text-white font-medium">Doorstep Minor Repairs</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <MapPin className="text-accent-neon shrink-0" size={24} />
                  <span className="text-white font-medium">50KM Coverage Radius</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <PhoneCall className="text-accent-neon shrink-0" size={24} />
                  <span className="text-white font-medium">Direct Tech Assistance</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a href="tel:+917377766777" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-sky-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group">
                  <PhoneCall size={24} className="text-red-500 group-hover:animate-pulse" />
                  Call Emergency: +91 73777 66777
                </a>
              </motion.div>
            </div>

            {/* Visual element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:block relative"
            >
              <div className="w-80 h-80 rounded-full border-4 border-slate-700/50 flex items-center justify-center relative">
                {/* Radar sweep animation */}
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(14,165,233,0.4)_360deg)] animate-spin" style={{ animationDuration: '3s' }}></div>
                
                <div className="w-64 h-64 rounded-full border-2 border-slate-600/50 flex items-center justify-center relative bg-slate-900/50 backdrop-blur-sm z-10">
                  <div className="text-center">
                    <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-pulse">
                      <Truck size={40} className="text-white" />
                    </div>
                    <p className="text-white font-bold font-outfit text-xl">On Standby</p>
                    <p className="text-accent-blue font-medium text-sm">Palnadu & Surrounds</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
