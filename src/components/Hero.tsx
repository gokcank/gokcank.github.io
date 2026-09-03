import Link from "next/link";
import Image from "next/image";
import { person, about } from "@/resources";
import styles from "./Hero.module.scss";

interface HeroProps {
  locale: string;
  headline: string;
  allProjectsLabel: string;
  aboutLabel: string;
  featuredProjectLabel?: string;
  featuredProjectHref?: string;
}

export const Hero: React.FC<HeroProps> = ({
  locale,
  headline,
  allProjectsLabel,
  aboutLabel,
  featuredProjectLabel,
  featuredProjectHref,
}) => {
  return (
    <section className={styles.heroSection}>
      {featuredProjectLabel && featuredProjectHref ? (
        <Link href={`/${locale}${featuredProjectHref}`} className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>{featuredProjectLabel}</span>
        </Link>
      ) : (
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>{person.role}</span>
        </div>
      )}

      <h1 className={styles.title}>{person.name}</h1>

      <p className={styles.description}>{headline}</p>

      <div className={styles.actions}>
        <Link href={`/${locale}/work`} className={styles.primaryBtn}>
          <span>{allProjectsLabel}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        <Link href={`/${locale}/about`} className={styles.secondaryBtn}>
          {about.avatar.display && (
            <Image
              src={person.avatar}
              alt={person.name}
              width={22}
              height={22}
              className={styles.avatarMini}
            />
          )}
          <span>{aboutLabel}</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
