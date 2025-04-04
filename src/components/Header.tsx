
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Heart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-lg">
            <span className="hidden sm:inline-block">Namerly</span>
            <span className="sm:hidden">NM</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/generate/startup" 
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Startups
          </Link>
          <Link 
            to="/generate/business" 
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Business
          </Link>
          <Link 
            to="/generate/gamer" 
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Gaming
          </Link>
          <Link 
            to="/trending" 
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Trending
          </Link>
          <Link 
            to="/favorites" 
            className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Heart className="h-4 w-4" />
            Saved Names
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/trending">
              <Button variant="ghost" size="icon">
                <TrendingUp className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/favorites">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
