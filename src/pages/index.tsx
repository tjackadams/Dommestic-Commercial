import React from "react"
import { graphql } from "gatsby"
import {
  loadTheme,
  DefaultPalette,
  initializeIcons,
  Stack,
  Separator,
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

import {
  AreasWeCover,
  ContactForm,
  ContactInformation,
  HorizontalCard,
  VerticalCard,
  Recommendation,
  Services,
  ServiceOneContent,
  ServiceOneHeader,
  ServiceTwoContent,
  ServiceTwoHeader,
  ServiceThreeContent,
  ServiceThreeHeader,
} from "../components"

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
                      title={<ServiceOneHeader />}
                    >
                      <ServiceOneContent />
                    </VerticalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <VerticalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                      title={<ServiceTwoHeader />}
                    >
                      <ServiceTwoContent />
                    </VerticalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <VerticalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                      title={<ServiceThreeHeader />}
                    >
                      <ServiceThreeContent />
                    </VerticalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item styles={{ root: { textAlign: "center" } }}>
                <Recommendation />
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack horizontalAlign="center" tokens={{ childrenGap: 40 }}>
                  <Stack.Item styles={{ root: { textAlign: "center" } }}>
                    <AreasWeCover />
                  </Stack.Item>
                  <Stack.Item styles={{ root: { textAlign: "center" } }}>
                    <ContactInformation />
                  </Stack.Item>
                  <Stack.Item>
                    <ContactForm />
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
                      <ServiceOneHeader />
                      <ServiceOneContent />
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                    >
                      <ServiceTwoHeader />
                      <ServiceTwoContent />
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                    >
                      <ServiceThreeHeader />
                      <ServiceThreeContent />
                    </HorizontalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item styles={{ root: { textAlign: "center" } }}>
                <Recommendation />
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack
                  horizontal
                  horizontalAlign="space-between"
                  tokens={{ childrenGap: 40 }}
                >
                  <Stack.Item>
                    <Stack>
                      <Stack.Item>
                        <AreasWeCover />
                      </Stack.Item>
                      <Stack.Item>
                        <ContactInformation />
                      </Stack.Item>
                    </Stack>
                  </Stack.Item>
                  <Stack.Item>
                    <ContactForm />
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
                      <ServiceOneHeader />
                      <ServiceOneContent />
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.commercialDrain.childImageSharp.fluid}
                      imageAlt="Commercial Drains on the Street"
                    >
                      <ServiceTwoHeader />
                      <ServiceTwoContent />
                    </HorizontalCard>
                  </Stack.Item>
                  <Stack.Item>
                    <HorizontalCard
                      image={data.drainJetting.childImageSharp.fluid}
                      imageAlt="Man performing High Pressure Jetting in Dudley"
                    >
                      <ServiceThreeHeader />
                      <ServiceThreeContent />
                    </HorizontalCard>
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item styles={{ root: { textAlign: "center" } }}>
                <Recommendation />
              </Stack.Item>
              <Stack.Item>
                <Stack tokens={{ childrenGap: 12 }}>
                  <Separator styles={{ root: { marginTop: 20 } }} />
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <Stack
                  horizontal
                  horizontalAlign="space-between"
                  tokens={{ childrenGap: 40 }}
                >
                  <Stack.Item>
                    <Stack>
                      <Stack.Item>
                        <AreasWeCover />
                      </Stack.Item>
                      <Stack.Item>
                        <ContactInformation />
                      </Stack.Item>
                    </Stack>
                  </Stack.Item>
                  <Stack.Item>
                    <ContactForm />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </DesktopLayout>
        )}
      </>
    )
  }
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
