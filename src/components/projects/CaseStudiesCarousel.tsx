"use client";

import { useState } from "react";
import { Column, Grid, Button, Row } from "@once-ui-system/core";
import { CaseStudyCard } from "./CaseStudyCard";

interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images: string[];
    team?: { avatar: string }[];
    link?: string;
  };
  content: string;
}

interface CaseStudiesCarouselProps {
  projects: Project[];
}

export function CaseStudiesCarousel({ projects }: CaseStudiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const currentProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="24" horizontal="center">
      <Grid
        fillWidth
        gap="l"
        paddingX="l"
        columns="2"
        s={{ columns: "1", gap: "m" }}
        m={{ columns: "1", gap: "m" }}
      >
        {currentProjects.map((post, index) => (
          <CaseStudyCard
            priority={false}
            key={post.slug}
            href={`/projects/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))}
      </Grid>
      
      {totalPages > 1 && (
        <Row gap="m" horizontal="center" marginTop="24">
          <Button
            variant="tertiary"
            size="m"
            onClick={goToPrevious}
            prefixIcon="chevronLeft"
            disabled={totalPages <= 1}
          />
          
          <Button
            variant="tertiary"
            size="m"
            onClick={goToNext}
            prefixIcon="chevronRight"
            disabled={totalPages <= 1}
          />
        </Row>
      )}
    </Column>
  );
}