import React from "react"
import {
  CommandBar,
  DefaultPalette,
  FontSizes,
  FontWeights,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"
import { Link, scroller } from "react-scroll"

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

const MobileNavigation = () => {
  return (
    <Stack>
      <Stack.Item>
        <CommandBar
          items={[]}
          ariaLabel="Menu Button"
          overflowItems={[
            {
              key: "home",
              name: "Home",
              onClick: () =>
                scroller.scrollTo("home", {
                  smooth: true,
                  offset: -70,
                }),
              iconProps: {
                iconName: "home",
                color: DefaultPalette.tealLight,
              },
            },
            {
              key: "services",
              name: "Services",
              onClick: () =>
                scroller.scrollTo("services", {
                  smooth: true,
                  offset: -70,
                }),
              iconProps: {
                iconName: "CRMServices",
              },
            },
            {
              key: "contact",
              name: "Contact",
              onClick: () =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  offset: -70,
                }),
              iconProps: {
                iconName: "Phone",
              },
            },
          ]}
        />
      </Stack.Item>
    </Stack>
  )
}

const DesktopNavigation = () => {
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

export { MobileNavigation, DesktopNavigation }
