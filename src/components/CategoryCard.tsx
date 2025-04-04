
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Lightbulb, 
  Gamepad2, 
  Video, 
  BookOpen, 
  Coffee, 
  Music, 
  Code,
  LucideIcon
} from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  slug: string;
  icon: LucideIcon;
  className?: string;
}

export function CategoryCard({ 
  title, 
  description, 
  slug, 
  icon: Icon,
  className 
}: CategoryCardProps) {
  return (
    <div className={cn(
      "border rounded-xl p-6 bg-card text-card-foreground", 
      "hover:shadow-md transition-all", 
      className
    )}>
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <Button asChild className="w-full">
        <Link to={`/generate/${slug}`}>Generate {title} Names</Link>
      </Button>
    </div>
  );
}

export const categories = [
  {
    title: "Startup",
    description: "Modern, catchy names perfect for innovative startups.",
    slug: "startup",
    icon: Lightbulb,
  },
  {
    title: "Business",
    description: "Professional names ideal for established businesses.",
    slug: "business",
    icon: Briefcase,
  },
  {
    title: "Gaming",
    description: "Epic, unique gamer tags for your online presence.",
    slug: "gamer",
    icon: Gamepad2,
  },
  {
    title: "Creator",
    description: "Creative names for content creators and influencers.",
    slug: "creator",
    icon: Video,
  },
  {
    title: "Blog",
    description: "Catchy blog titles that stand out in search results.",
    slug: "blog",
    icon: BookOpen,
  },
  {
    title: "Cafe",
    description: "Cozy, inviting names for coffee shops and cafes.",
    slug: "cafe",
    icon: Coffee,
  },
  {
    title: "Band",
    description: "Distinctive names for musical groups and artists.",
    slug: "band",
    icon: Music,
  },
  {
    title: "Tech",
    description: "Future-forward names for tech products and services.",
    slug: "tech",
    icon: Code,
  },
];
