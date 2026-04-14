import { Link } from "react-router-dom";
import { ArrowRight, Server, Code, Smartphone, ChevronRight, Star, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  { icon: Server, title: "DevOps Solutions", desc: "CI/CD pipelines, cloud deployment, automation, and monitoring for reliable infrastructure." },
  { icon: Code, title: "Web Development", desc: "React, MERN stack, and Next.js applications with modern UI/UX and peak performance." },
  { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile apps with scalable backends and seamless user experiences." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Finova", text: "NexGen transformed our deployment pipeline. We ship 10x faster with zero downtime.", rating: 5 },
  { name: "Marcus Rivera", role: "Founder, Launchpad", text: "The web app they built handles millions of users flawlessly. Truly exceptional work.", rating: 5 },
  { name: "Aisha Patel", role: "VP Eng, CloudSync", text: "Their DevOps expertise saved us months of setup. Professional, fast, and reliable.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="container-narrow relative">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            Trusted by 200+ companies worldwide
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-foreground">
            Building Scalable{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We deliver high-performance DevOps, Web, and App Development solutions that help startups and enterprises scale with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2">
              Our Services <ChevronRight size={18} />
            </Link>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "200+", label: "Clients" },
            { value: "500+", label: "Projects" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What We Do</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">End-to-end digital solutions engineered for performance, security, and scale.</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="glass-card p-8 group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Link to="/services" className="mt-4 text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What Clients Say</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="glass-card p-8">
                <Quote size={24} className="text-primary/40 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="gradient-bg rounded-2xl p-10 md:p-16 text-center glow-shadow">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground">Ready to Scale?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">Let&apos;s build something exceptional together. Get in touch and let&apos;s discuss your next project.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
