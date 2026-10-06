"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { generateWhatsAppLink } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Specials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const specials = siteData.specials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [specials.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % specials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + specials.length) % specials.length);

  if (!specials || specials.length === 0) return null;

  return (
    <section className="py-20 bg-brand-green text-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-4">Chef&apos;s Specials</h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto">Exclusive dishes curated by our head chef, available for a limited time.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9] relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${specials[currentIndex].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-serif text-white mb-4"
                  >
                    {specials[currentIndex].name}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
                  >
                    {specials[currentIndex].description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a
                      href={generateWhatsAppLink(siteData.whatsappNumber, `Hello Naatu Suvai, I want to order the special: ${specials[currentIndex].name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-brand-gold text-brand-green font-bold rounded-full hover:bg-yellow-400 transition-colors"
                    >
                      Order Special
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
