import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { url } = request;
  const params = new URL(url).searchParams;

  // TODO: Store this somewhere

  const data = {
    status: 'sent lol',
    channel: params.get('channel'),
    stream_id: params.get('stream_id'),
    title: params.get('title'),
    time: params.get('time'),
  };

  return NextResponse.json({ data });
}
