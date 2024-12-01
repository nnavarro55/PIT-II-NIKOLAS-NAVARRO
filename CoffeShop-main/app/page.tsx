"use client";

import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Slider } from '@/components/ui/slider';
import { HeroSection } from '@/components/HeroSection';
import { FilterButton } from '@/components/FilterButton';
import { Package2, Sparkles, Tag, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps, roastLevels, RoastLevel } from '@/types/product';
import { SearchBar } from '@/components/SearchBar';
import { Input } from '@/components/ui/input';

const categories = Array.from(new Set(products.map((p) => p.category)));
const countries = Array.from(
  new Set(products.map((p) => typeof p.country === 'string' ? p.country : p.country.en))
);
const maxPrice = Math.max(...products.map((p) => p.price));

export default function Home() {
  const { t, language } = useLanguage();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [category, setCategory] = useState<string>('all');
  const [country, setCountry] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPriceRange, setMaxPriceRange] = useState<number>(maxPrice);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);
  const [showNewOnly, setShowNewOnly] = useState<boolean>(false);
  const [showPromotionsOnly, setShowPromotionsOnly] = useState<boolean>(false);
  const [roastLevel, setRoastLevel] = useState<RoastLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (searchQuery === "" ||
        product.name[language].toLowerCase().includes(searchQuery.toLowerCase())) &&
      (category === 'all' || product.category === category) &&
      (country === 'all' || 
        (typeof product.country === 'string' 
          ? product.country === country 
          : product.country[language] === country)
      ) &&
      product.price >= minPrice &&
      product.price <= maxPriceRange &&
      (!showInStockOnly || (product.inStock && product.stockAmount > 0)) &&
      (!showNewOnly || product.isNew) &&
      (!showPromotionsOnly || product.onPromotion) &&
      (roastLevel === 'all' || product.roastLevel === roastLevel)
  );

  return (
    <main>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-della font-bold text-gray-900">
          {t('home.title')}
        </h1>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              <FilterButton
                active={showInStockOnly}
                onClick={() => setShowInStockOnly(!showInStockOnly)}
                icon={<Package2 className="h-4 w-4" />}
                label={t('home.filters.inStock')}
                compact
              />
              <FilterButton
                active={showNewOnly}
                onClick={() => setShowNewOnly(!showNewOnly)}
                icon={<Sparkles className="h-4 w-4" />}
                label={t('home.filters.new')}
                compact
              />
              <FilterButton
                active={showPromotionsOnly}
                onClick={() => setShowPromotionsOnly(!showPromotionsOnly)}
                icon={<Tag className="h-4 w-4" />}
                label={t('home.filters.promotion')}
                compact
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="w-full sm:w-auto"
              size="sm"
            >
              {showAdvancedFilters ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  {t('home.filters.less')}
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  {t('home.filters.more')}
                </>
              )}
            </Button>
          </div>

          {showAdvancedFilters && (
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t('home.filters.category')}
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('home.filters.categoryAll')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('home.filters.categoryAll')}</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t('home.filters.country')}
                  </label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('home.filters.countryAll')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('home.filters.countryAll')}</SelectItem>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {typeof c === 'string' ? c : c[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t('home.filters.roastLevel')}
                  </label>
                  <Select value={roastLevel} onValueChange={(value) => setRoastLevel(value as RoastLevel | 'all')}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('home.filters.roastLevelAll')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('home.filters.roastLevelAll')}</SelectItem>
                      {roastLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {t(`product.roast.${level}` as const)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t('home.filters.priceRange')}
                  </label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-2 top-2 text-sm text-gray-500">$</span>
                        <Input
                          type="number"
                          value={minPrice}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value <= maxPriceRange) {
                              setMinPrice(value);
                            }
                          }}
                          className="pl-6"
                          placeholder={t('common.min')}
                          min={0}
                          max={maxPriceRange}
                        />
                      </div>
                      <span className="text-gray-500">-</span>
                      <div className="relative flex-1">
                        <span className="absolute left-2 top-2 text-sm text-gray-500">$</span>
                        <Input
                          type="number"
                          value={maxPriceRange}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= minPrice) {
                              setMaxPriceRange(value);
                            }
                          }}
                          className="pl-6"
                          placeholder={t('common.max')}
                          min={minPrice}
                          max={maxPrice}
                        />
                      </div>
                    </div>
                    <Slider
                      value={[minPrice, maxPriceRange]}
                      min={0}
                      max={maxPrice}
                      step={0.01}
                      minStepsBetweenThumbs={1}
                      onValueChange={([min, max]) => {
                        setMinPrice(min);
                        setMaxPriceRange(max);
                      }}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product as unknown as ProductCardProps} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}