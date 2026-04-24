import { Instagram, Youtube, Music2, Heart } from "lucide-react";
import logoScript from "@/assets/twd-logo-script.png";
import { socials } from "@/lib/socials";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.02 1 .07v3.13a3.5 3.5 0 1 0 2.5 3.3V3h3z" />
  </svg>
);

const socialList = [
  { Icon: Instagram, href: socials.instagram, label: "Instagram" },
  { Icon: Youtube, href: socials.youtube, label: "YouTube" },
  { Icon: TikTokIcon, href: socials.tiktok, label: "TikTok" },
  { Icon: Music2, href: socials.spotify, label: "Spotify" },
  { Icon: Heart, href: socials.sociabuzz, label: "Sociabuzz" },
];

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-primary/30 bg-background overflow-hidden">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <img src={logoScript} alt="Till We Die" className="h-16 w-auto" />
            </a>
            <p className="mt-4 text-foreground/70 max-w-xs">
              Musik Serius, Orangnya Nggak. Dibuat dengan cinta dari Jakarta oleh Afifuz &amp; Rayhan.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] text-primary font-bebas mb-4">Navigate</h4>
            <ul className="space-y-2 text-foreground/70">
              {["About", "Music", "Tour", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] text-primary font-bebas mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3">
              {socialList.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-3 border-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-widest font-bebas text-foreground/60">
          <span>© {new Date().getFullYear()} Till We Die. All rights reserved.</span>
          <span>Made in Jakarta · ID</span>
        </div>
      </div>

      {/* Giant background type */}
      <div aria-hidden className="overflow-hidden">
        <div className="font-script text-[18vw] leading-[0.85] text-center text-primary/[0.07] select-none -mb-[3vw]">
          till we die
        </div>
      </div>
    </footer>
  );
};

export default Footer;
