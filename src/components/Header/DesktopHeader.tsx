import React from "react"
import {
  Stack,
  FontWeights,
  Text,
  Link,
  DefaultPalette,
  Icon,
  FontSizes,
} from "office-ui-fabric-react"
import { Element } from "react-scroll"

import { DesktopNavigation } from "../Navigation"

export class DesktopHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Element name="home">
        <Stack
          horizontal
          horizontalAlign="center"
          verticalAlign="center"
          tokens={{ childrenGap: 14 }}
          styles={{ root: { minHeight: 60 } }}
        >
          <Stack.Item grow> </Stack.Item>
          <Stack.Item>
            <Text
              variant="xLarge"
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
              styles={{ root: { fontWeight: FontWeights.semibold } }}
            >
              West Midlands
            </Text>
          </Stack.Item>
          <Stack.Item>
            <DesktopNavigation />
          </Stack.Item>
          <Stack.Item grow={2}>
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
