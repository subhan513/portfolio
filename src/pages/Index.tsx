import { Link } from "react-router-dom";
import { ArrowRight, Server, Code, Smartphone, ChevronRight, Star, Quote, Shield, Zap, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  { icon: Server, title: "DevOps Solutions", desc: "Automated CI/CD pipelines, cloud-native infrastructure, and 24/7 monitoring to keep your systems bulletproof." },
  { icon: Code, title: "Web Development", desc: "Pixel-perfect React & Next.js applications engineered for speed, accessibility, and conversion." },
  { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile experiences with native performance and backends that scale to millions." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Finova", text: "Goovex transformed our deployment pipeline. We ship 10x faster with zero downtime.", rating: 5 },
  { name: "Marcus Rivera", role: "Founder, Launchpad", text: "The web app they built handles millions of users flawlessly. Truly exceptional work.", rating: 5 },
  { name: "Aisha Patel", role: "VP Eng, CloudSync", text: "Their DevOps expertise saved us months of setup. Professional, fast, and reliable.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="container-narrow relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            Empowering businesses with next-gen technology
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.08] text-foreground">
            We Engineer Software{" "}
            <br className="hidden md:block" />
            That <span className="gradient-text">Drives Growth</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From robust DevOps pipelines to stunning web & mobile applications — Goovex delivers end-to-end solutions that help you ship faster, scale effortlessly, and stay ahead of the competition.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="gradient-bg text-primary-foreground px-7 py-3.5 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-base">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="px-7 py-3.5 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2 text-base">
              View Our Work <ChevronRight size={18} />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            {[
              { icon: Shield, text: "Enterprise-Grade Security" },
              { icon: Zap, text: "99.9% Uptime Guarantee" },
              { icon: Globe, text: "Serving Clients Worldwide" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <item.icon size={14} className="text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.3} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Clients Served" },
            { value: "120+", label: "Projects Delivered" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Dedicated Support" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center hover:border-primary/20 transition-colors">
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
          <p className="text-sm font-medium text-primary mb-2">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What We Do Best</h2>
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
          <p className="text-sm font-medium text-primary mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Trusted by Industry Leaders</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground">Ready to Transform Your Business?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">Partner with Goovex and let&apos;s turn your vision into a high-performance digital product.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Let&apos;s Talk <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
