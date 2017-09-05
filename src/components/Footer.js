import React from "react";

import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Footer from "grommet/components/Footer";
import Heading from 'grommet/components/Heading';
import Paragraph from "grommet/components/Paragraph";

const currentYear = new Date().getFullYear();

const AppFooter = () => {
  return (
    <Footer full="horizontal" align="center" direction="row">
      <Box colorIndex="neutral-1" pad="large" align="center" full="horizontal">
        <Box
          className="footer-cards-container"
          pad={{
            vertical: "medium"
          }}
          direction="row"
          size={{
            width: "xlarge"
          }}
        >
          <Card
            basis="1/2"
            contentPad="medium"
            heading="Opening Times"
            headingStrong={true}
            description={
              <Paragraph>
                Monday 9.00 am - 7.00pm<br />
                Tuesday 9.00 am - 7.00pm<br />
                Wednesday 9.00 am - 5.00pm<br />
                Thursday 9.00 am - 7.00pm<br />
                Friday 9.00 am - 5.00pm<br />
                Saturday 9.00 am - 7.00pm<br />
                Sunday 9.00 am - 2.00pm
              </Paragraph>
            }
            separator="right"
            textSize="small"
          />
          <Card
            basis="1/2"
            contentPad="medium"
            heading="Get in touch"
            headingStrong={true}
            description={
              <information>
                  <Heading tag='h5' strong={true}>
Domestic & Commercial Drain Services
                  </Heading>
                <Paragraph>
                  67 Merryfield Road <br />
                  Dudley<br />
                  West Midlands <br />
                  DY1 2ND <br />
                </Paragraph>
                <Paragraph>
                  Telephone: 01384 357446 <br />
                  Mobile: 07974 243764 <br />
                  Email: stevetomkins53@gmail.com <br />
                </Paragraph>
              </information>
            }
            textSize="small"
          />
        </Box>
                <Box
                alignContent='around'
          className="footer-cards-container"
          pad={{
            vertical: "medium"
          }}
          direction="row"
          size={{
            width: "xlarge"
          }}
         
        >
        <Box direction='row' basis="1/2"  textAlign='left'>
            <Paragraph size='small'>
                &copy; {currentYear} - Domestic &amp; Commercial Drain Services
                </Paragraph>
            </Box>
            <Box direction='row' basis="1/2"  textAlign='right'>
                        <Paragraph size='small' align='end'>
                Web design by ITadams              </Paragraph>
                
                </Box>
</Box>
      </Box>
    </Footer>
  );
};

export default AppFooter;
