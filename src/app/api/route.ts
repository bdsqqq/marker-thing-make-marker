import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { url } = request;
  const query = new URL(url).searchParams;

  const data = {
    status: 'sent lol',
    query: query.get('query'),
  };

  return NextResponse.json({ data });
}
