import React from "react"
import { graphql } from "gatsby"
import {
  loadTheme,
  DefaultPalette,
  initializeIcons,
  Stack,
  Text,
  FontWeights,
} from "office-ui-fabric-react"
import {
  IWithResponsiveModeState,
  withResponsiveMode,
  ResponsiveMode,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"

import {
  MobileLayout,
  TabletLayout,
  DesktopLayout,
} from "../components/Layout/index"
import SEO from "../components/SEO"

import { HorizontalCard, VerticalCard, Services } from "../components"

import "./index.css"

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

initializeIcons(undefined, { disableWarnings: true })

interface IAppProps extends IWithResponsiveModeState {
  data: any
}

@withResponsiveMode
class App extends React.Component<IAppProps> {
  public render(): JSX.Element {
    console.log(this.props)
    const { data, responsiveMode = ResponsiveMode.small } = this.props

    const isMobile = responsiveMode <= ResponsiveMode.small
    const isTablet =
      responsiveMode <= ResponsiveMode.large &&
      responsiveMode > ResponsiveMode.small
    const isDesktop = responsiveMode > ResponsiveMode.large

    return (
      <>
        <SEO />
        {isMobile && (
          <MobileLayout banner={data.drainBanner.childImageSharp.fluid}>
            <Stack>
              <Stack.Item>
                <Services />
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
                    <VerticalCard
                      image={data.blockedDrains.childImageSharp.fluid}
                      imageAlt="Blocked Drain with Ladders in Dudley"
                      title={
                        <Text
                          as="h3"
                          variant="xLarge"
                          styles={serviceHeaderStyle}
                        >
                          Blocked Drains
                        </Text>
                      }
                    >
                      <Text
                        as="p"
                        variant="mediumPlus"
                        styles={serviceContentStyle}
                      >
                        Domestic &#38; Commercial Drain Services provide a
                        bespoke service for clearing and unblocking all types of
                        blocked drains. This includes, but is not limited to{" "}
                        <i>
                          Blocked Drains, Blocked Sewers, Blocked Toilets,
                          Blocked Sinks, Blocked Basins and Blocked Baths.
                        </i>
                      </Text>
                    </VerticalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <VerticalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                      title={
                        <Text
                          as="h3"
                          variant="xLarge"
                          styles={serviceHeaderStyle}
                        >
                          Drainage
                        </Text>
                      }
                    >
                      <Text
                        as="p"
                        variant="mediumPlus"
                        styles={serviceContentStyle}
                      >
                        Our drainage service covers both{" "}
                        <i>Commercial Drains</i> and <i>Domestic Drains</i>. We
                        understand how important it is to our customers that
                        projects are managed effectively to ensure quick and
                        successful completion with minimal disturbances for the
                        business or residential property.
                      </Text>
                    </VerticalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <VerticalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                      title={
                        <Text
                          as="h3"
                          variant="xLarge"
                          styles={serviceHeaderStyle}
                        >
                          Drain Cleaning
                        </Text>
                      }
                    >
                      <Text
                        as="p"
                        variant="mediumPlus"
                        styles={serviceContentStyle}
                      >
                        Most drainage problems can be solved without pulling out
                        the "big guns", but sometimes there are blockages that
                        are so stubborn, they require something special. Let us
                        help with our <i>high pressure jetting </i>service!
                      </Text>
                    </VerticalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </MobileLayout>
        )}
        {isTablet && (
          <TabletLayout banner={data.drainBanner.childImageSharp.fluid}>
            <Stack>
              <Stack.Item>
                <Services />
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
                    <HorizontalCard
                      image={data.blockedDrains.childImageSharp.fluid}
                      imageAlt="Blocked Drain with Ladders in Dudley"
                    >
                      {this.getServiceOne()}
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                    >
                      {this.getServiceTwo()}
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                    >
                      {this.getServiceThree()}
                    </HorizontalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </TabletLayout>
        )}
        {isDesktop && (
          <DesktopLayout banner={data.drainBanner.childImageSharp.fluid}>
            <Stack>
              <Stack.Item>
                <Services />
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
                    <HorizontalCard
                      image={data.blockedDrains.childImageSharp.fluid}
                      imageAlt="Blocked Drain with Ladders in Dudley"
                    >
                      {this.getServiceOne()}
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                    >
                      {this.getServiceTwo()}
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                    >
                      {this.getServiceThree()}
                    </HorizontalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </DesktopLayout>
        )}
      </>
    )
  }

  private getServiceOne = () => {
    return (
      <>
        <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
          Blocked Drains
        </Text>
        <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
          Domestic &#38; Commercial Drain Services provide a bespoke service for
          clearing and unblocking all types of blocked drains. This includes,
          but is not limited to{" "}
          <i>
            Blocked Drains, Blocked Sewers, Blocked Toilets, Blocked Sinks,
            Blocked Basins and Blocked Baths.
          </i>
        </Text>
      </>
    )
  }

  private getServiceTwo = () => {
    return (
      <>
        <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
          Drainage
        </Text>
        <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
          Our drainage service covers both <i>Commercial Drains</i> and{" "}
          <i>Domestic Drains</i>. We understand how important it is to our
          customers that projects are managed effectively to ensure quick and
          successful completion with minimal disturbances for the business or
          residential property.
        </Text>
      </>
    )
  }

  private getServiceThree = () => {
    return (
      <>
        <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
          Drain Cleaning
        </Text>
        <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
          Most drainage problems can be solved without pulling out the "big
          guns", but sometimes there are blockages that are so stubborn, they
          require something special. Let us help with our{" "}
          <i>high pressure jetting </i>service!
        </Text>
      </>
    )
  }
}

const serviceHeaderStyle = {
  root: {
    fontWeight: FontWeights.semibold,
    marginTop: "0.4rem",
    marginBottom: 0,
  },
}

const serviceContentStyle = {
  root: {
    fontWeight: FontWeights.semilight,
    marginBottom: 0,
  },
}

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
