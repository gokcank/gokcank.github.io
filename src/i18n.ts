import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['tr', 'en'];

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = locale || 'tr';

  if (!locales.includes(resolvedLocale as string)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
