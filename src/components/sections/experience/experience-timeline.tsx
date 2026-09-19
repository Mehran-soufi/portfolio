import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Monitor,
  School,
  Shield,
} from 'lucide-react';
import {getLocale, getTranslations} from 'next-intl/server';

import {ExperienceItem} from './experience-item';

export async function ExperienceTimeline() {
  const t = await getTranslations('experience.items');
  const locale = await getLocale();

  const isPersian = locale === 'fa';

  const experiences = [
    {
      key: 'oghab',
      icon: <Building2 className="size-5" strokeWidth={1.8} />,
      type: 'description',
    },
    {
      key: 'ramin',
      icon: <BriefcaseBusiness className="size-5" strokeWidth={1.8} />,
      type: 'description',
    },
    {
      key: 'military',
      icon: <Shield className="size-5" strokeWidth={1.8} />,
      type: 'none',
    },
    {
      key: 'sheypoor',
      icon: <Monitor className="size-5" strokeWidth={1.8} />,
      type: 'responsibilities',
    },
    {
      key: 'kikaavous',
      icon: <GraduationCap className="size-5" strokeWidth={1.8} />,
      type: 'responsibilities',
    },
    {
      key: 'mobinatek',
      icon: <School className="size-5" strokeWidth={1.8} />,
      type: 'responsibilities',
    },
  ] as const;

  return (
    <div
      className={`relative ${
        isPersian ? 'md:pr-8' : 'md:pl-8'
      }`}
    >
      {/* Main timeline */}
      <div
        aria-hidden="true"
        className={`absolute bottom-8 top-2 hidden w-px bg-linear-to-b from-sunset-purple/40 via-sunset-pink/40 to-sunset-orange/20 md:block ${
          isPersian ? 'right-0' : 'left-0'
        }`}
      />

      <div className="space-y-8 md:space-y-10">
        {experiences.map(({key, icon, type}) => (
          <ExperienceItem
            key={key}
            date={t(`${key}.date`)}
            company={t(`${key}.company`)}
            role={t(`${key}.role`)}
            description={
              type === 'description'
                ? t(`${key}.description`)
                : undefined
            }
            responsibilities={
              type === 'responsibilities'
                ? (t.raw(`${key}.responsibilities`) as string[])
                : undefined
            }
            location={
              key === 'sheypoor'
                ? t(`${key}.location`)
                : undefined
            }
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}