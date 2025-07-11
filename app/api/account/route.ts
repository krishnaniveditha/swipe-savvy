import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('📦 Incoming request body:', body);

    const {
      name,
      email,
      phone,
      password,
      website,
      isOwner,
      businessName,
      businessPhone,
      businessAddress,
    } = body;

    // ✅ Step 1: Check required fields
    if (!name || !email || !password || !businessName || !businessPhone || !businessAddress) {
      console.warn('⚠️ Missing required fields');
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ✅ Step 2: Attempt DB insert
    const account = await prisma.account.create({
      data: {
        name,
        email,
        phone,
        password,
        website: website || null,
        isOwner: isOwner ?? false,
        businessName,
        businessPhone,
        businessAddress,
      },
    });

    console.log('✅ Account created:', account);
    return NextResponse.json({ success: true, account });

  } catch (error: any) {
    console.error('❌ Error saving account:', error.message || error);

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong. Details: ' + (error?.message || 'Unknown error'),
      },
      { status: 500 }
    );
  }
}