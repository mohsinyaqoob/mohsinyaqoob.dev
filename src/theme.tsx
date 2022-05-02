import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk, sans-serif",
    body: "Space Grotesk, sans-serif",
  },
  colors: {
    black: "#16161D",
    darkGray: "#1A202C",
    lightGray: "#303641",
    highlight: "#1F293C",
    accent: "#00FFE0",
    red: "#DE0000",
  },
  breakpoints,
});

export default theme;
