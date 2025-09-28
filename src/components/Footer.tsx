import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon,
  HeartIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  🍎 Fruit Habibi
                </span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Connecting African and Asian farmers with Middle Eastern importers. 
                Your trusted B2B marketplace for fresh fruits and vegetables.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlobeAltIcon className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EnvelopeIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                    Browse Listings
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                    Join as Farmer
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                    Join as Importer
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-green-400">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-400/30 transition-colors duration-200">
                    <MapPinIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Dubai, UAE</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-400/30 transition-colors duration-200">
                    <PhoneIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">+971 4 123 4567</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-400/30 transition-colors duration-200">
                    <EnvelopeIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">info@fruithabibi.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm flex items-center">
              © 2024 Fruit Habibi. Made with 
              <HeartIcon className="w-4 h-4 text-red-500 mx-1" />
              for farmers and importers worldwide.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-all duration-200 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-all duration-200 hover:underline">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-green-400 text-sm transition-all duration-200 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
