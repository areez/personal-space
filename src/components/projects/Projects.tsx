import { getPosts } from "@/utils/utils";
import { Column, Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  specificSlug?: string;
}

export function Projects({ range, exclude, specificSlug }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "case"]);

  // If a specific slug is provided, filter to show only that project
  if (specificSlug) {
    allProjects = allProjects.filter((post) => post.slug === specificSlug);
  } else {
    // Exclude by slug (exact match)
    if (exclude && exclude.length > 0) {
      allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
    }
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = specificSlug
    ? allProjects // Show the specific project without range filtering
    : range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
      columns="1"
      s={{ columns: "1" }}
      m={{ columns: "1" }}
    >
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/case/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Grid>
  );
}
