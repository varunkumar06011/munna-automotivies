import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wrench, Settings, Star } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section id="about" className="py-24 relative bg-white border-t border-sky-100 overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#bae6fd 1px, transparent 1px), linear-gradient(90deg, #bae6fd 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="relative max-w-xl mx-auto aspect-video rounded-3xl overflow-hidden glass-card p-1.5 border-2 border-sky-200 shadow-[0_20px_50px_rgba(14,165,233,0.15)] group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/owner.jpeg" 
                  alt="Shaik Mastan - Founder of Munna Automotives Palnadu" 
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to placeholder if owner.jpeg doesn't exist yet
                    e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                
                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-xl sm:text-3xl font-bold font-outfit text-white mb-0.5 sm:mb-1">Shaik Mastan</h3>
                  <p className="text-accent-neon text-xs sm:text-base font-medium tracking-wide">Founder & Chief Expert</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="relative mt-6 sm:absolute sm:mt-0 sm:-bottom-8 sm:-right-4 lg:-right-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-sky-100 flex items-center justify-center sm:justify-start gap-4 animate-float max-w-xs mx-auto sm:max-w-none">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-sky-50 flex items-center justify-center text-accent-blue border-2 border-sky-200 shrink-0">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 font-outfit leading-none sm:leading-normal">30+</div>
                <div className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 mb-6">
              <Star className="text-accent-blue" size={16} />
              <span className="text-sm font-bold tracking-wide text-sky-800 uppercase">Trusted Automobile Expert</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-slate-800">
              Palnadu's Most Experienced <br />
              <span className="text-gradient">Car Repair Expert</span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With over 30 years of dedicated experience in the automobile industry, Shaik Mastan has built Munna Automotives into the most trusted and reliable car workshop in Andhra Pradesh. Specializing in advanced diagnostics and high-end repairs, our focus is entirely on customer trust, transparent service, and uncompromising quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="glass-card bg-sky-50/50 p-5 border border-sky-100">
                <Wrench className="text-accent-blue mb-3" size={24} />
                <h4 className="font-bold text-slate-800 mb-2 font-outfit">Trained Technicians</h4>
                <p className="text-slate-600 text-sm">Highly qualified professionals handling multi-brand cars.</p>
              </div>
              <div className="glass-card bg-sky-50/50 p-5 border border-sky-100">
                <Settings className="text-accent-blue mb-3" size={24} />
                <h4 className="font-bold text-slate-800 mb-2 font-outfit">Advanced Tools</h4>
                <p className="text-slate-600 text-sm">Equipped with multiple scanners, dent pullers, and MIG welding tech.</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Specialized in advanced engine diagnostics",
                "Customer trust and reliability focused",
                "Latest car technologies supported natively",
                "Computerized precision alignment and repairs"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
