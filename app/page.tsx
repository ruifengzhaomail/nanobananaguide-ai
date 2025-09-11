
import Link from 'next/link'
import NewsletterSubscription from '@/components/NewsletterSubscription'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nano Banana AI Guide - 最全面的AI图像编辑教程与最佳实践',
  description: '掌握Nano Banana AI图像编辑技术，从入门到精通。我们提供全面的教程、最佳实践和实际案例，帮助您创建令人惊艳的AI生成图像。无论您是初学者还是专业人士，都能在这里找到提升AI图像创作能力的资源。',
  keywords: [
    'Nano Banana AI教程',
    'AI图像生成指南',
    'AI图像编辑工具',
    '人工智能图像处理',
    '图像到图像AI转换',
    '文本到图像生成',
    'AI艺术创作',
    '机器学习图像生成',
    'AI绘画教程',
    'Nano Banana使用技巧'
  ],
  openGraph: {
    title: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
    description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases for AI image generation.',
    type: 'website',
    url: 'https://nanobananaguide.ai',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'Nano Banana AI Guide'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana AI Guide - Complete Tutorial & Best Practices',
    description: 'Master Nano Banana AI with our comprehensive guide. Learn advanced techniques, best practices, and real-world use cases.',
    images: ['/og-image.svg']
  },
  alternates: {
    canonical: 'https://nanobananaguide.ai'
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-red-100/20 to-yellow-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  📚 The Ultimate Nano Banana Guide
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Master
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {' '}Nano Banana{' '}
                </span>
                <br />
                AI Image Editing
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete guides, tutorials, and tools for Nano Banana AI. From beginner basics to advanced techniques - everything you need to create stunning images.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/image-editor" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Try Online Tool
                  <span className="ml-2">→</span>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Detailed Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Examples</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Users Helped</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍌</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nano Banana AI</h3>
                    <p className="text-gray-600">Professional Image Editing</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Natural Language Editing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Character Consistency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">One-Click Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Guides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Nano Banana Guides
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Master every aspect of Nano Banana AI with our comprehensive tutorials
            </p>
            <p className="text-gray-500">
              From basic concepts to advanced techniques - everything you need to know
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* Advanced Techniques */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Editing Techniques</h3>
              <p className="text-gray-600 mb-6">Master professional-level editing with advanced prompts, batch processing, and optimization tips.</p>
              <Link href="/image-editor" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Try Editor
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices & Tips</h3>
              <p className="text-gray-600 mb-6">Learn industry best practices, common mistakes to avoid, and pro tips for better results.</p>
              <Link href="/showcase" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                View Examples
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Use Cases */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Use Cases</h3>
              <p className="text-gray-600 mb-6">Explore practical applications for e-commerce, social media, marketing, and creative projects.</p>
              <Link href="/showcase" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700">
                View Cases
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting Guide</h3>
              <p className="text-gray-600 mb-6">Solve common issues, understand error messages, and optimize your workflow for better results.</p>
              <Link href="/text-to-image" className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700">
                Try Tool
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* API & Integration */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">API & Integration</h3>
              <p className="text-gray-600 mb-6">Learn how to integrate Nano Banana into your applications and automate your workflows.</p>
              <Link href="/toolbox" className="inline-flex items-center text-gray-600 font-medium hover:text-gray-700">
                View Tools
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/showcase" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Showcase
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Guides Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Nano Banana Guides?
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              The most comprehensive and up-to-date resource for Nano Banana AI
            </p>
            <p className="text-gray-500">
              Trusted by thousands of creators, designers, and developers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Coverage */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-600">From basic concepts to advanced techniques - every aspect of Nano Banana AI is covered in detail.</p>
            </div>

            {/* Step-by-Step Tutorials */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Tutorials</h3>
              <p className="text-gray-600">Easy-to-follow tutorials with screenshots, examples, and practical exercises for hands-on learning.</p>
            </div>

            {/* Real Examples */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-World Examples</h3>
              <p className="text-gray-600">Hundreds of before/after examples showing actual results from different industries and use cases.</p>
            </div>

            {/* Expert Tips */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Tips & Tricks</h3>
              <p className="text-gray-600">Professional insights and optimization techniques from industry experts and power users.</p>
            </div>

            {/* Regular Updates */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Up-to-Date</h3>
              <p className="text-gray-600">Regular updates to reflect the latest Nano Banana features, improvements, and best practices.</p>
            </div>

            {/* Community Support */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Join our active community of Nano Banana users sharing tips, examples, and helping each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Real results from users who followed our guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Agency Success */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Digital Agency</h3>
                    <p className="text-sm text-gray-500">Creative Studio Pro</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "Following the advanced techniques guide, we reduced our image editing time by 75% while improving quality. Our clients are amazed by the results."
                </blockquote>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">75% time saved</span>
                  <span className="text-blue-600">$50K+ revenue increase</span>
                </div>
              </div>
            </div>

            {/* E-commerce Success */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-commerce Store</h3>
                    <p className="text-sm text-gray-500">Fashion Boutique</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "The product photography guide transformed our store. Sales increased 40% after implementing the techniques for consistent, professional images."
                </blockquote>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">40% sales increase</span>
                  <span className="text-blue-600">2x conversion rate</span>
                </div>
              </div>
            </div>

            {/* Content Creator Success */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Content Creator</h3>
                    <p className="text-sm text-gray-500">Instagram Influencer</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "The character consistency guide helped me maintain my brand aesthetic across all posts. My engagement rate doubled in just 3 months!"
                </blockquote>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">2x engagement</span>
                  <span className="text-blue-600">100K+ new followers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Share Your Success Story
            </button>
          </div>
        </div>
      </section>

      {/* More Examples Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              More Amazing Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              See how Nano Banana transforms ordinary images into extraordinary results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-commerce Examples */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/ecom/e2-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/ecom/e2-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-medium text-sm">Product Background Removal</h4>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/ecom/e3-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/ecom/e3-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-medium text-sm">Professional Lighting</h4>
            </div>

            {/* Portrait Examples */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/person/p2-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/person/p2-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-medium text-sm">Scene Transformation</h4>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/person/p3-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/person/p3-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-semibold text-sm">Style Transfer</h4>
            </div>

            {/* Pet Examples */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/pet/pet2-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/pet/pet2-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-semibold text-sm">Pet Portrait Enhancement</h4>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative">
                  <img src="/images/cases/pet/pet3-before.png" alt="Before" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="/images/cases/pet/pet3-after.png" alt="After" className="w-full h-24 object-cover rounded-lg" />
                  <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">After</div>
                </div>
              </div>
              <h4 className="font-semibold text-sm">Creative Pet Scenes</h4>
            </div>
          </div>

          <div className="text-center mt-12">
             <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
               Try Nano Banana Now
             </button>
           </div>
        </div>
      </section>

      {/* Core Features Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Professional AI Image Processing
            </p>
          </div>

          {/* Feature grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Natural Language Editing */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Smart Editing
              </h3>
              <p className="text-gray-600 font-light">
                Describe in natural language, AI automatically performs complex edits
              </p>
            </div>

            {/* Character Consistency */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Character Consistency
              </h3>
              <p className="text-gray-600 font-light">
                Perfect character feature preservation, ensuring consistency before and after editing
              </p>
            </div>

            {/* Scene Preservation */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Scene Blending
              </h3>
              <p className="text-gray-600 font-light">
                Intelligent background blending, maintaining natural and harmonious visuals
              </p>
            </div>

            {/* One-Shot Editing */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                One-Click Editing
              </h3>
              <p className="text-gray-600 font-light">
                Perfect results with single operation, no repeated adjustments needed
              </p>
            </div>

            {/* Multi-Image Context */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Multi-Image Processing
              </h3>
              <p className="text-gray-600 font-light">
                Process multiple images simultaneously, batch editing for higher efficiency
              </p>
            </div>

            {/* AI UGC Creation */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Content Creation
              </h3>
              <p className="text-gray-600 font-light">
                AI-powered content creation, crafting professional visual effects
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="bg-white rounded-3xl p-16 shadow-xl mx-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-6xl font-black text-orange-600 mb-4">0.8s</div>
                <div className="text-gray-600 font-light text-lg">Ultra-Fast Generation</div>
              </div>
              <div>
                <div className="text-6xl font-black text-green-600 mb-4">99.9%</div>
                <div className="text-gray-600 font-light text-lg">Success Rate</div>
              </div>
              <div>
                <div className="text-6xl font-black text-blue-600 mb-4">10M+</div>
                <div className="text-gray-600 font-light text-lg">Images Processed</div>
              </div>
              <div>
                <div className="text-6xl font-black text-orange-600 mb-4">50K+</div>
                <div className="text-gray-600 font-light text-lg">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
       <section className="py-24 bg-white fullscreen-section">
         <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              User Reviews
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real feedback from users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sarah Designer</div>
                  <div className="text-sm text-gray-600">E-commerce Designer</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Nano Banana completely transformed my workflow. Product image editing that used to take hours now takes minutes, with even more professional results."
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <div className="font-medium text-gray-900">Mike Photographer</div>
                  <div className="text-sm text-gray-600">Portrait Photographer</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The character consistency feature is amazing! I can create portraits in various scenes for clients without worrying about character features changing."
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  E
                </div>
                <div>
                  <div className="font-medium text-gray-900">Emma Creator</div>
                  <div className="text-sm text-gray-600">Content Creator</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Natural language editing is so convenient! I just describe the desired effect and AI implements it perfectly, greatly improving creative efficiency."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-red-400 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl">
            <NewsletterSubscription variant="default" />
          </div>
        </div>
      </section>
    </div>
  )
}
