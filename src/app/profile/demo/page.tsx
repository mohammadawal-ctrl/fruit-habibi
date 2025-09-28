'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'

// Mock data for demo
const mockUser = {
  id: 'demo-user',
  email: 'demo@fruithabibi.com',
  full_name: 'Demo User',
  role: 'farmer',
  country: 'UAE',
  phone: '+971501234567',
  company_name: 'Demo Company',
  created_at: '2024-01-01T00:00:00Z'
}

const mockProducts = [
  {
    id: '1',
    title: 'Premium Egyptian Oranges',
    description: 'Fresh, juicy oranges from the Nile Delta',
    price_per_unit: 2.50,
    unit: 'kg',
    category: 'Citrus',
    country: 'Egypt',
    quantity_available: 1000,
    images: ['/api/placeholder/400/300'],
    is_approved: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Organic Moroccan Dates',
    description: 'Premium Medjool dates from the Sahara',
    price_per_unit: 8.00,
    unit: 'kg',
    category: 'Dried Fruits',
    country: 'Morocco',
    quantity_available: 500,
    images: ['/api/placeholder/400/300'],
    is_approved: false,
    created_at: '2024-02-01T09:15:00Z'
  }
]

const mockMessages = [
  {
    id: '1',
    content: 'Hi, I\'m interested in your Egyptian oranges. What\'s the minimum order quantity?',
    sender_id: 'importer1',
    receiver_id: 'demo-user',
    product_id: '1',
    created_at: '2024-02-15T10:30:00Z',
    sender: { full_name: 'Mohammed Al-Rashid', company_name: 'Al-Rashid Trading' },
    product: { title: 'Premium Egyptian Oranges' }
  },
  {
    id: '2',
    content: 'The minimum order is 100kg. We can deliver within 3-5 business days.',
    sender_id: 'demo-user',
    receiver_id: 'importer1',
    product_id: '1',
    created_at: '2024-02-15T11:15:00Z',
    sender: { full_name: 'Demo User', company_name: 'Demo Company' },
    product: { title: 'Premium Egyptian Oranges' }
  }
]

export default function ProfileDemoPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [user] = useState(mockUser)
  const [products] = useState(mockProducts)
  const [messages] = useState(mockMessages)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock profile update
    console.log('Profile updated')
  }

  const handleProductDelete = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-2 text-gray-600">Manage your account, products, and messages</p>
        </div>

        {/* Demo Notice */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Demo Mode</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>This is a demonstration of the user profile with mock data. In production, this would connect to your Supabase database.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{user.full_name}</h3>
                <p className="text-sm text-gray-500">{user.role === 'farmer' ? 'Farmer' : 'Importer'}</p>
                <p className="text-sm text-gray-500">{user.company_name}</p>
              </div>
              
              <div className="mt-6 space-y-1">
                <button
                  onClick={() => handleTabChange('profile')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'profile'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Profile Settings
                </button>
                {user.role === 'farmer' && (
                  <button
                    onClick={() => handleTabChange('products')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'products'
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    My Products
                  </button>
                )}
                <button
                  onClick={() => handleTabChange('messages')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'messages'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Messages
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.full_name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        defaultValue={user.country}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="UAE">UAE</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Lebanon">Lebanon</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.company_name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Update Profile</Button>
                  </div>
                </form>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && user.role === 'farmer' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Products</h2>
                  <Button>Add New Product</Button>
                </div>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                          <p className="text-gray-600 mt-1">{product.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>${product.price_per_unit}/{product.unit}</span>
                            <span>{product.quantity_available} available</span>
                            <span>{product.country}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            product.is_approved 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.is_approved ? 'Approved' : 'Pending'}
                          </span>
                          <button
                            onClick={() => handleProductDelete(product.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Messages</h2>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {message.sender.full_name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {message.sender.company_name} • {message.product.title}
                          </p>
                        </div>
                        <span className="text-sm text-gray-400">
                          {new Date(message.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{message.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
