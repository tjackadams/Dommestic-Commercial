import React from "react";

import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";

const Header = () => {
    return(
        <Box
        justify="start"
        align="center"
        wrap={true}
        colorIndex="light-2"
      >
        <Box
          direction="row"
          justify="start"
          align="center"
          wrap={true}
          pad={{
            vertical: 'medium'
          }}
          colorIndex="light-2"
        >
          <Heading tag="h1">Call Steve On: 07974 243764</Heading>
        </Box>
        <Box
          direction="row"
          justify="start"
          align="center"
          wrap={true}
          pad={{
            vertical: 'small'
          }}
          colorIndex="light-2"
        >
          <Heading tag="h3">
            Prefer <Anchor href="#ContactForm">email</Anchor>?
          </Heading>
        </Box>
      </Box>
    );
}

export default Header;