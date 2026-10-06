import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream/80 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold text-brand-gold mb-2">{siteData.restaurantName}</h2>
            <p className="text-sm max-w-sm">{siteData.description}</p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
            <a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">About Us</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteData.restaurantName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
