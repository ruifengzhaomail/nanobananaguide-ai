import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              At NanoBananaGuide AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Data</h3>
            <p className="text-gray-600 mb-4">
              Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Derivative Data</h3>
            <p className="text-gray-600 mb-4">
              Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use of Your Information</h2>
            <p className="text-gray-600 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Create and manage your account</li>
              <li>Process your transactions and send you related information</li>
              <li>Email you regarding your account or order</li>
              <li>Enable user-to-user communications</li>
              <li>Generate a personal profile about you to make future visits to the site more personalized</li>
              <li>Increase the efficiency and operation of the site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the site</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disclosure of Your Information</h2>
            <p className="text-gray-600 mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">By Law or to Protect Rights</h3>
            <p className="text-gray-600 mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Security of Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@nanobananaguide.ai
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              This privacy policy was last updated on January 8, 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;