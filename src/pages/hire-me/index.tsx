import { Link, Text, VStack, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";

const HireMe = () => {
  return (
    <React.Fragment>
      {" "}
      <NextSeo title="Hire me - Mohsin Yaqoob" />
      <VStack mt={[8, 16, 16]} justifyContent={"start"} align={"left"}>
        

        <Text>
          Hir me (Before my mom does)
        </Text>

        <Heading as='h4' size='md'>
          I Never Met a Deadline I Didn't Like:
        </Heading>
        <Text>
           I've been known to chase deadlines like they're the last piece of pizza at a party – with unrelenting determination and a touch of desperation.
        </Text>

        <Heading as='h4' size='md'>
          My Coffee Addiction is Your Gain: 
        </Heading>
        <Text>
          With a constant caffeine buzz, you can expect me to be as alert as a meerkat on espresso, ready to tackle any task with hyper-caffeinated enthusiasm.
        </Text>

        <Heading as='h4' size='md'>
         I Speak Fluent Emoji:
        </Heading>
        <Text>
           I've got emojis for every situation. Need an urgent response? 💡 On vacation but still working? 🏖️ Stuck in a never-ending Zoom call? 😵 I've got you covered.
        </Text>

        <Heading as='h4' size='md'>
         I'm a Multitasking Maestro:
        </Heading>
        <Text>
          I'm a Multitasking Maestro: Like a plate-spinner at a circus, I can juggle multiple tasks without dropping a single one – well, most of the time.
        </Text>

        <Heading as='h4' size='md'>
         A Team Player with an MVP Spirit:
        </Heading>
        <Text>
           I'm not just a team player; I'm the cheerleader, coach, and water boy all rolled into one. I'm the kind of colleague who brings donuts on Mondays just to make your week a little brighter.
        </Text>       

        <Text>
          Hit me up at{" "}
          <Link color={"accent"} href="mailto:hi@mohsinyaqoob.com">
            {" "}
            hi@mohsinyaqoob.com
          </Link>
        </Text>
      </VStack>
    </React.Fragment>
  );
};

export default HireMe;
