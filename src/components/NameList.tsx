
import { NameCard, NameData } from "./NameCard";
import { AdSlot } from "./AdSlot";

interface NameListProps {
  names: NameData[];
  loading?: boolean;
}

export function NameList({ names, loading = false }: NameListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="name-card animate-pulse flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="h-4 w-16 bg-muted rounded"></div>
              <div className="h-8 w-8 bg-muted rounded-full"></div>
            </div>
            <div className="h-8 w-3/4 mx-auto bg-muted rounded my-4"></div>
            <div className="flex justify-center gap-2 mt-3">
              <div className="h-8 w-20 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (names.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No names found. Try adjusting your filters or generating new names.</p>
      </div>
    );
  }

  // Insert ad after every 6 items
  const nameCardsWithAds = [];
  names.forEach((name, index) => {
    nameCardsWithAds.push(
      <NameCard 
        key={name.id} 
        nameData={name} 
        isHighlighted={index === 0} 
      />
    );

    if ((index + 1) % 6 === 0 && index !== names.length - 1) {
      nameCardsWithAds.push(
        <AdSlot 
          key={`ad-${index}`} 
          id={`list-ad-${Math.floor(index / 6)}`}
          className="col-span-full h-[120px] my-2"
        />
      );
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {nameCardsWithAds}
    </div>
  );
}
