import React from "react"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Icon,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"
import { Link, animateScroll as scroll } from "react-scroll"

const linkStyles: ITextStyles = {
  root: {
    color: DefaultPalette.neutralDark,
    cursor: "pointer",
    fontSize: FontSizes.large,
    fontWeight: FontWeights.semilight,
    border: "1px solid transparent",
    selectors: {
      ":hover": {
        color: DefaultPalette.neutralPrimaryAlt,
        borderBottom: `1px solid ${DefaultPalette.neutralPrimaryAlt}`,
      },
    },
  },
}

const Header = props => {
  return (
    <Stack
      horizontal
      verticalAlign="center"
      tokens={{ childrenGap: 14 }}
      styles={{ root: { minHeight: 60 } }}
    >
      <Stack.Item grow={1}> </Stack.Item>
      <Stack.Item>
        <Text
          variant="xLarge"
          as="h1"
          styles={{ root: { fontWeight: FontWeights.semibold } }}
        >
          Domestic &#38; Commercial Drain Services
        </Text>
      </Stack.Item>
      <Stack.Item>
        <Text variant="xLarge"> | </Text>
      </Stack.Item>
      <Stack.Item styles={{ root: { marginRight: 60 } }}>
        <Text
          variant="xLarge"
          as="h1"
          styles={{ root: { fontWeight: FontWeights.semibold } }}
        >
          Dudley
        </Text>
      </Stack.Item>
      <Stack.Item grow>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 20 }}
          styles={{ root: { paddingTop: 4 } }}
        >
          <Stack.Item>
                      <Link activeClass="active" to="home" spy smooth offset={-70}>
              <Text styles={linkStyles}>Home</Text>
                      </Link>
          </Stack.Item>
          <Stack.Item>
            <Link activeClass="active" to="services" spy smooth offset={-70}>
              <Text styles={linkStyles}>Services</Text>
            </Link>
          </Stack.Item>
          <Stack.Item>
            <Link activeClass="active" to="contact" smooth offset={-70}>
              <Text styles={linkStyles}>Contact</Text>
            </Link>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item grow={2}>
        <Icon
          iconName="Phone"
          styles={{
            root: {
              fontSize: FontSizes.xLarge,
              position: "relative",
              top: 3,
            },
          }}
        />
        <Text
          styles={{
            root: {
              marginLeft: 10,
              fontSize: FontSizes.xLarge,
            },
          }}
        >
          07974 243764
        </Text>
      </Stack.Item>
    </Stack>
  )
}

export default Header
