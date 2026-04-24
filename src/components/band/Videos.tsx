const videos = [
  { id: "dQw4w9WgXcQ", title: "Sunset Avenue (Official MV)", meta: "Music Video · 2024" },
  { id: "ScMzIvxBSi4", title: "Bukan Cuma Mimpi (Live Session)", meta: "Live · 2024" },
  { id: "jfKfPfyJRdk", title: "Bulan Madu (Acoustic)", meta: "Acoustic · 2023" },
];

const Videos = () => {
  return (
    <section id="videos" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">/ 05 — Videos</span>
          <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
            Watch <span className="gradient-text">Us Move</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={v.id} className="group">
              <div className="relative aspect-video overflow-hidden border border-border group-hover:border-primary transition-all">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono">/ 0{i + 1}</div>
                <h3 className="font-display text-2xl mt-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
