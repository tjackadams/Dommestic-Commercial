import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FontWeights,
  initializeIcons,
  Link,
  Separator,
  Stack,
  Text,
} from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"
import { Element, scroller } from "react-scroll"
import useMedia from "use-media"

import { ContactSection, SEO } from "../components"
import Layout from "../components/Layout"
import { Small } from "../utilities/mediaQuery"

import "./index.css"

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render")
  whyDidYouRender(React)
}

initializeIcons()

const App = props => {
  const isSmall = useMedia(Small)

  const cardSectionStyle = isSmall
    ? {
        root: {
          textAlign: "center",
          paddingRight: 12,
          paddingLeft: 12,
        },
      }
    : { root: { textAlign: "center", paddingRight: 12 } }

  return (
    <Layout banner={props.data.drainBanner.childImageSharp.fluid}>
      <SEO />
      <Stack>
        <Stack.Item>
          <Element name="services">
            <Text
              as="h2"
              block
              variant="superLarge"
              styles={{
                root: {
                  fontWeight: FontWeights.semibold,
                  textAlign: "center",
                },
              }}
            >
              Our Services
            </Text>
            <Text
              as="p"
              block
              variant="xLarge"
              styles={{
                root: {
                  fontWeight: FontWeights.semilight,
                  textAlign: "center",
                },
              }}
            >
              We offer a fast & efficient drainage service across the{" "}
              <Link
                onClick={() =>
                  scroller.scrollTo("areas-we-cover", {
                    smooth: true,
                    offset: -70,
                  })
                }
              >
                West Midlands
              </Link>{" "}
              to help you when you need it most. Whether it be for Domestic or
              Commercial drains, our aim is to identify and resolve the issue on
              the very same day.{" "}
              <Link
                onClick={() =>
                  scroller.scrollTo("contact", { smooth: true, offset: -70 })
                }
              >
                Contact us
              </Link>{" "}
              today to book our specialist drainage services.
            </Text>
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 40 }}
              styles={{ root: { marginTop: 40 } }}
              wrap
            >
              <Card
                compact={!isSmall}
                tokens={{ maxWidth: isSmall ? 335 : 767 }}
              >
                <Card.Item
                  fill
                  styles={{ root: { width: isSmall ? 335 : 180 } }}
                >
                  <Img
                    fluid={props.data.blockedDrains.childImageSharp.fluid}
                    alt="Blocked Drain with Ladders in Dudley"
                  />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h3"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBlockStart: "0.50em",
                        marginBlockEnd: "0",
                      },
                    }}
                  >
                    Blocked Drains
                  </Text>
                  <Text
                    as="p"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semilight,
                        marginBlockEnd: "unset",
                      },
                    }}
                    variant="mediumPlus"
                  >
                    Domestic &#38; Commercial Drain Services provide a bespoke
                    service for clearing and unblocking all types of blocked
                    drains. This includes, but is not limited to{" "}
                    <i>
                      Blocked Drains, Blocked Sewers, Blocked Toilets, Blocked
                      Sinks, Blocked Basins and Blocked Baths.
                    </i>
                  </Text>
                </Card.Section>
              </Card>

              <Card
                compact={!isSmall}
                tokens={{ maxWidth: isSmall ? 335 : 767 }}
              >
                <Card.Item
                  fill
                  styles={{ root: { width: isSmall ? 335 : 180 } }}
                >
                  <Img
                    fluid={props.data.commercialDrain.childImageSharp.fluid}
                    alt="Commercial Drains on the Street"
                  />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h3"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBlockStart: "0.50em",
                        marginBlockEnd: "0",
                      },
                    }}
                  >
                    Drainage
                  </Text>
                  <Text
                    as="p"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semilight,
                        marginBlockEnd: "unset",
                      },
                    }}
                    variant="mediumPlus"
                  >
                    Our drainage service covers both <i>Commercial Drains</i>{" "}
                    and <i>Domestic Drains</i>. We understand how important it
                    is to our customers that projects are managed effectively to
                    ensure quick and successful completion with minimal
                    disturbances for the business or residential property.
                  </Text>
                </Card.Section>
              </Card>

              <Card
                compact={!isSmall}
                tokens={{ maxWidth: isSmall ? 335 : 767 }}
              >
                <Card.Item
                  fill
                  styles={{ root: { width: isSmall ? 335 : 180 } }}
                >
                  <Img
                    fluid={props.data.drainJetting.childImageSharp.fluid}
                    alt="Man performing High Pressure Jetting in Dudley"
                  />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h3"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBlockStart: "0.50em",
                        marginBlockEnd: "0",
                      },
                    }}
                  >
                    Drain Cleaning
                  </Text>
                  <Text
                    as="p"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semilight,
                        marginBlockEnd: "unset",
                      },
                    }}
                    variant="mediumPlus"
                  >
                    Most drainage problems can be solved without pulling out the
                    "big guns", but sometimes there are blockages that are so
                    stubborn, they require something special. Let us help with
                    our <i>high pressure jetting </i>service!
                  </Text>
                </Card.Section>
              </Card>
            </Stack>
          </Element>
        </Stack.Item>
        <Stack.Item>
          <Stack tokens={{ childrenGap: 12 }}>
            <Separator styles={{ root: { marginTop: 20 } }} />
          </Stack>
        </Stack.Item>
        <Stack.Item
          styles={{
            root: {
              textAlign: "center",
              marginLeft: 20,
              marginRight: 20,
              animationName: "none !important",
              animationDuration: "unset !important",
              animationTimingFunction: "unset !important",
              animationFillMode: "none !important",
            },
          }}
        >
          <Text
            as="h2"
            block
            variant="superLarge"
            styles={{
              root: {
                fontWeight: FontWeights.semibold,
              },
            }}
          >
            Why do our customers recommend us?
          </Text>
          <Text
            block
            variant="xxLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            Excellent reputation for quality &#38; honesty.
          </Text>
          <Text
            block
            variant="xxLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            Fast &#38; reliable service.
          </Text>
          <Text
            block
            variant="xxLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            No VAT charges.
          </Text>
          <Text
            block
            variant="xxLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            Fully insured, up to £2 million.
          </Text>
          <Text
            block
            variant="xxLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            We do the dirty work, so you don't have to.
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Stack tokens={{ childrenGap: 12 }}>
            <Separator styles={{ root: { marginTop: 20 } }} />
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <ContactSection isSmall={isSmall} />
        </Stack.Item>
      </Stack>
    </Layout>
  )
}

App.whyDidYouRender = true

export default App

export const query = graphql`
  query {
    drainBanner: file(relativePath: { eq: "drain-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blockedDrains: file(relativePath: { eq: "blocked-drains.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    commercialDrain: file(relativePath: { eq: "commercial-drain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    drainJetting: file(relativePath: { eq: "drain-jetting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
