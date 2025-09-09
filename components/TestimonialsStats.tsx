'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  useCase: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '张小明',
    role: '电商运营',
    company: '某知名电商平台',
    avatar: '👨‍💼',
    content: 'Nano Banana 帮我们节省了大量的图片处理时间，背景移除功能特别准确，现在我们的商品图片制作效率提升了300%。',
    rating: 5,
    useCase: '电商图片处理'
  },
  {
    id: '2',
    name: '李美丽',
    role: '自媒体博主',
    company: '个人工作室',
    avatar: '👩‍🎨',
    content: '作为一个设计小白，这个工具让我能够轻松制作出专业级的图片。风格转换功能太棒了，我的粉丝都夸我的图片越来越好看。',
    rating: 5,
    useCase: '社交媒体内容'
  },
  {
    id: '3',
    name: '王工程师',
    role: '产品经理',
    company: '科技公司',
    avatar: '👨‍💻',
    content: '我们团队用它来快速制作产品演示图片，AI的智能程度超出预期。物体移除功能帮我们解决了很多棘手的图片问题。',
    rating: 5,
    useCase: '产品展示'
  },
  {
    id: '4',
    name: '陈设计师',
    role: '平面设计师',
    company: '广告公司',
    avatar: '👩‍🎨',
    content: '即使作为专业设计师，我也经常使用这个工具来提高工作效率。超分辨率功能让我能够拯救很多低质量的素材图片。',
    rating: 5,
    useCase: '专业设计'
  },
  {
    id: '5',
    name: '刘老师',
    role: '教育工作者',
    company: '某大学',
    avatar: '👨‍🏫',
    content: '在制作教学课件时，这个工具帮了我很大忙。能够快速处理各种图片，让我的课件更加生动有趣。',
    rating: 5,
    useCase: '教育内容'
  },
  {
    id: '6',
    name: '赵摄影师',
    role: '摄影师',
    company: '摄影工作室',
    avatar: '📸',
    content: '后期处理是摄影工作的重要环节，这个AI工具让我能够快速完成基础的图片优化，专注于更有创意的工作。',
    rating: 5,
    useCase: '摄影后期'
  }
]

const stats = [
  {
    number: '2.5M+',
    label: '图片处理次数',
    description: '每月处理超过250万张图片',
    icon: '📊',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '150K+',
    label: '活跃用户',
    description: '来自全球的专业用户',
    icon: '👥',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '99.8%',
    label: '处理成功率',
    description: '行业领先的处理准确度',
    icon: '✅',
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: '< 3s',
    label: '平均处理时间',
    description: '闪电般的处理速度',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function TestimonialsStats() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            数据说话，实力见证
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            全球用户的信赖选择，行业领先的AI图片处理平台
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1 text-gray-200">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              用户真实评价
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              听听来自不同行业用户的真实反馈
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-100">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-semibold text-lg text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-300">
                        {testimonials[currentTestimonial].role} · {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                        {testimonials[currentTestimonial].useCase}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              >
                <span className="text-2xl">←</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-blue-400 w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`p-4 rounded-2xl transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-white/20 border-2 border-blue-400 transform scale-105'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="text-3xl mb-2">{testimonial.avatar}</div>
                <div className="text-sm font-medium text-white truncate">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {testimonial.role}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}