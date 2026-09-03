import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: `${t('work')} | ${person.name}`,
    description: work.description,
    baseURL: baseURL,
    image: person.avatar,
    path: work.path,
  });
}

export default async function Work({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={t('work')}
        description={work.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <h1 style={{ textAlign: "center", fontSize: "2.25rem", fontWeight: 700, margin: "1rem 0 2rem", color: "var(--text-heading)" }}>
        {t('work')}
      </h1>
      <Projects locale={locale} />
    </Column>
  );
}
