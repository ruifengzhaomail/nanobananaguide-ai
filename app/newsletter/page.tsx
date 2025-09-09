'use client';

import { useState, useEffect } from 'react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { Mail, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function NewsletterPage() {
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    confirmedSubscribers: 0,
    recentSubscribers: 0
  });

  // 获取订阅统计
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/newsletter');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch newsletter stats:', error);
    }
  };

  // 页面加载时获取统计数据
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated with
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {' '}Nano Banana Guide
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the latest guides, tutorials, tips, and updates about Nano Banana AI image editing delivered straight to your inbox. Join our community of creators!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stats.totalSubscribers}</div>
              <div className="text-sm text-gray-600">Total Subscribers</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stats.confirmedSubscribers}</div>
              <div className="text-sm text-gray-600">Active Subscribers</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stats.recentSubscribers}</div>
              <div className="text-sm text-gray-600">New This Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <NewsletterSubscription variant="default" />
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-gray-600">
              Valuable content delivered to your inbox weekly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Guides & Tutorials</h3>
              <p className="text-gray-600 leading-relaxed">
                Step-by-step tutorials, advanced techniques, and comprehensive guides to help you master Nano Banana AI image editing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Tips & Tricks</h3>
              <p className="text-gray-600 leading-relaxed">
                Insider tips, workflow optimizations, and creative techniques from experienced users and professionals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feature Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Be the first to know about new features, model updates, and improvements to Nano Banana AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Inspiration</h3>
              <p className="text-gray-600 leading-relaxed">
                Showcase of amazing creations, case studies, and creative challenges to inspire your next project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How often will I receive emails?
              </h3>
              <p className="text-gray-600">
                We send a weekly newsletter with the latest guides and updates. You'll never receive spam or daily emails.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can I unsubscribe anytime?
              </h3>
              <p className="text-gray-600">
                Absolutely! Every email includes an unsubscribe link, and you can opt out at any time with just one click.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Is my email address safe?
              </h3>
              <p className="text-gray-600">
                We respect your privacy and will never share your email address with third parties. Your data is secure with us.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What type of content will I receive?
              </h3>
              <p className="text-gray-600">
                You'll receive tutorials, tips, feature updates, creative showcases, and exclusive content about Nano Banana AI image editing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}