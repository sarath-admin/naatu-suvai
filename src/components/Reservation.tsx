"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { generateWhatsAppLink } from "@/lib/utils";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Table Booking Request*%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Guests: ${formData.guests}%0A
Notes: ${formData.message || 'None'}`;
    
    const whatsappUrl = generateWhatsAppLink(siteData.whatsappNumber, decodeURIComponent(message));
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 bg-brand-green text-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Book a Table</h2>
            <p className="text-lg text-brand-cream/80 mb-8 max-w-lg">
              Reserve your spot to experience authentic South Indian flavors. We recommend booking in advance, especially for weekends.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-gold font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fill the Form</h4>
                  <p className="text-brand-cream/70 text-sm">Provide your details and preferences.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-gold font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Send via WhatsApp</h4>
                  <p className="text-brand-cream/70 text-sm">You will be redirected to confirm your booking.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-brand-charcoal">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-charcoal/80">Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-cream/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-charcoal/80">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-cream/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-charcoal/80">Date</label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-cream/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-charcoal/80">Time</label>
                    <input 
                      required
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-cream/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-charcoal/80">Guests</label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:outline-none focus:ring-2 focus:ring-brand-green bg-brand-cream/50"
                    >
                      {[1,2,3,4,5,6,7,8,9,10, "10+"].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-gold text-brand-green font-bold text-lg rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
