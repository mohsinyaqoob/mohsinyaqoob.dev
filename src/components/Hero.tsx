import { VStack, HStack, Heading, Text, Box, Image } from "@chakra-ui/react";

import WavingHand from "@/components/WavingHand";

const Hero = () => {
  return (
    <VStack mt={["10", "20"]} gap={8}>
      <Image
          src={"/self.png"}
          className="rounded"
          borderRadius="full"
          boxSize="208px"
          alt="Mohsin Yaqoob"
          height={'200px'}
        />
      <HStack alignItems={"center"}>
        <Heading size={"lg"} color={"white"}>
          Hello, I'm{" "}
          <Text as={"span"} color="cyan">
            <Text as={"span"}>Mohsin</Text>
          </Text>
          .
        </Heading>
        <Text fontSize={"32px"}>
          <WavingHand />
        </Text>
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
