// @ts-nocheck
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const res = await fetch(`https://www.sankavollerei.com/novel/sakuranovel/chapter/${id}`);
    const json = await res.json();
    return NextResponse.json(json?.data || json?.result || json);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
