import {getTranslations} from 'next-intl/server';

import {Link} from '@/i18n/navigation';

const links = [
  {
    key: 'about',
    href: '#about',
  },
  {
    key: 'skills',
    href: '#skills',
  },
  {
    key: 'experience',
    href: '#experience',
  },
  {
    key: 'projects',
    href: '#projects',
  },
  {
    key: 'contact',
    href: '#contact',
  },
] as const;

export async function FooterLinks() {
  const t = await getTranslations('footer.links');

  return (
    <nav aria-label={t('label')}>
      <p className="text-sm font-semibold text-foreground">
        {t('title')}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-sunset-pink"
            >
              {t(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
