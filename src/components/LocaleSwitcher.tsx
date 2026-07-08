"use client";

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Row, ToggleButton } from '@once-ui-system/core';

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;
    
    // If pathname starts with the current locale, replace it.
    // Otherwise (e.g. default locale where prefix is omitted), prepend the new locale.
    const newPath = pathname.startsWith(`/${locale}`) 
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname === '/' ? '' : pathname}`;
    
    // Using window.location.href ensures a hard navigation.
    // This bypasses Next.js client-side router cache which often makes i18n routing feel "unresponsive"
    // or sometimes fails to fetch the new locale data properly.
    window.location.href = newPath || `/${newLocale}`;
  };

  return (
    <Row gap="4" vertical="center" paddingX="8">
      <ToggleButton
        label="TR"
        selected={locale === 'tr'}
        onClick={() => switchLocale('tr')}
      />
      <ToggleButton
        label="EN"
        selected={locale === 'en'}
        onClick={() => switchLocale('en')}
      />
    </Row>
  );
};
