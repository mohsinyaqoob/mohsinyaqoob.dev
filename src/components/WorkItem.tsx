import Link from "next/link";
import {
  ListItem,
  Flex,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import slugify from "slugify";

import { WorkItem } from "../types/work-item";

const WorkItem = (props: WorkItem) => {
  const { progress, title, description, date, internalLink, externalLink } =
    props;

  return (
    <Link
      href={`/work/${slugify(title, {
        lower: true,
      })}`}
    >
      <ListItem
        bg={"lightGray"}
        p={8}
        rounded={"md"}
        _hover={{
          cursor: "pointer",
          bg: "highlight",
        }}
      >
        <Flex gap={8} direction={{ base: "column", md: "row", lg: "row" }}>
          <Box
            className="work-progress"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CircularProgress
              value={progress}
              color={progress === 100 ? "accent" : "red"}
              size={"72px"}
            >
              <CircularProgressLabel>{progress}%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box className="work-description">
            <HStack
              mb={1}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Heading size={"md"}>{title}</Heading>
              {/* <Link href={"/hello"}>
                <LinkBox>
                  <LinkIcon color={"accent"}></LinkIcon>
                </LinkBox>
              </Link> */}
            </HStack>
            <Text mb={4} color={"gray"}>
              {progress < 100 && "Expected Deploy: "}
              {date}
            </Text>
            <Text size="xl">{description}</Text>
          </Box>
        </Flex>
      </ListItem>
    </Link>
  );
};

export default WorkItem;
