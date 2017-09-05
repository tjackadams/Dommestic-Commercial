import React from "react";

import Box from "grommet/components/Box";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Paragraph";

const ThankYou = () => {
  return (
    <Box
      justify="start"
      align="center"
      wrap={true}
      pad="medium"
      margin="small"
      colorIndex="light-1"
    >
      <Box
        direction="row"
        justify="center"
        align="center"
        wrap={true}
        pad="medium"
        colorIndex="light-1"
      >
        <Headline> Thank You </Headline>
      </Box>
      <Box
        direction="row"
        justify="start"
        align="center"
        wrap={true}
        pad="medium"
        colorIndex="light-1"
      >
        <Paragraph align='center' size='large'>
          Your enquiry has been recieved and we will get back to you as soon a possible.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default ThankYou;
