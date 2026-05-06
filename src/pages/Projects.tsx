import { ExternalLink, Code } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import ecommerceMultivendor from "@/assets/ecommerce-multivendor.jpg";
import etihadEstate from "@/assets/etihad-estate.jpg";
import bugHunterAi from "@/assets/bug-hunter-ai.jpg";
import ecommerceAdmin from "@/assets/ecommerce-admin.jpg";
import educationalWebsite from "@/assets/educational-website.jpg";
import moviePlatform from "@/assets/movie-platform.jpg";

const projects = [
  {
    title: "Etihad Estate — Real Estate Platform",
    category: "Full Stack",
    desc: "Discover, buy, sell, or rent properties effortlessly. Browse listings, explore neighborhoods, and post properties in minutes — a seamless, user-friendly real estate experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: etihadEstate,
    demo: "https://real-estate-mlx5.vercel.app/",
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    category: "Full Stack",
    desc: "A multi-vendor e-commerce platform where sellers create stores, manage products, orders & wallet. Admin manages users, approves withdrawals. Buyers pay securely via Stripe with role-based authentication and full CRUD operations.",
    tech: ["React.js", "Node.js", "Stripe", "MongoDB"],
    image: ecommerceMultivendor,
    demo: "https://multi-vendor-e-commerce-zrmx.vercel.app/",
  },
  {
    title: "Bug Hunter AI — Interview & Debugging Platform",
    category: "AI / Full Stack",
    desc: "An AI-powered debugging coach and FAANG interview prep platform. Features iterative bug hunting, dynamic question generation, company-specific mock interviews (Google, Meta, Amazon), tailored difficulty levels, progressive smart hints, real-world case studies, and personalized skill feedback with progress tracking.",
    tech: ["React", "AI/LLM", "Node.js", "Tailwind CSS"],
    image: bugHunterAi,
    demo: "https://bug-hunter-ai-tau.vercel.app/",
  },
  {
    title: "E-Commerce Store & Admin Dashboard",
    category: "Full Stack",
    desc: "A full-stack e-commerce application with secure Stripe payments, Redis-powered real-time updates, and a comprehensive admin dashboard for managing products, orders, and users.",
    tech: ["React.js", "Node.js", "Stripe", "Redis"],
    image: "https://subhanwebdev.vercel.app/lovable-uploads/ecommerce.png",
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
            A selection of real-world projects I've built — showcasing my expertise across full-stack web, mobile, and SaaS development.
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
