import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const items = [
  { src: g1, alt: "Till We Die bersama fans setelah show", caption: "With The Family", className: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Performance live di panggung Moment", caption: "Live · Moment" },
  { src: g3, alt: "Afifuz dan Raihan portrait di galeri", caption: "The Duo · Portrait", className: "md:col-span-1 md:row-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 03 — Gallery</span>
          <h2 className="font-script text-5xl md:text-7xl mt-4 leading-[1.05] text-primary">
            Frame by Frame
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden border border-border hover:border-primary/60 transition-all ${it.className ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">/ {String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-xl md:text-2xl mt-1">{it.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
