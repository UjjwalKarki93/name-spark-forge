
import { useEffect, useState } from "react";
import { NameData } from "@/components/NameCard";

export function useFavorites() {
  const [favorites, setFavorites] = useState<NameData[]>([]);

  useEffect(() => {
    // Load favorites from localStorage on mount
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error("Error loading favorites from localStorage:", e);
        localStorage.removeItem("favorites");
      }
    }
  }, []);

  const addFavorite = (nameData: NameData) => {
    setFavorites(prev => {
      const updated = [...prev, nameData];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return { favorites, addFavorite, removeFavorite, clearFavorites };
}
