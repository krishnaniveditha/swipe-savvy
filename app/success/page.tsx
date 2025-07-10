'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);

  // Automatically stop confetti after 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* 🎊 Subtle Confetti Animation (emoji fallback) */}
      {showConfetti && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10 text-4xl animate-pulse">
          🎉🎊🎉🎊
        </div>
      )}

      <h1 className="text-3xl font-bold text-green-800 text-center mb-2 z-20">
        🎉 Your Business Is Now Live on Swipe Savvy!
      </h1>
      <p className="text-md text-gray-700 mb-8 text-center z-20 max-w-xl">
        Make the most of it with a limited-time upgrade — first month free + 50% off for life.
      </p>

      {/* Side-by-side Cards */}
      <div className="flex flex-col md:flex-row gap-6 z-20">

        {/* 🆓 Free Plan Card */}
        <div className="bg-white border border-green-300 rounded-lg p-6 shadow-md w-full md:w-96 text-center">
          <h2 className="text-lg font-semibold mb-3">🆓 Free Plan Active</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔️ Loyalty listing on Swipe Savvy</li>
            <li>✔️ Window sticker & POS signage</li>
            <li>✔️ Reward-enabled checkout</li>
          </ul>
        </div>

        {/* 🔥 Upgrade Offer Card */}
        <div className="bg-white border-2 border-yellow-500 rounded-lg p-6 shadow-lg w-full md:w-96 text-center">
          <h2 className="text-lg font-semibold text-yellow-700 mb-3">🔥 Upgrade to Shop Savvy</h2>
          <ul className="text-sm text-gray-700 space-y-2 text-left">
            <li>✅ Featured placement in our app</li>
            <li>✅ Run 2x rewards promotions</li>
            <li>✅ Sync listings across Google, Yelp, Facebook</li>
            <li>✅ Access analytics & performance reports</li>
          </ul>
          <p className="mt-4 text-sm text-yellow-700 font-medium">
            💸 Try it FREE for 30 days — then just <strong>$34.50/mo</strong> (50% off forever)
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <button
              onClick={() => alert('Upgrade flow triggered')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold"
            >
              🔥 Yes, Upgrade Me — Risk-Free
            </button>
            <button
              onClick={() => router.push('/')}
              className="text-sm text-gray-500 hover:underline"
            >
              ➡️ No Thanks, I’ll Stay on the Free Plan
            </button>
          </div>
        </div>
      </div>

      {/* 🗣️ Testimonials */}
      <div className="mt-12 w-full max-w-3xl z-20">
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">💬 What Merchants Are Saying</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-0">
          {[
            {
              name: 'Tina @ Glow Salon',
              quote: '“Swipe Savvy doubled my foot traffic within the first month!”'
            },
            {
              name: 'James @ Fresh Bites',
              quote: '“Love the rewards system — customers actually talk about it!”'
            },
            {
              name: 'Sophia @ Book Nook',
              quote: '“The Google sync made managing listings effortless.”'
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-4 w-72 shrink-0 border border-gray-200"
            >
              <p className="text-gray-600 italic mb-2">“{t.quote}”</p>
              <p className="text-sm text-gray-500 text-right">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}