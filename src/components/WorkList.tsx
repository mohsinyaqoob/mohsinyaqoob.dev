import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Link, List, Text } from "@chakra-ui/react";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

import WorkItem from "./WorkItem";

type Props = {
  showTotal: number;
};

const workData = [
  {
    id: 1,
    progress: 100,
    title: "Reusable card component with Statistics Chart",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse suscipit laborum excepturi quia totam fugit eligendi ipsum soluta molestias?",
    date: new Date().toLocaleDateString(),
    internalLink: "/work/reusable-card-component",
    externalLink: "",
  },
  {
    id: 2,
    progress: 48,
    title: "Al-Baik Virtual Queue Design and Deployment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse suscipit laborum excepturi quia totam fugit eligendi ipsum soluta molestias?",
    date: new Date().toLocaleDateString(),
    internalLink: "/work/al-baik-virtual-queue",
    externalLink: "",
  },
  {
    id: 3,
    progress: 72,
    title: "JK Bank mPay - Redesign",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse suscipit laborum excepturi quia totam fugit eligendi ipsum soluta molestias?",
    date: new Date().toLocaleDateString(),
    internalLink: "/work/jk-bank-mpay-architecture",
    externalLink: "",
  },
  {
    id: 4,
    progress: 100,
    title: "Reusable card component with Statistics Chart",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse suscipit laborum excepturi quia totam fugit eligendi ipsum soluta molestias?",
    date: new Date().toLocaleDateString(),
    internalLink: "/work/reusable-card-component",
    externalLink: "http://facebook.com",
  },
];

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
