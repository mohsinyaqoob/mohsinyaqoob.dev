import { HamburgerIcon } from "@chakra-ui/icons";
import {
  HStack,
  Link as ChakraLink,
  Box,
  Heading,
  List,
  ListItem,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Fitness", href: "/fitness" },
  { label: "Resume", href: "/resume" },
  { label: "Let's Talk", href: "/lets-talk" },
];

const TopNav = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Box py={6}>
        <Link href="/">
          <Heading
            _hover={{ cursor: "pointer" }}
            as="a"
            color={"white"}
            size={"md"}
          >
            Mohsin Yaqoob.
          </Heading>
        </Link>
      </Box>
      <List
        display={["none", "flex", "flex"]}
        gap={8}
        alignItems={"center"}
        fontWeight={400}
      >
        {links.map((link, index) => (
          <ListItem key={index}>
            <Link href={link.href}>
              <ChakraLink>{link.label}</ChakraLink>
            </Link>
          </ListItem>
        ))}
      </List>

      <Box display={["flex", "none", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {links.map((link, index) => (
              <Link href={link.href}>
                <MenuItem>
                  <ChakraLink>{link.label}</ChakraLink>
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default TopNav;
