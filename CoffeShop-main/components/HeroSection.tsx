import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-provider';
import { products } from '@/data/products';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export function HeroSection() {
  const { t, language } = useLanguage();
  const router = useRouter();
  
  // Filter featured products (those on promotion or new)
  const featuredProducts = products.filter(p => p.onPromotion || p.isNew).slice(0, 3);

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  return (
    <section className="relative bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="font-della text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t('hero.title')}
              <span className="text-[#FF8000]">.</span>
            </h1>
            <p className="text-lg text-gray-300">
              {t('hero.description')}
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                loop: true,
                align: 'center',
              }}
              className="w-full max-w-xl mx-auto"
            >
              <CarouselContent>
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                      <Image
                        src={product.image}
                        alt={product.name[language]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex gap-2">
                          {product.isNew && (
                            <Badge variant="secondary">{t('product.new')}</Badge>
                          )}
                          {product.onPromotion && (
                            <Badge variant="destructive">{t('product.sale')}</Badge>
                          )}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {product.name[language]}
                        </h3>
                        <p className="mt-2 text-sm text-gray-200 line-clamp-2">
                          {product.description[language]}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xl font-bold text-white">
                            ${product.price.toFixed(2)}
                          </span>
                          <Button 
                            onClick={() => router.push(`/product/${product.id}`)}
                            className="bg-[#FF8000] hover:bg-[#FF8000]/90 group"
                          >
                            {t('hero.viewProduct')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white text-white hover:bg-white hover:text-black -left-4 lg:-left-6" />
              <CarouselNext className="border-white text-white hover:bg-white hover:text-black -right-4 lg:-right-6" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
} 