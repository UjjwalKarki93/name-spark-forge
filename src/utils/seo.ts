
export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

// Set default SEO metadata for each page type
export const getPageSeo = (page: string, params?: Record<string, string>): SeoProps => {
  const baseSeoData: Record<string, SeoProps> = {
    home: {
      title: "NameSparkForge | Creative Name Generator for Startups & Businesses",
      description: "Generate unique, catchy names for your startup, business, or online presence with our free name generator tool.",
      keywords: "name generator, business names, startup names, brand name ideas, company name generator",
      ogType: "website",
    },
    generate: {
      title: "Generate Creative Names for Your New Venture | NameSparkForge",
      description: "Find the perfect name for your project with our AI-powered name generator. Get instant results tailored to your industry.",
      keywords: "generate names, business name ideas, startup naming, brand generator, name suggestions",
      ogType: "website",
    },
    trending: {
      title: "Trending & Popular Names for New Businesses | NameSparkForge",
      description: "Explore trending and popular names across different industries. Get inspired by what's working for others.",
      keywords: "trending names, popular business names, startup name trends, brand name trends",
      ogType: "website",
    },
    favorites: {
      title: "Your Saved Name Ideas | NameSparkForge",
      description: "View your saved name ideas and make your final selection for your new project or business.",
      keywords: "saved names, favorite business names, name shortlist, business name selection",
      ogType: "website",
    },
    about: {
      title: "About NameSparkForge | How Our Name Generator Works",
      description: "Learn about our name generation technology and how we help businesses find the perfect brand name.",
      keywords: "about name generator, naming methodology, business name creation, brand name development",
      ogType: "website",
    }
  };

  // Special case for category pages
  if (page === 'category' && params?.category) {
    const category = params.category;
    const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
    
    return {
      title: `${categoryCapitalized} Name Generator | Creative ${categoryCapitalized} Name Ideas`,
      description: `Generate unique, catchy ${category} names with our free name generator tool. Find the perfect name for your ${category} today.`,
      keywords: `${category} name generator, ${category} names, ${category} name ideas, ${category} naming`,
      ogType: "website",
    };
  }

  return baseSeoData[page] || baseSeoData.home;
};

// Use this function to update document head with SEO meta tags
export function updateDocumentMeta(seo: SeoProps): void {
  document.title = seo.title;
  
  // Update meta tags
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seo.description);
  
  // Update OG tags
  const ogTags = [
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: seo.ogType || 'website' },
  ];
  
  ogTags.forEach(tag => {
    let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', tag.content);
  });
  
  // Add keywords if provided
  if (seo.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords);
  }

  // Add canonical if provided
  if (seo.canonical) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', seo.canonical);
  }
}
