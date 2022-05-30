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

import { CalendarIcon } from "@chakra-ui/icons";

import { WorkItem } from "@/types/work-item";
import { getMinimalString } from "@/utils/strings";
import { formatDate } from "@/utils/dates";

const WorkItem = (props: WorkItem) => {
  const { progress, title, description, date, slug } = props;

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
          <Box>
            <HStack
              mb={1}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Heading size={"md"}>{title}</Heading>
            </HStack>
            <Text mb={4} color={"gray"} display={"flex"} alignItems={"center"}>
              <CalendarIcon mr={2} />
              {progress < 100
                ? `Expected: ${formatDate(date)}`
                : `${formatDate(date)}`}
            </Text>
            <Text size="xl">{getMinimalString(description, 40)}...</Text>
          </Box>
        </Flex>
      </ListItem>
    </Link>
  );
};

export default WorkItem;
