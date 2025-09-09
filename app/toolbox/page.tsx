import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Toolbox - nano-banana',
  description: 'Discover all the powerful AI tools and features available in nano-banana for image editing and generation.',
}

export default function ToolboxPage() {
  const toolCategories = [
    {
      title: 'Image Enhancement',
      description: 'Improve image quality and visual appeal',
      tools: [
        {
          name: 'Super Resolution',
          description: 'Upscale images up to 4x without quality loss',
          icon: '🔍',
          features: ['AI-powered upscaling', 'Preserve details', 'Multiple scale options']
        },
        {
          name: 'Noise Reduction',
          description: 'Remove noise and grain from images',
          icon: '✨',
          features: ['Smart denoising', 'Preserve textures', 'Batch processing']
        },
        {
          name: 'Color Enhancement',
          description: 'Automatically enhance colors and contrast',
          icon: '🎨',
          features: ['Auto color correction', 'Vibrance boost', 'Tone mapping']
        }
      ]
    },
    {
      title: 'Object Manipulation',
      description: 'Add, remove, or modify objects in images',
      tools: [
        {
          name: 'Object Removal',
          description: 'Remove unwanted objects seamlessly',
          icon: '🗑️',
          features: ['Smart inpainting', 'Context-aware fill', 'Precise selection']
        },
        {
          name: 'Object Replacement',
          description: 'Replace objects with AI-generated alternatives',
          icon: '🔄',
          features: ['Natural language prompts', 'Style matching', 'Seamless blending']
        },
        {
          name: 'Background Removal',
          description: 'Remove or replace backgrounds instantly',
          icon: '🖼️',
          features: ['One-click removal', 'Edge refinement', 'Transparent output']
        }
      ]
    },
    {
      title: 'Style & Effects',
      description: 'Transform images with artistic styles and effects',
      tools: [
        {
          name: 'Style Transfer',
          description: 'Apply artistic styles to your images',
          icon: '🎭',
          features: ['Multiple art styles', 'Custom style training', 'Blend control']
        },
        {
          name: 'Filter Effects',
          description: 'Apply professional photo filters',
          icon: '📸',
          features: ['Vintage filters', 'Cinematic looks', 'Custom presets']
        },
        {
          name: 'Lighting Effects',
          description: 'Add dramatic lighting to your images',
          icon: '💡',
          features: ['Studio lighting', 'Natural light', 'Shadow control']
        }
      ]
    },
    {
      title: 'Character & Portrait',
      description: 'Specialized tools for people and characters',
      tools: [
        {
          name: 'Portrait Enhancement',
          description: 'Enhance portraits with AI retouching',
          icon: '👤',
          features: ['Skin smoothing', 'Eye enhancement', 'Natural results']
        },
        {
          name: 'Character Consistency',
          description: 'Maintain character appearance across scenes',
          icon: '🎯',
          features: ['Face recognition', 'Style preservation', 'Multi-scene support']
        },
        {
          name: 'Age Progression',
          description: 'Show how people might look at different ages',
          icon: '⏰',
          features: ['Realistic aging', 'Youth restoration', 'Time-lapse effects']
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Toolbox
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered image editing tools. 
              From basic enhancements to advanced transformations, we have everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/image-editor" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
                Try All Tools
              </Link>
              <Link href="/showcase" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                See Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    {/* Tool Icon */}
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    
                    {/* Tool Info */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                    <p className="text-gray-600 mb-6">{tool.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Button */}
                    <Link href="/image-editor" className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                      Try {tool.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Toolbox?</h2>
            <p className="text-lg text-gray-600">Advanced AI technology meets intuitive design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Process images in seconds with our optimized AI models</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart AI</h3>
              <p className="text-gray-600">Advanced algorithms that understand context and intent</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface designed for both beginners and pros</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Quality</h3>
              <p className="text-gray-600">Professional-grade results that exceed expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrate with API</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Access all our tools programmatically with our powerful API. 
                  Perfect for developers and businesses looking to integrate AI image editing into their applications.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    RESTful API with comprehensive documentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SDKs for popular programming languages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Scalable infrastructure with 99.9% uptime
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/api" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center">
                    View API Docs
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Get API Key
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-500"># Example API call</span>
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">curl</span> <span className="text-yellow-400">-X POST</span> \
                </div>
                <div className="mb-2 ml-4">
                  <span className="text-green-400">https://api.nano-banana.com/v1/enhance</span> \
                </div>
                <div className="mb-2 ml-4">
                  <span className="text-yellow-400">-H</span> <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \
                </div>
                <div className="mb-2 ml-4">
                  <span className="text-yellow-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> \
                </div>
                <div className="ml-4">
                  <span className="text-yellow-400">-d</span> <span className="text-green-400">'{`{"image_url": "...", "tool": "super_resolution"}`}'</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start using our powerful AI tools today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/image-editor" className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Start Editing
            </Link>
            <Link href="/text-to-image" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg">
              Text to Image
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}