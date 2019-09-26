import React from "react"
import Img from "gatsby-image"
import { ScreenWidthMinUhfMobile } from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"
import { MobileSelector } from "../../styling"

export class ServiceCard extends React.Component<{
  image: any
  imageAlt: string
  title?: any
}> {
  public render(): JSX.Element {
    const { children, image, imageAlt, title } = this.props

    return (
      <>
        <Card
          compact
          styles={{
            root: {
              maxWidth: ScreenWidthMinUhfMobile,
              selectors: {
                [MobileSelector]: {
                  display: "none",
                },
              },
            },
          }}
        >
          <Card.Item
            fill
            styles={{
              root: {
                width: 180,
              },
            }}
          >
            <Img fluid={image} alt={imageAlt} />
          </Card.Item>
          <Card.Section
            styles={{ root: { textAlign: "center", paddingRight: 12 } }}
          >
            {title}
            {children}
          </Card.Section>
        </Card>

        <Card
          styles={{
            root: {
              display: "none",
              maxWidth: 335,
              selectors: {
                [MobileSelector]: {
                  display: "block",
                },
              },
            },
          }}
        >
          <Card.Item styles={{ root: { textAlign: "center", paddingTop: 5 } }}>
            {title}
          </Card.Item>
          <Card.Item fill styles={{ root: { width: 335 } }}>
            <Img fluid={image} alt={imageAlt} />
          </Card.Item>
          <Card.Section
            styles={{
              root: {
                textAlign: "center",
                paddingRight: 12,
                paddingLeft: 12,
                paddingBottom: 12,
              },
            }}
          >
            {children}
          </Card.Section>
        </Card>
      </>
    )
  }
}
