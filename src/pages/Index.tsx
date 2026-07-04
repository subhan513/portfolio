import { Link } from "react-router-dom";
import { ArrowRight, Code, Code2, Briefcase, Mail, GraduationCap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import heroBg from "@/assets/hero-bg.mp4.asset.json";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMongoose,
  SiGit, SiGithub, SiPostman, SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  { icon: Code, title: "Web Development", desc: "Pixel-perfect React, Next.js & MERN applications engineered for speed, accessibility, and conversion." },
];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#10B981" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "TenX — Lahore, Pakistan (Hybrid)",
    period: "Jun 2026",
    desc: "Built production API architecture using Node.js, Express, PostgreSQL and Redis caching. Implemented JWT auth, RBAC, file uploads, and background jobs for User & Product modules. Optimized DB queries and API performance by fixing N+1 issues and adding eager loading.",
    icon: Briefcase,
  },
  {
    role: "Full Stack Developer",
    company: "ZedStack — Lahore, Pakistan (Hybrid)",
    period: "Apr 2025 — Sep 2025",
    desc: "Developed an AI-powered Headshot Generator using the MERN stack. Integrated AI APIs for image generation and reduced processing time by ~30%. Built a responsive React interface for seamless upload, preview, and generation workflow.",
    icon: Code,
  },
  {
    role: "Software Engineering & DSA Mentee",
    company: "DevWeekends — Remote",
    period: "Dec 2025 — May 2026",
    desc: "Solved 150+ Data Structures & Algorithms problems in C++. Built multiple full-stack MERN apps (e-commerce, real estate) following scalable architecture and best practices. Strengthened system design and backend optimization for production-level apps.",
    icon: Code,
  },
  {
    role: "Bachelor in Computer Science",
    company: "University of Engineering and Technology, Lahore",
    period: "CGPA 3.5 / 4.0",
    desc: "Studying core CS: data structures & algorithms, OOP, system design fundamentals, databases, and modern software engineering practices.",
    icon: GraduationCap,
  },
];


const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative w-full overflow-x-hidden overflow-y-hidden min-h-[100svh] flex items-center py-20 sm:py-24 md:py-32 px-4">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={heroBg.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)]" />
      <div className="absolute top-1/4 -right-32 hidden h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] animate-float sm:block" />
      <div className="absolute bottom-1/4 -left-32 hidden h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-float sm:block" style={{ animationDelay: "3s" }} />
      <div className="container-narrow relative w-full min-w-0">
        <FadeIn className="w-full max-w-5xl mx-auto text-center">
          <h1 className="mx-auto max-w-[22rem] sm:max-w-2xl md:max-w-5xl text-3xl min-[380px]:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight leading-[1.12] md:leading-[1.05] text-foreground break-words">
            Full Stack <span className="block sm:inline">Developer</span>{" "}
            <br className="hidden md:block" />
            <span className="block sm:inline">Building <span className="gradient-text">Modern Web Apps</span></span>
          </h1>

          {/* Swiper rotating taglines */}
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            allowTouchMove={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="hero-copy-swiper mt-6 md:mt-8 max-w-3xl mx-auto"
          >
            {[
              "I craft scalable, high-performance web apps using the MERN stack and modern cloud infrastructure.",
              "From concept to deployment — pixel-perfect React & Next.js experiences engineered for speed.",
              "Turning ideas into polished digital products that users love and businesses rely on.",
            ].map((t) => (
              <SwiperSlide key={t}>
                <p className="h-28 sm:h-24 md:h-28 text-base sm:text-lg md:text-2xl text-muted-foreground leading-7 md:leading-relaxed px-1 sm:px-4 flex items-center justify-center text-center overflow-hidden">
                  <span className="block max-w-full whitespace-normal break-words">{t}</span>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 md:mt-12 flex justify-center">
            <Link to="/projects" className="gradient-bg text-primary-foreground px-7 py-3 md:px-9 md:py-4 rounded-lg md:rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-base md:text-lg shadow-lg shadow-primary/25">
              View My Work <ArrowRight size={20} />
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-7 md:mt-10 flex justify-center gap-3 md:gap-4">
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
                className="p-2.5 md:p-3 rounded-xl glass-card hover:border-primary/40 text-muted-foreground hover:text-primary transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.3} className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { value: "5+", label: "Projects Built" },
            { value: "2+", label: "Years Experience" },
            { value: "1+", label: "Happy Clients" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 md:p-6 text-center hover:border-primary/20 transition-colors">
              <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
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
        <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6">
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
                <h3 className="font-heading font-semibold text-foreground mb-5 text-center">{group.category}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-secondary transition-all hover:-translate-y-1"
                      title={item.name}
                    >
                      <item.icon size={36} style={{ color: item.color }} className="transition-transform group-hover:scale-110" />
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">{item.name}</span>
                    </div>
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
