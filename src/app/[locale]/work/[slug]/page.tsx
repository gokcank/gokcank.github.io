import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/utils/utils";
import { Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import styles from "./ProjectDetail.module.scss";

const iconMap: Record<string, string> = {
  curalis: "/images/projects/curalis.png",
  nucleus: "/images/projects/nucleus.png",
  satsort: "/images/projects/satsort.svg",
  triviaquiz: "/images/projects/triviaquiz.png",
  notesassistant: "/images/projects/notesassistant.png",
  astroyorum: "/images/projects/astroyorum.png",
  optidoc: "/images/projects/optidoc.png",
  valutarate: "/images/projects/valutarate.png",
};

const defaultLinks: Record<string, string> = {
  curalis: "https://github.com/gokcank/Curalis",
  nucleus: "https://gokcank.github.io/Nucleus/",
  satsort: "https://github.com/gokcank/SatSort",
  triviaquiz: "https://play.google.com/store/apps/details?id=com.gokcank.triviaquiz",
  notesassistant: "https://github.com/gokcank/NotesAssistant",
  astroyorum: "https://play.google.com/store/apps/details?id=com.gokcank.astroyorum",
  optidoc: "https://play.google.com/store/apps/details?id=com.gokcank.optidoc",
  valutarate: "https://play.google.com/store/apps/details?id=com.gokcank.valutarate",
};

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["tr", "en"];
  const posts = getPosts(["src", "app", "[locale]", "work", "projects"]);
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}): Promise<Metadata> {
  const { locale = "en", slug } = await params;
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug || "";

  let posts: any[] = [];
  try {
    posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
  } catch {
    posts = [];
  }
  if (!posts || posts.length === 0) {
    posts = getPosts(["src", "app", "[locale]", "work", "projects"]);
  }

  const post = posts.find((p) => p.slug === slugPath);
  if (!post) return {};

  return {
    title: `${post.metadata.title} | ${person.name}`,
    description: post.metadata.summary,
    openGraph: {
      title: `${post.metadata.title} | ${person.name}`,
      description: post.metadata.summary,
      url: `${baseURL}/${locale}/work/${post.slug}`,
      siteName: person.name,
      images: [
        {
          url: `${baseURL}${iconMap[post.slug] || person.avatar}`,
          width: 800,
          height: 600,
          alt: post.metadata.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metadata.title} | ${person.name}`,
      description: post.metadata.summary,
      images: [`${baseURL}${iconMap[post.slug] || person.avatar}`],
    },
  };
}

function getActionLabel(link: string, isTr: boolean): string {
  if (link.includes("play.google.com")) {
    return isTr ? "Google Play'de Gör" : "View on Google Play";
  }
  if (link.includes("github.io/Nucleus")) {
    return isTr ? "Canlı Web Vitrini" : "Live Web Showcase";
  }
  return isTr ? "GitHub'da İncele" : "View on GitHub";
}

export default async function Project({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const { locale = "en", slug } = await params;
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug || "";
  const isTr = locale === "tr";

  let posts: any[] = [];
  try {
    posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
  } catch {
    posts = [];
  }
  if (!posts || posts.length === 0) {
    posts = getPosts(["src", "app", "[locale]", "work", "projects"]);
  }

  const post = posts.find((p) => p.slug === slugPath);

  if (!post) {
    notFound();
  }

  const icon = iconMap[post.slug];
  const externalLink = post.metadata.link || defaultLinks[post.slug];
  const actionLabel = externalLink ? getActionLabel(externalLink, isTr) : "";

  return (
    <main className={styles.pageContainer}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`/${locale}${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || `${baseURL}${icon || person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}/${locale}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Breadcrumb Navigation */}
      <Link href={`/${locale}/work`} className={styles.breadcrumb}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span>{isTr ? "Projeler" : "Projects"}</span>
      </Link>

      {/* Project Hero Glass Card */}
      <header className={styles.heroCard}>
        <div className={styles.heroTopRow}>
          <div className={styles.heroLeft}>
            {icon && (
              <Image
                src={icon}
                alt={post.metadata.title}
                width={60}
                height={60}
                className={styles.appIcon}
                unoptimized
              />
            )}
            <div className={styles.heroTitleGroup}>
              {post.metadata.tag && (
                <span className={styles.tag}>{post.metadata.tag}</span>
              )}
              <h1 className={styles.title}>{post.metadata.title}</h1>
            </div>
          </div>

          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <span>{actionLabel}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>

        {post.metadata.summary && (
          <p className={styles.heroSummary}>{post.metadata.summary}</p>
        )}
      </header>

      {/* Case Study Content Body */}
      <article className={styles.articleBody}>
        <CustomMDX source={post.content} />
      </article>

      {/* Related Projects */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedHeading}>
          {isTr ? "Diğer Projeler" : "Other Projects"}
        </h2>
        <Projects exclude={[post.slug]} range={[2]} locale={locale} />
      </section>
    </main>
  );
}
