import { NextRequest, NextResponse } from 'next/server'
import { fal } from '@fal-ai/client'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const imageFile = formData.get('image') as File
    const prompt = formData.get('prompt') as string
    const strength = parseFloat(formData.get('strength') as string) || 0.8
    const num_inference_steps = parseInt(formData.get('num_inference_steps') as string) || 4
    const image_size = formData.get('image_size') as string || 'square_hd'

    if (!imageFile || !prompt) {
      return NextResponse.json(
        { error: 'Image file and prompt are required' },
        { status: 400 }
      )
    }

    if (!process.env.FAL_KEY) {
      return NextResponse.json(
        { error: 'FAL_KEY environment variable is not configured' },
        { status: 500 }
      )
    }

    // Convert image file to base64
    const bytes = await imageFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`

    // Use FLUX.1 [schnell] for image-to-image generation
    const result = await fal.subscribe('fal-ai/flux/schnell', {
      input: {
        prompt,
        image_url: base64Image,
        strength,
        num_inference_steps,
        image_size,
        num_images: 1,
        enable_safety_checker: true,
      },
    }) as any

    return NextResponse.json({
      success: true,
      image_url: result.data?.images?.[0]?.url || result.images?.[0]?.url,
      original_prompt: prompt,
      strength,
      metadata: {
        model: 'flux-schnell',
        inference_steps: num_inference_steps,
        image_size
      }
    })

  } catch (error) {
    console.error('Image editing error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to edit image',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}