import Navbar from "@/components/band/Navbar";
import Hero from "@/components/band/Hero";
import About from "@/components/band/About";
import Music from "@/components/band/Music";
import Gallery from "@/components/band/Gallery";
import Tour from "@/components/band/Tour";
import Videos from "@/components/band/Videos";
import FanZone from "@/components/band/FanZone";
import Contact from "@/components/band/Contact";
import Footer from "@/components/band/Footer";
import StickyPlayer from "@/components/band/StickyPlayer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Till We Die — Duo City Pop & RnB asal Surabaya";
    const desc = "Till We Die (TWD) — duo city pop & pop RnB asal Surabaya. Musik Serius, Orangnya Nggak. Dengar lagu, lihat tour, dan ikuti perjalanan Afifuz & Raihan.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Tour />
        <Videos />
        <FanZone />
        <Contact />
      </main>
      <Footer />
      <div className="h-20" />
      <StickyPlayer />
    </div>
  );
};

export default Index;
