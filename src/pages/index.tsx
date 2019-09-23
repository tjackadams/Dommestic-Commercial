import React from "react"
import { graphql } from "gatsby"
import {
  loadTheme,
  DefaultPalette,
  initializeIcons,
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
            mobile
          </MobileLayout>
        )}
        {isTablet && (
          <TabletLayout banner={data.drainBanner.childImageSharp.fluid}>
            tablet
          </TabletLayout>
        )}
        {isDesktop && (
          <DesktopLayout banner={data.drainBanner.childImageSharp.fluid}>
            desktop
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
