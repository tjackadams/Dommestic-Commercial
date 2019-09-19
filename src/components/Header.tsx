import React from "react"
import {
  FontSizes,
  FontWeights,
  Icon,
  Stack,
  Text,
  DefaultPalette,
  Link,
} from "office-ui-fabric-react"

import useMedia from "use-media"

import { DesktopNavigation, MobileNavigation } from "./Navigation"
import { Small } from "../utilities/mediaQuery"

const Header = () => {
  const isSmall = useMedia(Small)

  return (
    <Stack
      horizontal
      horizontalAlign="center"
      verticalAlign="center"
      tokens={{ childrenGap: isSmall ? 8 : 14 }}
      styles={{ root: { minHeight: isSmall ? 40 : 60 } }}
    >
      {isSmall ? <MobileNavigation /> : <Stack.Item grow={1}> </Stack.Item>}
      <Stack.Item>
        <Text
          variant={isSmall ? "large" : "xLarge"}
          styles={{ root: { fontWeight: FontWeights.semibold } }}
        >
          Domestic &#38; Commercial Drain Services
        </Text>
      </Stack.Item>
      {!isSmall && (
        <>
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
        </>
      )}
      <Stack.Item grow>{!isSmall && <DesktopNavigation />}</Stack.Item>
      {!isSmall && (
        <>
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
        </>
      )}
    </Stack>
  )
}

Header.whyDidYouRender = true

export default Header
