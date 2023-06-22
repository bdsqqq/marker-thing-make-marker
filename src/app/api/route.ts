import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    status: 'sent lol',
  };

  return NextResponse.json({ data });
}
