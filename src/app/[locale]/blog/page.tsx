import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: `${t('blog')} | ${person.name}`,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t('blog'))}`,
    path: blog.path,
  });
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={blog.path}
        title={t('blog')}
        description={blog.description}
        image={`/api/og/generate?title=${encodeURIComponent(t('blog'))}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {t('blog')}
      </Heading>
      <Posts locale={locale} range={[1, 10]} thumbnail />
    </Column>
  );
}
