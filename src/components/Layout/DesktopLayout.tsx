import React from "react"
import Img from "gatsby-image"
import {
  Fabric,
  Stack,
  DefaultPalette,
  FontWeights,
  Text,
} from "office-ui-fabric-react"

import { DesktopFooter, MapContainer } from "../"
import { DesktopHeader } from "../Header/index"
import { ILayoutProps } from "./Layout.types"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

export class DesktopLayout extends React.Component<ILayoutProps> {
  public render(): JSX.Element {
    const { banner } = this.props

    return (
      <Fabric>
        <Stack styles={{ root: { width: "calc(100vw - (100vw - 100%))" } }}>
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.white,
                padding: 6,
              },
            }}
          >
            <DesktopHeader />
          </Stack.Item>
          <Stack.Item grow styles={{ root: { width: "100%" } }}>
            <Img
              fluid={banner}
              alt="Water in a sink flowing down the drain."
              style={{ filter: "brightness(65%) saturate(135%)" }}
            />
            <Text
              as="h1"
              variant="xxLarge"
              styles={{
                root: {
                  position: "absolute",
                  top: "10%",
                  left: "20%",
                  color: DefaultPalette.white,
                  fontWeight: FontWeights.semibold,
                },
              }}
            >
              Providing Domestic &amp; Commercial Drain Services
              <Text
                block
                variant="xLarge"
                styles={{
                  root: {
                    color: DefaultPalette.white,
                    fontWeight: FontWeights.semilight,
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
                  },
                }}
              >
                {this.props.children}
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item
            styles={{
              root: { height: 480 },
            }}
          >
            <MapContainer />
          </Stack.Item>
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.neutralPrimary,
                color: DefaultPalette.white,
              },
            }}
          >
            <DesktopFooter />
          </Stack.Item>
        </Stack>
      </Fabric>
    )
  }
}
