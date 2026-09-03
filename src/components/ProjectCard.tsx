import Link from "next/link";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  tag?: string;
  link?: string;
  icon?: string;
  caseStudyLabel?: string;
  viewProjectLabel?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  description,
  tag = "AI-Assisted",
  link,
  icon,
  caseStudyLabel = "Read case study",
  viewProjectLabel = "View project",
}) => {
  // Extract initial or short letter for fallback
  const initial = title ? title.charAt(0).toUpperCase() : "P";

  return (
    <article className={styles.card}>
      <div>
        <div className={styles.headerRow}>
          <div className={styles.iconBox} aria-hidden="true">
            {icon ? (
              <img src={icon} alt="" className={styles.appIcon} />
            ) : (
              initial
            )}
          </div>
          {tag && <span className={styles.tag}>{tag}</span>}
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footerRow}>
        <Link href={href} className={styles.caseStudyLink}>
          <span>{caseStudyLabel}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
            aria-label={`${viewProjectLabel} (${title})`}
          >
            <span>{viewProjectLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
