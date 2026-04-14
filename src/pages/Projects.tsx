import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "CloudFlow Dashboard",
    category: "DevOps",
    desc: "Real-time infrastructure monitoring dashboard for a SaaS company processing 10M+ daily events.",
    tech: ["React", "Node.js", "AWS", "Grafana"],
  },
  {
    title: "Finova Trading Platform",
    category: "Web Development",
    desc: "High-frequency trading platform with sub-millisecond latency and real-time data visualization.",
    tech: ["Next.js", "WebSocket", "PostgreSQL", "Redis"],
  },
  {
    title: "MedConnect Mobile",
    category: "App Development",
    desc: "HIPAA-compliant telehealth app connecting patients with doctors across 15 states.",
    tech: ["React Native", "Firebase", "Stripe", "Twilio"],
  },
  {
    title: "LogiTrack Fleet System",
    category: "DevOps",
    desc: "IoT-powered fleet management system tracking 5,000+ vehicles in real-time.",
    tech: ["Python", "Kubernetes", "MQTT", "TimescaleDB"],
  },
  {
    title: "EduLearn Platform",
    category: "Web Development",
    desc: "Interactive e-learning platform with live classes, quizzes, and progress tracking for 100K+ students.",
    tech: ["React", "GraphQL", "MongoDB", "AWS"],
  },
  {
    title: "FreshCart Delivery",
    category: "App Development",
    desc: "On-demand grocery delivery app with route optimization and real-time order tracking.",
    tech: ["Flutter", "Node.js", "Google Maps", "Stripe"],
  },
];

const Projects = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A selection of real-world projects showcasing our expertise across DevOps, web, and mobile development.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="glass-card p-8 h-full flex flex-col hover:border-primary/30 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
