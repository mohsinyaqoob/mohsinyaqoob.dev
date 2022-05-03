import slugify from "slugify";

import WorkItemDetail from "../../components/WorkItemDetail";
import Layout from "../../layout";

import { workData } from "../../data/work";
import WorkList from "../../components/WorkList";

const slug = (props) => {
  return (
    <Layout>
      <WorkItemDetail workItem={props.workItem} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const workItem = workData.find(
    (workItem) => slugify(workItem.title, { lower: true }) === slug
  );
  return {
    props: {
      workItem,
    },
  };
};

export async function getStaticPaths() {
  const paths = workData.map((item) => ({
    params: { slug: slugify(item.title, { lower: true }) },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default slug;
