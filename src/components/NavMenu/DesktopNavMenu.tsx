import React from "react"
import {
  FontWeights,
  Stack,
  Text,
  mergeStyleSets,
  getTheme,
} from "@fluentui/react"
import { Link } from "react-scroll"

interface IDesktopNavClassNames {
  menuLink: string
  menuContainer: string
}

const getClassNames = (): IDesktopNavClassNames => {
  const theme = getTheme()
  return mergeStyleSets({
    menuLink: {
      color: theme.palette.neutralDark,
      cursor: "pointer",
      fontWeight: FontWeights.semilight,
      border: "1px solid transparent",
      selectors: {
        ":hover": {
          color: theme.palette.tealLight,
          borderBottom: `1px solid ${theme.palette.tealLight}`,
        },
      },
    },
    menuContainer: {
      paddingTop: 4,
    },
  })
}

export class DesktopNavMenu extends React.Component {
  public render(): JSX.Element {
    const { menuContainer, menuLink } = getClassNames()
    return (
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: 20 }}
        className={menuContainer}
      >
        <Stack.Item>
          <Link activeClass="active" to="home" spy smooth offset={-70}>
            <Text variant="large" className={menuLink}>
              Home
            </Text>
          </Link>
        </Stack.Item>
        <Stack.Item>
          <Link activeClass="active" to="services" spy smooth offset={-70}>
            <Text variant="large" className={menuLink}>
              Services
            </Text>
          </Link>
        </Stack.Item>
        <Stack.Item>
          <Link activeClass="active" to="contact" spy smooth offset={-70}>
            <Text variant="large" className={menuLink}>
              Contact
            </Text>
          </Link>
        </Stack.Item>
      </Stack>
    )
  }
}
