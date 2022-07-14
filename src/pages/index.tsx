import Head from "next/head";

import BlogList from "@/components/blog/BlogList";
import Hero from "@/components/Hero";
import WorkList from "@/components/work/WorkList";

import { getRecentBlogPosts } from "@/utils/blog";
import { getRecentWork } from "@/utils/work";

const Index = ({ workItems, blogPosts }) => {
  return (
    <>
      <Hero />
      {/* Projects */}
      <WorkList mt={24} workItems={workItems} />
      <BlogList mt={24} blogPosts={blogPosts} />
    </>
  );
};

export const getStaticProps = async () => {
  const workItems = await getRecentWork(6);
  const blogPosts = await getRecentBlogPosts(6);

  return {
    props: { workItems, blogPosts },
  };
};

export default Index;
