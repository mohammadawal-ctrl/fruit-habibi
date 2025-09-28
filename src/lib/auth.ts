import { supabase, User } from './supabase'
import { useState, useEffect } from 'react'
import { mockUser } from './mockAuth'

export interface AuthUser extends User {
  email: string
}

export const auth = {
  // Sign up with email and password
  async signUp(email: string, password: string, userData: Partial<User>) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    
    if (error) throw error
    return data
  },

  // Sign in with email and password
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) throw error
    return data
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  // Get user profile from database
  async getUserProfile(userId: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) {
      console.error('Error fetching user profile:', error)
      return null
    }
    
    return data
  },

  // Update user profile
  async updateUserProfile(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Check if user is admin
  async isAdmin(userId: string): Promise<boolean> {
    const profile = await this.getUserProfile(userId)
    return profile?.role === 'admin' || false
  }
}

// Auth state management
export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if we're in development mode with placeholder Supabase
    const isDevelopment = process.env.NODE_ENV === 'development'
    const isPlaceholderSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')
    
    if (isDevelopment && isPlaceholderSupabase) {
      // Use mock auth for development
      setUser({ ...mockUser, email: 'demo@fruithabibi.com' })
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          // Wait a moment for the trigger to create the user profile
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const profile = await auth.getUserProfile(session.user.id)
          if (profile) {
            setUser({ ...profile, email: session.user.email! })
          } else {
            // Create a basic user object if no profile exists
            setUser({
              id: session.user.id,
              email: session.user.email!,
              full_name: session.user.user_metadata?.full_name || 'User',
              role: session.user.user_metadata?.role || 'farmer',
              country: session.user.user_metadata?.country || 'Unknown',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_banned: false
            })
          }
        }
        setLoading(false)
      } catch (error) {
        console.error('Auth error:', error)
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email)
        
        if (session?.user) {
          try {
            // Wait a moment for the trigger to create the user profile
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            const profile = await auth.getUserProfile(session.user.id)
            if (profile) {
              setUser({ ...profile, email: session.user.email! })
            } else {
              console.log('No profile found for user:', session.user.id)
              // Create a basic user object if no profile exists
              setUser({
                id: session.user.id,
                email: session.user.email!,
                full_name: session.user.user_metadata?.full_name || 'User',
                role: session.user.user_metadata?.role || 'farmer',
                country: session.user.user_metadata?.country || 'Unknown',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                is_banned: false
              })
            }
          } catch (error) {
            console.error('Error fetching user profile:', error)
            // Create a basic user object as fallback
            setUser({
              id: session.user.id,
              email: session.user.email!,
              full_name: session.user.user_metadata?.full_name || 'User',
              role: session.user.user_metadata?.role || 'farmer',
              country: session.user.user_metadata?.country || 'Unknown',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_banned: false
            })
          }
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}

