import { person } from "@/resources";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import styles from "./AboutPage.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: `${t('title')} | ${person.name}`,
    description: t('intro'),
  };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'About' });

  const techCategories = [
    {
      label: locale === "tr" ? "Mobil Geliştirme" : "Mobile Development",
      pills: ["Kotlin", "Android Native", "Jetpack Compose", "Material 3", "Room DB", "Coroutines & Flow", "Hilt DI"],
    },
    {
      label: locale === "tr" ? "Yapay Zeka & Geliştirme Araçları" : "AI & Development Tools",
      pills: ["Google Gemini", "Claude AI", "Prompt Engineering", "Antigravity IDE", "Git & GitHub Actions"],
    },
    {
      label: locale === "tr" ? "Masaüstü & Sistem Araçları" : "Desktop & System Utilities",
      pills: ["Tauri", "Rust", "Python", "Qt6 / PySide6", "Linux", "SatcoDX (.sdx)"],
    },
    {
      label: locale === "tr" ? "Bulut, Yayın & Monetizasyon" : "Cloud, Store & Monetization",
      pills: ["Google Play Console", "Firebase", "Google AdMob", "Offline-First Sync", "app-ads.txt"],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Profile Card */}
      <section className={styles.profileCard}>
        <div className={styles.avatarWrapper}>
          <img src={person.avatar} alt={person.name} />
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{person.name}</h1>
          <span className={styles.roleBadge}>{t('subtitle')}</span>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{person.location}</span>
            </span>
            <span className={styles.metaItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{t('languages.Turkish')} & {t('languages.English')}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Vibecoder Quote Card */}
      <section className={styles.quoteCard}>
        <p className={styles.quoteText}>"{t('quote')}"</p>
        <p className={styles.poetryText}>— "{t('poetry')}"</p>
      </section>

      {/* Intro Text */}
      <section className={styles.introSection}>
        <p>{t('intro')}</p>
      </section>

      {/* 3 Core Pillars */}
      <section>
        <h2 className={styles.sectionTitle}>
          <span>🎯</span>
          <span>{t('pillarsTitle')}</span>
        </h2>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🚀</div>
            <h3 className={styles.pillarTitle}>{t('pillar1Title')}</h3>
            <p className={styles.pillarDesc}>{t('pillar1Desc')}</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🧠</div>
            <h3 className={styles.pillarTitle}>{t('pillar2Title')}</h3>
            <p className={styles.pillarDesc}>{t('pillar2Desc')}</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🛠️</div>
            <h3 className={styles.pillarTitle}>{t('pillar3Title')}</h3>
            <p className={styles.pillarDesc}>{t('pillar3Desc')}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: "1.5rem" }}>
          <span>⚡</span>
          <span>{t('techTitle')}</span>
        </h2>
        {techCategories.map((category) => (
          <div key={category.label} className={styles.techCategory}>
            <div className={styles.techCategoryLabel}>{category.label}</div>
            <div className={styles.techPills}>
              {category.pills.map((pill) => (
                <span key={pill} className={styles.techPill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Live GitHub Stats & Native Metrics */}
      <section className={styles.statsSection}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
            <span>📊</span>
            <span>{t('githubStatsTitle')}</span>
          </h2>
          <a
            href="https://github.com/gokcank"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubProfileLink}
            aria-label="GitHub Profile"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>github.com/gokcank</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Native Stat Metrics */}
        <div className={styles.nativeStatsGrid}>
          <div className={styles.nativeStatCard}>
            <span className={styles.nativeStatValue}>14</span>
            <span className={styles.nativeStatLabel}>{locale === "tr" ? "Açık Kaynak Repo" : "Public Repos"}</span>
          </div>
          <div className={styles.nativeStatCard}>
            <span className={styles.nativeStatValue}>5</span>
            <span className={styles.nativeStatLabel}>{locale === "tr" ? "Play Store Uygulaması" : "Play Store Apps"}</span>
          </div>
          <div className={styles.nativeStatCard}>
            <span className={styles.nativeStatValue}>8+</span>
            <span className={styles.nativeStatLabel}>{locale === "tr" ? "Aktif Proje" : "Featured Projects"}</span>
          </div>
          <div className={styles.nativeStatCard}>
            <span className={styles.nativeStatValue}>100%</span>
            <span className={styles.nativeStatLabel}>{locale === "tr" ? "Açık Kaynak & Şeffaf" : "Open Source"}</span>
          </div>
        </div>

        {/* Live Streak Stats (Demolab CDN) */}
        <div className={styles.statsGrid}>
          <img
            src={`https://streak-stats.demolab.com/?user=gokcank&locale=${locale}&theme=radical&hide_border=true`}
            alt={locale === "tr" ? "GitHub Aktivite ve Katkı Serisi" : "GitHub Streak Stats"}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}