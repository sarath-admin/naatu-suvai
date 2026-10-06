"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <Image 
                  src="/about.png" 
                  alt="Cooking traditional food" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold rounded-full blur-3xl opacity-20 z-0"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-green rounded-full blur-3xl opacity-10 z-0"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Our Story</h2>
            <h3 className="text-2xl text-brand-charcoal mb-8 font-light italic">Preserving the culinary heritage of the South.</h3>
            
            <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
              <p>
                At Naatu Suvai, we believe that food is more than just sustenance; it&apos;s a connection to our roots, our culture, and our families. Our journey began with a simple desire: to bring the authentic, unadulterated flavors of South Indian home kitchens to the modern dining table.
              </p>
              <p>
                Every spice we use is hand-ground, every recipe is a cherished family heirloom, and every dish is prepared with the same love and care you&apos;d find in a traditional household. We source our ingredients locally and sustainably, ensuring that every bite is fresh, flavorful, and true to its origins.
              </p>
              <p>
                Whether it&apos;s the fiery notes of our Chettinad curries or the soothing comfort of our Elaneer Payasam, we invite you to experience the true <span className="font-bold text-brand-green">&quot;Taste of the Native Land&quot;</span>.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-serif text-brand-gold font-bold">20+</div>
                <div className="text-sm font-medium text-brand-charcoal uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-brand-green/20"></div>
              <div className="text-center">
                <div className="text-4xl font-serif text-brand-gold font-bold">100%</div>
                <div className="text-sm font-medium text-brand-charcoal uppercase tracking-wider mt-1">Authentic Taste</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
