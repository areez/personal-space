"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "../ProjectCard.module.scss";

interface CaseStudyCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="0" className={styles.projectCard}>
      <div className={styles.carouselContainer} style={{ margin: 0, padding: 0 }}>
        <Carousel
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      </div>
      <Column fillWidth gap="s" s={{ marginTop: "xs" }} style={{ marginTop: "-16px", margin: 0, padding: 0 }}>
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        <Column gap="16">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">Read case study</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Column>
      </Column>
    </Column>
  );
};