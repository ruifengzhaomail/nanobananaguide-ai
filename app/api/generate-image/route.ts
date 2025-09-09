import { NextRequest, NextResponse } from 'next/server';
import { fal } from '@fal-ai/client';

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, num_inference_steps = 4, image_size = 'square_hd' } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.FAL_KEY) {
      return NextResponse.json(
        { error: 'FAL_KEY environment variable is not configured' },
        { status: 500 }
      );
    }

    // Generate image using FLUX.1 [schnell] model
    const result = await fal.subscribe('fal-ai/flux/schnell', {
      input: {
        prompt,
        num_inference_steps,
        image_size,
        num_images: 1,
        enable_safety_checker: true,
      },
    }) as any;

    return NextResponse.json({
      success: true,
      image_url: result.data?.images?.[0]?.url || result.images?.[0]?.url,
      prompt: prompt,
    });
  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}