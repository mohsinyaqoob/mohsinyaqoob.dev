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
        title="Freelance Reactjs, Nodejs, Typescript Developer from India - Mohsin Yaqoob"
        description="Full-stack Developer from India. Works with React, Nodejs, Typescript. Over 3 years of experience in full-stack engineering industry with more than 100+ projects delivered. Designed pioneering digital products across industry verticals including retail, healthcare, automotive, finance and more."
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
