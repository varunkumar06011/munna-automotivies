import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-premium">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-neon/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-metallic-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card border-accent-blue/50 mb-8 bg-white/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] animate-pulse"
            >
              <ShieldCheck className="text-accent-blue" size={24} />
              <span className="text-base font-bold tracking-widest text-sky-900 uppercase">ALL INSURANCE POLICIES CLAIMED HERE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-outfit leading-tight mb-6 text-slate-800"
            >
              Best Car Workshop <br />
              in <span className="text-gradient">Palnadu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Munna Automotives – Premium Multi Brand Car Workshop in Andhra Pradesh. 
              Experience state-of-the-art service, 24/7 emergency towing, and flawless denting & painting with luxury standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >

              <a href="tel:+917377766777" className="w-full sm:w-auto px-8 py-4 glass-card bg-white hover:bg-sky-50 text-slate-800 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-sky-100 shadow-sm">
                <PhoneCall size={20} className="text-accent-blue" />
                Call Now
              </a>

              <a href="https://wa.me/917377766777?text=Hi%20i%20need%20a%20car%20service%20from%20you%20side" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                WhatsApp Support
              </a>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative w-full aspect-video flex items-center justify-center">
              {/* Glowing ring behind the image */}
              <div className="absolute inset-0 bg-accent-blue/10 rounded-3xl blur-[80px] animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative z-10 w-full h-full glass-card rounded-3xl overflow-hidden border-2 border-white hover:border-accent-blue/50 transition-colors duration-500 shadow-[0_20px_50px_rgba(14,165,233,0.15)] group">
                <img 
                  src="/banner.jpeg" 
                  alt="Munna Automotives Workshop" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f0f9ff]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-1 h-12 rounded-full glass-card overflow-hidden">
          <div className="w-full h-1/2 bg-accent-blue rounded-full animate-[slide_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>

    {/* Scrolling Marquee Ticker */}
    <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 py-3 sm:py-4 border-y border-sky-400/30 shadow-lg z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center shrink-0">
            {[
              "✦  Genuine Spare Parts",
              "✦  Palnadu's Most Experienced Workshop",
              "✦  Best Car Service in Andhra Pradesh",
              "✦  24/7 Car Service & Support",
              "✦  Cashless Insurance Claims",
              "✦  Expert Multi-Brand Mechanics",
            ].map((text, idx) => (
              <span key={idx} className="mx-6 sm:mx-10 text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Hero;
