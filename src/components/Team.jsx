import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Jameel",
      role: "Lead Mechanic",
      experience: "10+ Years Experience",
      icon: <Wrench size={40} className="text-white" />,
      desc: "Specialized in complex engine repairs and advanced ECU scanning."
    },
    {
      name: "Bapan",
      role: "Master Painter",
      experience: "12+ Years Experience",
      icon: <Paintbrush size={40} className="text-white" />,
      desc: "Expert in flawless full body painting and dent pulling."
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-sky-50 border-t border-sky-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 mb-6 shadow-sm"
          >
            <Users className="text-accent-blue" size={20} />
            <span className="text-sm font-bold tracking-wide text-sky-800 uppercase">Expert Automobile Technicians</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800"
          >
            Meet Our <span className="text-gradient">Professional Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg font-medium"
          >
            Combined workshop expertise of <span className="text-accent-blue font-bold">50+ years</span>. Our highly qualified car technicians in Palnadu ensure your vehicle gets the best treatment.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 glass-card bg-white p-8 text-center hover:-translate-y-2 transition-transform duration-500 border border-sky-200 shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-200 mb-6 group-hover:scale-110 transition-transform duration-500">
                {member.icon}
              </div>
              
              <h3 className="text-3xl font-bold font-outfit text-slate-800 mb-1">{member.name}</h3>
              <p className="text-accent-blue font-bold uppercase tracking-wider text-sm mb-4">{member.role}</p>
              
              <div className="bg-sky-50 py-2 px-4 rounded-lg inline-block mb-4 text-slate-700 font-semibold border border-sky-100">
                {member.experience}
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
