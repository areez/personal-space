"use client";

import React, { useState } from "react";
import {
  Button,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  AvatarGroup,
  Carousel,
} from "@once-ui-system/core";
import styles from "./ProjectsAccordion.module.scss";

interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images?: string[];
    team?: { avatar: string }[];
    link?: string;
  };
}

interface ProjectsAccordionProps {
  projects: Project[];
}

export const ProjectsAccordion: React.FC<ProjectsAccordionProps> = ({
  projects,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Sort by oldest first (reverse chronological order)
  const sortedProjects = projects.sort((a, b) => {
    return new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime();
  });

  if (sortedProjects.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="l" className={styles.accordionContainer}>
      <Button
        variant="tertiary"
        size="m"
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.accordionButton}
        suffixIcon={isExpanded ? "chevronUp" : "chevronDown"}
      >
        <Text variant="body-default-m">
          {isExpanded ? "Hide" : "View"} older projects ({sortedProjects.length})
        </Text>
      </Button>
      
      {isExpanded && (
        <div className={styles.projectsContainer}>
          <Flex gap="xl" className={styles.projectsScroll}>
            {sortedProjects.map((project) => (
              <div key={project.slug} className={styles.projectItem}>
                <Column gap="m" className={styles.projectCard}>
                  <div className={styles.imageContainer}>
                    <Carousel
                      sizes="(max-width: 768px) 280px, 320px"
                      items={project.metadata.images?.map((image) => ({
                        slide: image,
                        alt: project.metadata.title,
                      })) || []}
                    />
                  </div>
                  <Column gap="s" className={styles.contentContainer}>
                    <Heading as="h3" variant="heading-strong-m">
                      {project.metadata.title}
                    </Heading>
                    {project.metadata.team && project.metadata.team.length > 0 && (
                      <AvatarGroup 
                        avatars={project.metadata.team.map((member) => ({ src: member.avatar }))} 
                        size="s" 
                        reverse 
                      />
                    )}
                    {project.metadata.summary && (
                      <Text 
                        variant="body-default-s" 
                        onBackground="neutral-weak"
                        className={styles.description}
                      >
                        {project.metadata.summary}
                      </Text>
                    )}
                    <Flex gap="16" wrap>
                      <SmartLink
                        suffixIcon="arrowRight"
                        href={`/case/${project.slug}`}
                        className={styles.caseStudyLink}
                      >
                        <Text variant="body-default-s">Read case study</Text>
                      </SmartLink>
                      {project.metadata.link && (
                        <SmartLink
                          suffixIcon="arrowUpRightFromSquare"
                          href={project.metadata.link}
                          className={styles.projectLink}
                        >
                          <Text variant="body-default-s">View project</Text>
                        </SmartLink>
                      )}
                    </Flex>
                  </Column>
                </Column>
              </div>
            ))}
          </Flex>
        </div>
      )}
    </Column>
  );
};