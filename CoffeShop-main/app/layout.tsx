import './globals.css';
import type { Metadata } from 'next';
import { Della_Respira, Open_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/lib/language-provider';
import { Footer } from '@/components/Footer';

const dellaRespira = Della_Respira({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-della-respira',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gourmet Coffee Shop',
  description: 'Premium coffee selection for coffee enthusiasts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dellaRespira.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}