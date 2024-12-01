import { cn } from "@/lib/utils";

type PriceDisplayProps = {
  price: number;
  originalPrice?: number;
  className?: string;
};

export function PriceDisplay({ price, originalPrice, className }: PriceDisplayProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-bold">
        ${price.toFixed(2)}
      </span>
      {originalPrice && (
        <span className="text-sm text-gray-500 line-through">
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
} 