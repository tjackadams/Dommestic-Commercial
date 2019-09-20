import React from "react"
import {
  FontSizes,
  FontWeights,
  Stack,
  Icon,
  Text,
  DefaultPalette,
  Link,
  IStackStyles,
  IStackTokens,
} from "office-ui-fabric-react"

import { DesktopNavigation, MobileNavigation } from "./Navigation"
import {
  IWithResponsiveModeState,
  withResponsiveMode,
  ResponsiveMode,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"

interface IHeaderProps extends IWithResponsiveModeState {}

const headerContainerStyle: IStackStyles = {
  root: {
    minHeight: 60,
    selectors: {
      ["@media(max-width: 479px)"]: {
        minHeight: 40,
      },
    },
  },
}

@withResponsiveMode
class Header extends React.PureComponent<IHeaderProps> {
  public render(): JSX.Element {
    const { responsiveMode = ResponsiveMode.xLarge } = this.props

    const isLargeDown = responsiveMode <= ResponsiveMode.large
    const isLargeUp = responsiveMode > ResponsiveMode.large
    const isMediumDown = responsiveMode <= ResponsiveMode.medium
    const isMediumUp = responsiveMode > ResponsiveMode.medium

    const headerContainerTokens: IStackTokens = {
      childrenGap: isMediumDown ? 8 : 14,
    }

    return (
      <Stack
        horizontal
        horizontalAlign="center"
        verticalAlign="center"
        tokens={headerContainerTokens}
        styles={headerContainerStyle}
      >
        {isMediumDown ? (
          <MobileNavigation />
        ) : (
          <Stack.Item grow={1}> </Stack.Item>
        )}
        <Stack.Item>
          <Text
            variant={isMediumDown ? "large" : "xLarge"}
            styles={{ root: { fontWeight: FontWeights.semibold } }}
          >
            Domestic &#38; Commercial Drain Services
          </Text>
        </Stack.Item>
        {isLargeUp && (
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
        <Stack.Item grow>{isMediumUp && <DesktopNavigation />}</Stack.Item>
        {!isLargeDown && (
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
}

export default Header
