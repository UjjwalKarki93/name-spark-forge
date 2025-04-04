
import { NameData } from "@/components/NameCard";

// Generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

// Name prefixes by category
const prefixes: Record<string, string[]> = {
  startup: ["Nova", "Flux", "Zen", "Arc", "Pixel", "Echo", "Lumina", "Nexus", "Orbit", "Pulse", "Shift", "Spark", "Wave", "Hyper", "Meta", "Cosmic", "Apex", "Swift"],
  business: ["Alpha", "Prime", "Global", "Elite", "Excel", "Summit", "Prestige", "Strategic", "Pinnacle", "Premier", "Optimum", "Core", "Focus", "Trust", "Synergy", "Integrity"],
  gamer: ["Frost", "Shadow", "Blaze", "Venom", "Storm", "Phantom", "Havoc", "Rogue", "Titan", "Omega", "Chaos", "Viper", "Phoenix", "Dragon", "Ghost", "Reaper", "Cyber"],
  creator: ["Visual", "Artisan", "Studio", "Canvas", "Create", "Palette", "Design", "Media", "Vision", "Frame", "Motion", "Craft", "Prism", "Lens", "Story", "Creative", "Flow"],
  blog: ["Daily", "Insider", "Journal", "Chronicle", "Buzz", "Scoop", "Voice", "Diary", "Pages", "Column", "Insight", "Notion", "Thread", "Article", "Chapter", "Draft"],
  cafe: ["Brew", "Roast", "Bean", "Grind", "Sip", "Blend", "Cup", "Aroma", "Espresso", "Drip", "Steam", "Press", "Pour", "Cafe", "Coffee", "Bakery", "Creme", "Mocha"],
  band: ["Sonic", "Echo", "Audio", "Rhythm", "Beat", "Melody", "Chord", "Harmony", "Amp", "Verse", "Sound", "Tune", "Octave", "Vocal", "Tempo", "Pitch", "Note", "Jam"],
  tech: ["Byte", "Data", "Code", "Tech", "Cyber", "Digital", "Quantum", "Nano", "Net", "Cloud", "Web", "Binary", "Core", "Logic", "Algo", "Chip", "Dev", "Crypto", "Ai"],
  // Default for any other category
  default: ["Star", "Blue", "Green", "Red", "Fast", "Bright", "Smart", "Clever", "Wise", "Bold", "Brave", "Great", "Grand", "Fresh", "New", "Plus", "Ultra", "Wonder"]
};

// Name suffixes by category
const suffixes: Record<string, string[]> = {
  startup: ["Labs", "AI", "App", "Tech", "Hub", "Space", "Box", "Link", "Connect", "Base", "Forge", "Works", "Mind", "Flow", "Spark", "Logic", "Sync", "HQ", "Pro", "Studio", "Ware"],
  business: ["Group", "Partners", "Associates", "Solutions", "Services", "Advisors", "Corp", "Inc", "Enterprises", "Agency", "Consulting", "Systems", "International", "Management"],
  gamer: ["X", "Pro", "Gaming", "Plays", "Sniper", "Hunter", "Master", "Lord", "King", "Boss", "Champion", "Warrior", "Ninja", "Assassin", "Legend", "Hero", "Slayer", "Destroyer"],
  creator: ["Pro", "Studios", "Creates", "Design", "Arts", "Works", "Media", "Creative", "Productions", "Visuals", "Digital", "Ink", "Labs", "Workshop", "Space", "House"],
  blog: ["Post", "Blog", "News", "Times", "Space", "Corner", "Hub", "Spot", "Zone", "Central", "Press", "Wire", "Media", "Report", "Review", "Digest", "Update", "Feed"],
  cafe: ["Cafe", "Coffee", "Shop", "House", "Bar", "Lounge", "Corner", "Cup", "Kitchen", "Bake", "Bistro", "Roasters", "Brew", "Press", "Spot", "Place"],
  band: ["Sound", "Beat", "Waves", "Band", "Crew", "Collective", "Ensemble", "Orchestra", "Records", "Audio", "Music", "Tones", "Groove", "Jam", "Symphony"],
  tech: ["Tech", "Software", "Systems", "Solutions", "Digital", "Labs", "Networks", "IT", "Computing", "Data", "Soft", "InfoTech", "Apps", "Works", "Stack", "API", "Byte"],
  // Default for any other category
  default: ["Co", "Group", "Team", "Zone", "Hub", "Spot", "Place", "Station", "Center", "Point", "Base", "Club", "Nation", "World", "Quest", "Force"]
};

