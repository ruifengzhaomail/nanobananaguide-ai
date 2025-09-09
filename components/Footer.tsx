
import Link from 'next/link'
import NewsletterSubscription from './NewsletterSubscription'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-black font-bold text-lg">🍌</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nano Banana Guide
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Professional Gemini 2.5 Flash Image guide to help you master AI image generation technology and explore unlimited creative possibilities.
            </p>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-4">
              <p className="text-sm text-yellow-300 flex items-start">
                <span className="text-yellow-400 mr-2 mt-0.5">⚠️</span>
                This is a third-party unofficial guide site. "Nano Banana" is a community nickname for Gemini 2.5 Flash Image.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/image-editor" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Image Editor
              </Link></li>

              <li><Link href="/compare" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Model Comparison
              </Link></li>
              <li><Link href="/cases/ecommerce-main-image" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Use Cases
              </Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/faq/watermark-and-policy" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Policy Guide
              </Link></li>
              <li><Link href="/showcase" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Showcase
              </Link></li>
              <li><Link href="/newsletter" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Newsletter
              </Link></li>
              <li><Link href="/text-to-image" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                Text to Image
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <NewsletterSubscription variant="footer" className="max-w-2xl mx-auto" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 Nano Banana Guide. Unofficial third-party guide site.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
