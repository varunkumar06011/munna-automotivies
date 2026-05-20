import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Where can I find the best car workshop near me in Palnadu?",
    a: "Munna Automotives is the top-rated multi-brand car workshop in Palnadu, Andhra Pradesh. With 30+ years of experience, we service all brands including Maruti, Hyundai, Tata, Kia, Toyota, Honda, Mahindra, and more. We're open 7 days a week with emergency 24/7 support."
  },
  {
    q: "Do you provide cashless insurance claim service?",
    a: "Yes! Munna Automotives is a trusted cashless insurance claim workshop in Palnadu. We partner with all major insurers — New India Assurance, TATA AIG, Bajaj Allianz, ICICI Lombard, HDFC ERGO, Oriental Insurance, United India, and Reliance General. We handle all paperwork and surveyor coordination."
  },
  {
    q: "Who provides emergency towing service near me in Andhra Pradesh?",
    a: "We provide 24/7 emergency towing and roadside assistance within a 50KM radius of Palnadu. Whether your car stopped suddenly, battery is dead, or you need highway car repair support — our team can reach your location quickly with professional flatbed towing."
  },
  {
    q: "What car brands do you service at your workshop?",
    a: "We are a multi-brand car workshop servicing Maruti Suzuki, Hyundai, Tata Motors, Mahindra, Kia, Toyota, Honda, Renault, Nissan, Skoda, Volkswagen, and even luxury vehicles. Our experienced technicians use genuine spare parts and advanced diagnostic scanners for all brands."
  },
  {
    q: "Do you use genuine spare parts for repairs?",
    a: "Absolutely. Munna Automotives uses only genuine and OEM-certified spare parts for all repairs. We believe in transparent pricing with no hidden fees, ensuring quality-assured car service that our customers in Palnadu and surrounding areas trust."
  },
  {
    q: "What services do you offer for accident-damaged cars?",
    a: "We offer complete accident repair solutions including car denting and painting in Palnadu, car body repair, MIG welding, bumper replacement, windshield fitting, and full insurance claim processing. Our master painter has 12+ years of experience in flawless paint matching."
  },
  {
    q: "Is there a reliable mechanic open now near Palnadu?",
    a: "Yes! Munna Automotives operates Monday through Sunday, 9:00 AM to 8:00 PM. For emergencies, we provide early morning and late night car repair support. We are locally known as the most dependable and fast car repair workshop near Palnadu."
  },
  {
    q: "How can I get doorstep car repair service in Palnadu?",
    a: "Our team provides doorstep mechanic services for minor repairs within Palnadu and nearby areas. For battery dead roadside assistance, jumpstart service, or quick diagnostics, call us at +91 73777 66777 or +91 86863 98707 and our trained technician will be dispatched to your location."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 relative bg-white border-t border-sky-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 mb-6 shadow-sm"
          >
            <HelpCircle className="text-accent-blue" size={18} />
            <span className="text-sm font-bold tracking-wide text-sky-800 uppercase">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800"
          >
            Got Questions? <span className="text-gradient">We've Got Answers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Everything you need to know about our automobile services in Palnadu, Andhra Pradesh. Can't find your answer? Call us at +91 73777 66777 or +91 86863 98707.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card bg-white border border-sky-100 overflow-hidden hover:border-accent-blue/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="font-outfit font-bold text-slate-800 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-accent-blue shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-sky-50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
