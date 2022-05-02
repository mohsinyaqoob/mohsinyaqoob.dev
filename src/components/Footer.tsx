import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt={16}>
      <Divider my={8} bg={"lightGray"} orientation={"horizontal"} />
      <Flex justifyContent={"space-between"}>
        <List color={"gray"} spacing={4}>
          <ListItem>
            <Link>Home</Link>
          </ListItem>
          <ListItem>
            <Link>Work</Link>
          </ListItem>
          <ListItem>
            <Link>Blog</Link>
          </ListItem>
          <ListItem>
            <Link>Colofone</Link>
          </ListItem>
          <ListItem>
            <Link>Analytics</Link>
          </ListItem>
        </List>
        <List color={"gray"} spacing={4}>
          <ListItem>
            <Link>Twitter</Link>
          </ListItem>
          <ListItem>
            <Link>GitHub</Link>
          </ListItem>
          <ListItem>
            <Link>LinkedIn</Link>
          </ListItem>
          <ListItem>
            <Link>Discord</Link>
          </ListItem>
          <ListItem>
            <Link>Instagram</Link>
          </ListItem>
        </List>
        <List color={"gray"} spacing={4}>
          <ListItem>
            <Link>Uses</Link>
          </ListItem>
          <ListItem>
            <Link>Gear</Link>
          </ListItem>
          <ListItem>
            <Link>Bookmarks</Link>
          </ListItem>
          <ListItem>
            <Link>Books</Link>
          </ListItem>
          <ListItem>
            <Link>Newsletters</Link>
          </ListItem>
        </List>
      </Flex>
      <HStack mt={12}>
        <Text>
          © {new Date().getFullYear()}
          <Link color={"accent"} ml={4}>
            Mohsin Yaqoob.
          </Link>
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
