import { Instagram, Youtube, Music2, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { socials, handles } from "@/lib/socials";

// TikTok inline icon (lucide doesn't ship one)
const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.02 1 .07v3.13a3.5 3.5 0 1 0 2.5 3.3V3h3z" />
  </svg>
);

const items = [
  { Icon: Instagram, label: "Instagram", href: socials.instagram, handle: handles.instagram },
  { Icon: Youtube, label: "YouTube", href: socials.youtube, handle: handles.youtube },
  { Icon: TikTokIcon, label: "TikTok", href: socials.tiktok, handle: handles.tiktok },
  { Icon: Music2, label: "Spotify", href: socials.spotify, handle: handles.spotify },
];

const FanZone = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast({ title: "Email tidak valid", description: "Masukin email yang bener ya 🙏" });
      return;
    }
    toast({ title: "Welcome to the family ✨", description: "Lo bakal jadi yang pertama tau drop terbaru kita." });
    setEmail("");
  };

  return (
    <section id="fans" className="relative py-24 md:py-32 bg-secondary/40 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 06 — Fan Zone</span>
            <h2 className="font-script text-5xl md:text-7xl mt-4 leading-[1.05]">
              <span className="text-primary">Join</span> The<br />Inner Circle
            </h2>
            <p className="text-foreground/75 text-lg mt-6 max-w-md">
              Daftar newsletter buat dapet info rilisan baru, presale tiket, dan demo eksklusif yang gak
              kemana‑mana lagi.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@kamu.com"
                className="flex-1 bg-background border-2 border-border focus:border-primary outline-none px-5 py-4 text-foreground placeholder:text-muted-foreground/60 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-bebas text-sm uppercase tracking-[0.25em] hover:shadow-glow-strong transition-all hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </form>

            {/* Sociabuzz support button */}
            <a
              href={socials.sociabuzz}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bebas text-sm uppercase tracking-[0.25em] transition-all"
            >
              <Heart className="h-4 w-4 fill-current" />
              Support us on Sociabuzz
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {items.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-background border-2 border-border hover:border-primary hover:shadow-glow transition-all flex flex-col gap-4"
              >
                <s.Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-script text-3xl text-foreground">{s.label}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1 truncate">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanZone;
