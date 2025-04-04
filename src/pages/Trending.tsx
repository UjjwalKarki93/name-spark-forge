
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NameData } from "@/components/NameCard";
import { NameList } from "@/components/NameList";
import { NameFilters } from "@/components/NameFilters";
import { AdSlot } from "@/components/AdSlot";
import { getTrendingNames } from "@/utils/nameGenerator";
import { getPageSeo, updateDocumentMeta } from "@/utils/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Trending = () => {
  const [names, setNames] = useState<NameData[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("today");
  
  useEffect(() => {
    // Update page metadata for SEO
    const seo = getPageSeo("trending");
    updateDocumentMeta(seo);
    
    loadTrendingNames();
  }, []);

  const loadTrendingNames = () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const trendingNames = getTrendingNames(18);
      setNames(trendingNames);
      setLoading(false);
    }, 800);
  };

  const handleCategoryChange = (category: string) => {
    setLoading(true);
    // Simulate filtering by category
    setTimeout(() => {
      if (category === "all") {
        loadTrendingNames();
      } else {
        const filteredNames = getTrendingNames(12).filter(
          name => name.category === category
        );
        setNames(filteredNames);
      }
      setLoading(false);
    }, 400);
  };

  const handleTimeframeChange = (time: string) => {
    setTimeframe(time);
    setLoading(true);
    // Simulate API call with different data based on timeframe
    setTimeout(() => {
      const count = time === "today" ? 18 : time === "week" ? 15 : 12;
      const trendingNames = getTrendingNames(count);
      setNames(trendingNames);
      setLoading(false);
    }, 600);
  };

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      loadTrendingNames();
      return;
    }

    const term = searchTerm.toLowerCase();
    const filteredNames = names.filter(name => 
      name.name.toLowerCase().includes(term)
    );
    setNames(filteredNames);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Trending Names</h1>
              <p className="text-muted-foreground">
                Explore popular and trending names across different categories. Get inspired by what's working for others.
              </p>
            </div>
            
            <div className="mb-6">
              <Tabs defaultValue="today" onValueChange={handleTimeframeChange}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>
                
                <TabsContent value="today" className="mt-0">
                  <NameFilters 
                    category="all"
                    onCategoryChange={handleCategoryChange}
                    onLengthChange={() => {}}
                    onStyleChange={() => {}}
                    onSearch={handleSearch}
                    onClearFilters={loadTrendingNames}
                  />
                </TabsContent>
                
                <TabsContent value="week" className="mt-0">
                  <NameFilters 
                    category="all"
                    onCategoryChange={handleCategoryChange}
                    onLengthChange={() => {}}
                    onStyleChange={() => {}}
                    onSearch={handleSearch}
                    onClearFilters={loadTrendingNames}
                  />
                </TabsContent>
                
                <TabsContent value="month" className="mt-0">
                  <NameFilters 
                    category="all"
                    onCategoryChange={handleCategoryChange}
                    onLengthChange={() => {}}
                    onStyleChange={() => {}}
                    onSearch={handleSearch}
                    onClearFilters={loadTrendingNames}
                  />
                </TabsContent>
              </Tabs>
            </div>
            
            <NameList names={names} loading={loading} />
            
            <div className="mt-8">
              <AdSlot id="trending-ad" className="w-full h-[200px]" />
            </div>
            
            <div className="mt-8 bg-secondary/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">Naming Trends</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Current trends show businesses favoring short, distinctive names that are easy to pronounce and remember. 
                  Tech startups continue to embrace made-up words or creative combinations, while established businesses 
                  prefer names that convey reliability and expertise.
                </p>
                <p>
                  Gaming names are trending toward shorter, impactful terms with distinctive characters, 
                  while creative businesses are experimenting with descriptive, evocative names that hint at their specialty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trending;
