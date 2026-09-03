import { getPosts } from "@/utils/utils";
import { ProjectCard } from "@/components";
import styles from "./Projects.module.scss";

interface ProjectPost {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    tag?: string;
    images?: string[];
    link?: string;
    publishedAt: string;
  };
  content: string;
}

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: string;
}

export function Projects({ range, exclude, locale = "en" }: ProjectsProps) {
  let allProjects: ProjectPost[] = [];
  
  try {
    allProjects = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
  } catch {
    // fallback
  }
  
  if (!allProjects || allProjects.length === 0) {
    try {
      allProjects = getPosts(["src", "app", "[locale]", "work", "projects"]);
    } catch {
      allProjects = [];
    }
  }

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.projectsGrid}>
        {displayedProjects.map((post) => (
          <ProjectCard
            key={post.slug}
            href={`/${locale}/work/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            tag={post.metadata.tag || "AI-Assisted"}
            link={post.metadata.link}
            caseStudyLabel={locale === "tr" ? "Detayları İncele" : "Read case study"}
            viewProjectLabel={locale === "tr" ? "Projeyi Gör" : "View project"}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
