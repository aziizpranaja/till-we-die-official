import { Play, ExternalLink } from "lucide-react";
import a1 from "@/assets/album-1.jpg";
import a2 from "@/assets/album-2.jpg";
import a3 from "@/assets/album-3.jpg";

const tracks = [
  { title: "Sunset Avenue", album: "Neon Memoirs", year: "2024", duration: "3:42", img: a1, popular: true },
  { title: "Bukan Cuma Mimpi", album: "Single", year: "2024", duration: "4:11", img: a2 },
  { title: "Bulan Madu", album: "Bulan Madu EP", year: "2023", duration: "3:58", img: a3 },
  { title: "Lampu Kota", album: "Neon Memoirs", year: "2024", duration: "4:25", img: a1 },
  { title: "Senja Kemarin", album: "Bulan Madu EP", year: "2023", duration: "3:21", img: a3 },
];

const Music = () => {
  return (
    <section id="music" className="relative py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">/ 02 — Discography</span>
            <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
              The <span className="gradient-text">Sound</span>
            </h2>
          </div>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Open in Spotify <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-square overflow-hidden border border-border">
                <img src={a1} alt="Neon Memoirs album cover" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary">Latest Release</span>
                  <h3 className="font-display text-5xl mt-2">Neon Memoirs</h3>
                  <p className="text-muted-foreground mt-1">2024 · 8 Tracks</p>
                </div>
              </div>
            </div>

            {/* Embedded player */}
            <div className="mt-6 bg-card border border-border p-1">
              <iframe
                title="Spotify embed"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder={0}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>

          {/* Track list */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-background/40">
              {tracks.map((t, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 md:p-5 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="text-muted-foreground font-mono text-sm w-6 group-hover:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Play className="h-4 w-4 text-primary hidden group-hover:block fill-current" />
                  <img src={t.img} alt="" loading="lazy" className="h-12 w-12 object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{t.title}</span>
                      {t.popular && (
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-primary text-primary-foreground">Hit</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {t.album} · {t.year}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{t.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
