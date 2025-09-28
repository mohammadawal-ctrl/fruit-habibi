'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  CurrencyDollarIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/supabase'
import { supabase } from '@/lib/supabase'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) {
        console.error('Supabase error:', error)
        // Use high-quality mock data
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
            images: ['/images/mangoes.jpg'],
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
            images: ['/images/carrots.jpg'],
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
            images: ['/images/oranges.jpg'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '4',
            farmer_id: 'mock-farmer-4',
            title: 'Organic Lettuce',
            description: 'Fresh organic lettuce from Kenya',
            price_per_unit: 2.00,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 2000,
            category: 'Vegetables',
            country: 'Kenya',
            images: ['/images/lettuce.jpg'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '5',
            farmer_id: 'mock-farmer-5',
            title: 'Premium Dates',
            description: 'High-quality dates from Saudi Arabia',
            price_per_unit: 4.50,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 1500,
            category: 'Fruits',
            country: 'Saudi Arabia',
            images: ['/images/dates.jpg'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '6',
            farmer_id: 'mock-farmer-6',
            title: 'Fresh Tomatoes',
            description: 'Ripe tomatoes from Egypt',
            price_per_unit: 1.50,
            currency: 'USD',
            unit: 'kg',
            quantity_available: 6000,
            category: 'Vegetables',
            country: 'Egypt',
            images: ['/images/tomatoes.jpg'],
            is_approved: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        return
      }
      
      if (data && data.length > 0) {
        setFeaturedProducts(data)
      } else {
        // Use the same mock data if no database data
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
            images: ['/images/mangoes.jpg'],
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
          images: ['/images/mangoes.jpg'],
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
      description: 'Connect with farmers and importers across Africa, Asia, and the Middle East',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Direct Communication',
      description: 'Real-time messaging system for seamless negotiation and deal-making',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Verified suppliers and quality-checked products for your peace of mind',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TruckIcon,
      title: 'Logistics Support',
      description: 'End-to-end logistics solutions for efficient product delivery',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with escrow protection',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: CheckCircleIcon,
      title: 'Trusted Platform',
      description: 'Built with trust and transparency at its core',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Farmer, Egypt',
      content: 'Fruit Habibi has transformed my business. I can now reach importers directly and get fair prices for my produce.',
      avatar: 'AH',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Importer, UAE',
      content: 'The quality of products and the ease of communication through this platform is exceptional. Highly recommended!',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Kwame Asante',
      role: 'Farmer, Ghana',
      content: 'This platform has opened new markets for my cocoa beans. The direct connection with buyers is game-changing.',
      avatar: 'KA',
      rating: 5
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '50+', label: 'Countries' },
    { number: '1M+', label: 'Products Listed' },
    { number: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                description: 'Create your account as a farmer or importer and get verified by our team',
                icon: '👤'
              },
              {
                step: '02',
                title: 'Browse & Connect',
                description: 'Explore products or list your produce and connect with potential partners',
                icon: '🔍'
              },
              {
                step: '03',
                title: 'Trade & Grow',
                description: 'Negotiate deals, process payments, and build long-term business relationships',
                icon: '🤝'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
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
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
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
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-green-600 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join as Farmer
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-xl text-white hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Join as Importer
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}