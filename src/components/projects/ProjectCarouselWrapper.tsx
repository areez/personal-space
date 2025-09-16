import { getPosts } from "@/utils/utils";
import { ProjectCarousel } from "./ProjectCarousel";
import { Project } from "./projectUtils";

export function ProjectCarouselWrapper() {
  const allProjects = getPosts(["src", "app", "case"]) as Project[];

  // Sort by oldest first
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime();
  });

  if (sortedProjects.length === 0) {
    return null;
  }

  return <ProjectCarousel projects={sortedProjects} />;
}