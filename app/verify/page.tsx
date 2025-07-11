import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically load the client component
const VerifyPageClient = dynamic(() => import('./VerifyPageClient'), {
  ssr: false,
});

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPageClient />
    </Suspense>
  );
}