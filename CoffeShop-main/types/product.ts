export const roastLevels = ['light', 'medium', 'mediumDark', 'dark'] as const;

export type RoastLevel = typeof roastLevels[number];

export type ProductCardProps = {
  id: string;
  name: {
    en: string;
    pt: string;
  };
  price: number;
  originalPrice?: number;
  image: string;
  description: {
    en: string;
    pt: string;
  };
  category: string;
  roastLevel: RoastLevel;
  weight: string;
  country: {
    en: string;
    pt: string;
  };
  inStock: boolean;
  stockAmount: number;
  isNew: boolean;
  onPromotion: boolean;
}; 