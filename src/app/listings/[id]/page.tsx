'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  ScaleIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Product, User } from '@/lib/supabase'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MessageModal from '@/components/MessageModal'
import Button from '@/components/Button'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [product, setProduct] = useState<Product | null>(null)
  const [farmer, setFarmer] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const fetchProduct = useCallback(async () => {
    try {
      // Fetch product
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single()

      if (productError) throw productError
      setProduct(productData)

      // Fetch farmer info
      const { data: farmerData, error: farmerError } = await supabase
        .from('users')
        .select('*')
        .eq('id', productData.farmer_id)
        .single()

      if (farmerError) throw farmerError
      setFarmer(farmerData)
    } catch (error) {
      console.error('Error fetching product:', error)
      router.push('/listings')
    } finally {
      setLoading(false)
    }
  }, [params.id, router])

  useEffect(() => {
    if (params.id) {
      fetchProduct()
    }
  }, [params.id, fetchProduct])

  const handleLike = () => {
    setIsLiked(!isLiked)
    // TODO: Implement like functionality
  }

  const handleMessage = () => {
    if (!user) {
      router.push('/login')
      return
    }
    setShowMessageModal(true)
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(price)
  }

  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      'Fruits': '🍎',
      'Vegetables': '🥕',
      'Grains': '🌾',
      'Oils': '🫒',
      'Spices': '🌶️',
      'Nuts': '🥜',
    }
    return emojiMap[category] || '🌱'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-full h-20 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product || !farmer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Button onClick={() => router.push('/listings')}>
              Back to Listings
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button onClick={() => router.push('/')} className="hover:text-green-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => router.push('/listings')} className="hover:text-green-600">
            Listings
          </button>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-8xl">{getCategoryEmoji(product.category)}</span>
                </div>
              )}
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === selectedImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-full h-20 rounded-lg overflow-hidden ${
                      index === selectedImage ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLike}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {isLiked ? (
                      <HeartSolidIcon className="w-6 h-6 text-red-500" />
                    ) : (
                      <HeartIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ShareIcon className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-1" />
                  <span>{product.country}</span>
                </div>
                <div className="flex items-center">
                  <ScaleIcon className="w-5 h-5 mr-1" />
                  <span>{product.quantity_available.toLocaleString()} {product.unit} available</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Price per {product.unit}</p>
                  <p className="text-3xl font-bold text-green-600">
                    {formatPrice(product.price_per_unit, product.currency)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Available</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {product.quantity_available.toLocaleString()} {product.unit}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Farmer Info */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Farmer Information</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{farmer.full_name}</h4>
                  <p className="text-sm text-gray-600">{farmer.company_name}</p>
                  <p className="text-sm text-gray-600">{farmer.country}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {user?.role === 'importer' && (
                <Button
                  onClick={handleMessage}
                  className="w-full"
                  size="lg"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              )}
              
              {!user && (
                <Button
                  onClick={() => router.push('/login')}
                  className="w-full"
                  size="lg"
                >
                  Sign In to Contact Farmer
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={() => router.push('/listings')}
                className="w-full"
                size="lg"
              >
                Back to Listings
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TODO: Implement related products */}
            <div className="text-center py-8 text-gray-500">
              Related products will be shown here
            </div>
          </div>
        </motion.div>
      </div>

      {/* Message Modal */}
      {showMessageModal && farmer && (
        <MessageModal
          isOpen={showMessageModal}
          onClose={() => setShowMessageModal(false)}
          product={product}
          farmer={farmer}
          importer={user!}
        />
      )}

      <Footer />
    </div>
  )
}
