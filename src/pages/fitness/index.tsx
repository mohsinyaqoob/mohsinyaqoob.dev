import { Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const FitnessPage = () => {
  return (
    <>
      <NextSeo title="Fitness - Mohsin Yaqoob" />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          The fitness section is being worked on. I will soon be sharing fitness
          content over this site. 💪
        </Text>
      </VStack>
    </>
  );
};

export default FitnessPage;
