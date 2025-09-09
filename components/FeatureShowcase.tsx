'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Feature {
  id: string
  title: string
  description: string
  icon: string
  beforeImage: string
  afterImage: string
  tags: string[]
}

const features: Feature[] = [
  {
    id: 'background-removal',
    title: '智能背景移除',
    description: '一键移除图片背景，支持复杂场景和细节保留',
    icon: '🎯',
    beforeImage: '/demo/before-bg.jpg',
    afterImage: '/demo/after-bg.png',
    tags: ['背景移除', '透明背景', '商品图']
  },
  {
    id: 'object-removal',
    title: '物体智能移除',
    description: '精准识别并移除不需要的物体，自动填补背景',
    icon: '✨',
    beforeImage: '/demo/before-object.jpg',
    afterImage: '/demo/after-object.jpg',
    tags: ['物体移除', '内容填充', '修复']
  },
  {
    id: 'style-transfer',
    title: '风格转换',
    description: '将图片转换为不同艺术风格，支持多种预设模板',
    icon: '🎨',
    beforeImage: '/demo/before-style.jpg',
    afterImage: '/demo/after-style.jpg',
    tags: ['风格转换', '艺术效果', '滤镜']
  },
  {
    id: 'upscaling',
    title: '图片超分辨率',
    description: '使用AI技术提升图片分辨率，保持清晰度',
    icon: '📈',
    beforeImage: '/demo/before-upscale.jpg',
    afterImage: '/demo/after-upscale.jpg',
    tags: ['超分辨率', '清晰度', '放大']
  }
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const [isBeforeView, setIsBeforeView] = useState(true)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            强大的AI图片编辑功能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            体验最先进的人工智能图片处理技术，让您的创意无限可能
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature.id === feature.id
                    ? 'bg-white shadow-xl border-2 border-blue-200 transform scale-105'
                    : 'bg-white/70 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Area */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {activeFeature.title}
                </h3>
                <p className="text-gray-600">
                  {activeFeature.description}
                </p>
              </div>

              {/* Before/After Toggle */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-100 rounded-full p-1 flex">
                  <button
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      isBeforeView
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsBeforeView(true)}
                  >
                    处理前
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      !isBeforeView
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsBeforeView(false)}
                  >
                    处理后
                  </button>
                </div>
              </div>

              {/* Image Display */}
              <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">{activeFeature.icon}</div>
                    <p className="text-lg font-medium">
                      {isBeforeView ? '原始图片' : '处理后效果'}
                    </p>
                    <p className="text-sm mt-2 opacity-75">
                      演示图片加载中...
                    </p>
                  </div>
                </div>
                
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-20"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  立即体验
                </button>
                <button className="px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  查看教程
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">图片处理次数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">活跃用户</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">处理成功率</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">在线服务</div>
          </div>
        </div>
      </div>
    </section>
  )
}