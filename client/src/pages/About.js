import React from "react";
import { Link, Text, Button, Container, Box } from "@chakra-ui/react";


const About = () => {
  return (
    <Container maxW= "container.md">
      <Box borderRadius='lg' padding='8'>
    <Text>
      Welcome to Trail Talk! Connect with other park enthusiasts, share your
      photos, stories, and love of our national parks! You can {" "}
      <Link
        color="green.800"
        href="https://www.nps.gov/planyourvisit/index.htm"
      >
        <Button>click to plan your trip today</Button>
      </Link>
      , the parks are waiting!  If you would like, you can also 
      {" "}
      <Link
        color="green.800"
        href="https://give.nationalparks.org/site/Donation2?df_id=3144&mfc_pref=T&3144.donation=form1"
      >
        <Button>click to donate directly to the parks.</Button>
      </Link>
    </Text>
    </Box>
    <Box borderRadius='lg' padding='8'>
    <Text>
      Web cams are a fun way for your family to see what is happening at a park when you can be there {" "}
      <Link
        color="green.800"
        href="https://explore.org/livecams/brown-bears/brown-bear-salmon-cam-brooks-falls"
      >
        <Button>check out the bears</Button>
      </Link>
      . You can even see as far as Alaska, 
      {" "}
      <Link
        color="green.800"
        href="https://explore.org/livecams/zen-den/dumpling-mountain-brown-bear-salmon-cams"
      >
        <Button>click to here to view before the sun sets.</Button>
      </Link>
    </Text>
    </Box>
    </Container>
  );
};

export default About;
