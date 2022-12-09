import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  List,
  ListItem,
  OrderedList,
  TableCaption,
  Tag,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import resumeData from "../../data/resume";

const ResumePage = () => {
  const { introduction, professional, education, workDone } = resumeData;
  return (
    <>
      <NextSeo title="Resume - Mohsin Yaqoob" />
      <Box
        display={"flex"}
        flexDir={"column"}
        mt={[8, 16, 16]}
        justifyContent={"start"}
      >
        <List mt={4} display={"flex"} flexDir={"row"} gap={4}>
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
          p={12}
          fontSize={"sm"}
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
                  <Image src={introduction.avatarUrl} />
                </Box>
              </Box>
              <VStack align={"left"} spacing={1} flex={2}>
                <Text fontWeight={"bold"}>{introduction.name}</Text>
                <Heading>{introduction.designation}</Heading>
                <Text color={"muted"}>
                  {introduction.primaryAddress} |{" "}
                  {introduction.secondaryAddress}
                </Text>
              </VStack>
            </HStack>

            <VStack alignItems={"center"}>
              <HStack gap={12}>
                <VStack align={"right"} spacing={0} flex={1}>
                  <List textAlign={"right"} spacing={1}>
                    <ListItem>
                      <Text>{introduction.name}</Text>
                    </ListItem>
                    <ListItem>
                      <Text>{introduction.phone}</Text>
                    </ListItem>
                    <ListItem>
                      <Text>{introduction.email}</Text>
                    </ListItem>
                    <ListItem>
                      <Link href={introduction.github} target={"_blank"}>
                        {introduction.github}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href={introduction.website} target={"_blank"}>
                        {introduction.website}
                      </Link>
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
                  {professional.map((work, index) => {
                    return (
                      <ListItem key={index}>
                        <Text fontWeight={index === 0 ? "bold" : ""}>
                          {work.startDate} - {work.endDate}{" "}
                          {index === 0 ? "*" : ""}
                        </Text>
                      </ListItem>
                    );
                  })}
                </List>
              </VStack>
              <List flex={2} spacing={1}>
                {professional.map((work, index) => {
                  return (
                    <ListItem key={index}>
                      <Text fontWeight={index === 0 ? "bold" : ""}>
                        {`${work.role}, ${work.company}`}
                      </Text>
                    </ListItem>
                  );
                })}
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
                  {education.map((edu, index) => {
                    return (
                      <ListItem key={index}>
                        <Text>{`${edu.startDate} - ${edu.endDate}`}</Text>
                      </ListItem>
                    );
                  })}
                </List>
              </VStack>
              <List flex={2} spacing={1}>
                {education.map((edu, index) => {
                  return (
                    <ListItem key={index}>
                      <Text>{`${edu.degreeOrCertification}, ${edu.provider}, ${edu.providerAddress}`}</Text>
                    </ListItem>
                  );
                })}
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
            <VStack alignItems={""} gap={12}>
              {workDone.map((work, index) => {
                return (
                  <VStack
                    rounded={"md"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 2px 20px 0px"}
                    gap={2}
                    p={6}
                    align={"left"}
                  >
                    <HStack justifyContent={"space-between"}>
                      <VStack align={"left"}>
                        <Heading
                          bgGradient="linear(to-l, #ffd500, #FF0080)"
                          bgClip="text"
                          size="md"
                        >
                          {work.projectTitle}
                        </Heading>
                        <Text color={"muted"}>
                          {`${work.clientName}, ${work.clientAddress}`}
                        </Text>
                      </VStack>
                      <Image src={work.clientLogo} height={8} />
                    </HStack>
                    <Text pt={2}>{work.roleDescription}</Text>
                    <Text fontWeight={"bold"} size="sm">
                      What I did at {work.projectTitle} :
                    </Text>
                    <Box>
                      <UnorderedList spacing={2}>
                        {work.workTechnologies.map((tech, index) => {
                          return (
                            <ListItem key={index}>
                              <Text>{tech}</Text>
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </Box>
                  </VStack>
                );
              })}
            </VStack>
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
