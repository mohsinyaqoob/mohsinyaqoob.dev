import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";

const ResumePage = () => {
  return (
    <>
      <NextSeo title="Resume - Mohsin Yaqoob" />
      <Box
        display={"flex"}
        flexDir={"column"}
        mt={[8, 16, 16]}
        justifyContent={"start"}
      >
        <Heading size={"2xl"}>Mohsin Yaqoob</Heading>
        <Text fontSize={"xl"}>Full-stack Engineer</Text>
        <List my={4} display={"flex"} flexDir={"row"} gap={4}>
          <ListItem>
            <Link
              href={"#"}
              onClick={() => alert("This functionality wont work yet")}
              display={"block"}
              color={"accent"}
            >
              Download
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => alert("This functionality wont work yet")}
              href={"#"}
              color={"accent"}
            >
              Share
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => alert("This functionality wont work yet")}
              href={"#"}
              color={"accent"}
            >
              Print
            </Link>
          </ListItem>
        </List>
        <Box
          mt={8}
          w={"full"}
          minH={"520px"}
          bg={"#fff"}
          rounded={"md"}
          p={16}
          fontSize={"md"}
          fontFamily={"Space Grotesk"}
          color={"lightGray"}
          overflow={"scroll"}
          overflowY={"hidden"}
        >
          <VStack w={"680px"} gap={6} align={"left"}>
            <HStack alignItems={"center"} gap={12}>
              <Box
                h={32}
                overflow={"hidden"}
                flex={1}
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Box w={32} h={32} rounded={"full"} overflow={"hidden"}>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
                    }
                  />
                </Box>
              </Box>
              <VStack align={"left"} spacing={0} flex={2}>
                <Text fontWeight={"bold"}>Mohsin Yaqoob</Text>
                <Heading>Full-stack Engineer</Heading>
                <Text color={"muted"}>Srinagar, Jammu and Kashmir</Text>
              </VStack>
            </HStack>

            <VStack alignItems={"center"}>
              <HStack gap={12}>
                <VStack align={"right"} spacing={0} flex={1}>
                  <List textAlign={"right"} spacing={1}>
                    <ListItem>
                      <Text>Mohsin Yaqoob</Text>
                    </ListItem>
                    <ListItem>
                      <Text>+919055404321</Text>
                    </ListItem>
                    <ListItem>
                      <Text>hi@mohsinyaqoob.com</Text>
                    </ListItem>
                    <ListItem>
                      <Text>github.com/mohsinyaqoob</Text>
                    </ListItem>
                    <ListItem>
                      <Text>mohsinyaqoob.com</Text>
                    </ListItem>
                  </List>
                </VStack>
                <Text
                  fontWeight={700}
                  bgGradient="linear(to-l, #ffd500, #FF0080)"
                  bgClip="text"
                  flex={2}
                >
                  A multidiciplinary developer with passion for elegant,
                  innovative and functional user interfaces. Over 3 years of
                  experience in full-stack engineering industry with more than
                  20+ projects delivered. Designed pioneering digital products
                  across industry verticals including retail, healthcare,
                  automotive, finance and more.
                </Text>
              </HStack>
            </VStack>

            <Heading
              bgGradient="linear(to-l, #ffd500, #FF0080)"
              bgClip="text"
              pt={8}
              textAlign={"center"}
              w={"full"}
              fontSize={16}
            >
              Professional Life
            </Heading>
            <HStack alignItems={"center"} gap={12}>
              <VStack align={"right"} spacing={0} flex={1}>
                <List textAlign={"right"} spacing={1}>
                  <ListItem>
                    <Text fontWeight={"bold"}>October 2021 — Present *</Text>
                  </ListItem>
                  <ListItem>
                    <Text>July 2019 — August 2021</Text>
                  </ListItem>
                  <ListItem>
                    <Text>January 2019 — July 2019</Text>
                  </ListItem>
                  <ListItem>
                    <Text>March 2017 — December 2018</Text>
                  </ListItem>
                </List>
              </VStack>
              <List flex={2} spacing={1}>
                <ListItem>
                  <Text>Senior Software Engineer (QSS Technosoft Inc.)</Text>
                </ListItem>
                <ListItem>
                  <Text>Full-stack Developer (CodeMites)</Text>
                </ListItem>
                <ListItem>
                  <Text>.NET Developer (Interface Tech.)</Text>
                </ListItem>
                <ListItem>
                  <Text>Layout Designer (Captured Illusions)</Text>
                </ListItem>
              </List>
            </HStack>

            <Heading
              bgGradient="linear(to-l, #ffd500, #FF0080)"
              bgClip="text"
              pt={8}
              textAlign={"center"}
              w={"full"}
              fontSize={16}
            >
              Education
            </Heading>
            <HStack alignItems={"center"} gap={12}>
              <VStack align={"right"} spacing={0} flex={1}>
                <List textAlign={"right"} spacing={1}>
                  <ListItem>
                    <Text>November 2019 — July 2021</Text>
                  </ListItem>
                  <ListItem>
                    <Text>July 2015 — August 2018</Text>
                  </ListItem>
                  <ListItem>
                    <Text>August 2015 — Sept 2018</Text>
                  </ListItem>
                </List>
              </VStack>
              <List flex={2} spacing={1}>
                <ListItem>
                  <Text>
                    M.Sc. IT from University of Kashmir, Hazratbal, Srinagar.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>GNIIT Cloud & Mobile Software Engineering</Text>
                </ListItem>
                <ListItem>
                  <Text>B.Sc. IT from Sri Pratap College, Srinagar</Text>
                </ListItem>
              </List>
            </HStack>
            <Heading
              bgGradient="linear(to-l, #ffd500, #FF0080)"
              bgClip="text"
              pt={8}
              textAlign={"center"}
              w={"full"}
              fontSize={16}
            >
              Work Done
            </Heading>
            <HStack alignItems={"center"} gap={12}>
              <VStack
                w={96}
                // h={48}
                rounded={"md"}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 2px 20px 0px"}
                // border={"1px solid #eee"}
                p={6}
                align={"left"}
              >
                <Heading fontSize={16}>Automation Command Center</Heading>
                <Text color={"muted"}>Ortho Clinical Diagnostics, France</Text>
                <Text pt={2}>
                  Worked as a full-stack engineer with Ortho Clinical
                  Diagnostics, France. Implemented best design paterns on the
                  Autumation Command Center for VITROS.
                </Text>
              </VStack>

              <VStack
                w={96}
                // h={48}
                rounded={"md"}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 2px 20px 0px"}
                // border={"1px solid #eee"}
                p={6}
                align={"left"}
              >
                <Heading fontSize={16}>SPARCA AI</Heading>
                <Text color={"muted"}>Customer Crunch, Sydney</Text>
                <Text pt={2}>
                  Worked on a business insights generator app. The said puts the
                  actors inside a business unit into a questionaire and
                  generated valuable business insights for he organization.
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default ResumePage;

