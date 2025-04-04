
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/">Go to Homepage</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/generate/startup">Generate Names</Link>
              </Button>
            </div>
            
            <div className="mt-8 max-w-md">
              <h2 className="text-xl font-semibold mb-3">Popular Categories</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li>
                  <Link to="/generate/startup" className="text-primary hover:underline">
                    Startup Names
                  </Link>
                </li>
                <li>
                  <Link to="/generate/business" className="text-primary hover:underline">
                    Business Names
                  </Link>
                </li>
                <li>
                  <Link to="/generate/gamer" className="text-primary hover:underline">
                    Gaming Names
                  </Link>
                </li>
                <li>
                  <Link to="/generate/creator" className="text-primary hover:underline">
                    Creator Names
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className="text-primary hover:underline">
                    Trending Names
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="text-primary hover:underline">
                    Saved Names
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
