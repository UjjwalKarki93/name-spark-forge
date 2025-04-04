
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPageSeo, updateDocumentMeta } from "@/utils/seo";

const About = () => {
  useEffect(() => {
    // Update page metadata for SEO
    const seo = getPageSeo("about");
    updateDocumentMeta(seo);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About NameSparkForge</h1>
            
            <section className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                NameSparkForge is a free tool designed to help entrepreneurs, businesses, gamers, 
                and creators find the perfect name for their ventures. We've built an advanced name 
                generation system that creates unique, creative suggestions across multiple categories.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
              <p>
                Our name generator combines linguistic patterns, industry-specific terminology, and 
                creativity principles to generate names that are:
              </p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>Memorable and unique</li>
                <li>Relevant to your industry or purpose</li>
                <li>Available as domains (in many cases)</li>
                <li>Scalable as your business grows</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
              <p>
                Our name generation process follows these steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2 my-4">
                <li>You select a category that matches your needs</li>
                <li>Our algorithm generates potential names based on effective naming patterns</li>
                <li>You can filter results by length, style, and other criteria</li>
                <li>Save favorites to compare and decide later</li>
                <li>Check domain availability with a single click</li>
              </ol>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Naming Resources</h2>
              <p>
                Beyond our name generator, we provide resources to help you make the best choice:
              </p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>Trending names that show current popularity</li>
                <li>Industry-specific naming tips and best practices</li>
                <li>Domain availability checking</li>
                <li>Name comparison tools (coming soon)</li>
              </ul>
              
              <div className="bg-secondary/50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold mb-3">Why Names Matter</h3>
                <p className="mb-4">
                  Your name is often the first impression people have of your brand, product, or online presence. 
                  A great name can:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Make your brand more memorable</li>
                  <li>Communicate your values and purpose</li>
                  <li>Differentiate you from competitors</li>
                  <li>Improve word-of-mouth marketing</li>
                  <li>Enhance your SEO and discoverability</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started</h2>
              <p className="mb-6">
                Ready to find your perfect name? Choose a category below to begin generating ideas:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <Button asChild variant="outline">
                  <Link to="/generate/startup">Startup Names</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/generate/business">Business Names</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/generate/gamer">Gaming Names</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/generate/creator">Creator Names</Link>
                </Button>
              </div>
              
              <p className="text-center mt-8">
                <Button asChild size="lg">
                  <Link to="/">Explore All Categories</Link>
                </Button>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
