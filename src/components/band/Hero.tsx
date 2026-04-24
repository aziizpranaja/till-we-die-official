import { Play, Heart } from "lucide-react";
import heroImg from "@/assets/twd-duo.jpg";
import logoScript from "@/assets/twd-logo-script.png";
import { socials } from "@/lib/socials";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img
        src={heroImg}
        alt="Till We Die — Afifuz Zaki & Rayhan Pasha peeking from a column in Jakarta"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-primary/50 bg-background/60 backdrop-blur text-xs uppercase tracking-[0.3em] text-primary animate-fade-in font-bebas">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            City Pop · Pop RnB · Jakarta
          </div>

          <h1 className="animate-fade-in-up">
            <span className="sr-only">Till We Die</span>
            <img
              src={logoScript}
              alt="Till We Die"
              className="w-[80vw] max-w-[640px] md:max-w-[760px] -ml-2 select-none drop-shadow-[0_8px_24px_rgba(200,70,20,0.25)]"
            />
          </h1>

          <p
            className="mt-8 text-xl md:text-3xl font-bebas tracking-wide text-foreground/80 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-primary">Musik Serius,</span> Orangnya Nggak.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={socials.spotify}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-bebas text-base uppercase tracking-[0.2em] hover:shadow-glow-strong transition-all hover:scale-[1.03]"
            >
              <Play className="h-4 w-4 fill-current" />
              Listen Now
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-foreground/40 text-foreground font-bebas text-base uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all"
            >
              <Heart className="h-4 w-4" />
              Follow Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float-slow">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bebas">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t-2 border-primary/40 bg-primary/10 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              {["NEW SINGLE OUT NOW", "✦", "AFIFUZ × RAYHAN", "✦", "MUSIK SERIUS, ORANGNYA NGGAK", "✦", "STREAM EVERYWHERE", "✦"].map((t, j) => (
                <span key={j} className="font-bebas text-2xl tracking-[0.2em] text-foreground/70">
                  {t === "✦" ? <span className="text-primary">{t}</span> : t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
