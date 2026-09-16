'use client';

import {useLocale} from 'next-intl';

import {Button} from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();

  const switchLocale = () => {
    const currentPath = window.location.pathname;
    const currentLocale = currentPath.split('/')[1];

    const nextLocale = currentLocale === 'fa' ? 'en' : 'fa';

    const newPath = currentPath.replace(
      `/${currentLocale}`,
      `/${nextLocale}`,
    );

    window.location.assign(
      `${newPath}${window.location.search}${window.location.hash}`,
    );
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      className="min-w-12 font-medium"
      aria-label={
        locale === 'fa'
          ? 'Switch to English'
          : 'Switch to Persian'
      }
    >
      {locale === 'fa' ? 'EN' : 'FA'}
    </Button>
  );
}