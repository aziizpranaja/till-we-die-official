import { Play, Pause, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";
import a1 from "@/assets/album-1.jpg";

const StickyPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl">
      <div className="container flex items-center gap-4 py-3">
        <img src={a1} alt="" className="h-12 w-12 object-cover border border-border" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium truncate">Sunset Avenue</div>
          <div className="text-xs text-muted-foreground truncate">Till We Die · Neon Memoirs</div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "Pause" : "Play"}
            className="h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground hover:shadow-glow transition-all"
          >
            {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
          </button>
          <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Next">
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2 text-muted-foreground">
          <Volume2 className="h-4 w-4" />
          <div className="w-24 h-1 bg-border relative">
            <div className="absolute inset-y-0 left-0 w-2/3 bg-primary" />
          </div>
        </div>
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
          className="sm:hidden h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground"
        >
          {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
        </button>
      </div>
    </div>
  );
};

export default StickyPlayer;