/**
 * 
 * <HStack gap={10} alignItems={"flex-start"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"flex-end"}>
              <Box w={24} h={24} bg={"muted"} rounded={"full"}></Box>
              <List fontWeight={400} mt={4} spacing={1} textAlign={"right"}>
                <ListItem>
                  <Text textTransform={"uppercase"} fontWeight={"bold"}>
                    Personal Information
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Mohsin Yaqoob</Text>
                </ListItem>
                <ListItem>
                  <Text>+919055404321</Text>
                </ListItem>
                <ListItem>
                  <Text>hi@mohsinyaqoob.com</Text>
                </ListItem>
                <ListItem>
                  <Text>github.com/mohsinyaqoob</Text>
                </ListItem>
                <ListItem>
                  <Text>mohsinyaqoob.com</Text>
                </ListItem>
              </List>
              <List fontWeight={400} mt={10} spacing={1} textAlign={"right"}>
                <ListItem>
                  <Text textTransform={"uppercase"} fontWeight={"bold"}>
                    Languages
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>+919055404321</Text>
                </ListItem>
                <ListItem>
                  <Text>hi@mohsinyaqoob.com</Text>
                </ListItem>
                <ListItem>
                  <Text>github.com/mohsinyaqoob</Text>
                </ListItem>
                <ListItem>
                  <Text>mohsinyaqoob.com</Text>
                </ListItem>
              </List>
            </Box>
            <Box display={"flex"} flexDir={"column"}>
              <Text fontWeight={"bold"}>Mohsin Yaqoob</Text>
              <Heading>Full-stack Engineer.</Heading>
            </Box>
          </HStack>
 */
