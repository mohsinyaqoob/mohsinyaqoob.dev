import { useState } from "react";
import {
  Text,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { SearchIcon } from "@chakra-ui/icons";

import WorkList from "@/components/work/WorkList";
import { getRecentWork } from "@/utils/work";

const index = ({ workItems }) => {
  const [filteredWork, setFilteredWork] = useState(workItems);

  const onSearch = (event) => {
    const query = event.currentTarget.value;

    const work = workItems.filter((work) =>
      work.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredWork(work);
  };

  return (
    <>
      <NextSeo
        title={`Full-stack Engineer, UI Baker, Design evangelist from Kashmir - Mohsin Yaqoob`}
        description={""}
        openGraph={{
          description: "description",
          title: "title",
          url: "http://mohsinyaqoob.com",
        }}
      />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          The work I have done or currently doing is listed here. My work mostly
          focuses on the React ecosystem.
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            onChange={onSearch}
            type="text"
            placeholder="Search my work here..."
          />
        </InputGroup>
      </VStack>
      <WorkList mt={16} workItems={filteredWork} />
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
