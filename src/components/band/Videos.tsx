const videos = [
  { id: "k_9pc4VyVEw", title: "Till We Die — Official", meta: "Music Video" },
  { id: "qppO0ue6edM", title: "Till We Die — Official", meta: "Music Video" },
];

const Videos = () => {
  return (
    <section id="videos" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 05 — Videos</span>
          <h2 className="font-script text-5xl md:text-7xl mt-4 leading-[1.05] text-primary">
            Watch Us Move
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
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-bebas">/ 0{i + 1}</div>
                <h3 className="font-script text-2xl mt-1">{v.title}</h3>
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
