import Link from "next/link";
import {
  ListItem,
  Flex,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
  VStack,
  Tag,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import { WorkItem } from "@/types/work-item";
import { getMinimalString } from "@/utils/strings";
import { formatDate } from "@/utils/dates";

const WorkItem = (props: WorkItem) => {
  const { progress, title, description, date, slug, tags } = props;

  return (
    <Link href={`/work/${slug}`}>
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
          <VStack align={"start"}>
            <Heading size={"md"}>{title}</Heading>
            <Text mb={4} color={"gray"} display={"flex"} alignItems={"center"}>
              <CalendarIcon mr={2} />
              {progress < 100
                ? `Expected: ${formatDate(date)}`
                : `${formatDate(date)}`}
            </Text>
            <Text size="xl">{getMinimalString(description, 40)}...</Text>
            <Flex gap={2} pt={2} wrap={"wrap"} align={"left"}>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Flex>
          </VStack>
        </Flex>
      </ListItem>
    </Link>
  );
};

export default WorkItem;
