import React from "react"

import Img from "gatsby-image"
import { DefaultPalette, Stack } from "office-ui-fabric-react"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

import Header from "./Header"

const Layout = props => {
  return (
    <div id="home">
      <Stack>
        <Stack.Item
          styles={{
            root: {
              backgroundColor: DefaultPalette.white,
              padding: 10,
              position: "fixed",
              zIndex: 99999999,
              width: "100%",
            },
          }}
        >
          <Header />
        </Stack.Item>
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
        <Stack.Item>
          <Img fluid={props.banner} />
        </Stack.Item>
        <Stack horizontalAlign="center">
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.white,
                maxWidth: 800,
                marginTop: 20,
                marginBottom: 40,
                paddingTop: 60,
                paddingBottom: 40,
                paddingLeft: "8%",
                paddingRight: "8%",
                boxShadow: Depths.depth4,
              },
            }}
          >
            {props.children}
          </Stack.Item>
        </Stack>
      </Stack>
    </div>
  )
}

export default Layout
