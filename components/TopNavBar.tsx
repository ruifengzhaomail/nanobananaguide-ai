'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🍌</span>
            </div>
            <span className="text-xl font-bold text-gray-900">nano-banana</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/image-editor" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Image Editor
            </Link>
            <Link href="/text-to-image" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Text to Image
            </Link>
            <Link href="/showcase" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Showcase
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center">
                Toolbox
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/image-editor" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600">
                  Image Editor
                </Link>
                <Link href="/text-to-image" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600">
                  Text to Image
                </Link>
                <Link href="/toolbox" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600">
                  All Tools
                </Link>
              </div>
            </div>

          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-600 p-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            <Link href="/newsletter" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link href="/image-editor" className="text-gray-700 hover:text-orange-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Image Editor
              </Link>
              <Link href="/text-to-image" className="text-gray-700 hover:text-orange-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Text to Image
              </Link>
              <Link href="/showcase" className="text-gray-700 hover:text-orange-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Showcase
              </Link>
              <Link href="/toolbox" className="text-gray-700 hover:text-orange-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Toolbox
              </Link>

              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link href="/newsletter" className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium block text-center mt-2">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}