import { Play, Heart } from "lucide-react";
import heroImg from "@/assets/hero-band.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img
        src={heroImg}
        alt="Till We Die band performing on a dark stage with golden lights"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/40 bg-background/40 backdrop-blur text-xs uppercase tracking-[0.3em] text-primary animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            City Pop · Pop RnB
          </div>

          <h1 className="font-display text-[18vw] md:text-[12rem] leading-[0.85] tracking-tight animate-fade-in-up">
            TILL <br />
            <span className="gradient-text text-glow">WE DIE</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground font-medium">Musik Serius,</span> Orangnya Nggak.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#music"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:shadow-glow-strong transition-all hover:scale-[1.03]"
            >
              <Play className="h-4 w-4 fill-current" />
              Listen Now
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-4 border border-foreground/30 text-foreground font-semibold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
            >
              <Heart className="h-4 w-4" />
              Follow Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float-slow">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/60 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              {["NEW SINGLE OUT NOW", "★", "JAKARTA TOUR 2025", "★", "MUSIK SERIUS, ORANGNYA NGGAK", "★", "STREAM EVERYWHERE", "★"].map((t, j) => (
                <span key={j} className="font-display text-2xl tracking-widest text-muted-foreground">
                  {t === "★" ? <span className="text-primary">★</span> : t}
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
