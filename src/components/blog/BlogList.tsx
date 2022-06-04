import {
  Box,
  Heading,
  List,
  Text,
  Button,
  VStack,
  Stack,
  Grid,
  GridItem,
  Flex,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import second from "@/components/work/WorkItem";
import BlogItem from "./BlogItem";
import { BlogPost } from "@/types/blog-post";

const BlogList = (props) => {
  const { blogPosts, ...rest } = props;
  return (
    <VStack as="section" mt={16} align={"left"} {...rest}>
      <Heading size={"md"} mb={8}>
        Blog Posts.
      </Heading>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="12"
        textAlign="left"
        rounded="lg"
      >
        {blogPosts.map((blog, index) => (
          <BlogItem
            key={index}
            title={blog.title}
            description={blog.description}
            thumbnail={blog.thumbnail}
            slug={blog.slug}
            tags={blog.tags}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default BlogList;
