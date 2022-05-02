import {
  Flex,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Flex
      gap={12}
      _hover={{ bg: "highlight", cursor: "pointer" }}
      rounded={"lg"}
      p={8}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        display={"flex"}
        justifyContent={{ base: "center" }}
        alignContent={{ base: "middle" }}
        alignItems={{ base: "center" }}
      >
        <CircularProgress
          thickness={12}
          size={"90px"}
          value={64}
          color="accent"
        >
          <CircularProgressLabel>64%</CircularProgressLabel>
        </CircularProgress>
      </Box>
      <Box display={"flex"} flexDir="column" gap={2} alignItems={"middle"}>
        <Heading size={"md"}>IMD Core 1.x for K-ngo's</Heading>
        <Text>Expected Launch: April 2022</Text>
        <Text>
          In this course, you will learn about Next.js's features, like data
          fetching, page rendering, dynamic routes, API routes, and how to
          deploy your Next.js project on Vercel.
        </Text>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
