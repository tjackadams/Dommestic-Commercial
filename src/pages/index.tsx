import React from "react"
import { graphql } from "gatsby"
import {
  DefaultPalette,
  loadTheme,
  initializeIcons,
  Stack,
  Separator,
  mergeStyles,
} from "office-ui-fabric-react"

import {
  Layout,
  SEO,
  Services,
  ServiceCard,
  ServiceOneHeader,
  ServiceOneContent,
  ServiceTwoHeader,
  ServiceTwoContent,
  ServiceThreeHeader,
  ServiceThreeContent,
  Recommendation,
  AreasWeCover,
  ContactInformation,
  ContactForm,
} from "../components"

import { MobileSelector } from "../styling"

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

initializeIcons(undefined, { disableWarnings: true })

mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#___gatsby)": {
      margin: 0,
      padding: 0,
      height: "100vh",
      backgroundColor: DefaultPalette.neutralLight,
    },
  },
})

class App extends React.Component<any> {
  public render(): JSX.Element {
    const { data } = this.props

    return (
      <Layout bannerImage={data.drainBanner.childImageSharp.fluid}>
        <SEO />
        <Stack>
          <Services />
          <Stack.Item>
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 40 }}
              styles={{ root: { marginTop: 40 } }}
              wrap
            >
              <ServiceCard
                image={data.blockedDrains.childImageSharp.fluid}
                imageAlt="Blocked Drain with Ladders in Dudley"
                title={<ServiceOneHeader />}
              >
                <ServiceOneContent />
              </ServiceCard>

              <ServiceCard
                image={data.commercialDrain.childImageSharp.fluid}
                imageAlt="Commercial Drains on the Street"
                title={<ServiceTwoHeader />}
              >
                <ServiceTwoContent />
              </ServiceCard>

              <ServiceCard
                image={data.drainJetting.childImageSharp.fluid}
                imageAlt="Man performing High Pressure Jetting in Dudley"
                title={<ServiceThreeHeader />}
              >
                <ServiceThreeContent />
              </ServiceCard>
            </Stack>
          </Stack.Item>

          <Stack tokens={{ childrenGap: 12 }}>
            <Separator styles={{ root: { marginTop: 20 } }} />
          </Stack>

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
              styles={{
                root: {
                  selectors: {
                    [MobileSelector]: {
                      flexDirection: "column",
                      alignItems: "center",
                    },
                  },
                },
              }}
            >
              <Stack.Item>
                <Stack>
                  <Stack.Item
                    styles={{
                      root: {
                        selectors: {
                          [MobileSelector]: { textAlign: "center" },
                        },
                      },
                    }}
                  >
                    <AreasWeCover />
                  </Stack.Item>
                  <Stack.Item
                    styles={{
                      root: {
                        selectors: {
                          [MobileSelector]: { textAlign: "center" },
                        },
                      },
                    }}
                  >
                    <ContactInformation />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item
                styles={{
                  root: {
                    selectors: {
                      [MobileSelector]: { marginLeft: "0 !important" },
                    },
                  },
                }}
              >
                <ContactForm />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Layout>
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
