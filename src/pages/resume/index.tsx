import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Link, Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const ResumePage = () => {
  return (
    <>
      <NextSeo title="Resume - Mohsin Yaqoob" />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          This section is being worked on. Please refer to my{" "}
          <Link
            href="https://www.linkedin.com/in/mohsin-yaqoob-b08891162/"
            target={"_blank"}
            color={"accent"}
          >
            <ExternalLinkIcon mr={1} />
            LinkedIn profile
          </Link>{" "}
          to get a gist of what I do and what I have been doing in the past. 🙂
        </Text>
      </VStack>
    </>
  );
};

export default ResumePage;
