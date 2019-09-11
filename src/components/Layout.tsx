import React from "react"

import Img from "gatsby-image"
import { DefaultPalette, Stack } from "office-ui-fabric-react"

import Header from "./Header"

const Layout = props => {
  return (
    <Stack>
      <Stack.Item
        styles={{
          root: { backgroundColor: DefaultPalette.white, padding: 10 },
        }}
      >
        <Header />
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
              paddingLeft: "16%",
              paddingRight: "16%",
            },
          }}
        >
          {props.children}
        </Stack.Item>
      </Stack>
    </Stack>
  )
}

export default Layout
