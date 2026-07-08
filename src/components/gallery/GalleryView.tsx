"use client";

import { Media, MasonryGrid, Flex, Text } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  if (gallery.images.length === 0) {
    return (
      <Flex fillWidth direction="column" align="center" paddingY="128">
        <Text variant="heading-strong-xl" marginBottom="16">{gallery.title}</Text>
        <Text variant="body-default-m" onBackground="neutral-weak">{gallery.description}</Text>
      </Flex>
    );
  }

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
