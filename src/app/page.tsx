'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/supabase'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      // First, let's check if the products table exists and has data
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        
        // Use mock data if database query fails
        setFeaturedProducts([
          {
            id: '1',
            farmer_id: 'mock-farmer-1',
            title: 'Premium Mangoes',
            description: 'Sweet and juicy mangoes from Egypt',
            price_per_unit: 2.50,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 5000,
            category: 'Fruits',
            country: 'Egypt',
            images: ['https://images.unsplash.com/photo-1605027990121-4754801905e5?w=500'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            farmer_id: 'mock-farmer-2',
            title: 'Fresh Carrots',
            description: 'Organic carrots from Morocco',
            price_per_unit: 1.20,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 3000,
            category: 'Vegetables',
            country: 'Morocco',
            images: ['https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '3',
            farmer_id: 'mock-farmer-3',
            title: 'Sweet Oranges',
            description: 'Fresh oranges from Ghana',
            price_per_unit: 1.80,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 4000,
            category: 'Fruits',
            country: 'Ghana',
            images: ['https://images.unsplash.com/photo-1557800634-7bf3ed73b8e0?w=500'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        return
      }
      
      // If we have data from the database, use it
      if (data && data.length > 0) {
        setFeaturedProducts(data)
      } else {
        // If no data in database, use mock data
        setFeaturedProducts([
          {
            id: '1',
            farmer_id: 'mock-farmer-1',
            title: 'Premium Mangoes',
            description: 'Sweet and juicy mangoes from Egypt',
            price_per_unit: 2.50,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 5000,
            category: 'Fruits',
            country: 'Egypt',
            images: ['https://images.unsplash.com/photo-1605027990121-4754801905e5?w=500'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
      }
    } catch (error) {
      console.error('Error fetching featured products:', error)
      // Use mock data as fallback
      setFeaturedProducts([
        {
          id: '1',
          farmer_id: 'mock-farmer-1',
          title: 'Premium Mangoes',
          description: 'Sweet and juicy mangoes from Egypt',
          price_per_unit: 2.50,
          currency: 'USD',
          unit: 'kg',
          quantity_available: 5000,
          category: 'Fruits',
          country: 'Egypt',
          images: ['https://images.unsplash.com/photo-1605027990121-4754801905e5?w=500'],
          is_approved: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const features = [
    {
      icon: GlobeAltIcon,
      title: 'Global Network',
      description: 'Connect with farmers and importers across Africa, Asia, and the Middle East'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Direct Communication',
      description: 'Real-time messaging system for seamless negotiation and deal-making'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Verified suppliers and quality-checked products for your peace of mind'
    },
    {
      icon: TruckIcon,
      title: 'Logistics Support',
      description: 'End-to-end logistics solutions for efficient product delivery'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with escrow protection'
    },
    {
      icon: CheckCircleIcon,
      title: 'Trusted Platform',
      description: 'Built with trust and transparency at its core'
    }
  ]

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Farmer, Egypt',
      content: 'Fruit Habibi has transformed my business. I can now reach importers directly and get fair prices for my produce.',
      avatar: 'AH'
    },
    {
      name: 'Sarah Johnson',
      role: 'Importer, UAE',
      content: 'The quality of products and the ease of communication through this platform is exceptional. Highly recommended!',
      avatar: 'SJ'
    },
    {
      name: 'Kwame Asante',
      role: 'Farmer, Ghana',
      content: 'This platform has opened new markets for my cocoa beans. The direct connection with buyers is game-changing.',
      avatar: 'KA'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to connect farmers with importers and grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Register & Verify',
                description: 'Create your account as a farmer or importer and get verified by our team'
              },
              {
                step: '02',
                title: 'Browse & Connect',
                description: 'Explore products or list your produce and connect with potential partners'
              },
              {
                step: '03',
                title: 'Trade & Grow',
                description: 'Negotiate deals, process payments, and build long-term business relationships'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fruit Habibi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern B2B marketplace with features that matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover high-quality produce from verified farmers
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/listings"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers and importers who trust our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of farmers and importers who are already growing their business with Fruit Habibi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Join as Farmer
              </a>
              <a
                href="/register"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 transition-colors"
              >
                Join as Importer
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}