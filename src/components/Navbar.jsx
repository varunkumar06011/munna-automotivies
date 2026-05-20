import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Insurance', href: '#insurance' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 bg-white p-1">
            <img src="/logo.jpeg" alt="Munna Automotives Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-outfit font-extrabold text-2xl lg:text-3xl tracking-tight text-slate-900 leading-none">
            Munna <br className="xs:hidden" /><span className="text-gradient">Automotives</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-accent-blue transition-colors font-semibold text-sm tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+917377766777"
            className="flex items-center gap-2 bg-white/50 hover:bg-white/80 border border-slate-200 px-6 py-2.5 rounded-full transition-all duration-300 group shadow-sm text-slate-800"
          >
            <Phone size={18} className="text-accent-blue group-hover:animate-pulse" />
            <span className="font-semibold text-sm">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 hover:text-accent-blue transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-nav border-t border-slate-200 mt-4"
        >
          <div className="flex flex-col px-6 py-4 space-y-4 bg-white/90 rounded-b-2xl shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-accent-blue transition-colors font-medium text-lg py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917377766777"
              className="flex items-center gap-2 text-accent-blue font-semibold text-lg py-2"
            >
              <Phone size={20} />
              +91 73777 66777
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
