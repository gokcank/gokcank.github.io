"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { routes, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const locale = useLocale();
  const rawPathname = usePathname() ?? "";
  const pathname = rawPathname.replace(new RegExp(`^/${locale}`), "") || "/";
  const t = useTranslations("Navigation");

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <Link href={`/${locale}`} className={styles.brandLink}>
            {person.name}
          </Link>
          <div className={styles.timeBadge} title="Developer timezone and local time">
            <span className={styles.statusDot} />
            <span>
              Europe/Istanbul • <TimeDisplay timeZone={person.location || "Europe/Istanbul"} />
            </span>
          </div>
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.navLinks} aria-label="Main Navigation">
            {routes["/"] && (
              <Link
                href={`/${locale}`}
                className={`${styles.navItem} ${pathname === "/" ? styles.active : ""}`}
              >
                {t("home")}
              </Link>
            )}
            {routes["/work"] && (
              <Link
                href={`/${locale}/work`}
                className={`${styles.navItem} ${pathname.startsWith("/work") ? styles.active : ""}`}
              >
                {t("work")}
              </Link>
            )}
            {routes["/about"] && (
              <Link
                href={`/${locale}/about`}
                className={`${styles.navItem} ${pathname.startsWith("/about") ? styles.active : ""}`}
              >
                {t("about")}
              </Link>
            )}
            {routes["/blog"] && (
              <Link
                href={`/${locale}/blog`}
                className={`${styles.navItem} ${pathname.startsWith("/blog") ? styles.active : ""}`}
              >
                {t("blog")}
              </Link>
            )}
            {routes["/gallery"] && (
              <Link
                href={`/${locale}/gallery`}
                className={`${styles.navItem} ${pathname.startsWith("/gallery") ? styles.active : ""}`}
              >
                {t("gallery")}
              </Link>
            )}
          </nav>

          <div className={styles.divider} />

          <div className={styles.controls}>
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
