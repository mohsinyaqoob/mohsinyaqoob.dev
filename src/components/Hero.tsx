import {
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Img as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import SelfImage from "../assets/images/self-avatar.png";
import Story from "./Story";

const Hero = () => {
  return (
    <VStack mt={["10", "20"]} gap={8}>
      <Box
        _hover={{ cursor: "pointer" }}
        bgGradient={"linear(to-l, #00FFF0, #6A0FB2)"}
        p={1}
        w={48}
        h={48}
        overflow={"hidden"}
        rounded={"full"}
      >
        <Image src={SelfImage} style={{ borderRadius: "100%" }} />
      </Box>
      <HStack alignItems={"center"}>
        <Heading size={"lg"} color={"white"}>
          Hello, I'm{" "}
          <Text as={"span"} color="cyan">
            Mohsin
          </Text>
          .
        </Heading>
        <Text fontSize={"32px"}>👋</Text>
      </HStack>
      <Text
        w={"88%"}
        mx={"auto"}
        lineHeight={["8"]}
        fontSize={["xl"]}
        textAlign={"center"}
        color={"white"}
      >
        I’m a full-stack engineer, a designer, and a content creator. I work at
        QSS Inc. as a Senior Software Engineer, and I’m a core member at IMD
        Core, contributing as a Developer Advocate.
      </Text>
    </VStack>
  );
};

export default Hero;
