"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/siteData";
import { generateWhatsAppLink } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const orderLink = generateWhatsAppLink(siteData.whatsappNumber, "Hello Naatu Suvai, I would like to order...");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Naatu Suvai Logo" 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md bg-white border-2 border-brand-gold transition-transform duration-300 hover:scale-105" 
          />
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight hidden sm:block ${isScrolled ? "text-brand-green" : "text-white"}`}>
            {siteData.restaurantName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${isScrolled ? "text-brand-charcoal" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Order Button */}
        <div className="hidden md:block">
          <a 
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-green font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors shadow-md"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-brand-green" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-brand-green" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream shadow-lg border-t border-brand-green/10">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-charcoal font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white text-center font-medium px-4 py-3 rounded-md mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