// Name roots by category
const roots: Record<string, string[]> = {
  startup: ["bright", "clear", "bold", "quick", "swift", "smart", "sharp", "vivid", "rapid", "agile", "novel", "nimble", "sleek", "slick", "keen", "vast", "wide", "broad", "grand"],
  business: ["steady", "solid", "stable", "secure", "strong", "robust", "exact", "firm", "sound", "able", "sure", "fit", "safe", "certain", "apt", "adept", "skilled", "expert"],
  gamer: ["dark", "wild", "mad", "rage", "fury", "blaze", "storm", "void", "doom", "dead", "neon", "toxic", "lethal", "fatal", "elite", "savage", "brutal", "epic", "mega", "ultra"],
  creator: ["art", "draw", "paint", "sketch", "craft", "make", "build", "form", "shape", "mold", "style", "design", "color", "image", "photo", "film", "shoot", "record", "render"],
  blog: ["write", "read", "story", "post", "tale", "word", "text", "type", "note", "page", "print", "quote", "flash", "brief", "daily", "quick", "fresh", "trend", "viral", "buzz"],
  cafe: ["warm", "cozy", "sweet", "rich", "fresh", "hot", "mild", "bold", "smooth", "creamy", "frothy", "tasty", "spice", "sugar", "cream", "roast", "brew", "bake", "toast"],
  band: ["sound", "music", "beat", "rock", "jazz", "vibe", "tune", "song", "note", "chord", "play", "jam", "rhythm", "groove", "bass", "drum", "solo", "voice", "vocal", "audio"],
  tech: ["code", "data", "bit", "byte", "web", "app", "net", "site", "cloud", "cyber", "logic", "chip", "grid", "server", "system", "smart", "device", "signal", "mobile", "edge"],
  // Default for any other category
  default: ["good", "nice", "fine", "great", "top", "main", "high", "low", "big", "small", "wide", "deep", "long", "short", "thick", "thin", "full", "half", "mid"]
};

/**
 * Generate random names for a specific category
 */
export function generateNames(category: string, count: number = 10): NameData[] {
  const catPrefixes = prefixes[category] || prefixes.default;
  const catSuffixes = suffixes[category] || suffixes.default;
  const catRoots = roots[category] || roots.default;
  
  const names: NameData[] = [];
  
  for (let i = 0; i < count; i++) {
    // Choose random generation strategy
    const strategy = Math.floor(Math.random() * 4);
    
    let name = "";
    
    switch (strategy) {
      case 0:
        // Prefix + Root
        name = getRandomItem(catPrefixes) + capitalize(getRandomItem(catRoots));
        break;
      case 1:
        // Root + Suffix
        name = capitalize(getRandomItem(catRoots)) + getRandomItem(catSuffixes);
        break;
      case 2:
        // Prefix + Suffix
        name = getRandomItem(catPrefixes) + getRandomItem(catSuffixes);
        break;
      case 3:
        // Prefix + Root + Suffix - for longer names
        name = getRandomItem(catPrefixes) + capitalize(getRandomItem(catRoots)) + getRandomItem(catSuffixes);
        break;
    }
    
    names.push({
      id: generateId(),
      name,
      category,
      length: name.length
    });
  }
  
  return names;
}

/**
 * Get trending names (mock data for now)
 */
export function getTrendingNames(count: number = 15): NameData[] {
  const trendingCategories = Object.keys(prefixes);
  const names: NameData[] = [];
  
  for (let i = 0; i < count; i++) {
    const randomCategory = getRandomItem(trendingCategories);
    const nameList = generateNames(randomCategory, 1);
    names.push(nameList[0]);
  }
  
  return names;
}

/**
 * Filter names by length
 */
export function filterByLength(names: NameData[], lengthType: string): NameData[] {
  switch(lengthType) {
    case "short":
      return names.filter(name => name.name.length <= 6);
    case "medium":
      return names.filter(name => name.name.length > 6 && name.name.length <= 12);
    case "long":
      return names.filter(name => name.name.length > 12);
    default:
      return names;
  }
}

/**
 * Search names by text
 */
export function searchNames(names: NameData[], searchTerm: string): NameData[] {
  if (!searchTerm) return names;
  const term = searchTerm.toLowerCase();
  return names.filter(name => name.name.toLowerCase().includes(term));
}

// Helper functions
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
