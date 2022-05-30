import { Box, Button, Heading, List } from "@chakra-ui/react";

import WorkItem from "./WorkItem";

const WorkList = ({ workItems }) => {
  return (
    <Box as="section" mt={32}>
      <Heading size={"md"}>Work Done.</Heading>
      <List mt={4} spacing={4}>
        {workItems.map((item, index) => {
          const { progress, title, description, date, slug, readingTime } =
            item;
          return (
            <WorkItem
              slug={slug}
              key={index + 1}
              progress={progress}
              title={title}
              description={description}
              date={date}
              readingTime={readingTime}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default WorkList;
