
import { useEffect, useRef, useState } from "react";

interface AdSlotProps {
  id: string;
  className?: string;
  showPlaceholder?: boolean;
}

// This is a placeholder component that would integrate with Google AdSense in production
export function AdSlot({ id, className = "", showPlaceholder = true }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  
  useEffect(() => {
    // In a real implementation, this would initialize the ad
    // For now, we'll just simulate ad loading
    const timer = setTimeout(() => {
      setAdLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!showPlaceholder) {
    return null;
  }
  
  return (
    <div
      ref={adRef}
      id={`ad-container-${id}`}
      className={`bg-secondary border border-border rounded-lg overflow-hidden ${className}`}
    >
      {/* This is just a placeholder - in production this would be an actual ad */}
      <div className="flex items-center justify-center h-full min-h-[90px] p-4 text-center text-sm text-muted-foreground">
        {adLoaded ? (
          <div className="flex flex-col">
            <span>Advertisement</span>
            <span className="text-xs">(Placeholder - actual ads in production)</span>
          </div>
        ) : (
          <div className="animate-pulse">Loading advertisement...</div>
        )}
      </div>
    </div>
  );
}
