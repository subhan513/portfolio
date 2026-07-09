import { Link } from "react-router-dom";
import { ArrowRight, Code, Code2, Briefcase, Mail, GraduationCap, Database, Layout as LayoutIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom, high-performance React and Next.js applications tailored to your business needs.",
  },
  {
    icon: Database,
    title: "Backend Solutions",
    desc: "Robust API design and database management for secure, scalable data handling.",
  },
  {
    icon: LayoutIcon,
    title: "UI/UX Strategy",
    desc: "Thinking beyond the screen to build user-centric, considered digital products.",
  },
];

const stack = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
];

const experience = [
  {
    role: "Software Developer",
    company: "TenX — Lahore, Pakistan",
    period: "Jun 2026",
    desc: "Production API architecture with Node.js, Express, PostgreSQL and Redis. JWT auth, RBAC, background jobs, and query optimization.",
    icon: Briefcase,
  },
  {
    role: "Full Stack Developer",
    company: "ZedStack — Lahore, Pakistan",
    period: "Apr 2025 — Sep 2025",
    desc: "MERN AI-powered Headshot Generator. Integrated AI APIs and reduced processing time by ~30% with a fluid React interface.",
    icon: Code,
  },
  {
    role: "SWE & DSA Mentee",
    company: "DevWeekends — Remote",
    period: "Dec 2025 — May 2026",
    desc: "150+ DSA problems in C++ and multiple full-stack MERN apps (e-commerce, real estate) with scalable architecture.",
    icon: Code,
  },
  {
    role: "BS Computer Science",
    company: "University of Engineering & Technology, Lahore",
    period: "CGPA 3.5 / 4.0",
    desc: "Core CS foundations: data structures, algorithms, OOP, databases and modern software engineering.",
    icon: GraduationCap,
  },
];

const Index = () => (
  <Layout>
    {/* Hero — Serene Minimalist asymmetric 60/40 */}
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-narrow relative px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-10 gap-12 items-center">
        <FadeIn className="md:col-span-6 space-y-8">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Full-Stack Developer
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[0.95] text-foreground">
            Crafting <span className="italic gradient-text">digital</span> experiences that feel like magic.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I am Muhammad Subhan. I build scalable applications with a focus on clean code
            and exceptional user experience.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projects"
              className="px-7 py-3.5 bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 border border-border hover:border-primary text-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-3 pt-4">
            {[
              { Icon: Code2, href: "https://github.com/subhan513", label: "GitHub" },
              { Icon: Briefcase, href: "https://www.linkedin.com/in/muhammadsubhanwebdev/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:subhancs57@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="md:col-span-4 flex justify-center">
          <div className="relative w-full aspect-square max-w-sm">
            <div className="absolute inset-0 bg-card rounded-3xl -rotate-6 transition-transform hover:rotate-0 duration-700" />
            <div className="absolute inset-0 border border-primary/30 rounded-3xl translate-x-4 translate-y-4" />
            <div className="relative h-full w-full bg-background border border-border rounded-3xl flex items-center justify-center overflow-hidden">
              <pre className="p-6 md:p-8 font-mono text-xs md:text-sm text-primary/70 leading-relaxed">
{`const profile = {
  name: 'Subhan',
  role: 'Full-Stack',
  stack: 'MERN',
  passion: 'Clean UX',
  coffee: true,
};`}
              </pre>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Stats strip */}
      <div className="container-narrow px-6 pb-16">
        <FadeIn delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-10">
          {[
            { value: "6+", label: "Projects Shipped" },
            { value: "1+", label: "Years Experience" },
            { value: "3", label: "Companies" },
            { value: "150+", label: "DSA Problems" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-heading italic text-accent">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>

    {/* Services */}
    <section className="border-y border-border">
      <div className="container-narrow px-6 py-24">
        <FadeIn className="mb-14">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">Services</h2>
          <div className="h-[2px] w-12 bg-primary" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="p-8 bg-card/30 border border-border hover:border-primary/50 transition-colors h-full group">
                <div className="w-12 h-12 mb-6 bg-card flex items-center justify-center text-accent">
                  <s.icon size={22} />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Skills & Stack */}
    <section className="container-narrow px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12">
        <FadeIn className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">Skills & Stack</h2>
          <p className="text-muted-foreground leading-relaxed">
            A specialized toolkit refined while shipping production-ready MERN and Next.js
            applications.
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stack.map((t) => (
            <div
              key={t}
              className="px-4 py-3 bg-card text-accent text-center text-sm font-medium border border-border hover:border-primary/50 transition-colors"
            >
              {t}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="border-t border-border">
      <div className="container-narrow px-6 py-24">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">Career Path</h2>
          <div className="h-[2px] w-12 bg-primary mx-auto mt-4" />
        </FadeIn>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-px" aria-hidden />
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 0.08}>
                <div className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="md:w-1/2 pl-14 md:px-8">
                    <div className="p-6 bg-card/20 border border-border hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <exp.icon size={14} className="text-accent" />
                        <time className="text-xs font-bold tracking-widest uppercase text-accent">{exp.period}</time>
                      </div>
                      <h3 className="font-heading text-xl text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-24">
      <FadeIn>
        <div className="max-w-5xl mx-auto bg-card p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading italic text-foreground mb-6">
              Let's build something exceptional.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto">
              Currently available for selected freelance projects and full-stack collaborations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  </Layout>
);

export default Index;
