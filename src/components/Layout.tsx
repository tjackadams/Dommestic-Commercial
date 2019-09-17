import React from "react"
import Img from "gatsby-image"
import {
  DefaultPalette,
  loadTheme,
  Stack,
  IStackItemStyles,
} from "office-ui-fabric-react"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"
import useMedia from "use-media"
import { Element } from "react-scroll"

import { Footer, Header, MapContainer } from "./"
import { Small } from "../utilities/mediaQuery"

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

const Layout = (props: any) => {
  const isSmall = useMedia(Small)
  const headerStyles: IStackItemStyles = isSmall
    ? {
        root: {
          backgroundColor: DefaultPalette.white,
          padding: 6,
          width: "100%",
        },
      }
    : {
        root: {
          backgroundColor: DefaultPalette.white,
          padding: 6,
          position: "fixed",
          zIndex: 99999999,
          width: "100%",
        },
      }

  return (
    <Stack styles={{ root: { width: "calc(100vw - (100vw - 100%))" } }}>
      <Element name="home">
        <Stack.Item styles={headerStyles}>
          <Header />
        </Stack.Item>
        {!isSmall && (
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
        <Stack.Item>
          <Img
            fluid={props.banner}
            alt="Water in a sink flowing down the drain."
          />
        </Stack.Item>
      </Element>
      <Stack.Item>
        <Stack horizontalAlign="center">
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.white,
                maxWidth: isSmall ? 375 : 800,
                marginTop: isSmall ? 0 : 20,
                marginBottom: 40,
                paddingTop: isSmall ? 4 : 40,
                paddingBottom: isSmall ? 4 : 40,
                paddingLeft: isSmall ? 0 : "8%",
                paddingRight: isSmall ? 0 : "8%",
                boxShadow: Depths.depth4,
              },
            }}
          >
            {props.children}
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal horizontalAlign="center">
          <Stack.Item grow styles={{ root: { height: 480 } }}>
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

Layout.whyDidYouRender = true

export default Layout
