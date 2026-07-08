import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: t('blog'),
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t('blog'))}`,
    path: blog.path,
  });
}

export default function Blog() {
  const t = useTranslations('Common');
  return (
    <Column maxWidth="m" paddingTop="24" horizontal="center" vertical="center" fillHeight>
      <Heading marginBottom="l" variant="display-strong-m">
        {t('underConstruction')}
      </Heading>
      <Heading variant="heading-default-s" onBackground="neutral-weak">
        {t('underConstructionDesc')}
      </Heading>
    </Column>
  );
}
