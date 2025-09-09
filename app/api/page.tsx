import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'API Documentation - nano-banana',
  description: 'Complete API documentation for nano-banana. Integrate powerful AI image editing capabilities into your applications.',
}

export default function APIPage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/v1/enhance',
      description: 'Enhance image quality with AI upscaling and noise reduction',
      parameters: [
        { name: 'image_url', type: 'string', required: true, description: 'URL of the image to enhance' },
        { name: 'scale_factor', type: 'number', required: false, description: 'Upscaling factor (1-4, default: 2)' },
        { name: 'denoise', type: 'boolean', required: false, description: 'Apply noise reduction (default: true)' }
      ]
    },
    {
      method: 'POST',
      path: '/v1/remove-background',
      description: 'Remove background from images automatically',
      parameters: [
        { name: 'image_url', type: 'string', required: true, description: 'URL of the image' },
        { name: 'output_format', type: 'string', required: false, description: 'Output format: png, jpg (default: png)' }
      ]
    },
    {
      method: 'POST',
      path: '/v1/style-transfer',
      description: 'Apply artistic styles to images',
      parameters: [
        { name: 'image_url', type: 'string', required: true, description: 'URL of the source image' },
        { name: 'style', type: 'string', required: true, description: 'Style name or custom style URL' },
        { name: 'strength', type: 'number', required: false, description: 'Style strength (0-1, default: 0.8)' }
      ]
    },
    {
      method: 'POST',
      path: '/v1/object-remove',
      description: 'Remove objects from images using AI inpainting',
      parameters: [
        { name: 'image_url', type: 'string', required: true, description: 'URL of the image' },
        { name: 'mask_url', type: 'string', required: true, description: 'URL of the mask image' },
        { name: 'prompt', type: 'string', required: false, description: 'Description of what to fill the area with' }
      ]
    }
  ]

  const sdks = [
    {
      language: 'Python',
      icon: '🐍',
      install: 'pip install nano-banana-sdk',
      example: `from nano_banana import Client

client = Client(api_key="your_api_key")

result = client.enhance_image(
    image_url="https://example.com/image.jpg",
    scale_factor=2
)

print(result.enhanced_url)`
    },
    {
      language: 'JavaScript',
      icon: '🟨',
      install: 'npm install nano-banana-sdk',
      example: `import { NanoBanana } from 'nano-banana-sdk';

const client = new NanoBanana({
  apiKey: 'your_api_key'
});

const result = await client.enhanceImage({
  imageUrl: 'https://example.com/image.jpg',
  scaleFactor: 2
});

console.log(result.enhancedUrl);`
    },
    {
      language: 'cURL',
      icon: '🌐',
      install: 'Available on all systems',
      example: `curl -X POST https://api.nano-banana.com/v1/enhance \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://example.com/image.jpg",
    "scale_factor": 2
  }'`
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Integrate powerful AI image editing capabilities into your applications with our comprehensive API. 
              Simple, fast, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
                Get API Key
              </button>
              <Link href="/toolbox" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-lg text-gray-600">Get up and running in minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get API Key</h3>
              <p className="text-gray-600">Sign up and get your free API key to start making requests</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Make Request</h3>
              <p className="text-gray-600">Send your first API request using our simple REST endpoints</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Results</h3>
              <p className="text-gray-600">Receive processed images and integrate them into your app</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-lg text-gray-600">Complete reference for all available endpoints</p>
          </div>

          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-lg font-mono text-gray-900 bg-white px-4 py-2 rounded-lg">
                    {endpoint.path}
                  </code>
                </div>
                
                <p className="text-gray-700 mb-6">{endpoint.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Name</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Required</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <tr key={paramIndex}>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">{param.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{param.type}</td>
                            <td className="px-6 py-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {param.required ? 'Required' : 'Optional'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SDKs & Examples</h2>
            <p className="text-lg text-gray-600">Get started quickly with our official SDKs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{sdk.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{sdk.language}</h3>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <code className="text-sm text-gray-800">{sdk.install}</code>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Example Usage</h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 whitespace-pre-wrap">
                      <code>{sdk.example}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits & Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rate Limits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rate Limits</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Free Tier</span>
                    <span className="text-gray-600">100 requests/day</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Pro Tier</span>
                    <span className="text-gray-600">10,000 requests/day</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Enterprise</span>
                    <span className="text-gray-600">Custom limits</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Rate Limit Reset</span>
                    <span className="text-gray-600">Daily at 00:00 UTC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* API Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">API Pricing</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Image Enhancement</span>
                    <span className="text-gray-600">$0.02 per image</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Background Removal</span>
                    <span className="text-gray-600">$0.01 per image</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Style Transfer</span>
                    <span className="text-gray-600">$0.03 per image</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Object Removal</span>
                    <span className="text-gray-600">$0.04 per image</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Volume discounts available for enterprise customers. 
                    <Link href="/pricing" className="text-orange-600 hover:text-orange-700 font-medium">
                      View detailed pricing
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our developer support team is here to help you integrate successfully
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides and API reference</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Get instant help from our support team</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">Detailed technical assistance via email</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of developers already using our API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get Free API Key
            </button>
            <Link href="/image-editor" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg">
              Try Editor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}