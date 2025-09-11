import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the NanoBananaGuide AI website operated by us.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Description of Service</h2>
            <p className="text-gray-600 mb-4">
              NanoBananaGuide AI provides AI-powered guidance and recommendations for various topics. Our service includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>AI-generated content and recommendations</li>
              <li>Interactive guidance tools</li>
              <li>Educational resources and materials</li>
              <li>Personalized user experiences</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a user of our service, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Provide accurate and complete information when required</li>
              <li>Use the service in compliance with all applicable laws and regulations</li>
              <li>Not use the service for any unlawful or prohibited activities</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive property of NanoBananaGuide AI and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Excludes all representations and warranties relating to this website and its contents</li>
              <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall NanoBananaGuide AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@nanobananaguide.ai
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              These terms of service were last updated on January 8, 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;