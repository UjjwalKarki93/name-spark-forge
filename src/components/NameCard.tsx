
import { useState } from "react";
import { Check, Copy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useFavorites } from "@/hooks/useFavorites";

export interface NameData {
  id: string;
  name: string;
  category: string;
  length: number;
}

interface NameCardProps {
  nameData: NameData;
  isHighlighted?: boolean;
}

export function NameCard({ nameData, isHighlighted = false }: NameCardProps) {
  const [copied, setCopied] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some(fav => fav.id === nameData.id);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nameData.name);
    setCopied(true);
    toast.success("Name copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(nameData.id);
      toast.info(`"${nameData.name}" removed from favorites`);
    } else {
      addFavorite(nameData);
      toast.success(`"${nameData.name}" added to favorites`);
    }
  };

  return (
    <div className={cn(
      "name-card group", 
      isHighlighted && "name-card-highlight animate-pulse-subtle"
    )}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs uppercase text-muted-foreground">{nameData.category}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-muted-foreground group-hover:text-foreground"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-primary text-primary")} />
        </Button>
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-center py-3 px-2">{nameData.name}</h3>
      
      <div className="flex justify-center gap-2 mt-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={copyToClipboard}
          aria-label="Copy name"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </Button>
        
        <Button size="sm" asChild>
          <a 
            href={`https://www.godaddy.com/domainsearch/find?domainToCheck=${nameData.name.toLowerCase().replace(/\s+/g, '')}.com`} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Check domain availability"
          >
            Get Domain
          </a>
        </Button>
      </div>
    </div>
  );
}
