import React from "react"
import Img from "gatsby-image"
import {
  Fabric,
  Stack,
  DefaultPalette,
  FontWeights,
  Text,
} from "office-ui-fabric-react"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

import { Footer, Header, MapContainer } from "../"
import { MobileSelector, TabletSelector } from "../../styling"
import { getClassNames } from "./Layout.styles"

export class Layout extends React.Component<{ banner: any }> {
  public render(): JSX.Element {
    const { banner } = this.props
    let { footer, layoutContainer, mapContainer, sloganText } = getClassNames()

    return (
      <Fabric>
        <Stack className={layoutContainer}>
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.white,
                padding: 6,
              },
            }}
          >
            <Header />
          </Stack.Item>

          <Stack.Item grow styles={{ root: { width: "100%" } }}>
            <Img
              fluid={banner}
              alt="Water in a sink flowing down the drain."
              style={{ filter: "brightness(65%) saturate(135%)" }}
            />
            <Text as="h1" variant="xxLarge" className={sloganText}>
              Providing Domestic &amp; Commercial Drain Services
              <Text
                block
                variant="xLarge"
                styles={{
                  root: {
                    color: DefaultPalette.white,
                    fontWeight: FontWeights.semilight,
                    selectors: {
                      [MobileSelector]: {
                        display: "none",
                      },
                    },
                  },
                }}
              >
                Across Dudley &amp; the West Midlands
              </Text>
            </Text>
          </Stack.Item>

          <Stack.Item>
            <Stack horizontalAlign="center">
              <Stack.Item
                styles={{
                  root: {
                    backgroundColor: DefaultPalette.white,
                    maxWidth: 800,
                    marginTop: 20,
                    marginBottom: 40,
                    paddingTop: 40,
                    paddingBottom: 40,
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    boxShadow: Depths.depth4,
                    selectors: {
                      [TabletSelector]: {
                        paddingLeft: "4%",
                        paddingRight: "4%",
                      },
                      [MobileSelector]: {
                        maxWidth: 375,
                        marginTop: 0,
                        paddingTop: 10,
                        paddingLeft: "4%",
                        paddingRight: "4%",
                      },
                    },
                  },
                }}
              >
                {this.props.children}
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item className={mapContainer}>
            <MapContainer />
          </Stack.Item>
          <Stack.Item className={footer}>
            <Footer />
          </Stack.Item>
        </Stack>
      </Fabric>
    )
  }
}
