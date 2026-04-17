import { Link } from "react-router-dom";
import { ArrowRight, Server, Code, Smartphone, ChevronRight, Github, Linkedin, Mail, Download, Briefcase, GraduationCap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  { icon: Code, title: "Web Development", desc: "Pixel-perfect React, Next.js & MERN applications engineered for speed, accessibility, and conversion." },
  { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile experiences with native performance and backends that scale to millions." },
  { icon: Server, title: "DevOps & Cloud", desc: "Automated CI/CD pipelines, cloud-native infrastructure, and 24/7 monitoring to keep systems bulletproof." },
];

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "JWT Auth"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase", "Prisma"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "Vercel", "Git/GitHub", "CI/CD", "Linux"] },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Client Projects",
    period: "2023 — Present",
    desc: "Building production-grade web & mobile apps for startups and SMBs. Delivered 10+ MERN/Next.js projects including e-commerce, real estate, and SaaS platforms.",
    icon: Briefcase,
  },
  {
    role: "MERN Stack Developer",
    company: "Open Source & Personal Projects",
    period: "2022 — 2023",
    desc: "Developed full-stack applications with React, Node.js, and MongoDB. Contributed to open source projects and built portfolio of 20+ apps.",
    icon: Code,
  },
  {
    role: "Computer Science Student",
    company: "Bachelor's in Computer Science",
    period: "2020 — Present",
    desc: "Studying core CS fundamentals: algorithms, data structures, system design, and modern software engineering practices.",
    icon: GraduationCap,
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-screen flex items-center py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="container-narrow relative">
        <FadeIn className="max-w-5xl mx-auto text-center">
          <p className="inline-block text-sm font-medium text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            👋 Hi, I'm Muhammad Subhan
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight leading-[1.05] text-foreground">
            Full Stack Developer{" "}
            <br className="hidden md:block" />
            Building <span className="gradient-text">Modern Web Apps</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I craft scalable, high-performance web & mobile applications using the MERN stack, Next.js, and modern cloud infrastructure — turning ideas into polished digital products.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/projects" className="gradient-bg text-primary-foreground px-9 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg shadow-lg shadow-primary/25">
              View My Work <ArrowRight size={20} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-9 py-4 rounded-xl font-semibold border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Download Resume <Download size={20} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/subhan513", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-subhan", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:subhan@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass-card hover:border-primary/40 text-muted-foreground hover:text-primary transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.3} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Projects Built" },
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Happy Clients" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center hover:border-primary/20 transition-colors">
              <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>

    {/* Services / What I Do */}
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Services I Offer</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">End-to-end development services to bring your ideas to life — from concept to deployment.</p>
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

    {/* Skills / Tech Stack */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Skills & Technologies</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Tools and technologies I use to build modern, scalable applications.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Experience & Education</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" aria-hidden />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-bg ring-4 ring-background" />
                  <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                          <exp.icon size={16} className="text-primary-foreground" />
                        </div>
                        <span className="text-xs font-medium text-primary">{exp.period}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
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
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <div className="gradient-bg rounded-2xl p-10 md:p-16 text-center glow-shadow">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground">Have a Project in Mind?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">Let's collaborate and turn your vision into a high-performance digital product.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
