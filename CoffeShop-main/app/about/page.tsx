"use client";

import Image from 'next/image';
import { useLanguage } from '@/lib/language-provider';
import { TranslationKey } from '@/lib/translations';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      key: 'quality',
      titleKey: 'about.values.quality.title' as TranslationKey,
      descriptionKey: 'about.values.quality.description' as TranslationKey,
    },
    {
      key: 'sustainability',
      titleKey: 'about.values.sustainability.title' as TranslationKey,
      descriptionKey: 'about.values.sustainability.description' as TranslationKey,
    },
    {
      key: 'community',
      titleKey: 'about.values.community.title' as TranslationKey,
      descriptionKey: 'about.values.community.description' as TranslationKey,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-della text-4xl font-bold text-gray-900">
          {t('about.title')}
        </h1>

        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/images/coffee-shop.jpg"
              alt={t('about.mission.title')}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-600">{t('about.mission.description')}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {t('about.history.title')}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>{t('about.history.part1')}</p>
            <p>{t('about.history.part2')}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.key}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {t(value.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 