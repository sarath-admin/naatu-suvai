"use client";

import { motion } from "framer-motion";
import { Leaf, Utensils, Heart, Clock } from "lucide-react";

const highlights = [
  {
    icon: <Leaf className="w-8 h-8 mb-4 text-brand-green" />,
    title: "Fresh Ingredients",
    description: "Sourced locally every morning for the authentic taste."
  },
  {
    icon: <Utensils className="w-8 h-8 mb-4 text-brand-green" />,
    title: "Traditional Recipes",
    description: "Generations old secrets passed down through our family."
  },
  {
    icon: <Heart className="w-8 h-8 mb-4 text-brand-green" />,
    title: "Homestyle Taste",
    description: "Prepared with love, just like grandmother used to make."
  },
  {
    icon: <Clock className="w-8 h-8 mb-4 text-brand-green" />,
    title: "Quick Service",
    description: "Hot, delicious food served promptly to your table."
  }
];

export default function Highlights() {
  return (
    <section className="py-20 bg-brand-cream border-b border-brand-green/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 bg-brand-cream rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-charcoal">{item.title}</h3>
              <p className="text-brand-charcoal/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
