import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseKey || !supabaseUrl)
  throw new Error(
    'A SUPABASE_URL and SUPABASE_KEY are required in the .env file.'
  )

export const supabase = createClient(supabaseUrl, supabaseKey)
