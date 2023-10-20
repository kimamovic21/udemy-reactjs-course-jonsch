
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://utrogynjaauvrbhhcczt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cm9neW5qYWF1dnJiaGhjY3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MjA0NzksImV4cCI6MjAxMzI5NjQ3OX0.9LcQvjGMHIz7t5nnFgA38kRW49s1p3DRL55_SlEeF_8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;