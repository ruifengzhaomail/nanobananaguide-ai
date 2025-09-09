'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Image as ImageIcon, Wand2, Download, Trash2, Settings, Zap } from 'lucide-react'

interface UploadedImage {
  id: string
  file: File
  url: string
  name: string
  isEditing?: boolean
  editPrompt?: string
}

interface GeneratedImage {
  id: string
  url: string
  prompt: string
  timestamp: Date
}

export default function AIImageEditor() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState<'upload' | 'generate'>('upload')
  const [batchMode, setBatchMode] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)
  const [editingImage, setEditingImage] = useState<string | null>(null)
  const [editPrompt, setEditPrompt] = useState('')
  const [editStrength, setEditStrength] = useState(0.8)
  const [isEditing, setIsEditing] = useState(false)

  // 处理文件拖拽
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [])

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    
    imageFiles.forEach(file => {
      const id = Math.random().toString(36).substr(2, 9)
      const url = URL.createObjectURL(file)
      
      setUploadedImages(prev => [...prev, {
        id,
        file,
        url,
        name: file.name
      }])
    })
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const removeImage = (id: string) => {
    setUploadedImages(prev => {
      const image = prev.find(img => img.id === id)
      if (image) {
        URL.revokeObjectURL(image.url)
      }
      return prev.filter(img => img.id !== id)
    })
  }

  const generateImage = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          num_inference_steps: 4,
          image_size: 'square_hd'
        }),
      })

      const data = await response.json()

      if (data.success && data.image_url) {
        const id = Math.random().toString(36).substr(2, 9)
        
        setGeneratedImages(prev => [{
          id,
          url: data.image_url,
          prompt: prompt.trim(),
          timestamp: new Date()
        }, ...prev])
        
        setPrompt('')
      } else {
        console.error('Image generation failed:', data.error)
        alert('图像生成失败，请稍后重试')
      }
    } catch (error) {
      console.error('Error generating image:', error)
      alert('网络错误，请检查连接后重试')
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const editImage = async (imageId: string) => {
    const image = uploadedImages.find(img => img.id === imageId)
    if (!image || !editPrompt.trim()) return

    setIsEditing(true)

    try {
      const formData = new FormData()
      formData.append('image', image.file)
      formData.append('prompt', editPrompt.trim())
      formData.append('strength', editStrength.toString())
      formData.append('num_inference_steps', '4')
      formData.append('image_size', 'square_hd')

      const response = await fetch('/api/edit-image', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success && data.image_url) {
        const newId = Math.random().toString(36).substr(2, 9)
        
        setGeneratedImages(prev => [{
          id: newId,
          url: data.image_url,
          prompt: `编辑: ${editPrompt.trim()}`,
          timestamp: new Date()
        }, ...prev])
        
        setEditingImage(null)
        setEditPrompt('')
        setActiveTab('generate')
      } else {
        console.error('Image editing failed:', data.error)
        alert('图像编辑失败，请稍后重试')
      }
    } catch (error) {
      console.error('Error editing image:', error)
      alert('网络错误，请检查连接后重试')
    } finally {
      setIsEditing(false)
    }
  }

  const startImageEdit = (imageId: string) => {
    setEditingImage(imageId)
    setEditPrompt('')
  }

  const cancelImageEdit = () => {
    setEditingImage(null)
    setEditPrompt('')
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
          🍌 Nano Banana AI 编辑器
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          上传图片进行 AI 编辑，或使用文字描述生成全新图像
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-yellow-200">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'upload'
                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📸 图片编辑
          </button>
          <button
            onClick={() => setActiveTab('generate')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'generate'
                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            🎨 AI 生成
          </button>
        </div>
      </div>

      {activeTab === 'upload' && (
        <div className="space-y-8">
          {/* Upload Area */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">上传图片</h2>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={batchMode}
                    onChange={(e) => setBatchMode(e.target.checked)}
                    className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <span className="text-sm font-medium text-gray-700">批量模式</span>
                </label>
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-yellow-300 bg-yellow-50/50 hover:border-yellow-400 hover:bg-yellow-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="text-6xl">📁</div>
                <div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    拖拽图片到此处或点击上传
                  </p>
                  <p className="text-gray-500">
                    支持 JPG、PNG、WebP 格式，最大 50MB
                  </p>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3 rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Upload className="w-5 h-5 inline mr-2" />
                  选择文件
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Uploaded Images Grid */}
          {uploadedImages.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">已上传的图片 ({uploadedImages.length})</h3>
                {batchMode && (
                  <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 font-semibold text-sm">
                    批量编辑 ({uploadedImages.length})
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-2">
                      <button 
                        onClick={() => startImageEdit(image.id)}
                        className="p-2 bg-yellow-500/80 backdrop-blur-sm rounded-lg hover:bg-yellow-600/80 transition-colors"
                        title="AI编辑"
                      >
                        <Wand2 className="w-5 h-5 text-white" />
                      </button>
                      <button 
                        onClick={() => downloadImage(image.url, image.name)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                        title="下载"
                      >
                        <Download className="w-5 h-5 text-white" />
                      </button>
                      <button 
                        onClick={() => removeImage(image.id)}
                        className="p-2 bg-red-500/80 backdrop-blur-sm rounded-lg hover:bg-red-600/80 transition-colors"
                        title="删除"
                      >
                        <Trash2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 truncate">{image.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Editing Modal */}
          {editingImage && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">🎨 AI 图像编辑</h3>
                  <button 
                    onClick={cancelImageEdit}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden max-w-sm mx-auto">
                    <img
                      src={uploadedImages.find(img => img.id === editingImage)?.url}
                      alt="编辑中的图片"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      描述你想要的编辑效果
                    </label>
                    <textarea
                      value={editPrompt}
                      onChange={(e) => setEditPrompt(e.target.value)}
                      placeholder="例如：将背景改为蓝天白云，增加阳光效果，让画面更加明亮温暖..."
                      className="w-full p-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none resize-none h-32 bg-yellow-50/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      编辑强度: {Math.round(editStrength * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.1"
                      value={editStrength}
                      onChange={(e) => setEditStrength(parseFloat(e.target.value))}
                      className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>轻微修改</span>
                      <span>大幅改变</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={cancelImageEdit}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold"
                    >
                      取消
                    </button>
                    <button
                      onClick={() => editImage(editingImage)}
                      disabled={!editPrompt.trim() || isEditing}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isEditing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>编辑中...</span>
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5" />
                          <span>开始编辑</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'generate' && (
        <div className="space-y-8">
          {/* Generation Interface */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 图像生成</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  描述你想要生成的图像
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="例如：一只可爱的橙色小猫坐在樱花树下，阳光透过花瓣洒下，画面温馨唯美，高清摄影风格..."
                  className="w-full p-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none resize-none h-32 bg-yellow-50/50"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-yellow-200 rounded-lg focus:border-yellow-400 focus:outline-none">
                    <option>标准质量</option>
                    <option>高清质量</option>
                    <option>超高清质量</option>
                  </select>
                  <select className="px-4 py-2 border border-yellow-200 rounded-lg focus:border-yellow-400 focus:outline-none">
                    <option>1:1 正方形</option>
                    <option>16:9 横屏</option>
                    <option>9:16 竖屏</option>
                    <option>4:3 传统</option>
                  </select>
                </div>
                
                <button
                  onClick={generateImage}
                  disabled={!prompt.trim() || isGenerating}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3 rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>生成中...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>生成图像</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Generated Images Gallery */}
          {generatedImages.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">生成的图像 ({generatedImages.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generatedImages.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={image.url}
                        alt={`Generated: ${image.prompt}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Wand2 className="w-5 h-5 text-white" />
                      </button>
                      <button 
                        onClick={() => downloadImage(image.url, `generated-${image.id}.jpg`)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Download className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 line-clamp-2">{image.prompt}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {image.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}