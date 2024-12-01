"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';
import { PriceDisplay } from '@/components/PriceDisplay';

export function ProductCard(props: ProductCardProps) {
  const { language, t } = useLanguage();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation
    addItem(props.id, quantity);
    toast.success(t('product.addedToCart'), {
      description: t('product.addedToCartDesc', { 
        name: props.name[language],
        quantity: quantity 
      }),
    });
    setQuantity(1);
  };

  return (
    <div className="group relative flex h-full flex-col rounded-lg border bg-white shadow-sm">
      <Link href={`/product/${props.id}`} className="flex-1">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={props.image}
            alt={props.name[language]}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute left-2 top-2 flex gap-2">
            {props.isNew && (
              <Badge variant="secondary">{t('product.new')}</Badge>
            )}
            {props.onPromotion && (
              <Badge variant="destructive">{t('product.sale')}</Badge>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {props.name[language]}
          </h3>
          <p className="mt-1 flex-1 text-sm text-gray-500 line-clamp-2">
            {props.description[language]}
          </p>
          <div className="mt-4">
            <PriceDisplay 
              price={props.price}
              originalPrice={props.onPromotion ? props.originalPrice : undefined}
              className="text-lg"
            />
          </div>
        </div>
      </Link>

      {/* Controls Section */}
      <div className="border-t p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex w-full sm:w-auto items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.preventDefault();
                setQuantity(Math.max(1, quantity - 1));
              }}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 sm:flex-initial w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.preventDefault();
                setQuantity(Math.min(props.stockAmount, quantity + 1));
              }}
              disabled={quantity >= props.stockAmount}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={!props.inStock || props.stockAmount === 0}
            className="w-full sm:flex-1 bg-[#FF8000] hover:bg-[#FF8000]/90"
            size="sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            {t('product.addToCart')}
          </Button>
        </div>
        {(!props.inStock || props.stockAmount === 0) && (
          <p className="mt-2 text-center text-sm text-red-500">
            {t('product.details.outOfStock')}
          </p>
        )}
      </div>
    </div>
  );
}