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

export class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <Element name="home">
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 14 }}
          styles={{
            root: {
              justifyContent: "center",
              minHeight: 60,
              selectors: {
                [MobileSelector]: {
                  minHeight: 40,
                },
                [TabletSelector]: {
                  justifyContent: "space-evenly",
                },
              },
            },
          }}
        >
          <Stack.Item
            grow
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
          ></Stack.Item>

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
            <Text
              styles={{
                root: {
                  fontSize: FontSizes.xLarge,
                  fontWeight: FontWeights.semibold,
                  selectors: {
                    [MobileSelector]: {
                      fontSize: FontSizes.large,
                    },
                    [TabletSelector]: {
                      fontSize: FontSizes.large,
                    },
                  },
                },
              }}
            >
              Domestic &#38; Commercial Drain Services
            </Text>
          </Stack.Item>

          <Stack.Item
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
            <Separator vertical />
          </Stack.Item>
          <Stack.Item
            styles={{
              root: {
                marginRight: 60,
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
            <Text
              variant="xLarge"
              styles={{ root: { fontWeight: FontWeights.semibold } }}
            >
              West Midlands
            </Text>
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
