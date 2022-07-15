import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { NextSeo } from "next-seo";

import Layout from "../layout";

import "@fontsource/space-grotesk";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NextSeo
        title="Mohsin Yaqoob - Full-stack Engineer, UI Baker, Design enthusiast."
        description="Full-stack Engineer, UI Designer, and Fitness lover."
        twitter={{
          cardType: "summary_large_image",
          handle: "@mohsinyqb",
        }}
        openGraph={{
          url: "http://mohsinyaqoob.com",
          title:
            "Mohsin Yaqoob - Full-stack engineer and a design enthusiast from Kashmir",
          description:
            "Mohsin Yaqoob - Full-stack engineer and a design enthusiast. Born in Srinagar, Jammu and Kashmir. Works as a Senior Software Engineer at Fexle Inc. Mohsin specializes in SaaS products using the MERN Stack and also create super-awesome layouts for web and mobile using Figma.",
          locale: "en_US",
          images: [
            {
              url: "http://res.cloudinary.com/mohsinyaqoob/image/upload/v1657800924/mohsinyaqoob.com/Group_2.png",
              width: 1200,
              height: 630,
              alt: "Mohsin Yaqoob",
              type: "image/png",
            },
          ],
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
