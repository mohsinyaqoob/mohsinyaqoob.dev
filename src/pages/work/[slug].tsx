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
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { Head } from "next/document";
import { BiBookContent } from "react-icons/bi";

const WorkItemPage = ({
  progress,
  title,
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
        <Box className="work-description">
          <VStack justifyContent={"space-between"} alignItems={"flex-start"}>
            <VStack
              alignItems={"flex-start"}
              alignContent={"center"}
              justifyContent={"start"}
            >
              <Heading size={"lg"} mb={2}>
                {title}
              </Heading>
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                color={"gray"}
                gap={2}
                pb={4}
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
            </VStack>
            <Text size="xl">{description}</Text>
            <MDXRemote {...source} components={MDXComponents} />
            {content}
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
    data: { title, description, date, progress },
  } = matter(workItemContent);

  return {
    props: {
      content,
      progress,
      source: await serialize(content),
      readingTime: readingTime(content).text,
      title,
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
