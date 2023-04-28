import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// export { supabase };

const supabase = createBrowserSupabaseClient({
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
});
export { supabase };
