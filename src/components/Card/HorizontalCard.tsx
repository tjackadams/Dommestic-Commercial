import React from "react"
import Img from "gatsby-image"
import { ScreenWidthMinUhfMobile } from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"

import { IServiceCardProps } from "./ServiceCard.types"

export class HorizontalCard extends React.Component<IServiceCardProps> {
  public render(): JSX.Element {
    const { children, image, imageAlt } = this.props

    return (
      <Card compact styles={{ root: { maxWidth: ScreenWidthMinUhfMobile } }}>
        <Card.Item fill styles={{ root: { width: 180 } }}>
          <Img fluid={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section
          styles={{ root: { textAlign: "center", paddingRight: 12 } }}
        >
          {children}
        </Card.Section>
      </Card>
    )
  }
}
