import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We focus on delivering real impact through technology." },
  { icon: Zap, title: "Innovation First", desc: "We embrace cutting-edge tools and modern practices." },
  { icon: Users, title: "Client-Centric", desc: "Your success is our success. We build partnerships, not just products." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of quality." },
  { icon: Heart, title: "Integrity", desc: "Transparent communication and honest timelines, always." },
  { icon: Eye, title: "Visionary", desc: "We anticipate future needs and build solutions that last." },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Engineering the Future of <span className="gradient-text">Digital Innovation</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            NexGen Solutions was founded with a singular vision: to bridge the gap between ambitious ideas and scalable technology. We are a team of engineers, designers, and strategists who thrive on solving complex problems.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To empower businesses with technology that scales. We believe every startup deserves enterprise-grade infrastructure, and every enterprise deserves startup-level agility.
            </p>
            <h2 className="text-3xl font-bold font-heading text-foreground mt-10">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A world where technology is an enabler, not a bottleneck. We envision seamless digital ecosystems that drive growth, efficiency, and innovation.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "6+", label: "Years Experience" },
                  { val: "50+", label: "Team Members" },
                  { val: "30+", label: "Countries Served" },
                  { val: "500+", label: "Projects Delivered" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold font-heading gradient-text">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Values</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                <v.icon size={24} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
