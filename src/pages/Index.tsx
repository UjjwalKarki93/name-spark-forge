
import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard, categories } from "@/components/CategoryCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NameData } from "@/components/NameCard";
import { NameList } from "@/components/NameList";
import { getTrendingNames } from "@/utils/nameGenerator";
import { getPageSeo, updateDocumentMeta } from "@/utils/seo";

const Index = () => {
  // Generate some sample trending names for the homepage
  const trendingNames: NameData[] = getTrendingNames(3);
  
  useEffect(() => {
    // Update page metadata for SEO
    const seo = getPageSeo("home");
    updateDocumentMeta(seo);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-12 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Find Names by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.slice(0, 4).map((category) => (
                <CategoryCard
                  key={category.slug}
                  title={category.title}
                  description={category.description}
                  slug={category.slug}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Trending Names</h2>
              <a 
                href="/trending" 
                className="text-primary hover:underline text-sm"
              >
                View All Trending Names
              </a>
            </div>
            
            <NameList names={trendingNames} />
          </div>
        </section>
        
        <section className="py-12 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Why Use NameSparkForge?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h3 className="text-lg font-medium mb-2">Find Unique Names</h3>
                  <p className="text-muted-foreground">Discover original, catchy names that help your brand stand out from competitors.</p>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <h3 className="text-lg font-medium mb-2">Save Your Favorites</h3>
                  <p className="text-muted-foreground">Build a shortlist of name ideas to review and share with your team or clients.</p>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <h3 className="text-lg font-medium mb-2">Check Domain Availability</h3>
                  <p className="text-muted-foreground">Quickly see if your preferred domain name is available for your new venture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">More Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {categories.slice(4).map((category) => (
                  <CategoryCard
                    key={category.slug}
                    title={category.title}
                    description={category.description}
                    slug={category.slug}
                    icon={category.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
