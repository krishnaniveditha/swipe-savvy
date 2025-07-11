'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const mockBusinesses = [
  { name: 'Niveditha Salon & Spa', phone: '201-555-9812', address: '123 Park Ave, NJ' },
  { name: 'Krishna Dry Cleaners', phone: '201-555-6523', address: '45 Main St, NJ' },
  { name: 'Niveditha Bookstore', phone: '201-555-4291', address: '8 College St, NJ' },
];

export default function VerifyPageClient() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';

  const filteredBusinesses = mockBusinesses.filter(biz =>
    biz.name.toLowerCase().includes(query)
  );

  const handleContinue = () => {
    if (selectedIndex !== null) {
      router.push('/account');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-2xl">

        {/* Step Indicator */}
        <div className="text-sm text-center mb-4 text-gray-600">
          Step 2 of 4: Verify Your Business
        </div>

        <h1 className="text-xl font-bold mb-6 text-center">🔍 Is This Your Business?</h1>

        <ul className="space-y-4">
          {filteredBusinesses.map((biz, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`border p-4 rounded-lg cursor-pointer ${
                selectedIndex === idx ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              {/* Business Image Placeholder */}
              <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-500">
                Business Image
              </div>

              <p className="font-semibold">{biz.name}</p>
              <p className="text-sm text-gray-600">{biz.phone} · {biz.address}</p>
            </li>
          ))}
        </ul>

        <button
          disabled={selectedIndex === null}
          onClick={handleContinue}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
        >
          ✅ Yes, This Is Me
        </button>

        <button
          onClick={() => router.push('/')}
          className="mt-3 w-full text-sm text-blue-600 hover:underline"
        >
          ↩️ No, Try Again
        </button>

      </div>
    </div>
  );
}