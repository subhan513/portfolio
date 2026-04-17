import { Target, Eye, Heart, Code, Award, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import profileImage from "@/assets/ceo.png";

const values = [
  { icon: Target, title: "Goal-Oriented", desc: "I focus on delivering measurable impact with every line of code I write." },
  { icon: Zap, title: "Fast Learner", desc: "I embrace cutting-edge tools and adapt quickly to new technologies and frameworks." },
  { icon: Code, title: "Clean Code", desc: "I write maintainable, well-documented code that scales with your business." },
  { icon: Award, title: "Quality First", desc: "I hold myself to the highest standards of performance, security, and UX." },
  { icon: Heart, title: "Passionate", desc: "Building software is my craft — I genuinely love solving complex problems." },
  { icon: Eye, title: "Detail-Focused", desc: "From pixel-perfect UI to optimized queries, every detail matters to me." },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Crafting Digital Experiences with <span className="gradient-text">Code & Creativity</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I'm Muhammad Subhan — a passionate Full Stack Developer who loves turning complex problems into elegant, scalable solutions. I specialize in building modern web and mobile applications with the MERN stack, Next.js, and cloud-native tools.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading text-foreground">My Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To help startups and businesses bring their ideas to life through clean code, modern design, and scalable architecture — without the bloat or complexity.
            </p>
            <h2 className="text-3xl font-bold font-heading text-foreground mt-10">My Approach</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I treat every project like it's my own. From understanding requirements to deployment, I focus on writing performant, maintainable code that solves real problems for real users.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "3+", label: "Years Coding" },
                  { val: "20+", label: "Projects Shipped" },
                  { val: "15+", label: "Happy Clients" },
                  { val: "10+", label: "Technologies" },
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
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">A Bit About Me</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
            <img
              src={profileImage}
              alt="Muhammad Subhan — Full Stack Developer"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-heading text-foreground">Muhammad Subhan</h3>
              <p className="text-primary font-medium mt-1">Full Stack Developer</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I'm a self-driven developer with deep expertise in React, Node.js, MongoDB, and modern DevOps practices. Over the past few years I've built e-commerce platforms, real estate marketplaces, and SaaS dashboards for clients worldwide. When I'm not coding, you'll find me exploring new tech, contributing to open source, or sharing knowledge with the dev community.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What Drives Me</h2>
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
