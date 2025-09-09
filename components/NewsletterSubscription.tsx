'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface NewsletterSubscriptionProps {
  className?: string;
  variant?: 'default' | 'compact' | 'footer';
}

export default function NewsletterSubscription({ 
  className = '', 
  variant = 'default' 
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isCompact = variant === 'compact';
  const isFooter = variant === 'footer';

  return (
    <div className={`${className}`}>
      {!isCompact && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className={`font-bold mb-2 ${
            isFooter ? 'text-lg text-white' : 'text-xl text-gray-900'
          }`}>
            Stay Updated with Nano Banana Guide
          </h3>
          <p className={`${
            isFooter ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get the latest guides, tips, and updates delivered to your inbox
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isCompact && (
          <div>
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                isFooter 
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
        )}
        
        <div className={isCompact ? 'flex gap-2' : ''}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
              isCompact ? 'flex-1' : 'w-full'
            } ${
              isFooter 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
              isCompact ? 'whitespace-nowrap' : 'w-full'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                {isCompact ? 'Subscribe' : 'Subscribe to Newsletter'}
              </>
            )}
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {status !== 'idle' && (
        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
          status === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600" />
          )}
          <span className="text-sm">{message}</span>
        </div>
      )}

      {!isCompact && (
        <p className={`text-xs mt-4 ${
          isFooter ? 'text-gray-400' : 'text-gray-500'
        }`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </div>
  );
}