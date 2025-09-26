import React from 'react'
import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-green-400">🍎 Fruit Habibi</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting African and Asian farmers with Middle Eastern importers. 
              Your trusted B2B marketplace for fresh fruits and vegetables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <GlobeAltIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <EnvelopeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-green-400 transition-colors">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-green-400 transition-colors">
                  Join as Farmer
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-green-400 transition-colors">
                  Join as Importer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Dubai, UAE</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">info@fruithabibi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Fruit Habibi. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
