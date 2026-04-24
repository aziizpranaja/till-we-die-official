import duo from "@/assets/twd-duo.jpg";
import badge from "@/assets/twd-badge.png";

const members = [
  {
    name: "Afifuz Zaki",
    role: "Vocal · Guitar",
    bio: "Penulis lirik utama. Suka kopi item, jam tangan vintage, dan chord yang nggak ketebak.",
    no: "01",
  },
  {
    name: "Rayhan Pasha",
    role: "Vocal · Producer",
    bio: "Otak di balik produksi. Maniak synth analog dan groove yang bikin kepala goyang sendiri.",
    no: "02",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-6">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 01 — About</span>
            <h2 className="font-script text-5xl md:text-7xl mt-4 leading-[1.05] text-primary">
              Dua Orang.<br />
              <span className="text-foreground">Satu Frekuensi.</span>
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Till We Die adalah duo city pop &amp; pop RnB asal Jakarta yang dibentuk oleh{" "}
              <span className="text-primary font-semibold">Afifuz Zaki</span> dan{" "}
              <span className="text-primary font-semibold">Rayhan Pasha</span>. Kami nge‑blend nuansa hangat 70‑an
              dengan groove RnB modern — surat cinta untuk sore yang nggak pernah selesai.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mt-4">
              Visi kami sederhana: bikin musik yang serius dikerjain, tapi tetap fun dimainin. Karena hidup terlalu
              singkat untuk lagu yang membosankan.
            </p>
          </div>
        </div>

        {/* Big duo photo + members grid */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 relative overflow-hidden border-2 border-primary/30 bg-card group">
            <img
              src={duo}
              alt="Afifuz Zaki and Rayhan Pasha — Till We Die"
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-bebas">Est. 2021 · Jakarta</div>
                <div className="font-script text-3xl md:text-4xl mt-1">The Duo</div>
              </div>
              <img src={badge} alt="" className="h-16 md:h-20 w-auto opacity-90 drop-shadow-lg" />
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {members.map((m) => (
              <div
                key={m.name}
                className="relative p-6 md:p-8 bg-card border border-border hover:border-primary transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-primary font-bebas">{m.role}</div>
                    <div className="font-script text-4xl md:text-5xl mt-2 text-primary">{m.name}</div>
                  </div>
                  <span className="font-bebas text-5xl text-foreground/15 group-hover:text-primary/40 transition-colors">
                    {m.no}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
