"use client";

import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { products } from '@/data/products';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { language } = useLanguage();
  const product = products.find((p) => p.id === id) as ProductCardProps;

  if (!product) return null;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b py-4">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name[language]}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name[language]}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-row sm:flex-col items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex items-center gap-2 flex-1 sm:flex-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(id, Math.max(0, quantity - 1))}
            className="h-8 w-8"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(id, quantity + 1)}
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => removeItem(id)}
          className="h-8 w-8"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}