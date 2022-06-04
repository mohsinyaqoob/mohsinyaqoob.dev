import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const colorMode: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colorMode,
  fonts: {
    heading: "Space Grotesk, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    black: "#16161D",
    darkGray: "#1A202C",
    lightGray: "#303641",
    highlight: "#1F293C",
    accent: "#00FFE0",
    red: "#DE0000",
    gradient: "linear(to-l, #00FFF0, #6A0FB2)",
    white: "#E0E0E0",
    muted: "#718096",
  },
  breakpoints,
  components: {
    button: {
      fontFamily: "Arial",
      background: "",
    },
  },
  mdx: {
    h1: {
      fontSize: "3xl",
      letterSpacing: "1px",
    },
    h2: {
      fontSize: "xl",
      letterSpacing: "0.8px",
    },
    h3: {
      fontSize: "md",
      letterSpacing: "0.6px",
    },
    h4: {
      fontSize: "xs",
      letterSpacing: "0.5px",
    },
  },
});

export default theme;
