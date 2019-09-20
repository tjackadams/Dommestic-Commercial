import React from "react"
import Img from "gatsby-image"
import {
  DefaultPalette,
  FontWeights,
  loadTheme,
  Stack,
  IStackItemStyles,
  Text,
} from "office-ui-fabric-react"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"
import { Element } from "react-scroll"

import { Footer, Header, MapContainer } from "./"
import {
  withResponsiveMode,
  IWithResponsiveModeState,
  ResponsiveMode,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

interface ILayoutProps extends IWithResponsiveModeState {
  banner: any
}

const mainContentContainer: IStackItemStyles = {
  root: {
    backgroundColor: DefaultPalette.white,
    maxWidth: 800,
    marginTop: 20,
    marginBottom: 40,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: "8%",
    paddingRight: "8%",
    boxShadow: Depths.depth4,
    selectors: {
      ["@media(max-width: 479px)"]: {
        maxWidth: 375,
        marginTop: 0,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
}

const headerContentStyle: IStackItemStyles = {
  root: {
    backgroundColor: DefaultPalette.white,
    padding: 6,
    position: "fixed",
    zIndex: 99999999,
    width: "100%",
    selectors: {
      ["@media(max-width: 479px)"]: {
        backgroundColor: DefaultPalette.white,
        zIndex: "unset",
        position: "unset",
      },
    },
  },
}

@withResponsiveMode
class Layout extends React.PureComponent<ILayoutProps> {
  public render(): JSX.Element {
    const { banner, responsiveMode = ResponsiveMode.xLarge } = this.props
    const isSmallUp = responsiveMode > ResponsiveMode.small

    return (
      <Stack styles={{ root: { width: "calc(100vw - (100vw - 100%))" } }}>
        <Element name="home">
          <Stack.Item styles={headerContentStyle}>
            <Header />
          </Stack.Item>
          {isSmallUp && (
            <Stack.Item
              styles={{
                root: {
                  backgroundColor: DefaultPalette.white,
                  height: 80,
                },
              }}
            >
              {" "}
            </Stack.Item>
          )}
          <Stack.Item styles={{ root: { position: "relative" } }}>
            <Img
              fluid={banner}
              alt="Water in a sink flowing down the drain."
              style={{ filter: "brightness(65%) saturate(135%)" }}
            />
            {isSmallUp && (
              <Text
                as="h1"
                variant="xxLarge"
                styles={{
                  root: {
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    transform: "translate(-60%, -70%)",
                    color: DefaultPalette.white,
                    fontWeight: FontWeights.semibold,
                  },
                }}
              >
                Providing Domestic &amp; Commercial Drain Services
                <Text
                  block
                  variant="xLarge"
                  styles={{
                    root: {
                      color: DefaultPalette.white,
                      fontWeight: FontWeights.semilight,
                    },
                  }}
                >
                  Across Dudley &amp; the West Midlands
                </Text>
              </Text>
            )}
          </Stack.Item>
        </Element>
        <Stack.Item>
          <Stack horizontalAlign="center">
            <Stack.Item styles={mainContentContainer}>
              {this.props.children}
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack
            horizontal
            horizontalAlign="center"
            styles={{ root: { width: "100%" } }}
          >
            <Stack.Item styles={{ root: { height: 480, width: "100%" } }}>
              <MapContainer />
            </Stack.Item>
          </Stack>
          <Stack
            styles={{
              root: {
                backgroundColor: DefaultPalette.neutralPrimary,
                color: DefaultPalette.white,
              },
            }}
          >
            <Footer />
          </Stack>
        </Stack.Item>
      </Stack>
    )
  }
}

export default Layout
