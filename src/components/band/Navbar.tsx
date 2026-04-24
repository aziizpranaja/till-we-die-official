import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoScript from "@/assets/twd-logo-script.png";
import { socials } from "@/lib/socials";

const links = [
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#gallery", label: "Gallery" },
  { href: "#tour", label: "Tour" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 group">
          <img src={logoScript} alt="Till We Die" className="h-9 md:h-11 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base uppercase tracking-[0.2em] font-bebas text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={socials.spotify}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-base uppercase tracking-[0.2em] font-bebas bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all hover:shadow-glow"
        >
          Listen
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 text-base uppercase tracking-widest font-bebas text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
