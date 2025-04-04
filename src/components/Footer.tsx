
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-primary font-bold text-lg">
              NameSparkForge
            </Link>
            <p className="mt-2 text-sm text-foreground/70">
              Find the perfect name for your startup, business, or gaming profile.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Name Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/generate/startup" className="text-foreground/70 hover:text-foreground transition-colors">
                  Startup Names
                </Link>
              </li>
              <li>
                <Link to="/generate/business" className="text-foreground/70 hover:text-foreground transition-colors">
                  Business Names
                </Link>
              </li>
              <li>
                <Link to="/generate/gamer" className="text-foreground/70 hover:text-foreground transition-colors">
                  Gaming Names
                </Link>
              </li>
              <li>
                <Link to="/generate/creator" className="text-foreground/70 hover:text-foreground transition-colors">
                  Creator Names
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trending" className="text-foreground/70 hover:text-foreground transition-colors">
                  Trending Names
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-foreground/70 hover:text-foreground transition-colors">
                  Saved Names
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Domain Check
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} NameSparkForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
