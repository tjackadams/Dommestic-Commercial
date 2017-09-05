import React from "react";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Paragraph from "grommet/components/Paragraph";

const AdditionalInformation = () => {
  return (
    <Box
      justify="start"
      align="center"
      wrap={true}
      pad={{
        horizontal: 'medium',
        vertical: 'medium'
    }}
      margin='medium'
      colorIndex="light-1"
    >
      <Box
        direction="row"
        justify="start"
        align="center"
        wrap={true}
        pad={{
          vertical: "medium"
        }}
        colorIndex="light-1"
      >
      <Heading tag="h4" strong={true}>
      Areas we cover
    </Heading>
      </Box>
      <Box justify="start" align="center" wrap={true} colorIndex="light-1">
        <Box
          direction="row"
          justify="start"
          align="center"
          wrap={true}
          colorIndex="light-1"
        >
          <Paragraph>
            These are the areas that we cover:
          </Paragraph>
        </Box>
        <Box
          direction="row"
          justify="start"
          align="start"
          wrap={true}
          colorIndex="light-1"
        >
          <List>
            <ListItem separator='none' pad='none'>
              <span>
                Dudley
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
                Wolverhampton
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
                Cradley Heath
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
               Halesowen
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
                Netherton
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
                Stourbridge
              </span>
            </ListItem>
            <ListItem separator='none' pad='none'>
              <span>
                Tipton
              </span>
            </ListItem>
          </List>
        </Box>
        <Box
          direction="row"
          justify="start"
          align="center"
          wrap={true}
          colorIndex="light-1"
        >
          <Paragraph align='center'>
           Can't see your area listed above? <br />
           We may still be able to help. Please do not hesitate to contact us with your enquiry.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalInformation;
