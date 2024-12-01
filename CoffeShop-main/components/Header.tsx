"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Coffee, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { useLanguage } from '@/lib/language-provider';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const { language, toggleLanguage, t } = useLanguage();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const languageFlag = language === 'en' ? '🇧🇷' : '🇺🇸';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <MobileMenu />
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-[#FF8000]" />
            <span className="font-della text-xl font-bold">{t('header.title')}</span>
          </Link>
          <nav className="ml-6 hidden space-x-6 md:flex">
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('header.about')}
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('header.contact')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="h-8 w-8 hover:bg-gray-100"
            title={`Change to ${language === 'en' ? 'Portuguese' : 'English'}`}
          >
            <span className="text-lg">{languageFlag}</span>
          </Button>

          <Button
            onClick={() => router.push('/cart')}
            variant="outline"
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF8000] text-xs text-white">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}