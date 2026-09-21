import {getTranslations} from 'next-intl/server';

import {Link} from '@/i18n/navigation';

import {FooterLinks} from './footer-links';
import {FooterSocials} from './footer-socials';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-border">
      {/* Sunset glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-sunset-purple/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Main footer */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr] md:gap-16 lg:py-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-tight text-foreground transition-colors hover:text-sunset-pink"
            >
              Mehran Soufi
            </Link>

            <p className="mt-3 text-sm font-medium text-sunset-pink">
              {t('role')}
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {t('description')}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-muted-foreground sm:text-start">
            {t('copyright', {year: new Date().getFullYear()})}
          </p>

          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}
