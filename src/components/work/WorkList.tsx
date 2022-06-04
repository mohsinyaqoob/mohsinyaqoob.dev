import { Box, Text, Heading, List } from "@chakra-ui/react";

import WorkItem from "./WorkItem";

const WorkList = (props) => {
  const { workItems, ...rest } = props;
  return (
    <Box as="section" {...rest}>
      <Heading size={"md"}>Work Done.</Heading>
      <List mt={4} spacing={4}>
        {workItems.length == 0 ? (
          <Text>No work found...</Text>
        ) : (
          workItems.map((item, index) => {
            const {
              progress,
              title,
              description,
              date,
              slug,
              readingTime,
              tags,
            } = item;
            return (
              <WorkItem
                slug={slug}
                key={index}
                progress={progress}
                title={title}
                description={description}
                date={date}
                tags={tags}
                readingTime={readingTime}
              />
            );
          })
        )}
      </List>
    </Box>
  );
};

export default WorkList;
