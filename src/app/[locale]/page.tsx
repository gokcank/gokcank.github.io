import {
  Heading,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp, Hero } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: `${t('home')} | ${person.name}`,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations({ locale, namespace: 'Home' });
  const tAbout = await getTranslations({ locale, namespace: 'About' });

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={tHome('headline')}
        description={home.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Hero
        locale={locale}
        headline={tHome('headline')}
        allProjectsLabel={tHome('allProjects')}
        aboutLabel={tAbout('title')}
        featuredProjectLabel={home.featured.display ? tHome('featuredProject') : undefined}
        featuredProjectHref={home.featured.display ? home.featured.href : undefined}
      />
      <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1rem 1rem", borderBottom: "1px solid var(--border)", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 600, margin: 0, color: "var(--text-heading)" }}>
            {tHome('allProjects')}
          </h2>
        </div>
        <Projects range={[1, 4]} locale={locale} />
      </div>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                {tHome('latestBlog')}
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
    </Column>
  );
}
