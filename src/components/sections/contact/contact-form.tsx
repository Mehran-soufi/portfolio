"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const t = useTranslations("contact.form");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      const form = event.currentTarget;

      const formData = new FormData(form);

      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const message = String(formData.get("message") ?? "");

      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
        },
        {
          publicKey,
        },
      );

      form.reset();

      toast.success(t("success"));
    } catch {
      toast.error(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sunset-pink">
          {t("eyebrow")}
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {t("name")}
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sunset-pink/50 focus:ring-2 focus:ring-sunset-pink/10"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {t("email")}
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sunset-pink/50 focus:ring-2 focus:ring-sunset-pink/10"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {t("message")}
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder={t("messagePlaceholder")}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-7 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sunset-pink/50 focus:ring-2 focus:ring-sunset-pink/10"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sunset-pink/20 disabled:pointer-events-none disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              {t("sending")}
            </>
          ) : (
            <>
              <Send className="size-4" />
              {t("submit")}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
