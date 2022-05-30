import { Box, Heading, List, Button } from "@chakra-ui/react";
import second from "@/components/work/WorkItem";

type Props = {
  showTotal?: number;
};

const blogItems = [
  {
    title: "Hello World!",
  },
  {
    title: "Proframming with Dart!",
  },
  {
    title: "How to create a Sanituy IO Model",
  },
];

const BlogList = ({ showTotal, ...rest }: Props) => {
  // Read x = showTotal posts from file systems
  //   const workItems = workData.slice(0, showTotal);
  return (
    <Box as="section" mt={16}>
      <Heading size={"md"}>Recent Blog Posts.</Heading>
      <List mt={4} spacing={4}>
        {blogItems.map((blog, index) => (
          <h1>{blog.title}</h1>
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

export default BlogList;
