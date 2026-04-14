import { Link } from "react-router-dom";
import { Globe, MessageCircle, Link as LinkIcon, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container-narrow px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-bold text-foreground">
            Goo<span className="gradient-text">vex</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Engineering high-performance digital solutions for startups and enterprises worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {["DevOps Solutions", "Web Development", "App Development", "Cloud Consulting"].map((s) => (
              <span key={s} className="text-sm text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Globe, MessageCircle, LinkIcon, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Goovex. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
