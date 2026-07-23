// @ts-nocheck
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ id: string, chapterId: string }> }) {
  try {
    const { chapterId } = await params;
    const res = await fetch(`https://www.sankavollerei.com/novel/sakuranovel/chapter/${chapterId}`);
    const json = await res.json();
    return NextResponse.json(json?.data || json?.result || json);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE() {
  return NextResponse.json({ success: true });
}

export async function PUT() {
  return NextResponse.json({ success: true });
}
