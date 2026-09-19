import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";

import type { Project } from "./projects-data";

type ProjectCardProps = {
  project: Project;
};

export async function ProjectCard({ project }: ProjectCardProps) {
  const t = await getTranslations("projects");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-sunset-pink/30 hover:shadow-[0_20px_60px_-30px_rgba(236,72,153,0.3)]">
      {/* Project Preview */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image}
          alt={t(`items.${project.slug}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-60"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {t(`items.${project.slug}.title`)}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {t(`items.${project.slug}.description`)}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t("liveDemo")}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("viewOnGithub", {
                project: t(`items.${project.slug}.title`),
              })}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-sunset-pink/40 hover:text-sunset-pink"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 fill-current"
              >
                <path d={siGithub.path} />
              </svg>

              {t("github")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
