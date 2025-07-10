import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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

    const account = await prisma.account.create({
      data: {
        name,
        email,
        phone,
        password,
        website: website || null,
        isOwner,
        businessName,
        businessPhone,
        businessAddress,
      },
    });

    return NextResponse.json({ success: true, account });
  } catch (error) {
    console.error('❌ Error saving account:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}