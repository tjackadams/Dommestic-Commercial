import React from "react";

import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Image from 'grommet/components/Image';
import Menu from "grommet/components/Menu";

import logo from '../logo.png';

const AppHeader = () => {
  return (
    <Header
      justify="center"
      direction="row"
      align="center"
      responsive={false}
      colorIndex="neutral-4"
    >
      <Box pad="none" flex={false}>
        <Box align="center" direction="row" colorIndex="neutral-4">
          <Box
            align="center"
            direction="row"
            flex="grow"
            justify="start"
            responsive={false}
          >
            <Box pad="none" margin={{horizontal: 'large'}}>
              <Image src={logo} size='thumb'
              alt="Domestic & Commercial Drain Services Logo"/>
              </Box>
            <Menu inline={true} direction="row" flex="grow" pad="none" label='Menu'>
              <Box
                flex="grow"
                pad="none"
                direction="row"
                tag="nav"
                className="grommetux-menu grommetux-menu--row grommetux-menu--inline"
              >
                <Anchor path="/" tag="a" > Home </Anchor>
                <Anchor path="/Services" tag="a"> Services </Anchor>
                <Anchor path="/Contact" tag="a" > Contact </Anchor>
              </Box>
            </Menu>

          </Box>
        </Box>
      </Box>

    </Header>
  );
};

export default AppHeader;
