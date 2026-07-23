import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    site_title: 'Valoranime',
    site_description: 'Streaming Anime, Donghua, Komik & Novel',
    social_whatsapp: '',
    social_discord: '',
    social_facebook: '',
    social_tiktok: '',
  });
}
