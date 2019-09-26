import React from "react"
import {
  Stack,
  Text,
  FontWeights,
  Separator,
  FontSizes,
  Link,
  DefaultPalette,
  Icon,
} from "office-ui-fabric-react"
import { Element } from "react-scroll"

import { DesktopNavMenu, MobileNavMenu } from "../"
import { MobileSelector, TabletSelector } from "../../styling"
import { getClassNames } from "./Header.styles"

export class Header extends React.Component {
  public render(): JSX.Element {
    let {
      headerWrapper,
      headerHideMobile,
      headerTitle,
      headerSubtitle,
      headerSubtitleContainer,
    } = getClassNames()

    return (
      <Element name="home">
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 14 }}
          className={headerWrapper}
        >
          <Stack.Item grow className={headerHideMobile}></Stack.Item>

          <Stack.Item
            styles={{
              root: {
                display: "none",
                selectors: {
                  [MobileSelector]: {
                    display: "block",
                  },
                },
              },
            }}
          >
            <MobileNavMenu />
          </Stack.Item>

          <Stack.Item>
            <Text className={headerTitle}>
              Domestic &#38; Commercial Drain Services
            </Text>
          </Stack.Item>

          <Stack.Item className={headerHideMobile}>
            <Separator vertical />
          </Stack.Item>
          <Stack.Item className={headerSubtitleContainer}>
            <Text className={headerSubtitle}>West Midlands</Text>
          </Stack.Item>

          <Stack.Item
            styles={{
              root: {
                selectors: {
                  [MobileSelector]: {
                    display: "none",
                  },
                },
              },
            }}
          >
            <DesktopNavMenu />
          </Stack.Item>

          <Stack.Item
            grow={2}
            styles={{
              root: {
                selectors: {
                  [MobileSelector]: {
                    display: "none",
                  },
                  [TabletSelector]: {
                    display: "none",
                  },
                },
              },
            }}
          >
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 20 }}
            >
              <Stack.Item>
                <Link
                  styles={{
                    root: {
                      color: "inherit",
                      selectors: {
                        ":hover": {
                          textDecoration: "none",
                          color: DefaultPalette.tealLight,
                        },
                      },
                    },
                  }}
                  href="tel:07974243764"
                >
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
                </Link>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Element>
    )
  }
}
