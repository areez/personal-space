import { getPosts } from "@/utils/utils";
import { ProjectsAccordion } from "./ProjectsAccordion";

interface ProjectsAccordionWrapperProps {
  excludeSlug?: string;
}

export function ProjectsAccordionWrapper({ excludeSlug }: ProjectsAccordionWrapperProps) {
  let allProjects = getPosts(["src", "app", "case"]);

  // Exclude the featured project
  if (excludeSlug) {
    allProjects = allProjects.filter((post) => post.slug !== excludeSlug);
  }

  if (allProjects.length === 0) {
    return null;
  }

  return <ProjectsAccordion projects={allProjects} />;
}