import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

type Props = {
  children: any;
};

const Layout = (props: Props) => {
  return (
    <Container
      color={"white"}
      maxW={"100%"}
      minH={"100vh"}
      bg={"darkGray"}
      pb={8}
    >
      <Box
        display={"flex"}
        flexDir="column"
        maxW={"780px"}
        minH={"100vh"}
        mx={"auto"}
        justifyContent={"space-between"}
      >
        {/* Navbar */}
        <TopNav />
        <Box flex={1}>{props.children}</Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
