'use client';

import { useEffect, useState } from 'react';

const testimonials = [
  "Swipe Savvy brought in 20% more foot traffic last month!",
  "Love the rewards program — my customers are thrilled.",
  "Setup was super easy. Highly recommended!",
  "Free window sticker + POS signage? Amazing value.",
  "Swipe Savvy helped us build loyalty effortlessly.",
];

export default function TestimonialsScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 w-full text-center text-sm text-gray-700 animate-pulse">
      ⭐ {testimonials[currentIndex]} ⭐
    </div>
  );
}