import React from "react"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"
import { Link } from "react-scroll"

const linkStyles: ITextStyles = {
  root: {
    color: DefaultPalette.neutralDark,
    cursor: "pointer",
    fontSize: FontSizes.large,
    fontWeight: FontWeights.semilight,
    border: "1px solid transparent",
    selectors: {
      ":hover": {
        color: DefaultPalette.tealLight,
        borderBottom: `1px solid ${DefaultPalette.tealLight}`,
      },
    },
  },
}

export class DesktopNavMenu extends React.Component {
  public render(): JSX.Element {
    return (
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
          <Link activeClass="active" to="contact" spy smooth offset={-70}>
            <Text styles={linkStyles}>Contact</Text>
          </Link>
        </Stack.Item>
      </Stack>
    )
  }
}
