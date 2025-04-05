
import { createClient } from '@supabase/supabase-js';

// These should ideally come from environment variables
const supabaseUrl = 'https://ydsodprypkcptfbhyjfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc29kcHJ5cGtjcHRmYmh5amZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NDA0MzcsImV4cCI6MjA1OTMxNjQzN30.iUQxGNHqqh6exBZWxoEg1oev3WrEgjG8m9Cr-R1-6GA';

export type GeneratedName = {
  id: string;
  name: string;
  category: string;
  length: number;
  created_at: string;
  trending_score: number;
};

export type Profile = {
  id: string;
  username: string | null;
  updated_at: string;
};

export type Favorite = {
  id: string;
  user_id: string;
  name_id: string;
  name: string;
  category: string;
  length: number;
  created_at: string;
};

export type Tables = {
  generated_names: {
    Row: GeneratedName;
  };
  profiles: {
    Row: Profile;
  };
  favorites: {
    Row: Favorite;
  };
};

// Create a custom type for your Supabase client
export const supabase = createClient<Tables>(supabaseUrl, supabaseKey);
