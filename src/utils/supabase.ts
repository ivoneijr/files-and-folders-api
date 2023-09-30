import { createClient } from '@supabase/supabase-js';

export const DEFAULT_STORAGE = 'general';

export const supabase = createClient(
  process.env.SUPABASE_STORAGE_URL!,
  process.env.SUPABASE_STORAGE_KEY!
)
