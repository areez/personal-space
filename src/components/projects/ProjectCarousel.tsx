"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Column,
  Flex,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { ProjectCard } from "../ProjectCard";
import styles from "./ProjectCarousel.module.scss";
import { Project } from "./projectUtils";

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const totalProjects = projects?.length || 0;

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating || totalProjects <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [isAutoRotating, totalProjects]);

  if (!projects || projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  const goToPrevious = () => {
    setIsAutoRotating(false); // Stop auto-rotation when user interacts
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const goToNext = () => {
    setIsAutoRotating(false); // Stop auto-rotation when user interacts
    setCurrentIndex((prevIndex) => 
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <Column fillWidth gap="l" className={styles.carouselContainer}>
      <Column fillWidth className={styles.projectContainer}>
        <RevealFx 
          key={currentProject.slug} 
          translateY="4" 
          opacity={0}
          delay={0.1}
          fillWidth
        >
          <ProjectCard
            priority={true}
            href={`/case/${currentProject.slug}`}
            images={currentProject.metadata.images || []}
            title={currentProject.metadata.title}
            description={currentProject.metadata.summary}
            content={currentProject.content}
            avatars={currentProject.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={currentProject.metadata.link || ""}
          />
        </RevealFx>
      </Column>
      
      {totalProjects > 1 && (
        <Row fillWidth horizontal="center" gap="m" className={styles.bottomNavigation}>
          <Button
            variant="tertiary"
            size="m"
            onClick={goToPrevious}
            className={styles.navButton}
            prefixIcon="chevronLeft"
            disabled={totalProjects <= 1}
          />
          
          <Button
            variant="tertiary"
            size="m"
            onClick={goToNext}
            className={styles.navButton}
            prefixIcon="chevronRight"
            disabled={totalProjects <= 1}
          />
        </Row>
      )}
    </Column>
  );
};