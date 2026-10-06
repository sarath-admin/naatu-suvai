"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { MapPin, Phone, Clock } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-brand-green/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Visit Us</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-lg text-brand-charcoal/70">
            We are located in the heart of the city. Come and enjoy a traditional feast.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="flex items-start gap-4 p-6 bg-brand-cream rounded-2xl">
              <div className="p-3 bg-white rounded-full text-brand-green shadow-sm">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-charcoal">Location</h4>
                <p className="text-brand-charcoal/80 leading-relaxed">{siteData.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-brand-cream rounded-2xl">
              <div className="p-3 bg-white rounded-full text-brand-green shadow-sm">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-charcoal">Phone</h4>
                <p className="text-brand-charcoal/80">{siteData.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-brand-cream rounded-2xl">
              <div className="p-3 bg-white rounded-full text-brand-green shadow-sm">
                <Clock />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-charcoal">Opening Hours</h4>
                <p className="text-brand-charcoal/80">{siteData.hours}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-green text-white rounded-full hover:bg-green-800 transition-colors">
                <InstagramIcon />
              </a>
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-green text-white rounded-full hover:bg-green-800 transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-brand-green/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019280146059!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
