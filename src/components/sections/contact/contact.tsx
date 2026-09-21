import {getTranslations} from 'next-intl/server';

import {ContactForm} from './contact-form';
import {ContactInfo} from './contact-info';

export async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 size-96 -translate-x-1/2 rounded-full bg-sunset-pink/5 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Section Header */}
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

        {/* Contact Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}