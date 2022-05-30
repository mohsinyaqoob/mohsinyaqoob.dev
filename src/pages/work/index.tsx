import WorkList from "@/components/work/WorkList";

import { Box, Heading, VStack } from "@chakra-ui/react";
import { getRecentWork } from "@/utils/work";

const index = ({ workItems }) => {
  return (
    <>
      <VStack>
        <Heading size={"md"}>Work Done.</Heading>
      </VStack>
      <WorkList workItems={workItems} />
    </>
  );
};

export const getStaticProps = async () => {
  const workItems = await getRecentWork(24);

  return {
    props: { workItems },
  };
};

export default index;
