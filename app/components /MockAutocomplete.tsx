'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MOCK_BUSINESSES = [
  { name: 'Java Jolt Café', address: '123 Main St', phone: '(123) 456-7890' },
  { name: 'Happy Paws Grooming', address: '456 Pet Lane', phone: '(234) 567-8901' },
  { name: 'Green Leaf Grocery', address: '789 Market Rd', phone: '(345) 678-9012' },
]

export default function MockAutocomplete() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<typeof MOCK_BUSINESSES>([])
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    const filtered = MOCK_BUSINESSES.filter(b =>
      b.name.toLowerCase().includes(value.toLowerCase())
    )
    setSuggestions(filtered)
  }

  const handleSelect = (business: typeof MOCK_BUSINESSES[0]) => {
    router.push(`/verify?name=${encodeURIComponent(business.name)}&address=${encodeURIComponent(business.address)}&phone=${encodeURIComponent(business.phone)}`)
  }

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Enter your business name or phone number"
        value={query}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md border focus:outline-none"
      />
  
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white w-full border rounded-md shadow-md mt-1">
          {suggestions.map((biz, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(biz)}
            >
              {biz.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}