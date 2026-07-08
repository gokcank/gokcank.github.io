import { Flex, Meta, Schema, Column, Heading } from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: `${t('gallery')} | ${person.name}`,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t('gallery'))}`,
    path: gallery.path,
  });
}

export default function Gallery() {
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
