import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Img as ChakraImage,
  Link,
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
            <Text as={"span"}>Mohsin</Text>
          </Text>
          .
        </Heading>
        <Text fontSize={"32px"}>👋</Text>
      </HStack>
      <Text
        w={"full"}
        mx={"auto"}
        lineHeight={["8"]}
        fontSize={["xl"]}
        textAlign={"center"}
        color={"white"}
      >
        I’m a full-stack engineer by profession, a designer by passion, and
        content creator and a fitness enthusiast. Here, I share my experience as
        a full-stack engineer and everything I'm learning about React,
        Typescript, Figma, Serverless, and more.
      </Text>
    </VStack>
  );
};

export default Hero;
