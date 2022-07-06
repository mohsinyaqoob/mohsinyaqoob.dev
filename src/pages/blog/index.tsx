import BlogList from "@/components/blog/BlogList";
import { getRecentBlogPosts } from "@/utils/blog";
import { SearchIcon } from "@chakra-ui/icons";
import {
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Blog = ({ blogPosts }) => {
  const [filteredBlog, setFilteredBlog] = useState(blogPosts);

  const onSearch = (event) => {
    const query = event.currentTarget.value;

    const blog = blogPosts.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBlog(blog);
  };
  return (
    <>
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        <Text>
          Search through the blog posts that I have written over time.
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            onChange={onSearch}
            type="text"
            placeholder="Search my work here..."
          />
        </InputGroup>
      </VStack>
      <BlogList blogPosts={filteredBlog} />
    </>
  );
};

export const getStaticProps = async () => {
  const blogPosts = await getRecentBlogPosts(24);

  return {
    props: { blogPosts },
  };
};

export default Blog;
