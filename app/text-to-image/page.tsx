import TextToImageGenerator from '@/components/TextToImageGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text to Image Generator | AI Image Creation',
  description: 'Generate stunning images from text descriptions using advanced AI technology. Create unique visuals with our powerful text-to-image generator.',
};

export default function TextToImagePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Text to Image Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your ideas into stunning visuals with our advanced AI image generation technology. 
            Simply describe what you want to see, and watch as our AI brings your imagination to life.
          </p>
        </div>
        
        <TextToImageGenerator />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Describe</h3>
                <p className="text-gray-600">Enter a detailed description of the image you want to create</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate</h3>
                <p className="text-gray-600">Our AI processes your prompt and creates a unique image</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
                <p className="text-gray-600">Save your generated image and use it however you like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}