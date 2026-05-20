import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: <Users size={32} />, value: "5000+", label: "Happy Customers" },
  { icon: <Award size={32} />, value: "30+", label: "Years Experience" },
  { icon: <ThumbsUp size={32} />, value: "100%", label: "Satisfaction Rate" },
  { icon: <Clock size={32} />, value: "24/7", label: "Support Available" }
];

const features = [
  "State-of-the-art diagnostic equipment",
  "OEM certified replacement parts",
  "Transparent pricing with no hidden fees",
  "Pickup and drop facility available",
  "Expert technicians trained for luxury cars",
  "Comfortable AC customer lounge"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 relative bg-sky-50 border-t border-sky-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800"
          >
            Why Choose <span className="text-gradient">Munna Automotives?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We don't just repair cars; we care for them. Our commitment to excellence, transparent pricing, and advanced diagnostic tools make us the best automobile workshop in Andhra Pradesh, proudly serving Palnadu and a 100KM radius.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card bg-white p-6 text-center group hover:-translate-y-2 transition-transform duration-300 border-sky-100"
            >
              <div className="text-accent-blue flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold font-outfit text-slate-800 mb-2">{stat.value}</div>
              <div className="text-sm font-medium tracking-wider text-slate-500 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features List & Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-card bg-white hover:border-accent-blue/30 transition-colors border-sky-100">
                  <div className="mt-1 text-accent-neon">
                    <Award size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default WhyChooseUs;
