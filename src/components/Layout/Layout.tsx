import React from "react"
import Img from "gatsby-image"
import { Fabric, Stack, Text } from "office-ui-fabric-react"

import { Footer, Header, MapContainer } from "../"
import { getClassNames } from "./Layout.styles"

export class Layout extends React.Component<{ bannerImage: any }> {
  public render(): JSX.Element {
    const { bannerImage } = this.props
    let {
      banner,
      bannerSpacer,
      contentContainer,
      footer,
      header,
      layoutContainer,
      mapContainer,
      sloganText,
      sloganSubtitle,
    } = getClassNames()

    return (
      <Fabric>
        <Stack className={layoutContainer}>
          <Stack.Item className={header}>
            <Header />
          </Stack.Item>
          <Stack.Item className={bannerSpacer}> </Stack.Item>
          <Stack.Item grow className={banner}>
            <Img
              fluid={bannerImage}
              alt="Water in a sink flowing down the drain."
              style={{ filter: "brightness(65%) saturate(135%)" }}
            />
            <Text as="h1" variant="xxLarge" className={sloganText}>
              Providing Domestic &amp; Commercial Drain Services
              <Text block variant="xLarge" className={sloganSubtitle}>
                Across Dudley &amp; the West Midlands
              </Text>
            </Text>
          </Stack.Item>

          <Stack.Item>
            <Stack horizontalAlign="center">
              <Stack.Item className={contentContainer}>
                {this.props.children}
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item className={mapContainer}>
            <MapContainer />
          </Stack.Item>
          <Stack.Item className={footer}>
            <Stack horizontalAlign="center">
              <Stack.Item styles={{ root: { maxWidth: 1080 } }}>
                <Footer />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Fabric>
    )
  }
}
