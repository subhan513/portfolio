import { Link } from "react-router-dom";
import { Code2, Briefcase, Mail, AtSign } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container-narrow px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-bold text-foreground">
            Muhammad <span className="gradient-text">Subhan</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Full Stack Developer crafting scalable, high-performance web & mobile applications.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Expertise</h4>
          <div className="flex flex-col gap-2">
            {["Full Stack Development", "Web Development", "App Development", "DevOps & Cloud"].map((s) => (
              <span key={s} className="text-sm text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Connect</h4>
          <div className="flex gap-3">
            {[
              { Icon: Code2, href: "https://github.com/subhan513", label: "GitHub" },
              { Icon: Briefcase, href: "https://www.linkedin.com/in/muhammadsubhanwebdev/", label: "LinkedIn" },
              { Icon: AtSign, href: "#", label: "Twitter" },
              { Icon: Mail, href: "mailto:subhancs57@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Muhammad Subhan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
