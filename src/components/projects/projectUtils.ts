// Client-safe project utilities
export interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images?: string[];
    team?: { avatar: string }[];
    link?: string;
  };
  content: string;
}

// This will be populated by the server component
export const getProjectsForClient = (projects: Project[]) => {
  return projects.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );
};