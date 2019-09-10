import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Link,
  Overlay,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"

import "./index.css"

const linkStyles: ITextStyles = {
  root: {
    color: DefaultPalette.neutralDark,
    cursor: "pointer",
    fontSize: FontSizes.large,
    fontWeight: FontWeights.semilight,
    border: "1px solid transparent",
    selectors: {
      ":hover": {
        color: DefaultPalette.neutralPrimaryAlt,
        borderBottom: `1px solid ${DefaultPalette.neutralPrimaryAlt}`,
      },
    },
  },
}

const App = props => {
  console.log("props: ", props)
  return (
    <Stack>
      <Stack.Item
        styles={{
          root: { backgroundColor: DefaultPalette.white, padding: 10 },
        }}
      >
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: 14 }}
          styles={{ root: { minHeight: 60 } }}
        >
          <Stack.Item grow={1}> </Stack.Item>
          <Stack.Item>
            <Text
              variant="xLarge"
              as="h1"
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
              as="h1"
              styles={{ root: { fontWeight: FontWeights.semibold } }}
            >
              Dudley
            </Text>
          </Stack.Item>
          <Stack.Item grow>
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: 20 }}
              styles={{ root: { paddingTop: 4 } }}
            >
              <Stack.Item>
                <Link href="/">
                  <Text styles={linkStyles}>Home</Text>
                </Link>
              </Stack.Item>
              <Stack.Item>
                <Link href="/">
                  <Text styles={linkStyles}>Services</Text>
                </Link>
              </Stack.Item>
              <Stack.Item>
                <Link href="/">
                  <Text styles={linkStyles}>Contact</Text>
                </Link>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={2}></Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Img fluid={props.data.drainBanner.childImageSharp.fluid} />
        <Overlay>
          <Text>overlay</Text>
        </Overlay>
      </Stack.Item>
      <Stack.Item
        styles={{
          root: {
            backgroundColor: DefaultPalette.white,
            maxWidth: 800,
            marginTop: 20,
          },
        }}
      ></Stack.Item>
    </Stack>
  )
}

export default App

export const query = graphql`
  query {
    drainBanner: file(relativePath: { eq: "drain-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
