import { Box, Button, Heading, List } from "@chakra-ui/react";

import WorkItem from "./WorkItem";
import { workData } from "../data/work";

type Props = {
  showTotal: number;
};

const WorkList = ({ showTotal, ...rest }: Props) => {
  // Read x = showTotal posts from file systems
  const workItems = workData.slice(0, showTotal);
  return (
    <Box as="section" mt={32}>
      <Heading size={"md"}>Work Done.</Heading>
      <List mt={4} spacing={4}>
        {workItems.map((item, index) => (
          <WorkItem
            progress={item.progress}
            title={item.title}
            description={item.description}
            date={item.date}
            internalLink={item.internalLink}
            externalLink={item.externalLink}
          />
        ))}
      </List>
      {/* <Link mt={6} color={"accent"} size={"md"}>
        <Text mt={8}>View all.</Text>
      </Link> */}
      <Button
        mt={6}
        _hover={{ bg: "accent", color: "darkGray" }}
        variant={"ghost"}
      >
        View all.
      </Button>
    </Box>
  );
};

export default WorkList;
