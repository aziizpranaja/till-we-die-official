import { Instagram, Youtube, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-display text-3xl tracking-widest">
                TILL <span className="gradient-text">WE</span> DIE
              </span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Musik Serius, Orangnya Nggak. Dibuat dengan cinta dari Jakarta.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Navigate</h4>
            <ul className="space-y-2 text-muted-foreground">
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
            <h4 className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Youtube, Music2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Till We Die. All rights reserved.</span>
          <span>Made in Jakarta · ID</span>
        </div>
      </div>

      {/* Giant background type */}
      <div aria-hidden className="overflow-hidden">
        <div className="font-display text-[20vw] leading-[0.85] text-center text-foreground/[0.04] select-none -mb-[3vw]">
          TILL WE DIE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
