import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Menu from "@/components/Menu";
import Specials from "@/components/Specials";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Highlights />
      <Menu />
      <Specials />
      <About />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
