import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { url } = request;
  const params = new URL(url).searchParams;

  const data = {
    status: 'sent lol',
    title: params.get('title'),
    time: params.get('time'),
  };

  return NextResponse.json({ data });
}
