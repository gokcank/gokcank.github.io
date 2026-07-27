import { Flex, Meta, Schema, Column, Heading } from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryView from "@/components/gallery/GalleryView";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return Meta.generate({
    title: `${t('gallery')} | ${person.name}`,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t('gallery'))}`,
    path: gallery.path,
  });
}

export default async function Gallery({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={gallery.path}
        title={t('gallery')}
        description={gallery.description}
        image={`/api/og/generate?title=${encodeURIComponent(t('gallery'))}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {t('gallery')}
      </Heading>
      <GalleryView />
    </Column>
  );
}
