import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            top="64"
            s={{ position: "relative" }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginTop="l"
                marginBottom="l"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Book a Meeting</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
              marginTop="l"
              marginBottom="xs"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="center" marginBottom="4">
                      <Row gap="8" vertical="center" flex={1}>
                        {experience.logo && (
                          <Media
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={3}
                            height={3}
                            radius="xs"
                          />
                        )}
                        <Text variant="heading-strong-l">{experience.company}</Text>
                      </Row>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginTop="s"
                      marginBottom="xs"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="center" marginBottom="m">
                      <Row gap="8" vertical="center" flex={1}>
                        {institution.logo && (
                          <Media
                            src={institution.logo}
                            alt={`${institution.name} logo`}
                            width={3}
                            height={3}
                            radius="xs"
                          />
                        )}
                        <Text variant="heading-strong-l">{institution.name}</Text>
                      </Row>
                      {/* Add timeframe when available in data structure */}
                    </Row>
                    <Text variant="body-default-m">{institution.description}</Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.technical.skills.map((skill, index) => (
                  <Column
                    key={`${skill.title}-${index}`}
                    fillWidth
                    className={styles.certificationItem}
                  >
                    <Row fillWidth horizontal="between" vertical="center" marginBottom="s">
                      <Row gap="8" vertical="center" flex={1}>
                        {skill.logo && (
                          <Media
                            src={skill.logo}
                            alt={`${skill.title} logo`}
                            width={2}
                            height={2}
                            radius="xs"
                          />
                        )}
                        <Text variant="heading-strong-l">{skill.title}</Text>
                      </Row>
                    </Row>
                    <Text variant="body-default-m" marginBottom="s">
                      {skill.description}
                    </Text>
                    {skill.credlyLink && (
                      <Row marginBottom="m">
                        <Button
                          href={skill.credlyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          size="s"
                          suffixIcon="arrowUpRightFromSquare"
                        >
                          Verify Credential
                        </Button>
                      </Row>
                    )}
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex} size="s" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.leadership.display && (
            <>
              <Heading
                as="h2"
                id={about.leadership.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.leadership.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.leadership.skills.map((skill, index) => (
                  <Column
                    key={`${skill.title}-${index}`}
                    fillWidth
                    className={styles.certificationItem}
                  >
                    <Row fillWidth horizontal="between" vertical="center" marginBottom="s">
                      <Row gap="8" vertical="center" flex={1}>
                        {skill.logo && (
                          <Media
                            src={skill.logo}
                            alt={`${skill.title} logo`}
                            width={2}
                            height={2}
                            radius="xs"
                          />
                        )}
                        <Text variant="heading-strong-l">{skill.title}</Text>
                      </Row>
                    </Row>
                    <Text variant="body-default-m" marginBottom="s">
                      {skill.description}
                    </Text>
                    {skill.credlyLink && (
                      <Row marginBottom="m">
                        <Button
                          href={skill.credlyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          size="s"
                          suffixIcon="arrowUpRightFromSquare"
                        >
                          Verify Credential
                        </Button>
                      </Row>
                    )}
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex} size="s" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
