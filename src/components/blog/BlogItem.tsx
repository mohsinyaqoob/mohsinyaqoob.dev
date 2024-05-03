import { getMinimalString } from "@/utils/strings";
import { Box, VStack, Heading, Text, Flex, Tag } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  tags: string[];
};

const BlogItem = (props: Props) => {
  const { title, description, thumbnail, tags, slug } = props;

  return (
    <Link href={`/blog/${slug}`}>
      <Box rounded={"md"} w={"100%"} h={"auto"} _hover={{ cursor: "pointer" }}>
        <VStack align={"left"}>
          <Box
            w={"full"}
            h={"64"}
            rounded={"md"}
            bg={"teal"}
            backgroundImage={thumbnail}
            backgroundSize={'cover'}
            backgroundPosition={["center", "cover", "center"]}
          ></Box>
          <VStack pt={4} align={"left"}>
            <Heading
              _hover={{ cursor: "pointer" }}
              mt={0}
              size={"md"}
              lineHeight={"28px"}
            >
              {title}
            </Heading>
            <Text color={"muted"}>{getMinimalString(description, 16)}</Text>
          </VStack>
          <Flex gap={2} pt={2} wrap={"wrap"} align={"left"}>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Flex>
        </VStack>
      </Box>
    </Link>
  );
};

export default BlogItem;
