import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mpqxwuxxetfkoyyqiazc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXh3dXh4ZXRma295eXFpYXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNjQ1NTUsImV4cCI6MjAxMzY0MDU1NX0.ikrZIHPy8td-uyyBMf_OQ3j7sgAJYYr3H0HJZeL8Ke4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
