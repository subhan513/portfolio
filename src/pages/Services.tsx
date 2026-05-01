import { Code, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "High-performance web applications built with modern frameworks, optimized for speed, accessibility, and conversion.",
    features: ["React & Next.js Applications", "MERN Stack Development", "Progressive Web Apps", "E-commerce Platforms", "Custom CMS Solutions", "Performance Optimization"],
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Services I <span className="gradient-text">Provide</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From infrastructure to interfaces, I deliver end-to-end solutions engineered for performance, security, and growth.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container-narrow space-y-8">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <div className="glass-card p-8 md:p-10 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <service.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-foreground">{service.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.desc}</p>
                  <Link to="/contact" className="mt-5 gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
