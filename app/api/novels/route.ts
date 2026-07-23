// @ts-nocheck
import { NextResponse } from 'next/server';
import { getNovelHome } from '@/lib/novel-api';

export async function GET() {
  try {
    const data = await getNovelHome();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST() {
  return NextResponse.json({ message: "DB disabled" });
}
