import React from "react"
import Img from "gatsby-image"
import { Fabric, Stack, DefaultPalette } from "office-ui-fabric-react"

import { MobileFooter } from "../"
import { MobileHeader } from "../Header/index"
import { ILayoutProps } from "./Layout.types"
export class MobileLayout extends React.Component<ILayoutProps> {
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
            <MobileHeader />
          </Stack.Item>
          <Stack.Item grow styles={{ root: { width: "100%" } }}>
            <Img
              fluid={banner}
              alt="Water in a sink flowing down the drain."
              style={{ filter: "brightness(65%) saturate(135%)" }}
            />
          </Stack.Item>
          <Stack.Item>
            <Stack horizontalAlign="center">
              <Stack.Item
                styles={{
                  root: {
                    backgroundColor: DefaultPalette.white,
                    maxWidth: 375,
                    marginBottom: 40,
                    paddingTop: 10,
                    paddingBottom: 40,
                    paddingLeft: "4%",
                    paddingRight: "4%",
                  },
                }}
              >
                {this.props.children}
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item
            styles={{
              root: {
                backgroundColor: DefaultPalette.neutralPrimary,
                color: DefaultPalette.white,
              },
            }}
          >
            <MobileFooter />
          </Stack.Item>
        </Stack>
      </Fabric>
    )
  }
}
