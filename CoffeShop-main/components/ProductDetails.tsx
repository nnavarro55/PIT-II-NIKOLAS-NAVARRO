"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';
import { PriceDisplay } from '@/components/PriceDisplay';

type ProductDetailsProps = {
  product: ProductCardProps;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const { t, language } = useLanguage();

  const handleAddToCart = () => {
    addItem(product.id);
    toast.success(t('product.addedToCart'), {
      description: t('product.addedToCartDesc', { name: product.name[language] }),
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('product.back')}
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name[language]}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name[language]}
            </h1>
            {product.isNew && (
              <Badge variant="secondary">{t('product.new')}</Badge>
            )}
            {product.onPromotion && (
              <Badge variant="destructive">{t('product.sale')}</Badge>
            )}
          </div>

          <p className="mt-4 text-lg text-gray-500">
            {product.description[language]}
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">{t('product.details.origin')}</span>
              <span>{product.country[language]}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">{t('product.details.roastLevel')}</span>
              <span>{t(`product.roast.${product.roastLevel}`)}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">{t('product.details.weight')}</span>
              <span>{product.weight}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">{t('product.details.category')}</span>
              <span>{product.category}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">{t('product.details.stock')}</span>
              <Badge variant={product.inStock ? "secondary" : "destructive"}>
                {product.inStock ? t('product.details.inStock') : t('product.details.outOfStock')}
              </Badge>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <PriceDisplay 
              price={product.price}
              originalPrice={product.onPromotion ? product.originalPrice : undefined}
              className="text-2xl"
            />
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              onClick={handleAddToCart}
              className="bg-[#FF8000] hover:bg-[#FF8000]/90"
              disabled={!product.inStock || product.stockAmount === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('product.addToCart')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}