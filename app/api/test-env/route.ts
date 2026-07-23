import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'database-free',
    NODE_ENV: process.env.NODE_ENV
  });
}
