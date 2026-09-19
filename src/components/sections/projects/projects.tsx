import {getTranslations} from 'next-intl/server';

import {ProjectGrid} from './project-grid';

export async function Projects() {
  const t = await getTranslations('projects');

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/4 -z-10 size-96 -translate-x-1/2 rounded-full bg-sunset-orange/5 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sunset-pink">
            {t('eyebrow')}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="mt-14">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}