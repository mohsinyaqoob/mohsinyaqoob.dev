import {
  Box,
  Divider,
  Flex,
  HStack,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Fitness", href: "/fitness" },
    { label: "Resume", href: "/resume" },
    { label: "Hire me", href: "/hire-me" },
  ];

  return (
    <Box mt={16}>
      <Divider my={8} bg={"lightGray"} orientation={"horizontal"} />
      <Flex justifyContent={"space-between"}>
        <List color={"gray"} spacing={4}>
          {links.map((link, index) => (
            <ListItem key={index}>
              <Link href={link.href}>
                <ChakraLink>{link.label}</ChakraLink>
              </Link>
            </ListItem>
          ))}
        </List>
        <List color={"gray"} spacing={4}>
          <ListItem>
            <ChakraLink href="http://github.com/mohsinyaqoob" target={"_blank"}>
              GitHub
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              href="https://www.linkedin.com/in/mohsin-yaqoob-b08891162/"
              target={"_blank"}
            >
              LinkedIn
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink href="http://twitter.com/mohsinyqb" target={"_blank"}>
              Twitter
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Discord</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Instagram</ChakraLink>
          </ListItem>
        </List>
        <List color={"gray"} spacing={4}>
          <ListItem>
            <ChakraLink>Uses</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Gear</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Bookmarks</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Books</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>Newsletters</ChakraLink>
          </ListItem>
        </List>
      </Flex>
      <HStack mt={12}>
        <Text>
          © {new Date().getFullYear()}
          <ChakraLink color={"accent"} ml={4}>
            Mohsin Yaqoob.
          </ChakraLink>
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
