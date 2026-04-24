import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || name.length > 100) return toast({ title: "Nama wajib diisi (max 100 karakter)" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast({ title: "Email tidak valid" });
    if (!message || message.length > 1000) return toast({ title: "Pesan wajib diisi (max 1000)" });

    toast({ title: "Pesan terkirim ✉️", description: "Tim kami bakal balik secepetnya." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bebas">/ 07 — Booking</span>
            <h2 className="font-script text-5xl md:text-7xl mt-4 leading-[1.05] text-primary">
              Let's Talk
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md">
              Mau booking buat event, kolaborasi, atau cuma sekadar say hi? Kirim pesan, kita baca semua.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:tillwedie2025@gmail.com" className="group flex items-start gap-4">
                <div className="p-3 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Booking / Press</div>
                  <div className="font-medium group-hover:text-primary transition-colors">tillwedie2025@gmail.com</div>
                </div>
              </a>
              <a href="tel:+6287790794944" className="group flex items-start gap-4">
                <div className="p-3 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Management (TEBE)</div>
                  <div className="font-medium group-hover:text-primary transition-colors">+62 877-9079-4944</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 bg-card border border-border p-6 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
              <input
                maxLength={150}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full mt-2 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:shadow-glow-strong transition-all hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
