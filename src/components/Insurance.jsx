import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle, Car } from 'lucide-react';

const steps = [
  { icon: <Car size={24} />, title: "Bring Your Car", desc: "Drop off your vehicle or call us for towing." },
  { icon: <FileText size={24} />, title: "Submit Documents", desc: "Hand over the required insurance papers." },
  { icon: <ShieldCheck size={24} />, title: "Survey & Approval", desc: "We coordinate with the surveyor for instant approval." },
  { icon: <CheckCircle size={24} />, title: "Drive Away", desc: "Get your repaired car back with zero hassle." }
];

const insurers = [
  "New India Assurance",
  "TATA AIG",
  "Bajaj Allianz",
  "ICICI Lombard",
  "HDFC ERGO",
  "Oriental Insurance",
  "United India",
  "Reliance General",
];

const Insurance = () => {
  return (
    <section id="insurance" className="py-20 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Background glowing shield effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Left Content - Insurance Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-neon/20 rounded-3xl rotate-3 blur-md"></div>
              <div className="relative glass-card bg-white/95 rounded-3xl flex flex-col items-center justify-center p-6 sm:p-8 border border-sky-200 shadow-xl w-full">
                
                {/* Animated Shield */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    filter: ["drop-shadow(0 0 10px rgba(14,165,233,0.3))", "drop-shadow(0 0 30px rgba(14,165,233,0.5))", "drop-shadow(0 0 10px rgba(14,165,233,0.3))"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-5"
                >
                  <ShieldCheck size={90} className="text-accent-blue" strokeWidth={1} />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-slate-800 mb-1 text-center">100% Cashless</h3>
                <p className="text-accent-blue font-bold tracking-widest uppercase text-xs sm:text-sm text-center mb-6">Partners with All Major Insurers</p>
                
                {/* Insurers Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                  {insurers.map((name) => (
                    <div key={name} className="h-10 sm:h-11 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center px-2 overflow-hidden relative group hover:border-accent-blue/40 transition-all duration-300">
                      <div className="absolute inset-0 bg-accent-blue/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-600 group-hover:text-accent-blue transition-colors relative z-10 text-center leading-tight">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Info & Timeline */}
          <div className="w-full lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800">
                Hassle-Free <br />
                <span className="text-gradient">Insurance Claims</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Dealing with accidents is stressful enough. Leave the paperwork to us. We offer direct settlement facilities with top insurance companies to ensure a seamless repair experience.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l-2 border-sky-200 ml-4 space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-7"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="glass-card bg-white p-4 sm:p-5 hover:border-accent-blue/30 transition-colors border-sky-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-accent-blue p-1.5 bg-sky-50 rounded-lg shrink-0">
                        {step.icon}
                      </div>
                      <h4 className="text-base sm:text-xl font-bold font-outfit text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Insurance;
