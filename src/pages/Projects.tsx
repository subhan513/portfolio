import { ExternalLink, Code } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import ecommerceMultivendor from "@/assets/ecommerce-multivendor.png";

const projects = [
  {
    title: "Real Time Chat Application",
    category: "Web Development",
    desc: "A real-time chat application built with React, Node.js, and Socket.io, allowing users to chat in real-time. Features include user authentication, room creation, and message history.",
    tech: ["React", "Node.js", "Socket.io", "Real-time Updates"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/chatApp.png",
    demo: "https://drive.google.com/file/d/1iZeOolkx5UUkKdilY6TN88BTsGWlOV62/view?usp=sharing",
    code: "https://github.com/subhan513/RealTime-Chat-App",
  },
  {
    title: "E-Commerce Store & Admin Dashboard",
    category: "Full Stack",
    desc: "A full-stack e-commerce application with secure Stripe payments, Redis-powered real-time updates, and a comprehensive admin dashboard for managing products, orders, and users.",
    tech: ["React.js", "Node.js", "Stripe", "Redis"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/ecommerce.png",
  },
  {
    title: "FullStack Recipe Finder App",
    category: "App Development",
    desc: "A comprehensive recipe discovery app that helps users find, save, and create delicious recipes with ingredient filtering and personalized recommendations.",
    tech: ["React Native", "Node.js", "Express", "NeonDB"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/mobile.png",
    code: "https://github.com/subhan513/Recipe-Finder-App",
  },
  {
    title: "SaaS Landing Pages",
    category: "Web Development",
    desc: "A production-focused project demonstrating clean architecture, responsive UI, and practical business value for SaaS companies.",
    tech: ["React.js", "Tailwind CSS", "Responsive Design"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/saas.png",
    demo: "https://saas-landing-pages-self.vercel.app/",
    code: "https://github.com/subhan513/SaaS-Landing-Pages",
  },
  {
    title: "NewsMonkey — Headlines Platform",
    category: "Web Development",
    desc: "Stay updated with the latest news from around the world. Features top headlines covering stock market, politics, health, and current affairs with a clean, responsive interface.",
    tech: ["React", "News API", "Real-time Updates"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/efc34539-41a6-4d8b-9720-90395f2f231b.png",
    demo: "https://newsapp-three-jet.vercel.app/",
    code: "https://github.com/subhan513/newsapp",
  },
  {
    title: "Educational Institution Website",
    category: "Web Development",
    desc: "A comprehensive educational platform with admission management, institutional information, and an inspiring mission-driven design for students and faculty.",
    tech: ["React", "Tailwind CSS", "CMS"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/6c0347b2-15cf-414d-962f-8b9ba9a86da8.png",
    demo: "https://sharifeducaitonalcomplex.vercel.app/",
    code: "https://github.com/subhan513/Sharif-Complex",
  },
  {
    title: "Movie Entertainment Platform",
    category: "Web Development",
    desc: "Discover the latest movies and entertainment content with an immersive viewing experience, browse trending blockbusters with stunning visual presentation.",
    tech: ["React", "Appwrite", "API Integration", "Tailwind CSS"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/7e5f0ea2-1a8a-4132-bc7b-a18630cef7fc.png",
    demo: "https://movie-application-git-main-subhan513s-projects.vercel.app/",
    code: "https://github.com/subhan513/movie-app",
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
            A selection of real-world projects showcasing our expertise across full-stack web, mobile, and SaaS development.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="glass-card overflow-hidden h-full flex flex-col group hover:border-primary/30 transition-colors">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="mt-5 pt-4 border-t border-border flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        Live Demo <ExternalLink size={13} />
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-xs font-medium border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center gap-1.5"
                      >
                        View Code <Code size={13} />
                      </a>
                    )}
                  </div>
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
