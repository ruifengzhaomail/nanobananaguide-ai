import { NextRequest, NextResponse } from 'next/server';

// 简单的邮件验证函数
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 模拟邮件存储（实际项目中应该使用数据库）
const subscribers: { email: string; subscribedAt: Date; confirmed: boolean }[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // 验证邮件格式
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // 检查是否已经订阅
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // 添加到订阅列表
    subscribers.push({
      email,
      subscribedAt: new Date(),
      confirmed: false
    });

    // 模拟发送确认邮件（实际项目中应该集成邮件服务）
    console.log(`Sending confirmation email to: ${email}`);
    console.log(`Welcome ${name || 'subscriber'}! Thanks for subscribing to Nano Banana Guide.`);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed! Please check your email for confirmation.',
        email: email
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 获取订阅统计（可选）
export async function GET() {
  try {
    const stats = {
      totalSubscribers: subscribers.length,
      confirmedSubscribers: subscribers.filter(sub => sub.confirmed).length,
      recentSubscribers: subscribers
        .filter(sub => {
          const dayAgo = new Date();
          dayAgo.setDate(dayAgo.getDate() - 1);
          return sub.subscribedAt > dayAgo;
        })
        .length
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Newsletter stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 处理CORS预检请求
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}