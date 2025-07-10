'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/verify?query=${query}`)
    }
  }

  return (
    <main
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-xl text-center">

          {/* Logo */}
          <div className="absolute top-4 left-4">
            <Image src="/logo.png" alt="Swipe Savvy" width={120} height={40} />
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-bold mb-2">
            You've Been Selected for a Free Loyalty Listing
          </h1>
          <p className="text-gray-600 mb-4">
            Your business has been recognized for its outstanding reputation.
          </p>

          {/* Input + Search Button */}
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Enter your business name or phone number"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-l-md border focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md">
              🔍
            </button>
          </form>

          {/* Subtext */}
          <p className="text-sm text-gray-500 mt-2">
            We’ll find your business and you can confirm the correct one in the next step.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-white text-sm">
        ⭐ Trusted by 1,000+ small businesses across the US ⭐
      </div>
    </main>
  )
}