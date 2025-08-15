import '../globals.css';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Locale, routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/app/header/header';
import Footer from '@/app/footer/page';
import ThemeProvider from '@/theme/theme-provider';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<{ title: string; description: string }> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider locale={locale}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
