import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Hardcoded list of some images from the public folder
const images = [
  "WhatsApp Image 2026-05-20 at 12.18.17 (1).jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.18.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.19 (1).jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.20 (1).jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.22.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.27.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.30.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.42.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.46.jpeg",
  "WhatsApp Image 2026-05-20 at 12.18.48.jpeg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-sky-50/50 border-t border-sky-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-slate-800"
          >
            Our <span className="text-gradient">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Take a look at our state-of-the-art facility and some of the premium vehicles we've serviced recently.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={`/${img}`} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent-blue transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={`/${selectedImage}`}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
