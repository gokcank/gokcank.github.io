"use client";

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './LocaleSwitcher.module.scss';

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;
    
    // Replace locale prefix or prepend
    const newPath = pathname.startsWith(`/${locale}`) 
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname === '/' ? '' : pathname}`;
    
    window.location.href = newPath || `/${newLocale}`;
  };

  return (
    <div className={styles.localeGroup}>
      <button
        type="button"
        className={`${styles.localeBtn} ${locale === 'tr' ? styles.active : ''}`}
        onClick={() => switchLocale('tr')}
        aria-label="Türkçe"
      >
        TR
      </button>
      <button
        type="button"
        className={`${styles.localeBtn} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => switchLocale('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};
