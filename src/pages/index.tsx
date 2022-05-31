import Hero from "@/components/Hero";
import WorkList from "@/components/work/WorkList";
import { getRecentWork } from "@/utils/work";
import Head from "next/head";

const Index = ({ workItems }) => {
  return (
    <>
      <Head>
        <title>
          Full-stack Engineer, React, Typescript, NodeJS, AWS - Mohsin Yaqoob
        </title>
      </Head>
      <Hero />
      {/* Projects */}
      <WorkList mt={24} workItems={workItems} />
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
