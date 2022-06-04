import { promises as fs } from "fs";
import path from "path";
import readingTime from "reading-time";
import matter from "gray-matter";

import { BlogPost } from "@/types/blog-post";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const result: BlogPost[] = [];

  const dir = path.join(process.cwd(), "./src/content/blog-posts");
  const blogPosts = await fs.readdir(dir);

  await Promise.all(
    blogPosts.map(async (blogPost) => {
      const blogPostPath = path.join(dir, blogPost, "index.mdx");
      const slug = blogPost.replace(".mdx", "");
      const fileContent = await fs.readFile(blogPostPath, "utf8");

      const {
        content,
        data: {
          title,
          description,
          date,
          tags,
          thumbnail,
          coverImage,
          publisher,
          publisherImage,
          publisherLink,
        },
      } = matter(fileContent);

      let tagsArray = tags ? tags.split(",") : [];

      result.push({
        title,
        thumbnail,
        coverImage,
        description,
        date,
        slug,
        tags: tagsArray,
        publisher,
        publisherImage,
        publisherLink,
        readingTime: readingTime(content).text,
      });
    })
  );

  return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const getRecentBlogPosts = async (
  count: number
): Promise<BlogPost[]> => {
  const blogPosts = await getBlogPosts();

  const recentBlogPosts = blogPosts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, count);

  return recentBlogPosts;
};

export const readBlogPost = async (slug: string) => {
  const blogPostPath = path.join(
    process.cwd(),
    "./src/content/blog-posts",
    slug,
    "index.mdx"
  );
  return await fs.readFile(blogPostPath, "utf8");
};

export const getAbbr = (text: string) => {
  return text.split(" ").map((letter) => letter.charAt(0).toUpperCase());
};
