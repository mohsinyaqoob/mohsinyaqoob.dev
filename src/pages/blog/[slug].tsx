import { GetStaticPaths } from "next";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import MDXComponents from "@/components/mdx-components";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Image as ChakraImage,
  VStack,
  Heading,
  Text,
  HStack,
  Tag,
  Divider,
  Link,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { getBlogPosts, readBlogPost, getAbbr } from "@/utils/blog";
import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const BlogPage = ({
  title,
  tags,
  description,
  date,
  source,
  readingTime,
  publisher,
  publisherImage,
  publisherLink,
  coverImage,
  thumbnail,
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
          url: `https://mohsinyaqoob.netlify.app/blog/${slug}`,
          images: [
            {
              url: coverImage,
            },
            {
              url: thumbnail,
            },
          ],
        }}
      />
      <Box mt={[16, 32]}>
        <Box mt={8}>
          <VStack align={"left"} gap={2} mb={8}>
            <Flex gap={2} pt={2} wrap={"wrap"} align={"left"}>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Flex>
            <Heading lineHeight={"1.5em"} size={"lg"}>
              {title}
            </Heading>

            <Text fontSize={"md"}>{description}</Text>
          </VStack>
        </Box>
        <Flex
          flexDirection={["column", "row", "row"]}
          justifyContent={"space-between"}
        >
          <HStack gap={4}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w={16}
              h={16}
              bg={"lightGray"}
              rounded={"full"}
            >
              {publisherImage ? (
                <ChakraImage src={publisherImage} rounded={"full"} />
              ) : (
                <Heading size={"lg"} color={"muted"}>
                  {getAbbr(publisher)}
                </Heading>
              )}
            </Box>
            <VStack align={"left"} spacing={2}>
              <Link target={"_blank"} href={publisherLink}>
                <Heading size={"sm"}>{publisher}</Heading>
              </Link>
              <Flex
                flexDir={["column", "row", "row"]}
                gap={[1, 4, 4]}
                alignItems={["left"]}
                color={"muted"}
                fontSize={"sm"}
              >
                <Text display={"flex"} alignItems={"center"} gap={2}>
                  <CalendarIcon />
                  {date}
                </Text>
                <Text display={"flex"} alignItems={"center"} gap={2}>
                  <TimeIcon />
                  {readingTime}
                </Text>
              </Flex>
            </VStack>
          </HStack>
        </Flex>
        <Divider my={8} />
        {coverImage && <ChakraImage rounded={"md"} src={coverImage} />}
        <Divider my={8} />
        <MDXRemote {...source} components={MDXComponents} />
        <HStack gap={2} mt={16} p={0} wrap={"wrap"}>
          <TwitterShareButton
            url={`http://mohsinyaqoob.com/blog/${slug}`}
            title={title}
            hashtags={tags.map((tag) => tag.trim())}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={`http://mohsinyaqoob.com/blog/${slug}`}
            quote={title}
            className="share-button"
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={`http://mohsinyaqoob.com/blog/${slug}`}
            title={title}
            className="share-button"
          >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={`http://mohsinyaqoob.com/blog/${slug}`}
            className="share-button"
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <TelegramShareButton
            url={`http://mohsinyaqoob.com/blog/${slug}`}
            title={title}
            className="share-button"
          >
            <TelegramIcon size={40} round />
          </TelegramShareButton>
        </HStack>
      </Box>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug as string;
  const blogContent = await readBlogPost(slug);
  const {
    content,
    data: {
      title,
      description,
      date,
      tags,
      publisher,
      coverImage,
      thumbnail,
      publisherImage,
    },
  } = matter(blogContent);

  let tagsArray = tags ? tags.split(",") : [];

  return {
    props: {
      content,
      source: await serialize(content),
      readingTime: readingTime(content).text,
      title,
      tags: tagsArray,
      description,
      date,
      slug,
      publisher,
      coverImage,
      thumbnail,
      publisherImage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await getBlogPosts();

  return {
    paths: blogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPage;
