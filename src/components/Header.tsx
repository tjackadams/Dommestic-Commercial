import React from "react"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Link,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"

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

const Header = () => {
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
            <Link href="/">
              <Text styles={linkStyles}>Home</Text>
            </Link>
          </Stack.Item>
          <Stack.Item>
            <Link href="#services">
              <Text styles={linkStyles}>Services</Text>
            </Link>
          </Stack.Item>
          <Stack.Item>
            <Link href="/">
              <Text styles={linkStyles}>Contact</Text>
            </Link>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item grow={2}></Stack.Item>
    </Stack>
  )
}

export default Header
