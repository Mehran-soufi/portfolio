import {getTranslations} from 'next-intl/server';

import {AboutInfoCard} from './about-info-card';

export async function About() {
  const t = await getTranslations('about');

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sunset-pink">
              {t('eyebrow')}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>{t('description')}</p>
              <p>{t('descriptionSecond')}</p>
            </div>

            {/* Accent line */}
            <div className="mt-8 h-px w-24 bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange" />
          </div>

          {/* Info */}
          <AboutInfoCard />
        </div>
      </div>
    </section>
  );
}
