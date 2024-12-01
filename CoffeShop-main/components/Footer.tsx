'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-della text-lg font-bold text-gray-900">
              {t('header.title')}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900">{t('footer.quickLinks')}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-[#FF8000]"
                >
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-[#FF8000]"
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900">{t('footer.contact')}</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>{t('footer.address')}</li>
              <li>Email: info@coffeeshop.com</li>
              <li>{t('footer.phone')}: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-gray-900">{t('footer.followUs')}</h3>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF8000]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF8000]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF8000]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} {t('header.title')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
} 