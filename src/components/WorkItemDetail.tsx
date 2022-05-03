import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MdThumbUpAlt, MdThumbUpOffAlt, MdThumbUp } from "react-icons/md";

const WorkItemDetail = (props) => {
  const { title, description, date, progress } = props.workItem;
  return (
    <Flex mt={32} gap={8} direction={{ base: "column", md: "row", lg: "row" }}>
      <Box
        className="work-progress"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* <CircularProgress
          value={progress}
          color={progress === 100 ? "accent" : "red"}
          size={"72px"}
        >
          <CircularProgressLabel>{progress}%</CircularProgressLabel>
        </CircularProgress> */}
        <MdThumbUpAlt size={"8rem"} />
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
          {"Deployed: " + date}
        </Text>
        <Text size="xl">{description}</Text>
      </Box>
    </Flex>
  );
};

export default WorkItemDetail;
