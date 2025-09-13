import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
  Tag, // Add Tag import
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { CaseStudiesCarousel } from "@/components/projects/CaseStudiesCarousel";
import { generateEnhancedMetadata } from "@/components/seo/EnhancedMeta";
import { CaseStudySchema } from "@/components/seo/CaseStudySchema";
import { BreadcrumbSchema } from "@/components/seo/EnhancedSchema";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "case", "case"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "case", "case"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return generateEnhancedMetadata({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
    type: "article",
    publishedTime: post.metadata.publishedAt,
    author: person.name,
    tags: ["Software Engineering", "Case Study", "Technology Consulting", "Digital Transformation"],
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "case", "case"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  const breadcrumbItems = [
    { name: "Home", url: baseURL },
    { name: "Work", url: `${baseURL}${work.path}` },
    { name: post.metadata.title, url: `${baseURL}${work.path}/${post.slug}` },
  ];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <CaseStudySchema
        title={post.metadata.title}
        description={post.metadata.summary}
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        publishedAt={post.metadata.publishedAt}
        image={post.metadata.image}
        technologies={post.metadata.technologies || []}
        client={post.metadata.client}
        duration={post.metadata.duration}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/case">
          <Text variant="label-strong-m">Case Studies</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>

        {/* Add tag display here */}
        {post.metadata.tag && (
          <Row wrap gap="8" marginTop="16">
            <Tag size="s">
              {post.metadata.tag}
            </Tag>
          </Row>
        )}
      </Column>
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={`${member.name}-${idx}`}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      {post.metadata.images.length > 0 && (
        <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Read other Case Studies
        </Heading>
        <CaseStudiesCarousel 
           projects={getPosts(["src", "app", "case", "case"])
             .filter((p) => p.slug !== post.slug)
             .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
           }
         />
      </Column>
      <ScrollToHash />
    </Column>
  );
}