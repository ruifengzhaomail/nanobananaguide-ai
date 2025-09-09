
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-semibold text-sm">🍌</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                Nano Banana Guide
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-yellow-600 transition-colors duration-200">
              首页
            </Link>
            <Link href="/editor" className="text-sm font-medium text-gray-600 hover:text-yellow-600 transition-colors duration-200">
              AI 编辑器
            </Link>
            <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-yellow-600 transition-colors duration-200">
              使用指南
            </Link>
          </nav>



          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors px-3 py-2 rounded-lg">
                首页
              </Link>
              <Link href="/editor" className="text-sm font-medium text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors px-3 py-2 rounded-lg">
                AI 编辑器
              </Link>
              <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors px-3 py-2 rounded-lg">
                使用指南
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors px-3 py-2 rounded-lg">
                定价
              </Link>
              <Link href="/examples" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-3 py-2 rounded-lg">
                示例展示
              </Link>
              <Link href="/tips" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-3 py-2 rounded-lg">
                技巧分享
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
