import { ExternalLink } from "lucide-react";
import { socials } from "@/lib/socials";

const Music = () => {
  return (
    <section id="music" className="relative py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 02 — Discography</span>
            <h2 className="font-script text-5xl md:text-7xl mt-4 leading-none text-primary">
              The Sound
            </h2>
          </div>
          <a
            href={socials.spotify}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bebas text-foreground/70 hover:text-primary transition-colors"
          >
            Open in Spotify <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured artist embed */}
          <div className="lg:col-span-7">
            <div className="bg-card border-2 border-primary/30 p-2 shadow-card">
              <iframe
                title="Till We Die on Spotify"
                src="https://open.spotify.com/embed/artist/5DMESGqr10igT9Jj0lwyAB?utm_source=generator&theme=0"
                width="100%"
                height="500"
                frameBorder={0}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-primary text-primary-foreground border-2 border-primary">
              <div className="text-xs uppercase tracking-[0.3em] font-bebas opacity-80">Now Streaming</div>
              <h3 className="font-script text-5xl mt-3 leading-none">Till We Die</h3>
              <p className="mt-4 opacity-90">
                Dengerin discography lengkap kami di Spotify — dari single pertama sampai rilisan terbaru.
              </p>
              <a
                href={socials.spotify}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-background text-primary font-bebas text-sm uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-all"
              >
                Open Spotify <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="p-8 bg-card border border-border">
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-bebas">Watch on YouTube</div>
              <h3 className="font-script text-3xl mt-2">Music Videos & Lives</h3>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-foreground/80 hover:text-primary text-sm font-bebas uppercase tracking-[0.25em] transition-colors"
              >
                @TillWeDie.official <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
