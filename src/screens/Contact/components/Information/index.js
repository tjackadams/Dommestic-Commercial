import React from "react";

import Loadable from "../../../../components/MyLoadable";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";

let Map = Loadable({
  loader: () => import("../Map")
});

const Information = () => {
  return (
    <Box
      direction="column"
      justify="start"
      align="start"
      wrap={true}
      margin="medium"
      colorIndex="light-1"
    >
      <Box
        justify="start"
        align="start"
        wrap={true}
        pad={{
          horizontal: "medium",
          vertical: "medium"
        }}
        colorIndex="light-1"
        basis="full"
      >
        <Box
          direction="row"
          justify="center"
          align="center"
          wrap={true}
          pad={{
            vertical: "medium"
          }}
          colorIndex="light-1"
        >
          <Heading tag="h4" strong={true}>
            Domestic & Commercial Drain Services
          </Heading>
        </Box>
        <Box
          direction="row"
          justify="center"
          align="start"
          wrap={true}
          colorIndex="light-1"
        >
          <Paragraph>
            67 Merryfield Road <br />
            Dudley<br />
            West Midlands <br />
            DY1 2ND <br />
          </Paragraph>
        </Box>
        <Box
          direction="row"
          justify="center"
          align="start"
          wrap={true}
          colorIndex="light-1"
        >
          <Paragraph>
            Telephone: 01384 357446 <br />
            Mobile: 07974 243764 <br />
            Email: stevetomkins53@gmail.com <br />
          </Paragraph>
        </Box>
        <Box
          direction="row"
          justify="center"
          align="start"
          wrap={true}
          colorIndex="light-1"
        >
          <Map />
        </Box>
      </Box>

    </Box>
  );
};

export default Information;
