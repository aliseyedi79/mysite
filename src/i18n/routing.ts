import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fa', 'en'],

  // Used when no locale matches
  defaultLocale: 'fa',
});
export type Locale = (typeof routing.locales)[number];
