import React from "react"
import { graphql } from "gatsby"
import {
  DefaultPalette,
  loadTheme,
  initializeIcons,
  Stack,
  Separator,
  mergeStyles,
  mergeStyleSets,
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
    themePrimary: "#008272",
    themeLighterAlt: "#f0faf9",
    themeLighter: "#c5ebe7",
    themeLight: "#98dad2",
    themeTertiary: "#48b4a7",
    themeSecondary: "#119182",
    themeDarkAlt: "#007567",
    themeDark: "#006357",
    themeDarker: "#004940",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#bab8b7",
    neutralSecondary: "#a3a2a0",
    neutralPrimaryAlt: "#8d8b8a",
    neutralPrimary: "#323130",
    neutralDark: "#605e5d",
    black: "#494847",
    white: "#ffffff",
  },
  semanticColors: {
    linkHovered: DefaultPalette.tealLight,
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

interface IAppStyles {
  serviceCardWrapper: string
  recommendationWrapper: string
  contactInfoWrapper: string
  areasWeCoverWrapper: string
  contactFormWrapper: string
  column: string
  spacer: string
}

const getClassNames = (): IAppStyles => {
  return mergeStyleSets({
    serviceCardWrapper: {
      marginTop: 40,
    },
    recommendationWrapper: {
      textAlign: "center",
    },
    contactInfoWrapper: {
      selectors: {
        [MobileSelector]: { marginLeft: "0 !important", textAlign: "center" },
      },
    },
    areasWeCoverWrapper: {
      selectors: {
        [MobileSelector]: { marginLeft: "0 !important", textAlign: "center" },
      },
    },
    contactFormWrapper: {
      marginTop: "0px !important ",
      selectors: {
        [MobileSelector]: {
          marginTop: "40px !important",
        },
      },
    },
    column: {
      width: "50%",
      selectors: {
        [MobileSelector]: {
          width: "100%",
        },
      },
    },
    spacer: {
      paddingBottom: 20,
    },
  })
}

class App extends React.Component<any> {
  public render(): JSX.Element {
    const { data } = this.props
    const {
      serviceCardWrapper,
      recommendationWrapper,
      contactInfoWrapper,
      areasWeCoverWrapper,
      contactFormWrapper,
      column,
      spacer,
    } = getClassNames()

    return (
      <Layout bannerImage={data.drainBanner.childImageSharp.fluid}>
        <SEO />
        <Stack>
          <Services />
          <Stack.Item className={spacer}>
            <Stack
              horizontal
              horizontalAlign="center"
              tokens={{ childrenGap: 40 }}
              className={serviceCardWrapper}
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

          <Stack.Item className={spacer}>
            <Separator />
          </Stack.Item>

          <Stack.Item className={recommendationWrapper}>
            <Recommendation />
          </Stack.Item>
          <Stack.Item className={spacer}>
            <Separator styles={{ root: { marginTop: 20 } }} />
          </Stack.Item>
          <Stack.Item className={spacer}>
            <Stack
              horizontal
              horizontalAlign="space-between"
              wrap
              tokens={{ childrenGap: 40 }}
            >
              <Stack.Item className={column}>
                <Stack>
                  <Stack.Item className={areasWeCoverWrapper}>
                    <AreasWeCover />
                  </Stack.Item>
                  <Stack.Item className={contactInfoWrapper}>
                    <ContactInformation />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item className={contactFormWrapper}>
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
