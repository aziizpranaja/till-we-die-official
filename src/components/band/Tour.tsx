import { MapPin, Calendar, Ticket } from "lucide-react";

const events = [
  { date: "MAY 17", year: "2025", city: "Jakarta", venue: "M Bloc Live House", status: "ON SALE" },
  { date: "JUN 08", year: "2025", city: "Bandung", venue: "Spasial", status: "ON SALE" },
  { date: "JUL 12", year: "2025", city: "Yogyakarta", venue: "Lokananta Stage", status: "FEW LEFT" },
  { date: "AUG 23", year: "2025", city: "Surabaya", venue: "Hutan Kota", status: "ON SALE" },
  { date: "SEP 14", year: "2025", city: "Bali", venue: "Potato Head Beach Club", status: "SOON" },
];

const Tour = () => {
  return (
    <section id="tour" className="relative py-24 md:py-32 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">/ 04 — Tour 2025</span>
          <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
            On The <span className="gradient-text">Road</span>
          </h2>
        </div>

        <div className="space-y-3">
          {events.map((e, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 items-center gap-4 p-5 md:p-6 bg-background border border-border hover:border-primary hover:shadow-glow transition-all cursor-pointer"
            >
              <div className="col-span-12 md:col-span-2 flex items-baseline gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-display text-3xl md:text-4xl leading-none">{e.date}</div>
                  <div className="text-xs text-muted-foreground font-mono">{e.year}</div>
                </div>
              </div>

              <div className="col-span-7 md:col-span-3">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">City</div>
                <div className="font-display text-2xl md:text-3xl">{e.city}</div>
              </div>

              <div className="col-span-12 md:col-span-4 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="truncate">{e.venue}</span>
              </div>

              <div className="col-span-6 md:col-span-1 text-xs uppercase tracking-widest">
                <span className={e.status === "FEW LEFT" ? "text-accent" : e.status === "SOON" ? "text-muted-foreground" : "text-primary"}>
                  {e.status}
                </span>
              </div>

              <div className="col-span-6 md:col-span-2 flex justify-end">
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground text-xs uppercase tracking-widest transition-all">
                  <Ticket className="h-4 w-4" />
                  Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
