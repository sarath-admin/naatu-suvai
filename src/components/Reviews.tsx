"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = siteData.reviews;

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="py-24 bg-brand-cream border-t border-brand-green/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Customer Stories</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative px-10 md:px-20">
          <Quote className="absolute top-0 left-0 md:left-10 w-16 h-16 text-brand-gold/30 -z-10" />
          
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < reviews[currentIndex].rating ? "fill-brand-gold text-brand-gold" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-serif text-brand-charcoal mb-8 leading-relaxed italic">
                  &quot;{reviews[currentIndex].text}&quot;
                </p>
                <div className="font-bold text-lg text-brand-green uppercase tracking-widest">
                  — {reviews[currentIndex].name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full border-2 border-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full border-2 border-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
