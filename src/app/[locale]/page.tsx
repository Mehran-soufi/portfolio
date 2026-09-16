import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('common');

  return (
    <main>
      <h1>{t('siteName')}</h1>
      <p>Internationalization is working.</p>
    </main>
  );
}