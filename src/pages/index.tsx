import React from "react"
import Loadable from "react-loadable"

import "./index.css"
import { graphql } from "gatsby"
import { Stack, ProgressIndicator } from "office-ui-fabric-react"

const LoadableApp = Loadable({
  loader: () => import("../components/App"),
  loading: () => (
    <Stack
      horizontal
      horizontalAlign="center"
      verticalAlign="center"
      tokens={{ childrenGap: 40, padding: 60 }}
      styles={{ root: { width: "calc(100vw - (100vw - 100%))" } }}
    >
      <Stack.Item grow>
        <ProgressIndicator description="Loading.." />
      </Stack.Item>
    </Stack>
  ),
})

const App = (props: any) => {
  return <LoadableApp data={props.data} />
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
