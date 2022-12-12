import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rnktxomsylkkznddnkhw.supabase.co';
const supabaseKey = import.meta.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export { supabase };