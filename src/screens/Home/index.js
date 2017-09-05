import React from "react";
import Helmet from "react-helmet";

import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Image from 'grommet/components/Image';
import Paragraph from "grommet/components/Paragraph";

import headerLogo from "./images/header-min.png";

const Home = () => {
  return (
    <div>
      <Helmet 
      title="Home" />
      <Box pad="none">
        <Hero
          colorIndex="light-1"
          size="large"
          background={<Image src={headerLogo} fit="cover" full={true} alt="Unblocked Sink"/>}
        >
          <Box direction="row" justify="center" align="center">
            <Box basis="1/2" align="end" pad="medium" />
            <Box basis="1/2" align="start" pad="medium">
              <Box colorIndex="grey-2-a">
                <Card
                  heading={
                    <Heading tag='h1'>
                      Domestic & Commercial Drain Services
                      </Heading>
                  }
                  description="No job too small."
                  link={
                    <Anchor
                      path="/Services"
                      primary={true}
                      label="Find Out More"
                    />
                  }
                />
              </Box>
            </Box>
          </Box>
        </Hero>
      </Box>
      <Box align="center" direction="column">
        <Box pad="large" align="center" textAlign="center">
          <Heading tag="h1" strong={true} margin="none">
            Why do customers recommend us?
          </Heading>
          <Paragraph size="xlarge" width="large">
            Excellent reputation for quality & honesty.
          </Paragraph>
          <Paragraph size="xlarge" width="large">
            Fast & reliable service.
          </Paragraph>
          <Paragraph size="xlarge" width="large">
            Over 30 years experience.
          </Paragraph>
          <Paragraph size="xlarge" width="large">
            No VAT charges.
          </Paragraph>
          <Paragraph size="xlarge" width="large">
            Fully insured, upto £2 million.
          </Paragraph>
          <Paragraph size="xlarge" width="large">
            We do the dirty work, so you don't have to.
          </Paragraph>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
