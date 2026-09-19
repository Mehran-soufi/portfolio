'use client';

import {useLocale} from 'next-intl';

import {Button} from '@/components/ui/button';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === 'fa' ? 'en' : 'fa';

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      className="min-w-12 font-medium"
      aria-label={
        locale === 'fa' ? 'Switch to English' : 'Switch to Persian'
      }
    >
      {locale === 'fa' ? 'EN' : 'FA'}
    </Button>
  );
}