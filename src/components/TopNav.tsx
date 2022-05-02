import { HStack, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { BiCommand } from "react-icons/bi";

const TopNav = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Box py={6}>
        <Link href="/">
          <Heading as="a" color={"white"} size={"md"}>
            Mohsin Yaqoob.
          </Heading>
        </Link>
      </Box>
      <Box padding={4}>
        <Heading color={"white"} size={"md"}>
          <BiCommand />
        </Heading>
      </Box>
    </HStack>
  );
};

export default TopNav;
