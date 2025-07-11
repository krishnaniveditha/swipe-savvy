'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AccountPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    website: '',
    isOwner: false,
    businessName: '',
    businessPhone: '',
    businessAddress: '',

  })

  const router = useRouter()

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        // Redirect to /terms if account is saved successfully
        window.location.href = '/terms'
      } else {
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl max-w-3xl w-full grid md:grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="col-span-2 text-2xl font-bold mb-4">Create Your Swipe Savvy Account</h1>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="tel" name="phone" placeholder="Mobile Number" onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded-md" required />
        <input type="text" name="website" placeholder="Website or Social Link (Optional)" onChange={handleChange} className="border p-2 rounded-md col-span-2" />
        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} className="border p-2 rounded-md col-span-2" required />
        <input type="text" name="businessPhone" placeholder="Business Phone" onChange={handleChange} className="border p-2 rounded-md col-span-2" required />
        <input type="text" name="businessAddress" placeholder="Business Address" onChange={handleChange} className="border p-2 rounded-md col-span-2" required />

        <label className="col-span-2 flex items-center space-x-2">
          <input type="checkbox" name="isOwner" onChange={handleChange} />
          <span>I am the owner or authorized representative of this business.</span>
        </label>

        <button type="submit" className="col-span-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          ✅ Continue
        </button>
      </form>
    </div>
  )
}
   