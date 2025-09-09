'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold mb-8 border border-green-200 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            🎉 Completely Free
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Free for Everyone
            </span>
          </h1>
          
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            All Nano Banana tools and guides are completely free to use. No subscriptions, no hidden fees.
          </p>
        </div>
      </section>
      
      {/* Free Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl border border-green-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
              <p className="text-xl text-gray-600">Everything you need to master Nano Banana AI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Image Editor</h3>
                <p className="text-gray-600">Full-featured AI image editing tool</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Text to Image</h3>
                <p className="text-gray-600">Generate images from text descriptions</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Guides</h3>
                <p className="text-gray-600">Comprehensive tutorials and documentation</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Techniques</h3>
                <p className="text-gray-600">Professional tips and best practices</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Use Cases</h3>
                <p className="text-gray-600">Real-world examples and case studies</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletter</h3>
                <p className="text-gray-600">Latest updates and tips delivered to you</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/image-editor" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Start Using Now
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Free Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why is Everything Free?</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to make AI image editing accessible to everyone. We believe that powerful tools 
              and comprehensive guides should be available without barriers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is a community-driven project focused on education and empowerment. 
              Start your AI journey today, completely free!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}