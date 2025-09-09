
'use client'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'err'>('idle')
  
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const r = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (r.ok) setStatus('ok'); else setStatus('err')
    } catch { setStatus('err') }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            🎁 限时免费资源
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            获取专业 AI 图片编辑指南
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            免费领取《Nano Banana 完整使用手册》+ 100个精选提示词，
            让你快速掌握AI图片编辑的所有技巧
          </p>
          
          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              <span className="font-medium">完整使用手册</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">💡</span>
              </div>
              <span className="font-medium">100个提示词</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <span className="font-medium">实战案例分析</span>
            </div>
          </div>
          
          {/* Email form */}
          <div className="max-w-md mx-auto">
            {status === 'ok' ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">发送成功！</h3>
                <p className="text-blue-100">请检查您的邮箱，资源已发送到您的邮箱中</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="输入您的邮箱地址" 
                    className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    disabled={status === 'loading'}
                  />
                  <button 
                    type="submit"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span>发送中...</span>
                      </div>
                    ) : (
                      '免费获取'
                    )}
                  </button>
                </div>
                
                {status === 'err' && (
                  <p className="text-red-200 text-sm mt-3 text-center">
                    发送失败，请稍后再试或检查邮箱格式
                  </p>
                )}
                
                <p className="text-blue-100 text-xs mt-4 text-center">
                  我们承诺不会发送垃圾邮件，您可以随时取消订阅
                </p>
              </form>
            )}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>隐私保护</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>无垃圾邮件</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⚡</span>
              <span>即时发送</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🎯</span>
              <span>精选内容</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
