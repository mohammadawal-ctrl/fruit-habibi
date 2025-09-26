'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Product } from '@/lib/supabase'
import { useAuth } from '@/lib/auth'
import Button from './Button'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { user } = useAuth()

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleMessage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // TODO: Implement messaging functionality
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/listings/${product.id}`}>
        <div className="relative">
          {/* Image */}
          <div className="aspect-w-16 aspect-h-12 bg-gray-100 relative overflow-hidden">
            {product.images.length > 0 && !imageError ? (
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-6xl">{getCategoryEmoji(product.category)}</span>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                {product.category}
              </span>
            </div>

            {/* Like Button */}
            <button
              onClick={handleLike}
              className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              {isLiked ? (
                <HeartSolidIcon className="w-5 h-5 text-red-500" />
              ) : (
                <HeartIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Price Badge */}
            <div className="absolute bottom-3 right-3">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {formatPrice(product.price_per_unit, product.currency)}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
              {product.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                <span>{product.country}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <ScaleIcon className="w-4 h-4 mr-2 text-green-500" />
                <span>{product.quantity_available.toLocaleString()} {product.unit} available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {user?.role === 'importer' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={handleMessage}
                >
                  <ChatBubbleLeftRightIcon className="w-4 h-4 mr-1" />
                  Message
                </Button>
              )}
              
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
