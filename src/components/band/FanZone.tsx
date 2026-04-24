import { Instagram, Youtube, Music2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "@tillwediemusic" },
  { icon: Youtube, label: "YouTube", href: "#", handle: "/tillwedie" },
  { icon: Music2, label: "Spotify", href: "#", handle: "Till We Die" },
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
    <section id="fans" className="relative py-24 md:py-32 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">/ 06 — Fan Zone</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 leading-none">
              Join The <span className="gradient-text">Inner Circle</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-md">
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
                className="flex-1 bg-background border border-border focus:border-primary outline-none px-5 py-4 text-foreground placeholder:text-muted-foreground/60 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:shadow-glow-strong transition-all hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group p-6 bg-background border border-border hover:border-primary hover:shadow-glow transition-all flex flex-col gap-4"
              >
                <s.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-display text-2xl">{s.label}</div>
                  <div className="text-xs text-muted-foreground font-mono">{s.handle}</div>
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
