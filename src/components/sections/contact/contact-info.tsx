import {Mail} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {siGithub} from 'simple-icons';

import {contactLinks} from './contact-data';

const linkedinIconPath =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM3.555 20.452h3.558V9H3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

export async function ContactInfo() {
  const t = await getTranslations('contact');

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-48 rounded-full bg-sunset-purple/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 size-48 rounded-full bg-sunset-orange/10 blur-3xl"
      />

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sunset-pink">
          {t('info.eyebrow')}
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t('info.title')}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {t('info.description')}
        </p>

        <div className="mt-8 space-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.type}
              href={link.href}
              target={link.type === 'email' ? undefined : '_blank'}
              rel={
                link.type === 'email'
                  ? undefined
                  : 'noopener noreferrer'
              }
              className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sunset-pink/30 hover:bg-sunset-pink/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-sunset-purple/15 via-sunset-pink/15 to-sunset-orange/10 text-sunset-pink">
                {link.type === 'email' ? (
                  <Mail className="size-5" strokeWidth={1.8} />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 fill-current"
                  >
                    <path
                      d={
                        link.type === 'github'
                          ? siGithub.path
                          : linkedinIconPath
                      }
                    />
                  </svg>
                )}
              </span>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {t(`links.${link.type}.label`)}
                </p>

                <p className="mt-0.5 truncate text-sm text-muted-foreground">
                  {t(`links.${link.type}.value`)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
