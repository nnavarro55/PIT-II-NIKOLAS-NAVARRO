'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-provider';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t('checkout.success')}
      </h1>
      <p className="text-gray-600 mb-8">
        {t('checkout.successDesc')}
      </p>
      <Button
        onClick={() => router.push('/')}
        className="bg-[#FF8000] hover:bg-[#FF8000]/90"
      >
        {t('cart.continueShopping')}
      </Button>
    </div>
  );
} 