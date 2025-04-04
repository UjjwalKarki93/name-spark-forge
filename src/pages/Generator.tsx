
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NameData } from "@/components/NameCard";
import { NameList } from "@/components/NameList";
import { NameFilters } from "@/components/NameFilters";
import { AdSlot } from "@/components/AdSlot";
import { categories } from "@/components/CategoryCard";
import { filterByLength, generateNames, searchNames } from "@/utils/nameGenerator";
import { getPageSeo, updateDocumentMeta } from "@/utils/seo";
import { RotateCw } from "lucide-react";

const Generator = () => {
  const { category = "startup" } = useParams();
  const navigate = useNavigate();
  
  const [names, setNames] = useState<NameData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameLength, setNameLength] = useState("any");
  const [nameStyle, setNameStyle] = useState("any");

  // Get category details
  const categoryObj = categories.find(cat => cat.slug === category);
  
  useEffect(() => {
    if (!categoryObj) {
      // Redirect to startup names if category doesn't exist
      navigate("/generate/startup");
      return;
    }
    
    // Update page metadata for SEO
    const seo = getPageSeo("category", { category });
    updateDocumentMeta(seo);
    
    generateNewNames();
  }, [category]);

  const generateNewNames = () => {
    setLoading(true);
    // Simulate API call with setTimeout
    setTimeout(() => {
      const newNames = generateNames(category, 12);
      setNames(newNames);
      setLoading(false);
    }, 800);
  };

  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === "all") {
      // When "All Categories" is selected, stay on the same page
      // and update with a mix of names (in a real implementation)
      const mixedNames = categories.slice(0, 3).flatMap(cat => 
        generateNames(cat.slug, 4)
      );
      setNames(mixedNames);
    } else {
      // Navigate to the selected category page
      navigate(`/generate/${newCategory}`);
    }
  };

  const handleLengthChange = (length: string) => {
    setNameLength(length);
    if (length === "any") {
      // Skip filtering if "any" is selected
      return;
    }
    
    const filteredNames = filterByLength(names, length);
    if (filteredNames.length < 3) {
      // Generate more names if filtered results are too few
      const newNames = generateNames(category, 8);
      const filtered = filterByLength(newNames, length);
      setNames(prev => [...filtered, ...prev].slice(0, 12));
    } else {
      setNames(filteredNames);
    }
  };

  const handleStyleChange = (style: string) => {
    setNameStyle(style);
    // In a real implementation, this would apply style-based filtering
    // For now, we'll just regenerate names to simulate the effect
    if (style !== "any") {
      generateNewNames();
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      generateNewNames();
      return;
    }
    
    const searchResults = searchNames(names, term);
    if (searchResults.length === 0) {
      // If no results, generate new batch and search in those
      const newBatch = generateNames(category, 20);
      const newSearchResults = searchNames(newBatch, term);
      setNames(newSearchResults.length > 0 ? newSearchResults : []);
    } else {
      setNames(searchResults);
    }
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setNameLength("any");
    setNameStyle("any");
    generateNewNames();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {categoryObj ? `${categoryObj.title} Name Generator` : 'Name Generator'}
              </h1>
              <p className="text-muted-foreground">
                {categoryObj 
                  ? categoryObj.description 
                  : 'Generate creative names for your new project.'}
              </p>
            </div>
            
            <NameFilters 
              category={category}
              onCategoryChange={handleCategoryChange}
              onLengthChange={handleLengthChange}
              onStyleChange={handleStyleChange}
              onSearch={handleSearch}
              onClearFilters={handleClearFilters}
            />
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                Name Results
                {searchTerm && ` for "${searchTerm}"`}
              </h2>
              <Button 
                onClick={generateNewNames}
                variant="outline"
                className="flex items-center gap-1"
              >
                <RotateCw className="h-4 w-4 mr-1" />
                Generate New Names
              </Button>
            </div>
            
            <NameList names={names} loading={loading} />
            
            <div className="mt-8">
              <AdSlot id="bottom-ad" className="w-full h-[200px]" />
            </div>
            
            <div className="mt-8 bg-secondary/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">
                Tips for Choosing a Great {categoryObj?.title} Name
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Keep it short and memorable - names with 2-3 syllables are easier to remember.</li>
                <li>Ensure it's easy to pronounce and spell for better word-of-mouth marketing.</li>
                <li>Check domain availability before finalizing your choice.</li>
                <li>Avoid names that limit your growth or are too specific to one product.</li>
                <li>Test your name with potential customers to gauge their first impression.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
