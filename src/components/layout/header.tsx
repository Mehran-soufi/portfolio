"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  {
    key: "about",
    href: "#about",
  },
  {
    key: "skills",
    href: "#skills",
  },
  {
    key: "experience",
    href: "#experience",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "contact",
    href: "#contact",
  },
] as const;

export function Header() {
  const tNavigation = useTranslations("navigation");
  const tHeader = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
          onClick={closeMenu}
        >
          <span className="text-foreground">MS.</span>{" "}
          <span className="bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange bg-clip-text text-transparent">
            Mehran Soufi
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {tNavigation(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? tHeader("closeMenu") : tHeader("openMenu")}
            aria-expanded={isMenuOpen}
            className="rounded-full"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 md:px-8">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                {tNavigation(item.key)}
              </a>
            ))}

            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
              <span className="text-sm text-muted-foreground">
                {tHeader("language")}
              </span>

              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
