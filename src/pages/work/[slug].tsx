import { GetStaticPaths } from "next";

import { getWorkItems, readWorkItem } from "@/utils/work";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import MDXComponents from "@/components/mdx-components";
import { formatDate } from "@/utils/dates";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  Heading,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

const WorkItemPage = ({
  progress,
  title,
  tags,
  description,
  date,
  source,
  content,
  readingTime,
}) => {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <>
      <NextSeo
        title={`${title} - Mohsin Yaqoob`}
        description={description}
        openGraph={{
          description,
          title: `${title} - Mohsin Yaqoob`,
          url: `https://mohsinyaqoob.com/blog/${slug}`,
          images: [
            {
              url: ``,
            },
          ],
        }}
      />
      <Flex
        gap={8}
        direction={{ base: "column", md: "row", lg: "row" }}
        mt={[16, 32]}
      >
        <Box
          className="work-progress"
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <CircularProgress
            value={progress}
            color={progress === 100 ? "accent" : "red"}
            size={"80px"}
          >
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box className="work-content">
          <VStack justifyContent={"space-between"} alignItems={"flex-start"}>
            <VStack
              alignItems={"flex-start"}
              alignContent={"center"}
              justifyContent={"start"}
            >
              <Heading size={"lg"} mb={0}>
                {title}
              </Heading>
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                color={"gray"}
                gap={2}
                pb={2}
              >
                <Text>
                  <CalendarIcon mr={2} />
                  {progress < 100
                    ? `Expected: ${formatDate(date)}`
                    : `${formatDate(date)}`}
                </Text>
                <Text display={"flex"} alignItems={"center"} gap={2}>
                  <TimeIcon ml={[0, 0, 4]} /> {readingTime}
                </Text>
              </Flex>
              <Flex gap={2} py={4} wrap={"wrap"} align={"left"}>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Flex>
            </VStack>
            <Text size="xl">{description}</Text>
            <MDXRemote {...source} components={MDXComponents} />
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug as string;
  const workItemContent = await readWorkItem(slug);
  const {
    content,
    data: { title, description, date, progress, tags },
  } = matter(workItemContent);

  let tagsArray = tags ? tags.split(",") : [];

  return {
    props: {
      content,
      progress,
      source: await serialize(content),
      readingTime: readingTime(content).text,
      title,
      tags: tagsArray,
      description,
      date,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workItems = await getWorkItems();

  return {
    paths: workItems.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default WorkItemPage;
