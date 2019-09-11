import React from "react"
import { graphql } from "gatsby"
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

import Layout from "../components/Layout"

import "./index.css"

const App = props => {
  return (
    <Layout banner={props.data.drainBanner.childImageSharp.fluid} >
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
    </Layout>
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
