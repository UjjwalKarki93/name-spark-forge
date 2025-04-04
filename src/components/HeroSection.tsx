
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Find Your Perfect <span className="text-primary">Name</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Generate unique, catchy names for your startup, business, or online presence instantly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/generate/startup">Generate Startup Names</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/trending">Explore Trending Names</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
