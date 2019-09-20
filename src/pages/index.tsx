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

loadTheme({
  palette: {
    themePrimary: DefaultPalette.tealLight,
  },
})

// const LoadableApp = Loadable({
//   loader: () => import("../components/App"),
//   loading() {
//     return (
//       <Fabric>
//         <Stack
//           horizontal
//           horizontalAlign="center"
//           verticalAlign="center"
//           tokens={{ childrenGap: 40, padding: 60 }}
//           styles={{ root: { width: "calc(100vw - (100vw - 100%))" } }}
//         >
//           <Stack.Item grow>
//             <ProgressIndicator description="Loading.." />
//           </Stack.Item>
//         </Stack>
//       </Fabric>
//     )
//   },
// })

const App = (props: any) => {
  return <MyApp data={props.data} />
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
