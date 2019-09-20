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
  ITextStyles,
} from "office-ui-fabric-react"
import {
  Card,
  ICardStyles,
  ICardItemStyles,
  ICardSectionStyles,
} from "@uifabric/react-cards"
import { Element, scroller } from "react-scroll"

import { ContactSection, SEO, ServiceCard } from "../components"
import Layout from "../components/Layout"

import {
  withResponsiveMode,
  IWithResponsiveModeState,
  ResponsiveMode,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"

interface IAppProps extends IWithResponsiveModeState {
  data: any
}

const cardStyle: ICardStyles = {
  root: {
    maxWidth: 767,
    transition: "none",
    selectors: {
      ["@media(max-width: 479px)"]: {
        maxWidth: 335,
      },
    },
  },
}

const cardImageStyle: ICardItemStyles = {
  root: {
    width: 180,
    selectors: {
      ["@media(max-width: 479px)"]: {
        width: 335,
      },
    },
  },
}

const cardContentStyle: ICardSectionStyles = {
  root: {
    textAlign: "center",
    paddingRight: 12,
    selectors: {
      ["@media(max-width: 479px)"]: {
        textAlign: "center",
        paddingRight: 12,
        paddingLeft: 12,
        paddingBottom: 12,
      },
    },
  },
}

const cardHeaderTextStyle: ITextStyles = {
  root: {
    fontWeight: FontWeights.semibold,
    marginTop: "0.4rem",
    marginBottom: 0,
    transform: "none",
  },
}

const cardContextTextStyle: ITextStyles = {
  root: {
    fontWeight: FontWeights.semilight,
    marginBottom: 0,
    transform: "none",
  },
}

initializeIcons(undefined, { disableWarnings: true })

@withResponsiveMode
class App extends React.Component<IAppProps> {
  public render(): JSX.Element {
    const { data, responsiveMode = ResponsiveMode.xLarge } = this.props
    const isLargeDown = responsiveMode <= ResponsiveMode.large
    const isMediumDown = responsiveMode <= ResponsiveMode.medium
    const isSmallUp = responsiveMode > ResponsiveMode.small

    return (
      <Layout banner={data.drainBanner.childImageSharp.fluid}>
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
                We offer a fast &amp; efficient drainage service across the{" "}
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
                Commercial drains, our aim is to identify and resolve the issue
                on the very same day.{" "}
                <Link
                  onClick={() =>
                    scroller.scrollTo("contact", { smooth: true, offset: -70 })
                  }
                >
                  Contact us
                </Link>{" "}
                today to book our specialist drainage services.
              </Text>
            </Element>
          </Stack.Item>
          <Stack.Item>
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 40 }}
              styles={{ root: { marginTop: 40 } }}
              wrap
            >
              <Stack.Item>
                <ServiceCard
                  image={data.blockedDrains.childImageSharp.fluid}
                  imageAlt="Blocked Drain with Ladders in Dudley"
                >
                  <Text as="h3" variant="xLarge" styles={cardHeaderTextStyle}>
                    Blocked Drains
                  </Text>
                  <Text
                    as="p"
                    styles={cardContextTextStyle}
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
                </ServiceCard>
              </Stack.Item>
              <Stack.Item>
                <ServiceCard
                  image={data.commercialDrain.childImageSharp.fluid}
                  imageAlt="Commercial Drains on the Street"
                >
                  <Text as="h3" variant="xLarge" styles={cardHeaderTextStyle}>
                    Drainage
                  </Text>
                  <Text
                    as="p"
                    styles={cardContextTextStyle}
                    variant="mediumPlus"
                  >
                    Our drainage service covers both <i>Commercial Drains</i>{" "}
                    and <i>Domestic Drains</i>. We understand how important it
                    is to our customers that projects are managed effectively to
                    ensure quick and successful completion with minimal
                    disturbances for the business or residential property.
                  </Text>
                </ServiceCard>
              </Stack.Item>
              <Stack.Item>
                <ServiceCard
                  image={data.drainJetting.childImageSharp.fluid}
                  imageAlt="Man performing High Pressure Jetting in Dudley"
                >
                  <Text as="h3" variant="xLarge" styles={cardHeaderTextStyle}>
                    Drain Cleaning
                  </Text>
                  <Text
                    as="p"
                    styles={cardContextTextStyle}
                    variant="mediumPlus"
                  >
                    Most drainage problems can be solved without pulling out the
                    "big guns", but sometimes there are blockages that are so
                    stubborn, they require something special. Let us help with
                    our <i>high pressure jetting </i>service!
                  </Text>
                </ServiceCard>
              </Stack.Item>
            </Stack>
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
            <Element name="contact">
              <ContactSection />
            </Element>
          </Stack.Item>
        </Stack>
      </Layout>
    )
  }
}

export default App
