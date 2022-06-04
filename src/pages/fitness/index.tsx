import { Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const FitnessPage = () => {
  return (
    <>
      <NextSeo title="Fitness - Mohsin Yaqoob" />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          The fitness section is being worked on. I will soon be sharing fitness
          content over this site. Currently I am out of shape 😂, so even if I
          write somthing nobody is going to read my content. 🙉
        </Text>
      </VStack>
    </>
  );
};

export default FitnessPage;
