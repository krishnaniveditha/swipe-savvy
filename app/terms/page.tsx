'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TermsPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleContinue = () => {
    if (agreed) router.push('/success');
    else alert('Please agree to the terms first.');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">

        {/* Main Content */}
        <div className="p-6 md:w-2/3 space-y-6">
          <h1 className="text-2xl font-bold text-center md:text-left">📜 Just One More Step</h1>
          <p className="text-gray-700 text-center md:text-left">
            Please review and agree to our terms before activating your account.
          </p>

          {/* Accordion */}
          <div className="border rounded-md">
            <button
              onClick={() => setShowTerms(!showTerms)}
              className="w-full text-left px-4 py-3 font-medium bg-gray-200 hover:bg-gray-300"
            >
              {showTerms ? '▼' : '▶'} Swipe Savvy Merchant Agreement & Privacy Policy
            </button>
            {showTerms && (
              <div className="px-4 py-3 text-sm text-gray-700 border-t bg-gray-50 max-h-64 overflow-y-auto">
                <p>
                  By proceeding, you acknowledge that Swipe Savvy is not affiliated with your payment processor.
                </p>
                <p className="mt-2">
                  You agree to receive communications about offers, updates, and loyalty rewards.
                </p>
                <p className="mt-2">
                  This is a free loyalty listing. No payment is required. You may opt out at any time.
                </p>
              </div>
            )}
          </div>

          {/* Checkbox */}
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the Swipe Savvy Merchant Agreement and Privacy Policy.
            </span>
          </label>

          {/* CTA Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            ✅ Activate My Free Listing
          </button>

          {/* Subtext */}
          <p className="text-xs text-gray-500 text-center">
            We'll ship your Swipe Savvy window sticker and POS signage within 5–7 business days.
          </p>
        </div>

        {/* Sidebar */}
        <div className="bg-blue-50 md:w-1/3 p-6 flex flex-col space-y-3 border-t md:border-t-0 md:border-l">
          <h2 className="text-lg font-semibold text-blue-800">🎁 Free Benefits</h2>
          <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
            <li>Business Listing on Swipe Savvy</li>
            <li>Window Sticker</li>
            <li>POS Signage</li>
            <li>Reward-Enabled Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}