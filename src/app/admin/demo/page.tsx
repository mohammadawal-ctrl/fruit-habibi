'use client'

import React, { useState } from 'react'
import AdminTable from '@/components/AdminTable'
// import Button from '@/components/Button'

// Mock data for demo
const mockUsers = [
  {
    id: '1',
    email: 'farmer1@example.com',
    full_name: 'Ahmed Hassan',
    role: 'farmer',
    country: 'Egypt',
    phone: '+201234567890',
    company_name: 'Hassan Farms',
    created_at: '2024-01-15T10:30:00Z',
    is_banned: false
  },
  {
    id: '2',
    email: 'importer1@example.com',
    full_name: 'Mohammed Al-Rashid',
    role: 'importer',
    country: 'UAE',
    phone: '+971501234567',
    company_name: 'Al-Rashid Trading',
    created_at: '2024-01-20T14:45:00Z',
    is_banned: false
  },
  {
    id: '3',
    email: 'farmer2@example.com',
    full_name: 'Fatima Al-Zahra',
    role: 'farmer',
    country: 'Morocco',
    phone: '+212612345678',
    company_name: 'Al-Zahra Organic',
    created_at: '2024-02-01T09:15:00Z',
    is_banned: false
  }
]

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
    farmer_id: '1',
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
    is_approved: true,
    farmer_id: '3',
    created_at: '2024-02-01T09:15:00Z'
  },
  {
    id: '3',
    title: 'Fresh Lebanese Apples',
    description: 'Crisp, sweet apples from the Bekaa Valley',
    price_per_unit: 3.20,
    unit: 'kg',
    category: 'Apples',
    country: 'Lebanon',
    quantity_available: 800,
    images: ['/api/placeholder/400/300'],
    is_approved: false,
    farmer_id: '1',
    created_at: '2024-02-10T16:20:00Z'
  }
]

export default function AdminDemoPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [users, setUsers] = useState(mockUsers)
  const [products, setProducts] = useState(mockProducts)

  const dashboardStats = {
    totalUsers: users.length,
    totalProducts: products.length,
    pendingApprovals: products.filter(p => !p.is_approved).length,
    activeListings: products.filter(p => p.is_approved).length
  }

  const handleUserAction = (userId: string, action: string) => {
    if (action === 'ban') {
      setUsers(users.map(user => 
        user.id === userId ? { ...user, is_banned: !user.is_banned } : user
      ))
    }
  }

  const handleProductAction = (productId: string, action: string) => {
    if (action === 'approve') {
      setProducts(products.map(product => 
        product.id === productId ? { ...product, is_approved: true } : product
      ))
    } else if (action === 'reject') {
      setProducts(products.filter(product => product.id !== productId))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage users, products, and platform settings</p>
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
                <p>This is a demonstration of the admin dashboard with mock data. In production, this would connect to your Supabase database.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: '📊' },
              { id: 'users', name: 'Users', icon: '👥' },
              { id: 'products', name: 'Products', icon: '📦' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">👥</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                        <dd className="text-lg font-medium text-gray-900">{dashboardStats.totalUsers}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">📦</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Products</dt>
                        <dd className="text-lg font-medium text-gray-900">{dashboardStats.totalProducts}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">⏳</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Pending Approvals</dt>
                        <dd className="text-lg font-medium text-gray-900">{dashboardStats.pendingApprovals}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">✅</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Active Listings</dt>
                        <dd className="text-lg font-medium text-gray-900">{dashboardStats.activeListings}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Premium Egyptian Oranges approved for listing</span>
                    <span className="text-gray-400 ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-blue-500 mr-2">👤</span>
                    <span className="text-gray-600">New farmer registered: Fatima Al-Zahra</span>
                    <span className="text-gray-400 ml-auto">4 hours ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500 mr-2">⏳</span>
                    <span className="text-gray-600">Fresh Lebanese Apples pending approval</span>
                    <span className="text-gray-400 ml-auto">6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">User Management</h3>
              <AdminTable
                data={users}
                columns={[
                  { key: 'email', label: 'Email' },
                  { key: 'full_name', label: 'Name' },
                  { key: 'role', label: 'Role' },
                  { key: 'country', label: 'Country' },
                  { key: 'company_name', label: 'Company' },
                  { 
                    key: 'is_banned', 
                    label: 'Status',
                    render: (value: unknown) => (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        value ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {value ? 'Banned' : 'Active'}
                      </span>
                    )
                  }
                ]}
                onEdit={() => console.log('Edit user')}
                onDelete={(user) => handleUserAction(String(user.id), 'ban')}
                type="users"
              />
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Product Management</h3>
              <AdminTable
                data={products}
                columns={[
                  { key: 'title', label: 'Product' },
                  { key: 'category', label: 'Category' },
                  { key: 'country', label: 'Country' },
                  { key: 'price_per_unit', label: 'Price', render: (value: unknown) => `$${value}/${products[0]?.unit || 'unit'}` },
                  { key: 'quantity_available', label: 'Quantity' },
                  { 
                    key: 'is_approved', 
                    label: 'Status',
                    render: (value: unknown) => (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        value ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {value ? 'Approved' : 'Pending'}
                      </span>
                    )
                  }
                ]}
                onEdit={() => console.log('Edit product')}
                onDelete={(product) => handleProductAction(product.id, 'reject')}
                deleteLabel="Reject"
                showApprove={true}
                onApprove={(product) => handleProductAction(product.id, 'approve')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
