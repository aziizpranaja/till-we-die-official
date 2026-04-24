import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";
import m4 from "@/assets/member-4.jpg";

const members = [
  { name: "Rangga", role: "Vocal", img: m1 },
  { name: "Dimas", role: "Guitar", img: m2 },
  { name: "Bima", role: "Bass", img: m3 },
  { name: "Aldo", role: "Drums", img: m4 },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">/ 01 — About</span>
            <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
              Empat Orang. <br />
              <span className="gradient-text">Satu Frekuensi.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Terbentuk di Jakarta tahun <span className="text-primary">2021</span>, Till We Die lahir dari
              obrolan random di studio yang akhirnya jadi gerakan musik. Kami meracik nuansa city pop ala
              80‑an dengan groove RnB modern — sebuah surat cinta untuk malam‑malam yang nggak pernah
              selesai.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Visi kami sederhana: bikin musik yang serius dikerjain, tapi tetap fun dimainin. Karena
              hidup terlalu singkat untuk lagu yang membosankan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/60 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role} of Till We Die`}
                  loading="lazy"
                  width={768}
                  height={960}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">{m.role}</div>
                <div className="font-display text-3xl md:text-4xl">{m.name}</div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
