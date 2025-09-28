// Mock authentication for development without Supabase
import { User } from './supabase'

export const mockUser: User = {
  id: 'mock-user-id',
  email: 'demo@fruithabibi.com',
  full_name: 'Demo User',
  role: 'admin',
  country: 'UAE',
  phone: '+971501234567',
  company_name: 'Demo Company',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  is_banned: false
}

export const useMockAuth = () => {
  return {
    user: mockUser,
    loading: false
  }
}
