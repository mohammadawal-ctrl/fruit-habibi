'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserIcon, 
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/lib/auth'
import Button from './Button'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { user, loading } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const { auth } = await import('@/lib/auth')
      await auth.signOut()
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
  ]

  if (user?.role === 'farmer') {
    navigation.push({ name: 'My Products', href: '/profile' })
  } else if (user?.role === 'importer') {
    navigation.push({ name: 'My Inquiries', href: '/profile' })
  }

  if (user?.role === 'admin') {
    navigation.push({ name: 'Admin', href: '/admin' })
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <motion.div
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🍎 Fruit Habibi
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-green-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user.full_name}</span>
                </button>

                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl py-1 z-50 border border-gray-100"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <UserIcon className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    {user.role === 'farmer' && (
                      <Link
                        href="/profile?tab=products"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <ShoppingBagIcon className="w-4 h-4 mr-2" />
                        My Products
                      </Link>
                    )}
                    {user.role === 'importer' && (
                      <Link
                        href="/profile?tab=messages"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <ShoppingBagIcon className="w-4 h-4 mr-2" />
                        My Messages
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="sm" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {!user && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3">
                  <div className="flex space-x-2">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button variant="primary" size="sm" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {user && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.full_name}</div>
                    <div className="text-sm text-gray-500">{user.role}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link
                    href="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
