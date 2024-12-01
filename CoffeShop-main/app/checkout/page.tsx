"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';
import { CheckoutForm } from '@/components/CheckoutForm';
import { CheckoutInfo, PaymentType } from '@/types/checkout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const { t, language } = useLanguage();
  const [paymentType, setPaymentType] = useState<PaymentType>('card');

  // Generate a unique QR code for PIX payments
  const pixQRCode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=PIX_KEY_${Date.now()}`;
  
  const cartTotal = items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
    }
  }, [items.length, router]);

  const handleCheckout = (data: CheckoutInfo) => {
    console.log('Checkout data:', { ...data, payment: { type: paymentType } });
    clearCart();
    window.location.href = '/confirmation';
  };

  if (items.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            {t('checkout.title')}
          </h1>

          {/* Order Summary Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('checkout.orderSummary')}
            </h2>
            <div className="mt-4 space-y-4">
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
                    <span>
                      ${((product?.price ?? 0) * item.quantity).toFixed(2)}
                    </span>
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
          </div>

          {/* Payment Type Selection */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              {t('checkout.paymentMethod')}
            </h2>
            <Select value={paymentType} onValueChange={(value) => setPaymentType(value as PaymentType)}>
              <SelectTrigger>
                <SelectValue placeholder={t('checkout.selectPayment')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">{t('checkout.paymentTypes.card')}</SelectItem>
                <SelectItem value="pix">{t('checkout.paymentTypes.pix')}</SelectItem>
                <SelectItem value="bankTransfer">{t('checkout.paymentTypes.bankTransfer')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Payment Type Specific Content */}
          <div className="mt-8">
            {paymentType === 'pix' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {t('checkout.qrCodeTitle')}
                </h2>
                <div className="flex justify-center">
                  <div className="relative h-64 w-64">
                    <Image
                      src={pixQRCode}
                      alt="PIX QR Code"
                      fill
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  {t('checkout.pixInstructions')}
                </p>
              </div>
            )}

            {paymentType === 'bankTransfer' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {t('checkout.bankTransferDetails')}
                </h2>
                <div className="rounded-lg border p-4">
                  <p className="text-sm">
                    <strong>{t('checkout.bankName')}:</strong> Coffee Bank<br />
                    <strong>{t('checkout.accountHolder')}:</strong> Coffee Shop Inc<br />
                    <strong>{t('checkout.accountNumber')}:</strong> 1234-5678-9012-3456<br />
                    <strong>{t('checkout.routingNumber')}:</strong> 987654321
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Delivery Form and Submit Button */}
          <div className="mt-8">
            <CheckoutForm 
              onSubmit={handleCheckout}
              showCardFields={paymentType === 'card'}
            />
            <Button
              type="submit"
              form="checkout-form"
              className="mt-6 w-full bg-[#47C7FC] hover:bg-[#47C7FC]/90"
            >
              {t('checkout.submitOrder')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}