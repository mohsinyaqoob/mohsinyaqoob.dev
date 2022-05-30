import Hero from "@/components/Hero";
import WorkList from "@/components/work/WorkList";
import BlogList from "@/components/blog/BlogList";
import { getRecentWork } from "@/utils/work";

const Index = ({ workItems }) => {
  return (
    <>
      <Hero />
      {/* Projects */}
      <WorkList workItems={workItems} />
      {/* <BlogList showTotal={6} /> */}
    </>
  );
};

export const getStaticProps = async () => {
  const workItems = await getRecentWork(6);

  return {
    props: { workItems },
  };
};

export default Index;
