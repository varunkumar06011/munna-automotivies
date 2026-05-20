import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShieldAlert, PaintBucket, Wind, Droplets, Disc, BatteryCharging, AlertTriangle, MonitorPlay, Truck } from 'lucide-react';

const servicesList = [
  { icon: <MonitorPlay size={32} />, title: "Scanner Diagnostics", desc: "Multi-brand ECU scanning service in Palnadu. OBD diagnostics for Toyota, Honda, Tata, Mahindra and all modern vehicles." },
  { icon: <ShieldAlert size={32} />, title: "Insurance Claims", desc: "Cashless insurance claim workshop in Palnadu. Direct settlement with all major insurers. Trusted accident repair center in AP." },
  { icon: <PaintBucket size={32} />, title: "Denting & Painting", desc: "Expert car denting painting in Palnadu. Flawless body repair for all brands including Toyota, Honda, Mahindra using advanced techniques." },
  { icon: <Wrench size={32} />, title: "Engine Repair", desc: "Advanced ECU scanner diagnostics for Maruti, Hyundai, Skoda, Volkswagen and luxury cars. Best diagnostic center in Palnadu." },
  { icon: <Wind size={32} />, title: "AC Service & Repair", desc: "Professional car AC repair in Palnadu and surrounding Andhra Pradesh. Gas refill, compressor repair for all vehicle brands." },
  { icon: <Droplets size={32} />, title: "Car Detailing", desc: "Premium car wash and detailing service in Palnadu. Interior deep cleaning, exterior polish for Kia, Renault, Nissan and all brands." },
  { icon: <Disc size={32} />, title: "Wheel Alignment", desc: "Computerized wheel alignment in Palnadu using latest technology. Balancing service for SUVs and sedans." },
  { icon: <BatteryCharging size={32} />, title: "Battery Support", desc: "24-hour battery replacement and jumpstart service. Emergency roadside battery support in Palnadu and surrounding AP areas." },
  { icon: <Truck size={32} />, title: "Towing Assistance", desc: "24/7 emergency towing service in Palnadu within 50KM. Breakdown repair near me, roadside assistance, highway car repair support." },
  { icon: <AlertTriangle size={32} />, title: "Emergency Support", desc: "Comprehensive multi-brand car service for Maruti, Hyundai, Tata, Kia & more in Palnadu. Periodic maintenance with genuine spare parts." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-white border-t border-sky-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Experience world-class automotive care. Our certified experts use cutting-edge technology to keep your vehicle in pristine condition.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 group hover:border-accent-blue/50 transition-all duration-500 relative overflow-hidden bg-white/50"
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-6 text-accent-blue group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-sky-100">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-outfit mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">{service.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  {service.desc}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
