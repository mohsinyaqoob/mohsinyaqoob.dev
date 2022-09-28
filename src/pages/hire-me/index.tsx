import { Link, Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";

const HireMe = () => {
  return (
    <React.Fragment>
      {" "}
      <NextSeo title="Hire me - Mohsin Yaqoob" />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          Please write me an email at{" "}
          <Link color={"accent"} href="mailto:hi@mohsinyaqoob.com">
            {" "}
            hi@mohsinyaqoob.com
          </Link>
        </Text>
      </VStack>
    </React.Fragment>
  );
};

export default HireMe;
