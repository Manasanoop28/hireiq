import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eecxsxlkbdaaawbhfnxh.supabase.co";
const supabaseAnonKey = "sb_publishable_B0SICeYzqU81Q-frlkKG2w_A3QH7-z6";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
