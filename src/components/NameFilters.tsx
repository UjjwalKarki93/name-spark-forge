
import { Search, SlidersHorizontal, X, Wand2 } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { categories } from "./CategoryCard";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface NameFiltersProps {
  category: string;
  onCategoryChange: (category: string) => void;
  onLengthChange: (length: string) => void;
  onStyleChange: (style: string) => void;
  onSearch: (search: string) => void;
  onClearFilters: () => void;
  onCustomPrompt?: (prompt: string) => void;
}

interface CustomPromptFormValues {
  prompt: string;
}

export function NameFilters({
  category,
  onCategoryChange,
  onLengthChange,
  onStyleChange,
  onSearch,
  onClearFilters,
  onCustomPrompt
}: NameFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomPrompt, setShowCustomPrompt] = useState(false);
  
  const customPromptForm = useForm<CustomPromptFormValues>({
    defaultValues: {
      prompt: "",
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  const handleCustomPromptSubmit = (values: CustomPromptFormValues) => {
    if (onCustomPrompt) {
      onCustomPrompt(values.prompt);
      customPromptForm.reset();
    }
  };

  return (
    <div className="bg-card rounded-lg border p-4 mb-6">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search names..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button type="submit">Search</Button>
        
        {/* Custom prompt toggle */}
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowCustomPrompt(!showCustomPrompt)}
        >
          <Wand2 className="h-4 w-4 mr-1" />
          {showCustomPrompt ? "Hide" : "Custom"}
        </Button>
        
        {/* Desktop collapsible filters */}
        <Collapsible 
          open={isOpen} 
          onOpenChange={setIsOpen}
          className="hidden md:block"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-auto">
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select 
                  value={category} 
                  onValueChange={onCategoryChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.slug} value={cat.slug}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Name Length</label>
                <Select onValueChange={onLengthChange} defaultValue="any">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Name length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Length</SelectItem>
                    <SelectItem value="short">Short (1-6 chars)</SelectItem>
                    <SelectItem value="medium">Medium (7-12 chars)</SelectItem>
                    <SelectItem value="long">Long (13+ chars)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Style</label>
                <Select onValueChange={onStyleChange} defaultValue="any">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Name style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Style</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="fun">Fun & Playful</SelectItem>
                    <SelectItem value="tech">Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end ml-auto">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onClearFilters}
                  className="text-muted-foreground"
                >
                  <X className="h-4 w-4 mr-1" /> 
                  Clear Filters
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </form>
      
      {/* Custom prompt input */}
      {showCustomPrompt && (
        <div className="mt-4 border-t pt-4">
          <Form {...customPromptForm}>
            <form onSubmit={customPromptForm.handleSubmit(handleCustomPromptSubmit)} className="space-y-4">
              <FormField
                control={customPromptForm.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Prompt</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          placeholder="E.g., a space-themed guild for fantasy games..."
                          {...field}
                          className="flex-1"
                        />
                        <Button type="submit">Generate</Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      )}

      {/* Always visible on mobile */}
      <div className="mt-4 md:hidden">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-auto">
            <label className="text-sm font-medium mb-1 block">Category</label>
            <Select 
              value={category} 
              onValueChange={onCategoryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="text-sm font-medium mb-1 block">Name Length</label>
            <Select onValueChange={onLengthChange} defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Name length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Length</SelectItem>
                <SelectItem value="short">Short (1-6 chars)</SelectItem>
                <SelectItem value="medium">Medium (7-12 chars)</SelectItem>
                <SelectItem value="long">Long (13+ chars)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="text-sm font-medium mb-1 block">Style</label>
            <Select onValueChange={onStyleChange} defaultValue="any">
              <SelectTrigger>
                <SelectValue placeholder="Name style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Style</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="fun">Fun & Playful</SelectItem>
                <SelectItem value="tech">Technical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full flex justify-end">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-muted-foreground"
            >
              <X className="h-4 w-4 mr-1" /> 
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
