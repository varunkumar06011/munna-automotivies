import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-sky-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg p-0.5">
                <img src="/logo.jpeg" alt="Munna Automotives Logo" className="w-full h-full object-contain rounded-xl" />
              </div>
              <span className="font-outfit font-extrabold text-2xl tracking-tight text-white leading-none">
                Munna <br className="xs:hidden" /><span className="text-accent-blue">Automotives</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Palnadu's most advanced multi-brand car workshop. Delivering premium automotive care with transparency and precision.
            </p>
            <div className="flex gap-4">
              {[<Globe size={20} />, <MessageCircle size={20} />, <Share2 size={20} />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent-blue hover:text-white transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Insurance', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-accent-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/50 group-hover:bg-accent-blue transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['General Service', 'Denting & Painting', 'AC Repair', 'Engine Diagnostics', 'Car Wash & Detailing'].map((service) => (
                <li key={service} className="text-slate-400 hover:text-accent-blue transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/50 group-hover:bg-accent-blue transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white">Contact & Hours</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-slate-400 group">
                <MapPin className="text-accent-blue shrink-0 mt-1" size={20} />
                <a href="https://maps.app.goo.gl/M7FUwn67Cf6GwKZd8?g_st=aw" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors underline-offset-2 hover:underline">
                  Palnadu District, Andhra Pradesh, India
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="text-accent-blue shrink-0 mt-1" size={20} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917377766777" className="hover:text-white transition-colors font-medium">+91 73777 66777</a>
                  <a href="tel:+918686398707" className="hover:text-white transition-colors font-medium">+91 86863 98707</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-accent-blue shrink-0" size={20} />
                <span>service@munnaauto.com</span>
              </li>
            </ul>

            {/* Google Maps Button */}
            <a href="https://maps.app.goo.gl/M7FUwn67Cf6GwKZd8?g_st=aw" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 text-accent-blue font-bold text-sm px-4 py-3 rounded-xl transition-all duration-300 mb-6 group">
              <MapPin size={18} className="group-hover:animate-bounce" />
              📍 Open in Google Maps
            </a>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <Clock className="text-accent-neon" size={18} /> Business Hours
              </div>
              <p className="text-slate-400 text-sm">Mon - Sun: 9:00 AM - 8:00 PM</p>
              <p className="text-accent-blue text-xs mt-2 italic">* Early morning & late night emergency services available.</p>
            </div>
          </div>

        </div>

        {/* SEO Keywords Block (Subtle) */}
        <div className="py-6 border-t border-slate-800">
          <p className="text-xs text-slate-600 leading-relaxed text-center max-w-5xl mx-auto">
            Munna Automotives is a top rated, highly recommended multi brand automobile workshop in Andhra Pradesh, proudly serving Palnadu District and surrounding regions including Narasaraopet, Sattenapalli, Chilakaluripet, and Guntur. As trusted local vehicle repair experts, we deliver complete automobile repair solutions — from car denting painting in Palnadu and car AC repair in Palnadu to wheel alignment in Palnadu and advanced scanner diagnostics in Palnadu. Our experienced technicians respond quickly and provide same day service for every job, big or small.
            <br/><br/>
            We are a genuine spare parts workshop in Palnadu, using only authentic components for Maruti, Hyundai, Tata, Mahindra, Kia, Toyota, Honda, Renault, Nissan, Skoda, and Volkswagen service vehicles. Whether you need a routine checkup or a full engine overhaul, all brands are serviced at our advanced car diagnostic workshop with precision and transparency. As a trusted workshop and local favorite, we take pride in being the go-to destination for premium automotive care services across the region.
            <br/><br/>
            Need help on the road? We offer 24/7 emergency car assistance, professional towing and roadside support, and doorstep car support services throughout Palnadu and beyond. Our towing service in Palnadu is always available — emergency support is just one call away, with towing available round the clock. We also specialize in accident repair and insurance claims, operating as the leading insurance claim workshop in Palnadu where insurance is accepted for hassle-free cashless settlements. Visit our accident repair center in Palnadu for expert car body repair in Palnadu with guaranteed quality.
            <br/><br/>
            Open now and ready to serve you, Munna Automotives is the most trusted, top rated service center for complete car care — from roadside assistance to premium detailing. Genuine parts, experienced technicians, and a commitment to excellence make us the highly recommended choice for every vehicle owner in Palnadu, Andhra Pradesh.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Munna Automotives – The Best Multi Brand Car Workshop in Andhra Pradesh. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
