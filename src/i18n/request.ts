import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { Locale, routing } from './routing';
import { lazyPostCSS } from 'next/dist/build/webpack/config/blocks/css';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  // let locale: string | undefined = await requestLocale;
  const requested = await requestLocale;
  // if (!locale || !routing.locales.includes(locale as Locale)) {
  //   locale = routing.defaultLocale;
  // }
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
