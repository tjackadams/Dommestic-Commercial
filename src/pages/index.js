import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Link,
  Separator,
  Stack,
  Text,
  TextField,
  PrimaryButton,
  Icon,
} from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"
import { initializeIcons } from "@uifabric/icons"
import { Element } from "react-scroll"
import useMedia from "use-media"

import { ContactForm } from "../components"
import Layout from "../components/Layout"
import { Small } from "../utilities/mediaQuery"

import "./index.css"

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
      <Stack>
        <Stack.Item>
          <Element name="services">
            <Text
              as="h1"
              block
              variant="xxLargePlus"
              styles={{
                root: {
                  fontWeight: FontWeights.semibold,
                  fontSize: FontSizes.xxLargePlus,
                  textAlign: "center",
                },
              }}
            >
              Our Services
            </Text>
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 40 }}
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
                  <Img fluid={props.data.blockedDrains.childImageSharp.fluid} />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h1"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBottom: 0,
                      },
                    }}
                  >
                    Blockages
                  </Text>
                  <Text
                    as="p"
                    styles={{ root: { fontWeight: FontWeights.semilight } }}
                    variant="medium"
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
                  />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h1"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBottom: 0,
                      },
                    }}
                  >
                    Drainage
                  </Text>
                  <Text
                    as="p"
                    styles={{ root: { fontWeight: FontWeights.semilight } }}
                    variant="medium"
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
                  <Img fluid={props.data.drainJetting.childImageSharp.fluid} />
                </Card.Item>
                <Card.Section grow styles={cardSectionStyle}>
                  <Text
                    as="h1"
                    variant="xLarge"
                    styles={{
                      root: {
                        fontWeight: FontWeights.semibold,
                        marginBottom: 0,
                      },
                    }}
                  >
                    Drain Cleaning
                  </Text>
                  <Text
                    as="p"
                    styles={{ root: { fontWeight: FontWeights.semilight } }}
                    variant="medium"
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
        <Stack tokens={{ childrenGap: 12 }}>
          <Separator styles={{ root: { marginTop: 20 } }} />
        </Stack>
        <Stack.Item
          styles={{
            root: { textAlign: "center", marginLeft: 20, marginRight: 20 },
          }}
        >
          <Text
            as="h1"
            block
            variant="xxLargePlus"
            styles={{
              root: {
                fontWeight: FontWeights.semibold,
                fontSize: FontSizes.xxLargePlus,
              },
            }}
          >
            Why do our customers recommend us?
          </Text>
          <Text
            block
            variant="xLarge"
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
            variant="xLarge"
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
            variant="xLarge"
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
            variant="xLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            Fully insured, upto £2 million.
          </Text>
          <Text
            block
            variant="xLarge"
            styles={{
              root: {
                fontWeight: FontWeights.regular,
              },
            }}
          >
            We do the dirty work, so you don't have to.
          </Text>
        </Stack.Item>
        <Stack tokens={{ childrenGap: 12 }}>
          <Separator styles={{ root: { marginTop: 20 } }} />
        </Stack>
        <Stack.Item>
          <Element name="contact">
            <Stack
              horizontal={!isSmall}
              horizontalAlign={isSmall ? "center" : "space-between"}
              tokens={{ childrenGap: 40 }}
            >
              <Stack.Item
                styles={{ root: { marginLeft: 20, marginRight: 20 } }}
              >
                <Text as="h2" block variant="xxLarge">
                  Areas we Service
                </Text>
                <Text as="p" block variant="mediumPlus">
                  Dudley
                  <br />
                  Wolverhampton
                  <br />
                  Cradley Heath
                  <br />
                  Halesowen
                  <br />
                  Netherton
                  <br />
                  Stourbridge
                  <br />
                  Tipton
                </Text>
                <Text as="p" block variant="mediumPlus">
                  Can't see your area listed above?
                  <br />
                  We may still be able to help. Please do not hesitate to
                  contact us with your enquiry.
                </Text>
                <Text as="h2" block variant="xxLarge">
                  Contact Information
                </Text>
                <Text
                  as="h3"
                  block
                  variant="mediumPlus"
                  styles={{ root: { fontWeight: FontWeights.semibold } }}
                >
                  Domestic &#38; Commercial Drain Services
                </Text>
                <Text as="p" block variant="mediumPlus">
                  67 Merryfield Road
                  <br />
                  Dudley
                  <br />
                  West Midlands
                  <br />
                  DY1 2ND
                  <br />
                </Text>
                <div style={{ paddingTop: 4 }}>
                  <Icon
                    iconName="phone"
                    styles={{ root: { position: "relative", top: 2 } }}
                  />
                  <Text
                    variant="mediumPlus"
                    styles={{ root: { marginLeft: 4 } }}
                  >
                    01384 357446
                  </Text>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <Icon
                    iconName="phone"
                    styles={{ root: { position: "relative", top: 2 } }}
                  />
                  <Text
                    variant="mediumPlus"
                    styles={{ root: { marginLeft: 4 } }}
                  >
                    07974 243764
                  </Text>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <Icon
                    iconName="mail"
                    styles={{ root: { position: "relative", top: 2 } }}
                  />
                  <Link as="a" href="mailto:stevetomkins53@gmail.com">
                    <Text
                      variant="mediumPlus"
                      styles={{ root: { marginLeft: 4 } }}
                    >
                      stevetomkins53@gmail.com
                    </Text>
                  </Link>
                </div>
              </Stack.Item>
              <Stack.Item>
                <Text as="h2" block variant="xxLarge">
                  Contact us
                </Text>
                <ContactForm />
              </Stack.Item>
            </Stack>
          </Element>
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
    blockedDrains: file(relativePath: { eq: "blocked-drains.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    commercialDrain: file(relativePath: { eq: "commercial-drain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    drainJetting: file(relativePath: { eq: "drain-jetting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
