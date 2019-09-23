import React from "react"
import Loadable from "react-loadable"

import "./index.css"
import { graphql } from "gatsby"
import {
  Stack,
  ProgressIndicator,
  loadTheme,
  DefaultPalette,
  Fabric,
} from "office-ui-fabric-react"

import { App as MyApp } from "../components"
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

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

interface IAppProps extends IWithResponsiveModeState {
  images: any
}

@withResponsiveMode
class App extends React.Component<IAppProps> {
  public render(): JSX.Element {
    const { images, responsiveMode = ResponsiveMode.small } = this.props

    const isMobile = responsiveMode <= ResponsiveMode.small
    const isTablet =
      responsiveMode <= ResponsiveMode.large &&
      responsiveMode > ResponsiveMode.small
    const isDesktop = responsiveMode > ResponsiveMode.large

    return (
      <>
        {isMobile && <MobileLayout>mobile</MobileLayout>}
        {isTablet && <TabletLayout>tablet</TabletLayout>}
        {isDesktop && <DesktopLayout>desktop</DesktopLayout>}
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
