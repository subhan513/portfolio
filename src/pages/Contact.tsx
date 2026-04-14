import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
              Let&apos;s Build <span className="gradient-text">Something Great</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-8">
            <FadeIn className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-2 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@nexgen.dev" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((info) => (
                <div key={info.label} className="glass-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <info.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
