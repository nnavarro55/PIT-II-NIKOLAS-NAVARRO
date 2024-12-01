"use client";

import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';

export default function CartPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const { t, language } = useLanguage();

  const cartTotal = items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 py-8 text-center">
        <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
        <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
          {t('cart.empty')}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-md">
          {t('cart.emptyDesc')}
        </p>
        <Button
          onClick={() => router.push('/')}
          className="mt-6 bg-[#FF8000] hover:bg-[#FF8000]/90"
        >
          {t('cart.continueShopping')}
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('cart.title')}</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">{t('cart.summary')}</h2>
          <div className="mt-6 space-y-4">
            {items.map((item) => {
              const product = products.find((p) => p.id === item.id) as ProductCardProps;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span>
                    {product?.name[language]} x {item.quantity}
                  </span>
                  <span>${((product?.price ?? 0) * item.quantity).toFixed(2)}</span>
                </div>
              );
            })}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between font-semibold">
                <span>{t('cart.total')}</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => router.push('/checkout')}
            className="mt-6 w-full bg-[#FF8000] hover:bg-[#FF8000]/90"
          >
            {t('cart.checkout')}
          </Button>
        </div>
      </div>
    </div>
  );
}