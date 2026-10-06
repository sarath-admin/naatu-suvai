"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { generateWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(siteData.menuCategories[0]);
  const [filter, setFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = siteData.menuItems.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesFilter = filter === "all" ? true : filter === "veg" ? item.isVeg : !item.isVeg;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFilter && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Our Menu</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-lg text-brand-charcoal/70">
            Explore our wide range of authentic South Indian delicacies, prepared fresh every day.
          </p>
        </div>

        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="w-full md:w-1/3">
            <input 
              type="text"
              placeholder="Search for a dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-brand-green/20 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold bg-brand-cream/50"
            />
          </div>
          <div className="flex bg-brand-cream/50 p-1 rounded-full border border-brand-green/10">
            {(["all", "veg", "non-veg"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === type 
                    ? type === "veg" ? "bg-green-600 text-white" : type === "non-veg" ? "bg-brand-red text-white" : "bg-brand-green text-white"
                    : "text-brand-charcoal hover:bg-brand-green/10"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto pb-4 mb-10 hide-scrollbar gap-2">
          {siteData.menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-green shadow-md"
                  : "bg-brand-cream text-brand-charcoal hover:bg-brand-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-brand-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
                      <div className={`w-3 h-3 rounded-full ${item.isVeg ? "bg-green-500" : "bg-red-500"}`}></div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-brand-charcoal pr-4">{item.name}</h3>
                      <span className="font-serif font-bold text-brand-red whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-brand-charcoal/70 text-sm mb-6 flex-grow">{item.description}</p>
                    
                    <a
                      href={generateWhatsAppLink(siteData.whatsappNumber, `Hello Naatu Suvai, I would like to order: ${item.name} - ${item.price}. Please confirm availability.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-3 border-2 border-brand-green text-brand-green font-semibold rounded-xl hover:bg-brand-green hover:text-white transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center text-brand-charcoal/50"
              >
                No dishes found matching your criteria.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
