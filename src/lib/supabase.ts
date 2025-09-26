import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  full_name: string
  role: 'farmer' | 'importer' | 'admin'
  country: string
  phone?: string
  company_name?: string
  created_at: string
  updated_at: string
  is_banned: boolean
  [key: string]: unknown
}

export interface Product {
  id: string
  farmer_id: string
  title: string
  description: string
  price_per_unit: number
  currency: string
  unit: string
  quantity_available: number
  category: string
  country: string
  images: string[]
  is_approved: boolean
  created_at: string
  updated_at: string
  [key: string]: unknown
}

export interface Message {
  id: string
  product_id: string
  sender_id: string
  receiver_id: string
  content: string
  created_at: string
  read_at?: string
  [key: string]: unknown
}

export interface Chat {
  id: string
  product_id: string
  farmer_id: string
  importer_id: string
  created_at: string
  updated_at: string
  [key: string]: unknown
}
