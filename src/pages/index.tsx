import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Separator,
  Link,
  Overlay,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"

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
                <Link href="#services">
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
          <Stack>
            <Stack.Item>
              <Text
                as="h1"
                block
                variant="xxLargePlus"
                styles={{
                  root: {
                    fontWeight: FontWeights.bold,
                    textAlign: "center",
                  },
                }}
              >
                Why do customers recommend us?
              </Text>
              <Text
                block
                variant="xLarge"
                styles={{
                  root: { textAlign: "center" },
                }}
              >
                Excellent reputation for quality &#38; honesty.
              </Text>
              <Text
                block
                variant="xLarge"
                styles={{
                  root: { textAlign: "center", marginTop: 10 },
                }}
              >
                Fast &#38; reliable service.
              </Text>
              <Text
                block
                variant="xLarge"
                styles={{
                  root: { textAlign: "center", marginTop: 10 },
                }}
              >
                No VAT charges.
              </Text>
              <Text
                block
                variant="xLarge"
                styles={{
                  root: { textAlign: "center", marginTop: 10 },
                }}
              >
                Fully insured, upto £2 million.
              </Text>
              <Text
                block
                variant="xLarge"
                styles={{
                  root: { textAlign: "center", marginTop: 10 },
                }}
              >
                We do the dirty work, so you don't have to.
              </Text>
            </Stack.Item>
            <Stack tokens={{ childrenGap: 12 }}>
              <Separator styles={{ root: { marginTop: 20 } }} />
            </Stack>
            <Stack.Item>
              <div id="services">
                <Text
                  as="h1"
                  block
                  variant="xxLargePlus"
                  styles={{
                    root: {
                      fontWeight: FontWeights.bold,
                      textAlign: "center",
                    },
                  }}
                >
                  Our Services
                </Text>
                <Stack
                  horizontal
                  horizontalAlign="center"
                  tokens={{ childrenGap: 20 }}
                >
                  <Stack.Item>
                    <Card>
                      <Card.Item>
                        <Text>Block Drains</Text>
                      </Card.Item>
                      <Card.Section>
                        <Text>some helpful text about blocked drains</Text>
                      </Card.Section>
                    </Card>
                  </Stack.Item>
                  <Stack.Item>
                    <Card>
                      <Card.Item>
                        <Text>Block Drains</Text>
                      </Card.Item>
                      <Card.Section>
                        <Text>some helpful text about blocked drains</Text>
                      </Card.Section>
                    </Card>
                  </Stack.Item>
                </Stack>
              </div>
            </Stack.Item>
            <Stack.Item>
              <div id="contact"></div>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
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
