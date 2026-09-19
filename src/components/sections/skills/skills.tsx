import {
  Code2,
  Layers3,
  Wrench,
} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

import {SkillCategoryCard} from './skill-category-card';

export async function Skills() {
  const t = await getTranslations('skills');

  const categories = [
    {
      key: 'frontend',
      icon: Code2,
    },
    {
      key: 'frameworks',
      icon: Layers3,
    },
    {
      key: 'tools',
      icon: Wrench,
    },
  ] as const;

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
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

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {categories.map(({key, icon}) => (
            <SkillCategoryCard
              key={key}
              icon={icon}
              title={t(`categories.${key}.title`)}
              description={t(`categories.${key}.description`)}
              skills={t.raw(`categories.${key}.skills`) as string[]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}