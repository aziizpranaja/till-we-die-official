import { Play, ExternalLink } from "lucide-react";
import badge from "@/assets/twd-badge.png";
import { socials } from "@/lib/socials";

const StickyPlayer = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t-2 border-primary/40 bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center gap-4 py-3">
        <img src={badge} alt="Till We Die" className="h-12 w-auto" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold truncate">Till We Die</div>
          <div className="text-xs text-muted-foreground truncate">Stream the latest releases on Spotify</div>
        </div>
        <a
          href={socials.spotify}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bebas text-xs uppercase tracking-[0.25em] hover:shadow-glow transition-all"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          <span className="hidden sm:inline">Listen</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};

export default StickyPlayer;
