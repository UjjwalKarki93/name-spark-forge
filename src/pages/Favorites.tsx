
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSlot } from "@/components/AdSlot";
import { NameList } from "@/components/NameList";
import { useFavorites } from "@/hooks/useFavorites";
import { getPageSeo, updateDocumentMeta } from "@/utils/seo";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();
  
  useEffect(() => {
    // Update page metadata for SEO
    const seo = getPageSeo("favorites");
    updateDocumentMeta(seo);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Saved Names</h1>
                <p className="text-muted-foreground">
                  Review and manage your collection of favorite name ideas.
                </p>
              </div>
              
              {favorites.length > 0 && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                      <Trash className="h-4 w-4 mr-1" /> Clear All
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will remove all your saved names. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={clearFavorites} className="bg-red-500 text-white hover:bg-red-600">
                        Clear All
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
            
            {favorites.length > 0 ? (
              <>
                <NameList names={favorites} />
                <div className="mt-8">
                  <AdSlot id="favorites-ad" className="w-full h-[200px]" />
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-secondary/50 rounded-xl p-8 max-w-md mx-auto">
                  <h2 className="text-xl font-semibold mb-3">No Saved Names Yet</h2>
                  <p className="text-muted-foreground mb-6">
                    You haven't saved any name ideas yet. Browse our generators and save names you like by clicking the heart icon.
                  </p>
                  <Button asChild>
                    <Link to="/generate/startup">Start Generating Names</Link>
                  </Button>
                </div>
              </div>
            )}
            
            {favorites.length > 0 && (
              <div className="mt-8 bg-secondary/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Next Steps</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Compare your favorites and narrow down to your top 3-5 choices.</li>
                  <li>Check domain availability for your top picks.</li>
                  <li>Test your name ideas with potential customers or colleagues.</li>
                  <li>Search social media to ensure your name is unique.</li>
                  <li>Consider trademark availability before final selection.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
